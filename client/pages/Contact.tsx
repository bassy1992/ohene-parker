import Navigation from "@/components/Navigation";
import { HiMail as Mail, HiPhone as Phone, HiLocationMarker as MapPin, HiClock as Clock, HiPaperAirplane as Send, HiUser as User, HiChatAlt as MessageSquare } from "react-icons/hi";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Ready to work with Ohene Parker? Reach out for bookings, collaborations, and press inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Cards */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* Management Email */}
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-card-foreground mb-2">Management</h3>
                        <p className="text-muted-foreground mb-3">
                          For booking, business inquiries, and professional collaborations
                        </p>
                        <a 
                          href="mailto:Management@oheneparker.com"
                          className="text-primary hover:underline font-medium"
                        >
                          Management@oheneparker.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Artist Email */}
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-card-foreground mb-2">Direct Contact</h3>
                        <p className="text-muted-foreground mb-3">
                          Personal inquiries and fan mail
                        </p>
                        <a 
                          href="mailto:Oheneparker@gmail.com"
                          className="text-primary hover:underline font-medium"
                        >
                          Oheneparker@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-card-foreground mb-2">Phone</h3>
                        <p className="text-muted-foreground mb-3">
                          Call for urgent matters and bookings
                        </p>
                        <div className="space-y-2">
                          <a 
                            href="tel:+233594201308"
                            className="block text-primary hover:underline font-medium"
                          >
                            +233 59 420 1308
                          </a>
                          <a 
                            href="tel:+233240638278"
                            className="block text-primary hover:underline font-medium"
                          >
                            +233 24 063 8278
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-card-foreground mb-2">Location</h3>
                        <p className="text-muted-foreground">
                          Based in Ghana
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card/50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-8">Send a Message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
                    <option value="">Select inquiry type</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="press">Press & Media</option>
                    <option value="fan">Fan Message</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center justify-center space-x-2 text-lg font-medium"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time & Guidelines */}
      <section className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Contact Guidelines</h2>
            <p className="text-xl text-muted-foreground">
              Please read these guidelines to ensure your inquiry receives the best response
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Response Time</h3>
              <p className="text-muted-foreground">
                We typically respond to inquiries within 24-48 hours during business days. 
                For urgent booking matters, please call directly.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Best Practices</h3>
              <p className="text-muted-foreground">
                Please provide detailed information about your event, dates, location, and budget 
                to help us respond more effectively to your inquiry.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-accent/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-accent-foreground mb-3">Professional Inquiries</h3>
              <p className="text-accent-foreground/80">
                For all professional bookings, press interviews, and business collaborations, 
                please contact our management team directly at{" "}
                <a 
                  href="mailto:Management@oheneparker.com"
                  className="text-primary hover:underline font-medium"
                >
                  Management@oheneparker.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
