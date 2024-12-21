import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Check, X } from "lucide-react";

const Exercise = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [code, setCode] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // Mock exercise data - in a real app, this would come from a backend
  const exercise = {
    title: "Hello, OCaml!",
    description: "Write your first OCaml program to print 'Hello, World!'",
    expectedOutput: "Hello, World!",
    hint: "Use the 'print_endline' function",
    points: 10,
  };

  const checkSolution = () => {
    // Mock validation - in a real app, this would be handled by a backend
    const isValid = code.includes('print_endline "Hello, World!"');
    setIsCorrect(isValid);

    if (isValid) {
      toast({
        title: "Congratulations! 🎉",
        description: `You earned ${exercise.points} points!`,
      });
    } else {
      toast({
        title: "Not quite right",
        description: "Try again! Remember to use print_endline",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen animate-fade-in bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate("/")}
        >
          ← Back to Exercises
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>{exercise.title}</CardTitle>
            <p className="text-muted-foreground">{exercise.description}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Solution:</label>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="h-48 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Write your OCaml code here..."
              />
            </div>

            <div className="flex items-center gap-2">
              <Button onClick={checkSolution} className="w-full">
                Submit Solution
              </Button>
            </div>

            {isCorrect && (
              <div className="flex items-center gap-2 rounded-lg bg-green-500/10 p-4 text-green-600">
                <Check className="h-5 w-5" />
                <span>Correct solution! Well done!</span>
              </div>
            )}

            <div className="rounded-lg bg-muted p-4">
              <h4 className="font-medium">Hint:</h4>
              <p className="text-sm text-muted-foreground">{exercise.hint}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Exercise;