
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Terms() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="text-sm text-rightlane-purple hover:text-rightlane-dark transition-colors">
        Terms and Conditions
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">1. Introduction</h3>
              <p>Welcome to RightLane. By using our service, you agree to these terms. Please read them carefully.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">2. Use of Service</h3>
              <p>RightLane provides a platform for users to organize and join meetups. Users must be 18 years or older to use the service.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">3. User Accounts</h3>
              <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">4. Privacy</h3>
              <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">5. Content</h3>
              <p>Users are responsible for the content they post. Prohibited content includes but is not limited to: illegal content, hate speech, and spam.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">6. Termination</h3>
              <p>We reserve the right to terminate or suspend access to our service immediately, without prior notice, for any reason.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">7. Changes to Terms</h3>
              <p>We reserve the right to modify these terms at any time. We will notify users of any material changes.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">8. Contact</h3>
              <p>For any questions about these terms, please contact us through our contact form.</p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
