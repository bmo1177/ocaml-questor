import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Check, Loader } from "lucide-react";

// Mock exercise database - in a real app, this would come from a backend
const exerciseDatabase = {
  "hello-ocaml": {
    title: "Hello, OCaml!",
    description: "Write your first OCaml program to print 'Hello, World!'",
    expectedOutput: "Hello, World!",
    hint: "Use the 'print_endline' function",
    points: 10,
  },
  "basic-arithmetic": {
    title: "Basic Arithmetic",
    description: "Practice basic arithmetic operations in OCaml (+, -, *, /)",
    expectedOutput: "42",
    hint: "Try combining different arithmetic operators",
    points: 15,
  },
  "simple-functions": {
    title: "Simple Functions",
    description: "Create a function to calculate the area of a rectangle",
    expectedOutput: "let area l w = l * w",
    hint: "Define a function that takes two parameters",
    points: 20,
  },
  "list-basics": {
    title: "List Basics",
    description: "Learn to create and manipulate simple lists in OCaml",
    expectedOutput: "[1; 2; 3]",
    hint: "Use the :: operator or [] syntax",
    points: 25,
  },
  "string-operations": {
    title: "String Operations",
    description: "Practice basic string operations and concatenation",
    expectedOutput: "Hello OCaml",
    hint: "Use the ^ operator for string concatenation",
    points: 20,
  },
  "basic-pattern-matching": {
    title: "Basic Pattern Matching",
    description: "Learn simple pattern matching with numbers and lists",
    expectedOutput: "match x with | [] -> 0 | _ -> 1",
    hint: "Use the match ... with syntax",
    points: 30,
  }
};

const Exercise = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [code, setCode] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [loading, setLoading] = useState(true);
  const [exercise, setExercise] = useState<any>(null);

  useEffect(() => {
    // Simulate loading exercise data
    setLoading(true);
    setTimeout(() => {
      if (id && exerciseDatabase[id]) {
        setExercise(exerciseDatabase[id]);
      } else {
        toast({
          title: "Exercise not found",
          description: "This exercise doesn't exist",
          variant: "destructive",
        });
        navigate("/");
      }
      setLoading(false);
    }, 500);
  }, [id, navigate, toast]);

  const checkSolution = () => {
    if (!exercise) return;

    // Mock validation - in a real app, this would be handled by a backend
    const isValid = code.includes(exercise.expectedOutput);
    setIsCorrect(isValid);

    if (isValid) {
      toast({
        title: "Congratulations! 🎉",
        description: `You earned ${exercise.points} points!`,
      });
    } else {
      toast({
        title: "Not quite right",
        description: "Try again! Check the hint for help",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen animate-fade-in bg-background p-8 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader className="h-6 w-6 animate-spin" />
          <span>Loading exercise...</span>
        </div>
      </div>
    );
  }

  if (!exercise) {
    return null;
  }

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