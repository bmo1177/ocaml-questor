import { useState } from "react";
import { AchievementBadge } from "@/components/AchievementBadge";
import { ExerciseCard } from "@/components/ExerciseCard";
import { StreakCounter } from "@/components/StreakCounter";

const Index = () => {
  const [streakCount] = useState(3);

  const exercises = [
    {
      title: "Hello, OCaml!",
      description: "Write your first OCaml program to print 'Hello, World!'",
      difficulty: "beginner" as const,
      completed: true,
    },
    {
      title: "Basic Arithmetic",
      description: "Practice basic arithmetic operations in OCaml (+, -, *, /)",
      difficulty: "beginner" as const,
      completed: false,
    },
    {
      title: "Simple Functions",
      description: "Create a function to calculate the area of a rectangle",
      difficulty: "beginner" as const,
      completed: false,
    },
    {
      title: "List Basics",
      description: "Learn to create and manipulate simple lists in OCaml",
      difficulty: "beginner" as const,
      completed: false,
    },
    {
      title: "String Operations",
      description: "Practice basic string operations and concatenation",
      difficulty: "beginner" as const,
      completed: false,
    },
    {
      title: "Basic Pattern Matching",
      description: "Learn simple pattern matching with numbers and lists",
      difficulty: "beginner" as const,
      completed: false,
    }
  ];

  const achievements = [
    {
      title: "First Steps",
      description: "Complete your first OCaml exercise",
      unlocked: true,
    },
    {
      title: "Getting Started",
      description: "Complete 3 beginner exercises",
      unlocked: false,
    },
    {
      title: "On a Roll",
      description: "Complete all basic exercises",
      unlocked: false,
    }
  ];

  return (
    <div className="min-h-screen animate-fade-in bg-background p-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Welcome to OCaml Learning</h1>
          <p className="text-lg text-muted-foreground">
            Start with these simple exercises to build your OCaml foundation
          </p>
        </div>

        <StreakCounter count={streakCount} className="w-fit" />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Available Exercises</h2>
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