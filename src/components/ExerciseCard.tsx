import { Book, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExerciseCardProps {
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  completed?: boolean;
  className?: string;
}

export const ExerciseCard = ({
  title,
  description,
  difficulty,
  completed = false,
  className,
}: ExerciseCardProps) => {
  const difficultyColors = {
    beginner: "bg-green-100 text-green-700",
    intermediate: "bg-yellow-100 text-yellow-700",
    advanced: "bg-red-100 text-red-700",
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border p-6 transition-smooth hover-scale",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <span
            className={cn(
              "inline-block rounded-full px-3 py-1 text-xs font-medium",
              difficultyColors[difficulty]
            )}
          >
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </span>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {completed ? (
          <div className="rounded-full bg-primary/10 p-2">
            <Check className="h-5 w-5 text-primary" />
          </div>
        ) : (
          <div className="rounded-full bg-muted p-2">
            <Book className="h-5 w-5 text-muted-foreground" />
          </div>
        )}
      </div>
    </div>
  );
};