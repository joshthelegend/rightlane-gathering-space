import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Send } from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto bg-white/20 backdrop-blur-md p-8 rounded-lg border border-rightlane-mint/20">
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Your Name"
          required
          className="bg-white/50 backdrop-blur-sm border-rightlane-mint/20"
        />
      </div>
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Email Address"
          required
          className="bg-white/50 backdrop-blur-sm border-rightlane-mint/20"
        />
      </div>
      <div className="space-y-2">
        <Input
          type="tel"
          placeholder="Phone Number"
          className="bg-white/50 backdrop-blur-sm border-rightlane-mint/20"
        />
      </div>
      <div className="space-y-2">
        <Textarea
          placeholder="Your Message"
          required
          className="min-h-[100px] bg-white/50 backdrop-blur-sm border-rightlane-mint/20"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-rightlane-mint hover:bg-rightlane-dark transition-colors"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      <div className="mt-8 space-y-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <span>support@rightlane.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>+91 (800) 123-4567</span>
        </div>
      </div>
    </form>
  );
}