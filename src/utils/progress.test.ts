import { describe, expect, it, beforeEach } from "vitest";
import { learningPaths } from "../data/learningPaths";
import {
  getProgress,
  getPathProgress,
  getCurrentChapterIndex,
  getPathCompletionPercentage,
  isChapterCompleted,
  isChapterUnlocked,
  startLearningPath,
  completeChapter,
} from "./progress";

const createLocalStorageMock = () => {
  let storage: Record<string, string> = {};

  return {
    getItem(key: string) {
      return storage[key] ?? null;
    },

    setItem(key: string, value: string) {
      storage[key] = value;
    },

    removeItem(key: string) {
      delete storage[key];
    },

    clear() {
      storage = {};
    },
  };
};

describe("Random Skill progress system", () => {
  beforeEach(() => {
    Object.defineProperty(globalThis, "localStorage", {
      value: createLocalStorageMock(),
      writable: true,
      configurable: true,
    });
  });

  it("starts with zero XP and no path progress", () => {
    const progress = getProgress();

    expect(progress.xp).toBe(0);
    expect(progress.paths).toEqual({});
  });

  it("creates initial progress for a learning path", () => {
    const path = learningPaths[0];

    const pathProgress = getPathProgress(path);

    expect(pathProgress.completedChapterIds).toEqual([]);
    expect(pathProgress.currentChapterId).toBe(path.chapters[0].id);
  });

  it("returns the first chapter as the current chapter initially", () => {
    const path = learningPaths[0];

    expect(getCurrentChapterIndex(path)).toBe(0);
  });

  it("starts a learning path and saves it", () => {
    const path = learningPaths[0];

    const updatedProgress = startLearningPath(path);

    expect(updatedProgress.paths[path.id]).toBeDefined();

    expect(updatedProgress.paths[path.id].currentChapterId).toBe(
      path.chapters[0].id
    );
  });

  it("unlocks only the first chapter initially", () => {
    const path = learningPaths[0];

    expect(isChapterUnlocked(path, 0)).toBe(true);

    if (path.chapters.length > 1) {
      expect(isChapterUnlocked(path, 1)).toBe(false);
    }
  });

  it("completes a chapter and awards XP", () => {
    const path = learningPaths[0];
    const firstChapter = path.chapters[0];

    startLearningPath(path);

    const updatedProgress = completeChapter(
      path,
      firstChapter.id,
      20
    );

    expect(updatedProgress.xp).toBe(20);

    expect(
      updatedProgress.paths[path.id].completedChapterIds
    ).toContain(firstChapter.id);

    expect(
      isChapterCompleted(
        path.id,
        firstChapter.id,
        updatedProgress
      )
    ).toBe(true);
  });

  it("moves to the next chapter after completing one", () => {
    const path = learningPaths[0];
    const firstChapter = path.chapters[0];

    startLearningPath(path);

    const updatedProgress = completeChapter(
      path,
      firstChapter.id,
      20
    );

    if (path.chapters.length > 1) {
      expect(
        updatedProgress.paths[path.id].currentChapterId
      ).toBe(path.chapters[1].id);
    }
  });

  it("calculates chapter completion percentage", () => {
    const path = learningPaths[0];

    startLearningPath(path);

    const firstChapter = path.chapters[0];

    completeChapter(
      path,
      firstChapter.id,
      20
    );

    const percentage = getPathCompletionPercentage(path);

    expect(percentage).toBe(
      Math.round(
        (1 / path.chapters.length) * 100
      )
    );
  });

  it("does not award XP twice for the same chapter", () => {
    const path = learningPaths[0];
    const firstChapter = path.chapters[0];

    startLearningPath(path);

    completeChapter(
      path,
      firstChapter.id,
      20
    );

    const secondAttempt = completeChapter(
      path,
      firstChapter.id,
      20
    );

    expect(secondAttempt.xp).toBe(20);
  });
});