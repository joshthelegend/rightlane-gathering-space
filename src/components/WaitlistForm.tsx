import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ChevronRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function WaitlistForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email, created_at: new Date().toISOString() }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll notify you when we launch!",
      });
      
      setEmail("");
    } catch (error) {
      console.error('Waitlist submission error:', error);
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white/50 backdrop-blur-sm border-rightlane-mint/20"
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-rightlane-mint hover:bg-rightlane-dark transition-colors whitespace-nowrap"
      >
        {isSubmitting ? (
          "Joining..."
        ) : (
          <>
            Join Waitlist
            <ChevronRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}