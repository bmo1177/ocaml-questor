import { useState } from "react";
import { AchievementBadge } from "@/components/AchievementBadge";
import { ExerciseCard } from "@/components/ExerciseCard";
import { StreakCounter } from "@/components/StreakCounter";

const Index = () => {
  const [streakCount] = useState(3);

  const exercises = [
    {
      title: "Basic Pattern Matching",
      description: "Learn the fundamentals of pattern matching in OCaml",
      difficulty: "beginner" as const,
      completed: true,
    },
    {
      title: "Recursive Functions",
      description: "Master recursive function implementations",
      difficulty: "beginner" as const,
      completed: false,
    },
    {
      title: "Higher-Order Functions",
      description: "Explore functions that take functions as arguments",
      difficulty: "intermediate" as const,
      completed: false,
    },
  ];

  const achievements = [
    {
      title: "First Steps",
      description: "Complete your first OCaml exercise",
      unlocked: true,
    },
    {
      title: "Pattern Master",
      description: "Complete all pattern matching exercises",
      unlocked: false,
    },
  ];

  return (
    <div className="min-h-screen animate-fade-in bg-background p-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Welcome Back</h1>
          <p className="text-lg text-muted-foreground">
            Continue your OCaml learning journey
          </p>
        </div>

        <StreakCounter count={streakCount} className="w-fit" />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Continue Learning</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exercises.map((exercise) => (
              <ExerciseCard key={exercise.title} {...exercise} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Achievements</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <AchievementBadge key={achievement.title} {...achievement} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;