import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import Terms from "@/components/Terms";
import { MapPin, Users, Calendar, ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rightlane-sage via-rightlane-light to-rightlane-peach">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-6 animate-slideUp">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-rightlane-mint/20 text-rightlane-mint text-sm font-medium mb-4">
              Coming Soon to India
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-rightlane-dark">
              AI-Matched Dinner <span className="text-rightlane-mint">With New Friends</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Meet like-minded people over delicious meals. Our AI matches you with dinner companions based on your interests, making friend-finding as natural as sharing a meal.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-rightlane-mint hover:bg-rightlane-dark text-white">
                Join Waitlist
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white/20 backdrop-blur-md border-rightlane-mint/20 hover:border-rightlane-mint/40 transition-colors animate-slideUp [animation-delay:200ms]">
              <MapPin className="h-8 w-8 text-rightlane-mint mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-rightlane-dark">Smart Matching</h3>
              <p className="text-gray-600">
                Our AI pairs you with dinner companions who share your interests and conversation style.
              </p>
            </Card>
            <Card className="p-6 bg-white/20 backdrop-blur-md border-rightlane-mint/20 hover:border-rightlane-mint/40 transition-colors animate-slideUp [animation-delay:400ms]">
              <Users className="h-8 w-8 text-rightlane-mint mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-rightlane-dark">Curated Dinners</h3>
              <p className="text-gray-600">
                Enjoy meaningful conversations over carefully selected restaurants in your city.
              </p>
            </Card>
            <Card className="p-6 bg-white/20 backdrop-blur-md border-rightlane-mint/20 hover:border-rightlane-mint/40 transition-colors animate-slideUp [animation-delay:600ms]">
              <Calendar className="h-8 w-8 text-rightlane-mint mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-rightlane-dark">Regular Meetups</h3>
              <p className="text-gray-600">
                Build lasting friendships through regular dinner gatherings with your matched group.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-rightlane-dark mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Have questions about our AI-matched dinner meetups? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white/10 backdrop-blur-md border-t border-rightlane-mint/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} RightLane. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Terms />
            <a href="#" className="text-rightlane-mint hover:text-rightlane-dark transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;