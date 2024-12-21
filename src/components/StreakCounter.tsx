import { Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface StreakCounterProps {
  count: number;
  className?: string;
}

export const StreakCounter = ({ count, className }: StreakCounterProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2",
        className
      )}
    >
      <Award className="h-5 w-5 text-secondary" />
      <span className="font-semibold text-secondary">
        {count} Day{count !== 1 ? "s" : ""} Streak
      </span>
    </div>
  );
};