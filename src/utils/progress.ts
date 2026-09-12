import type { LearningPath } from "../data/learningPaths";

export type PathProgress = {
  completedChapterIds: string[];
  currentChapterId: string;
};

export type ProgressData = {
  xp: number;
  paths: Record<string, PathProgress>;
};

const STORAGE_KEY = "random-skill-learning-progress";

const defaultProgress: ProgressData = {
  xp: 0,
  paths: {},
};

export function getProgress(): ProgressData {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return defaultProgress;
  }

  try {
    const parsed = JSON.parse(saved) as ProgressData;

    return {
      xp: typeof parsed.xp === "number" ? parsed.xp : 0,
      paths: parsed.paths ?? {},
    };
  } catch {
    return defaultProgress;
  }
}

function saveProgress(progress: ProgressData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function getPathProgress(
  path: LearningPath,
  progress: ProgressData = getProgress()
): PathProgress {
  const existing = progress.paths[path.id];

  if (existing) {
    return existing;
  }

  return {
    completedChapterIds: [],
    currentChapterId: path.chapters[0]?.id ?? "",
  };
}

export function getCurrentChapterIndex(
  path: LearningPath,
  progress: ProgressData = getProgress()
): number {
  const pathProgress = getPathProgress(path, progress);

  const index = path.chapters.findIndex(
    (chapter) => chapter.id === pathProgress.currentChapterId
  );

  return index >= 0 ? index : 0;
}

export function getPathCompletionPercentage(
  path: LearningPath,
  progress: ProgressData = getProgress()
): number {
  if (path.chapters.length === 0) {
    return 0;
  }

  const pathProgress = getPathProgress(path, progress);

  return Math.round(
    (pathProgress.completedChapterIds.length /
      path.chapters.length) *
      100
  );
}

export function isChapterCompleted(
  pathId: string,
  chapterId: string,
  progress: ProgressData = getProgress()
): boolean {
  return (
    progress.paths[pathId]?.completedChapterIds.includes(
      chapterId
    ) ?? false
  );
}

export function isChapterUnlocked(
  path: LearningPath,
  chapterIndex: number,
  progress: ProgressData = getProgress()
): boolean {
  if (chapterIndex === 0) {
    return true;
  }

  const previousChapter = path.chapters[chapterIndex - 1];

  return isChapterCompleted(
    path.id,
    previousChapter.id,
    progress
  );
}

export function completeChapter(
  path: LearningPath,
  chapterId: string,
  earnedXp: number
): ProgressData {
  const currentProgress = getProgress();
  const currentPathProgress = getPathProgress(
    path,
    currentProgress
  );

  if (
    currentPathProgress.completedChapterIds.includes(
      chapterId
    )
  ) {
    return currentProgress;
  }

  const completedChapterIds = [
    ...currentPathProgress.completedChapterIds,
    chapterId,
  ];

  const currentIndex = path.chapters.findIndex(
    (chapter) => chapter.id === chapterId
  );

  const nextChapter = path.chapters[currentIndex + 1];

  const updatedPathProgress: PathProgress = {
    completedChapterIds,
    currentChapterId: nextChapter?.id ?? chapterId,
  };

  const updatedProgress: ProgressData = {
    xp: currentProgress.xp + earnedXp,
    paths: {
      ...currentProgress.paths,
      [path.id]: updatedPathProgress,
    },
  };

  saveProgress(updatedProgress);

  return updatedProgress;
}

export function startLearningPath(
  path: LearningPath,
  progress: ProgressData = getProgress()
): ProgressData {
  if (progress.paths[path.id]) {
    return progress;
  }

  const updatedProgress: ProgressData = {
    ...progress,
    paths: {
      ...progress.paths,
      [path.id]: {
        completedChapterIds: [],
        currentChapterId: path.chapters[0]?.id ?? "",
      },
    },
  };

  saveProgress(updatedProgress);

  return updatedProgress;
}

export function getOverallCompletedChapters(
  progress: ProgressData = getProgress()
): number {
  return Object.values(progress.paths).reduce(
    (total, pathProgress) =>
      total + pathProgress.completedChapterIds.length,
    0
  );
}