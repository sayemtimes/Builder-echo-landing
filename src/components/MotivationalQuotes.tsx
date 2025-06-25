import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const motivationalQuotes = [
  "Money is not the most important thing, but it's reasonably close to oxygen on the 'gotta have it' scale.",
  "Financial freedom is available to those who learn about it and work for it.",
  "The best investment you can make is in yourself. Invest in your skills, your knowledge, your network.",
  "Don't work for money; make money work for you.",
  "Rich people believe 'I create my life.' Poor people believe 'Life happens to me.'",
  "Money is a tool. Used properly it makes something beautiful; used wrong, it makes a mess.",
  "The real measure of your wealth is how much you'd be worth if you lost all your money.",
  "It's not how much money you make, but how much money you keep, how hard it works for you.",
  "Money can't buy happiness, but it can buy freedom – and that's pretty close to happiness.",
  "The lack of money is the root of all evil.",
  "Money is multiplied in practical value depending on the number of W's you control in your life: what you do, when you do it, where you do it, and with whom you do it.",
  "The habit of saving is itself an education; it fosters every virtue, teaches self-denial, cultivates the sense of order.",
  "Financial peace isn't the acquisition of stuff. It's learning to live on less than you make.",
  "Money is a guarantee that we may have what we want in the future. Though we need nothing at the moment, it insures the possibility of satisfying a new desire when it arises.",
  "The person who doesn't know where his next dollar is coming from usually doesn't know where his last dollar went.",
  "Making money is art and working is art and good business is the best art.",
  "Money is not about greed. Money is about options and opportunities.",
  "The single most powerful asset we all have is our mind. If it is trained well, it can create enormous wealth.",
  "Financial success is not about how much you earn, but about how much you keep and invest wisely.",
  "Money grows on the tree of persistence and smart work, not on the tree of luck.",
];

export function MotivationalQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Quote className="h-5 w-5" />
          </div>
          <div className="flex-1 space-y-2">
            <p className="text-lg font-medium leading-relaxed">
              "{motivationalQuotes[currentQuote]}"
            </p>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {motivationalQuotes.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      index === currentQuote ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground ml-2">
                {currentQuote + 1} of {motivationalQuotes.length}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
