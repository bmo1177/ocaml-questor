import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface AchievementBadgeProps {
  title: string;
  description: string;
  unlocked?: boolean;
  className?: string;
}

export const AchievementBadge = ({
  title,
  description,
  unlocked = false,
  className,
}: AchievementBadgeProps) => {
  return (
    <div
      className={cn(
        "group relative rounded-lg p-4 transition-smooth hover-scale",
        unlocked ? "bg-primary/10" : "bg-muted",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "rounded-full p-2",
            unlocked ? "bg-primary text-white" : "bg-muted-foreground/20"
          )}
        >
          <Trophy className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};