
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import Terms from "@/components/Terms";
import { MapPin, Users, Calendar, ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rightlane-purple/10 to-rightlane-orange/10" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-6 animate-slideUp">
            <div className="inline-block px-3 py-1 rounded-full bg-rightlane-purple/10 text-rightlane-purple text-sm font-medium mb-4">
              Coming Soon to India
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-rightlane-dark">
              Find Your <span className="text-rightlane-purple">Right</span> Community
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with like-minded people, join exciting meetups, and create meaningful relationships in your city.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-rightlane-purple hover:bg-rightlane-dark">
                Join Waitlist
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 backdrop-blur-sm border-rightlane-purple/20 hover:border-rightlane-purple/40 transition-colors animate-slideUp [animation-delay:200ms]">
              <MapPin className="h-8 w-8 text-rightlane-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Meetups</h3>
              <p className="text-gray-600">
                Discover events and meetups happening right in your neighborhood.
              </p>
            </Card>
            <Card className="p-6 backdrop-blur-sm border-rightlane-purple/20 hover:border-rightlane-purple/40 transition-colors animate-slideUp [animation-delay:400ms]">
              <Users className="h-8 w-8 text-rightlane-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-gray-600">
                Join communities that share your interests and passions.
              </p>
            </Card>
            <Card className="p-6 backdrop-blur-sm border-rightlane-purple/20 hover:border-rightlane-purple/40 transition-colors animate-slideUp [animation-delay:600ms]">
              <Calendar className="h-8 w-8 text-rightlane-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Planning</h3>
              <p className="text-gray-600">
                Create and manage events with our intuitive tools.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-rightlane-purple/5 to-rightlane-orange/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-rightlane-dark mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} RightLane. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Terms />
            <a href="#" className="text-rightlane-purple hover:text-rightlane-dark transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
