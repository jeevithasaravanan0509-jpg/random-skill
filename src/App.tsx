import { useState } from "react";
import "./App.css";

import {
  learningPaths,
  type Chapter,
  type LearningPath,
} from "./data/learningPaths";

import {
  completeChapter,
  getCurrentChapterIndex,
  getOverallCompletedChapters,
  getPathCompletionPercentage,
  getPathProgress,
  isChapterCompleted,
  isChapterUnlocked,
  startLearningPath,
  getProgress,
  type ProgressData,
} from "./utils/progress";

type Screen =
  | "discover"
  | "path"
  | "lesson"
  | "practice"
  | "completion"
  | "progress";

const categories = [
  {
    icon: "💻",
    title: "Engineering & Technology",
    description: "Programming, DSA, DevOps, AI and more",
  },
  {
    icon: "🌏",
    title: "Languages",
    description: "Japanese, English and other languages",
  },
  {
    icon: "💼",
    title: "Career & Placement",
    description: "Resume, interviews and workplace skills",
  },
  {
    icon: "🧠",
    title: "Thinking & Problem Solving",
    description: "Logic, reasoning and creative thinking",
  },
  {
    icon: "📊",
    title: "Aptitude",
    description: "Quantitative, verbal and logical reasoning",
  },
  {
    icon: "🎨",
    title: "Creativity",
    description: "Design, writing and creative skills",
  },
  {
    icon: "🌱",
    title: "Personal Development",
    description: "Focus, habits, planning and productivity",
  },
  {
    icon: "🧩",
    title: "Fun & Mental Challenges",
    description: "Puzzles, memory and observation",
  },
];

function App() {
  const [screen, setScreen] = useState<Screen>("discover");

  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const [progress, setProgress] = useState<ProgressData>(() => getProgress());

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [chapterCompleted, setChapterCompleted] = useState(false);

  const [time, setTime] = useState(10);

  // Surprise Me recommendation.
  // It recommends a skill but NEVER starts it automatically.
  const [surprisePath, setSurprisePath] = useState<LearningPath | null>(null);

  const currentPractice = selectedChapter?.practice[0];

  function refreshProgress() {
    setProgress(getProgress());
  }

  function openPath(path: LearningPath) {
    const updatedProgress = startLearningPath(path, getProgress());

    setProgress(updatedProgress);
    setSelectedPath(path);

    const currentIndex = getCurrentChapterIndex(path, updatedProgress);
    const currentChapter = path.chapters[currentIndex];

    if (currentChapter) {
      setSelectedChapter(currentChapter);
      setChapterCompleted(false);
      setSelectedAnswer(null);
      setAnswerChecked(false);
      setScreen("path");
    }
  }

  function continuePath(path: LearningPath) {
    const currentProgress = getProgress();

    const updatedProgress = startLearningPath(path, currentProgress);

    setProgress(updatedProgress);
    setSelectedPath(path);

    const currentIndex = getCurrentChapterIndex(path, updatedProgress);
    const currentChapter = path.chapters[currentIndex];

    if (currentChapter) {
      openChapter(path, currentChapter);
    }
  }

  function openChapter(path: LearningPath, chapter: Chapter) {
    setSelectedPath(path);
    setSelectedChapter(chapter);
    setSelectedAnswer(null);
    setAnswerChecked(false);
    setChapterCompleted(false);
    setScreen("lesson");
  }

  function handleCheckAnswer() {
    if (!selectedAnswer || !currentPractice || !selectedPath || !selectedChapter) {
      return;
    }

    setAnswerChecked(true);

    if (selectedAnswer === currentPractice.correctAnswer) {
      const updatedProgress = completeChapter(
        selectedPath,
        selectedChapter.id,
        20
      );

      setProgress(updatedProgress);
      setChapterCompleted(true);
    }
  }

  function handleContinueAfterCompletion() {
    if (!selectedPath || !selectedChapter) {
      return;
    }

    const currentIndex = selectedPath.chapters.findIndex(
      (chapter) => chapter.id === selectedChapter.id
    );

    const nextChapter = selectedPath.chapters[currentIndex + 1];

    if (nextChapter) {
      openChapter(selectedPath, nextChapter);
    } else {
      setScreen("path");
    }
  }

  function chooseSurprisePath(excludePathId?: string) {
    const currentProgress = getProgress();

    const unfinishedPaths = learningPaths.filter((path) => {
      const pathProgress = getPathProgress(path, currentProgress);

      return (
        pathProgress.completedChapterIds.length < path.chapters.length &&
        path.id !== excludePathId
      );
    });

    // First prefer paths that fit the selected time.
    const timeFriendlyPaths = unfinishedPaths.filter(
      (path) => path.estimatedMinutes <= time
    );

    const candidates =
      timeFriendlyPaths.length > 0
        ? timeFriendlyPaths
        : unfinishedPaths.length > 0
          ? unfinishedPaths
          : learningPaths.filter((path) => path.id !== excludePathId);

    if (candidates.length === 0) {
      return;
    }

    const randomPath =
      candidates[Math.floor(Math.random() * candidates.length)];

    setSurprisePath(randomPath);
  }

  function handleSurpriseMe() {
    chooseSurprisePath();
  }

  function startSurprisePath() {
    if (!surprisePath) {
      return;
    }

    const path = surprisePath;

    setSurprisePath(null);
    openPath(path);
  }

  function resetPractice() {
    setSelectedAnswer(null);
    setAnswerChecked(false);
    setChapterCompleted(false);
  }

  function renderNavbar() {
    return (
      <nav className="navbar container">
        <button
          className="logo logo-button"
          onClick={() => {
            setSurprisePath(null);
            setScreen("discover");
          }}
          aria-label="Go to Random Skill home"
        >
          <span className="logo-mark">✦</span>
          <span>Random Skill</span>
        </button>

        <button
          className="nav-button"
          onClick={() => {
            refreshProgress();
            setScreen("progress");
          }}
        >
          My Progress
        </button>
      </nav>
    );
  }

  function renderDiscover() {
    const activePaths = learningPaths.filter((path) => {
      const pathProgress = getPathProgress(path, progress);

      return pathProgress.completedChapterIds.length > 0;
    });

    return (
      <>
        <section className="hero container">
          <span className="badge">✦ Learn something meaningful</span>

          <h1>
            Turn your free time into
            <span> a real skill.</span>
          </h1>

          <p>
            Random Skill helps you discover useful skills and learn them
            step by step — without losing your place.
          </p>
        </section>

        {activePaths.length > 0 && (
          <section className="continue-section container">
            <div className="section-heading">
              <h2>Continue Learning</h2>
              <p>Pick up exactly where you left off.</p>
            </div>

            <div className="continue-grid">
              {activePaths.map((path) => {
                const pathProgress = getPathProgress(path, progress);

                const completion = getPathCompletionPercentage(
                  path,
                  progress
                );

                const currentIndex = getCurrentChapterIndex(
                  path,
                  progress
                );

                const currentChapter =
                  path.chapters[currentIndex] ?? path.chapters[0];

                return (
                  <button
                    key={path.id}
                    className="continue-card"
                    onClick={() => continuePath(path)}
                  >
                    <div className="continue-card-top">
                      <span className="path-icon">{path.icon}</span>

                      <span className="continue-label">
                        CONTINUE
                      </span>
                    </div>

                    <h3>{path.title}</h3>

                    <p>
                      Chapter {currentIndex + 1} ·{" "}
                      {currentChapter?.title}
                    </p>

                    <div className="progress-bar">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${completion}%` }}
                      />
                    </div>

                    <div className="continue-footer">
                      <span>
                        {pathProgress.completedChapterIds.length} /{" "}
                        {path.chapters.length} chapters
                      </span>

                      <strong>{completion}%</strong>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        <section className="discover-action container">
          <div className="action-card">
            <div className="action-heading">
              <span className="action-icon">🎲</span>

              <div>
                <h2>What do you have time for?</h2>
                <p>
                  Tell us how much time you have and we'll find
                  something worth learning.
                </p>
              </div>
            </div>

            <div className="time-options">
              {[5, 10, 20].map((minutes) => (
                <button
                  key={minutes}
                  className={`time-option ${
                    time === minutes ? "selected" : ""
                  }`}
                  onClick={() => setTime(minutes)}
                >
                  <strong>{minutes} minutes</strong>

                  <small>
                    {minutes === 5
                      ? "Quick learning"
                      : minutes === 10
                        ? "Focused session"
                        : "Deep learning"}
                  </small>
                </button>
              ))}
            </div>

            <button
              className="surprise-button"
              onClick={handleSurpriseMe}
            >
              ✨ Surprise Me
            </button>

            <p className="selection-message">
              We'll recommend something. <strong>You decide</strong>{" "}
              whether to learn it.
            </p>
          </div>

          {surprisePath && (
            <div className="surprise-result">
              <div className="surprise-result-icon">
                {surprisePath.icon}
              </div>

              <div className="surprise-result-content">
                <span className="recommendation-label">
                  YOUR RANDOM PICK
                </span>

                <h3>{surprisePath.title}</h3>

                <p>{surprisePath.description}</p>

                <div className="recommendation-meta">
                  <span>
                    📚 {surprisePath.chapters.length} chapters
                  </span>

                  <span>
                    ⏱ {surprisePath.estimatedMinutes} min
                  </span>

                  <span>{surprisePath.category}</span>
                </div>

                <div className="recommendation-actions">
                  <button
                    className="start-button"
                    onClick={startSurprisePath}
                  >
                    Start Learning →
                  </button>

                  <button
                    className="another-button"
                    onClick={() =>
                      chooseSurprisePath(surprisePath.id)
                    }
                  >
                    Try Another
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="paths-section container">
          <div className="section-heading">
            <h2>Explore Learning Paths</h2>
            <p>
              Choose a skill and learn it in a proper sequence.
            </p>
          </div>

          <div className="path-grid">
            {learningPaths.map((path) => {
              const completion = getPathCompletionPercentage(
                path,
                progress
              );

              const started = progress.paths[path.id] !== undefined;

              return (
                <button
                  key={path.id}
                  className="path-card"
                  onClick={() => openPath(path)}
                >
                  <div className="path-card-icon">
                    {path.icon}
                  </div>

                  <div className="path-card-content">
                    <span className="path-category">
                      {path.category}
                    </span>

                    <h3>{path.title}</h3>

                    <p>{path.description}</p>

                    <div className="path-card-bottom">
                      <span>
                        {path.chapters.length} chapters
                      </span>

                      <span>
                        {started
                          ? `${completion}% complete`
                          : "Start learning →"}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="categories container">
          <div className="section-heading">
            <h2>More areas to explore</h2>
            <p>Random Skill will keep growing.</p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <div className="category-card" key={category.title}>
                <span className="category-icon">
                  {category.icon}
                </span>

                <h3>{category.title}</h3>

                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }

  function renderPath() {
    if (!selectedPath) {
      return null;
    }

    const pathProgress = getPathProgress(selectedPath, progress);

    const completion = getPathCompletionPercentage(
      selectedPath,
      progress
    );

    return (
      <section className="path-page container">
        <button
          className="back-button"
          onClick={() => setScreen("discover")}
        >
          ← Back to Discover
        </button>

        <div className="path-hero-card">
          <div className="path-large-icon">
            {selectedPath.icon}
          </div>

          <div className="path-hero-content">
            <span className="path-category">
              {selectedPath.category}
            </span>

            <h1>{selectedPath.title}</h1>

            <p>{selectedPath.description}</p>
          </div>
        </div>

        <div className="path-overview">
          <div>
            <strong>{completion}%</strong>
            <span>Complete</span>
          </div>

          <div>
            <strong>
              {pathProgress.completedChapterIds.length}
            </strong>
            <span>Completed</span>
          </div>

          <div>
            <strong>{selectedPath.chapters.length}</strong>
            <span>Total Chapters</span>
          </div>
        </div>

        <div className="progress-bar large">
          <div
            className="progress-bar-fill"
            style={{ width: `${completion}%` }}
          />
        </div>

        <div className="chapter-list">
          <div className="section-heading">
            <h2>Your Learning Path</h2>
            <p>
              Build your knowledge one step at a time.
            </p>
          </div>

          <div className="journey-line">
            {selectedPath.chapters.map((chapter, index) => {
              const completed = isChapterCompleted(
                selectedPath.id,
                chapter.id,
                progress
              );

              const unlocked = isChapterUnlocked(
                selectedPath,
                index,
                progress
              );

              const current =
                chapter.id === pathProgress.currentChapterId;

              return (
                <button
                  key={chapter.id}
                  className={`chapter-row ${
                    completed ? "completed" : ""
                  } ${current ? "current" : ""} ${
                    !unlocked ? "locked" : ""
                  }`}
                  disabled={!unlocked}
                  onClick={() =>
                    openChapter(selectedPath, chapter)
                  }
                >
                  <div className="chapter-number">
                    {completed ? "✓" : index + 1}
                  </div>

                  <div className="chapter-info">
                    <span>CHAPTER {index + 1}</span>

                    <h3>{chapter.title}</h3>

                    <p>{chapter.description}</p>
                  </div>

                  <div className="chapter-status">
                    {completed
                      ? "Completed"
                      : current
                        ? "Continue →"
                        : unlocked
                          ? "Start →"
                          : "Locked"}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  function renderLesson() {
    if (!selectedPath || !selectedChapter) {
      return null;
    }

    const chapterIndex = selectedPath.chapters.findIndex(
      (chapter) => chapter.id === selectedChapter.id
    );

    return (
      <section className="learning-page container">
        <button
          className="back-button"
          onClick={() => setScreen("path")}
        >
          ← {selectedPath.title}
        </button>

        <div className="learning-header">
          <span className="chain-pill">
            {selectedPath.icon} {selectedPath.title}
          </span>

          <span className="chapter-count">
            Chapter {chapterIndex + 1} of{" "}
            {selectedPath.chapters.length}
          </span>

          <h1>{selectedChapter.title}</h1>

          <p>{selectedChapter.description}</p>
        </div>

        <div className="learning-card">
          <div className="learning-card-top">
            <span className="learning-label">LESSON</span>

            <span>
              ⏱ {selectedChapter.estimatedMinutes} min
            </span>
          </div>

          <div className="learn-content">
            <p className="lesson-introduction">
              {selectedChapter.lesson.introduction}
            </p>

            <div className="lesson-points">
              {selectedChapter.lesson.points.map((point) => (
                <div className="learn-point" key={point.title}>
                  <div className="learn-point-icon">✓</div>

                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.explanation}</p>
                  </div>
                </div>
              ))}
            </div>

            {selectedChapter.lesson.example && (
              <div className="example-box">
                <span>💡 Example</span>
                <p>{selectedChapter.lesson.example}</p>
              </div>
            )}
          </div>

          <button
            className="primary-button"
            onClick={() => {
              resetPractice();
              setScreen("practice");
            }}
          >
            Continue to Practice →
          </button>
        </div>
      </section>
    );
  }

  function renderPractice() {
    if (!selectedPath || !selectedChapter || !currentPractice) {
      return null;
    }

    const chapterIndex = selectedPath.chapters.findIndex(
      (chapter) => chapter.id === selectedChapter.id
    );

    const isCorrect =
      selectedAnswer === currentPractice.correctAnswer;

    return (
      <section className="learning-page container">
        <button
          className="back-button"
          onClick={() => setScreen("lesson")}
        >
          ← Back to Lesson
        </button>

        <div className="practice-header">
          <span className="chain-pill">
            {selectedPath.icon} {selectedPath.title}
          </span>

          <span className="chapter-count">
            Chapter {chapterIndex + 1} · Practice
          </span>

          <h1>Let's check what you learned.</h1>

          <p>
            Take a moment and choose the answer that makes the
            most sense.
          </p>
        </div>

        <div className="practice-card">
          <span className="learning-label">QUICK CHECK</span>

          <h2>{currentPractice.question}</h2>

          <div className="answer-options">
            {currentPractice.options.map((option) => {
              const selected = selectedAnswer === option;

              let stateClass = "";

              if (answerChecked) {
                if (option === currentPractice.correctAnswer) {
                  stateClass = "correct";
                } else if (selected) {
                  stateClass = "incorrect";
                }
              }

              return (
                <button
                  key={option}
                  className={`answer-option ${
                    selected ? "selected" : ""
                  } ${stateClass}`}
                  onClick={() => {
                    if (!answerChecked || !isCorrect) {
                      setSelectedAnswer(option);
                    }
                  }}
                  disabled={answerChecked && isCorrect}
                >
                  <span className="answer-radio">
                    {selected ? "●" : "○"}
                  </span>

                  <span>{option}</span>
                </button>
              );
            })}
          </div>

          {answerChecked && (
            <div
              className={`answer-feedback ${
                isCorrect ? "correct" : "incorrect"
              }`}
            >
              <span className="feedback-icon">
                {isCorrect ? "✓" : "!"}
              </span>

              <div>
                <strong>
                  {isCorrect ? "Correct!" : "Not quite yet."}
                </strong>

                <p>{currentPractice.explanation}</p>
              </div>
            </div>
          )}

          {!answerChecked && (
            <button
              className="primary-button"
              disabled={!selectedAnswer}
              onClick={handleCheckAnswer}
            >
              Check Answer
            </button>
          )}

          {answerChecked && !isCorrect && (
            <button
              className="secondary-button"
              onClick={resetPractice}
            >
              Try Again
            </button>
          )}

          {answerChecked && isCorrect && chapterCompleted && (
            <button
              className="primary-button"
              onClick={() => setScreen("completion")}
            >
              Complete Chapter →
            </button>
          )}
        </div>
      </section>
    );
  }

  function renderCompletion() {
    if (!selectedPath || !selectedChapter) {
      return null;
    }

    const chapterIndex = selectedPath.chapters.findIndex(
      (chapter) => chapter.id === selectedChapter.id
    );

    const nextChapter = selectedPath.chapters[chapterIndex + 1];

    const completion = getPathCompletionPercentage(
      selectedPath,
      progress
    );

    const pathFinished = !nextChapter;

    return (
      <section className="completion-page container">
        <div className="completion-card">
          <div className="completion-icon">
            {pathFinished ? "🏆" : "✓"}
          </div>

          <span className="completion-label">
            {pathFinished
              ? "LEARNING PATH COMPLETE"
              : "CHAPTER COMPLETE"}
          </span>

          <h1>
            {pathFinished
              ? "You completed the learning path!"
              : "Nice work! Chapter complete."}
          </h1>

          <p className="completion-message">
            {pathFinished
              ? `You've completed ${selectedPath.title}.`
              : "You've learned something new and unlocked the next step."}
          </p>

          <div className="xp-earned">
            <span>⭐</span>
            <strong>+20 XP</strong>
          </div>

          <div className="checkpoint">
            <div className="checkpoint-icon">
              {selectedPath.icon}
            </div>

            <div className="checkpoint-content">
              <span>SKILL CHECKPOINT</span>

              <strong>{selectedPath.title}</strong>

              <p>
                Chapter {chapterIndex + 1} of{" "}
                {selectedPath.chapters.length}
              </p>

              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${completion}%` }}
                />
              </div>

              <small>{completion}% complete</small>
            </div>
          </div>

          <div className="completion-actions">
            {nextChapter && (
              <button
                className="primary-button"
                onClick={handleContinueAfterCompletion}
              >
                Continue to Chapter {chapterIndex + 2} →
              </button>
            )}

            <button
              className="secondary-button"
              onClick={() => setScreen("path")}
            >
              View Learning Path
            </button>

            <button
              className="text-button"
              onClick={() => setScreen("discover")}
            >
              Discover another skill
            </button>

            <button
              className="text-button"
              onClick={() => {
                refreshProgress();
                setScreen("progress");
              }}
            >
              View My Progress
            </button>
          </div>
        </div>
      </section>
    );
  }

  function renderProgress() {
    const totalChapters = learningPaths.reduce(
      (total, path) => total + path.chapters.length,
      0
    );

    const completedChapters = getOverallCompletedChapters(progress);

    const overallPercentage =
      totalChapters === 0
        ? 0
        : Math.round(
            (completedChapters / totalChapters) * 100
          );

    return (
      <section className="progress-page container">
        <button
          className="back-button"
          onClick={() => setScreen("discover")}
        >
          ← Back to Discover
        </button>

        <div className="progress-heading">
          <span className="badge">✦ Your learning journey</span>

          <h1>My Progress</h1>

          <p>
            See where you started, what you've learned, and where
            you're going next.
          </p>
        </div>

        <div className="progress-stats">
          <div className="progress-stat-card">
            <span className="progress-stat-icon">⭐</span>
            <strong>{progress.xp}</strong>
            <span>Total XP</span>
          </div>

          <div className="progress-stat-card">
            <span className="progress-stat-icon">📚</span>
            <strong>{completedChapters}</strong>
            <span>Chapters Completed</span>
          </div>

          <div className="progress-stat-card">
            <span className="progress-stat-icon">🎯</span>
            <strong>{overallPercentage}%</strong>
            <span>Overall Progress</span>
          </div>
        </div>

        <div className="progress-card">
          <div className="progress-card-header">
            <div>
              <h2>Your Learning Journey</h2>
              <p>
                Every skill remembers exactly where you stopped.
              </p>
            </div>
          </div>

          <div className="progress-path-list">
            {learningPaths.map((path) => {
              const pathProgress = getPathProgress(
                path,
                progress
              );

              const percentage = getPathCompletionPercentage(
                path,
                progress
              );

              const started =
                progress.paths[path.id] !== undefined;

              const currentIndex = getCurrentChapterIndex(
                path,
                progress
              );

              const currentChapter =
                path.chapters[currentIndex];

              return (
                <button
                  key={path.id}
                  className="progress-path-row"
                  onClick={() => {
                    if (started) {
                      continuePath(path);
                    } else {
                      openPath(path);
                    }
                  }}
                >
                  <div className="progress-path-icon">
                    {path.icon}
                  </div>

                  <div className="progress-path-info">
                    <div className="progress-path-title">
                      <strong>{path.title}</strong>

                      <span>
                        {pathProgress.completedChapterIds.length}/
                        {path.chapters.length}
                      </span>
                    </div>

                    <p>
                      {started
                        ? percentage === 100
                          ? "Learning path completed"
                          : `Next: Chapter ${
                              currentIndex + 1
                            } · ${currentChapter?.title}`
                        : "Not started yet"}
                    </p>

                    <div className="progress-bar">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>

                  <span className="progress-path-action">
                    {percentage === 100
                      ? "Completed"
                      : started
                        ? "Continue →"
                        : "Start →"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  function renderScreen() {
    switch (screen) {
      case "discover":
        return renderDiscover();

      case "path":
        return renderPath();

      case "lesson":
        return renderLesson();

      case "practice":
        return renderPractice();

      case "completion":
        return renderCompletion();

      case "progress":
        return renderProgress();

      default:
        return renderDiscover();
    }
  }

  return (
    <div className="app">
      {renderNavbar()}

      <main>{renderScreen()}</main>
    </div>
  );
}

export default App;