import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PrivacyPolicy() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="text-sm text-rightlane-mint hover:text-rightlane-dark transition-colors">
        Privacy Policy
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-white/90 backdrop-blur-md">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Last updated on 05-02-2025</p>
            
            <p>
              This Privacy Policy describes how JEEVA ("we", "us", or "our") collects, uses, and shares your personal 
              information when you use our website and services (collectively, "Services").
            </p>

            <h3 className="text-base font-semibold text-foreground mt-6">Information We Collect</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Personal Information: Name, email address, phone number, and other information you provide during 
                registration or while using our Services.
              </li>
              <li>
                Usage Data: Information about how you use our website, including IP address, browser type, pages 
                visited, and time spent on each page.
              </li>
              <li>
                Device Information: Information about the device you use to access our Services, including device 
                type, operating system, and unique device identifiers.
              </li>
            </ul>

            <h3 className="text-base font-semibold text-foreground mt-6">How We Use Your Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our Services</li>
              <li>To communicate with you about our Services</li>
              <li>To improve our Services and develop new features</li>
              <li>To comply with legal obligations</li>
              <li>To detect and prevent fraud or abuse</li>
            </ul>

            <h3 className="text-base font-semibold text-foreground mt-6">Information Sharing and Disclosure</h3>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers who assist in operating our Services</li>
              <li>Law enforcement when required by law</li>
              <li>Third parties with your consent</li>
            </ul>

            <h3 className="text-base font-semibold text-foreground mt-6">Data Security</h3>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method 
              of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h3 className="text-base font-semibold text-foreground mt-6">Your Rights</h3>
            <p>
              Under Indian data protection laws, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent for processing</li>
              <li>File complaints with relevant authorities</li>
            </ul>

            <h3 className="text-base font-semibold text-foreground mt-6">Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h3 className="text-base font-semibold text-foreground mt-6">Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us using the contact information 
              provided on our website.
            </p>

            <p className="mt-6">
              By using our Services, you agree to the collection and use of information in accordance with this 
              Privacy Policy.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}