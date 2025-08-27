import Navigation from "@/components/Navigation";
import { HiPlay as Play, HiOutlineExternalLink as ExternalLink, HiMusicNote as Music2, HiCalendar as Calendar, HiLocationMarker as MapPin } from "react-icons/hi";
import { FaInstagram as Instagram, FaTwitter as Twitter, FaYoutube as Youtube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center space-y-8">
            {/* Artist Image */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2Fbba6d907914548e49e32fcb59d8abda1?format=webp&width=800"
                alt="Ohene Parker"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
                OHENE PARKER
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Ghanaian Afro-Fusion Artist • Blending English & Twi • Cultural Storyteller
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition-opacity duration-200 flex items-center space-x-2 text-lg">
                  <Play className="w-5 h-5" />
                  <span>Listen to "Breathe"</span>
                </button>
                <button className="border border-border text-foreground px-8 py-3 rounded-full hover:bg-accent transition-colors duration-200 text-lg">
                  View EPK
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 animate-pulse">
          <div className="w-3 h-3 bg-primary/60 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/3 right-16 animate-pulse delay-300">
          <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
        </div>
        <div className="absolute top-1/2 right-1/4 animate-pulse delay-700">
          <div className="w-4 h-4 bg-primary/50 rounded-full"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">About Jake Amoah</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Born Jake Amoah, Ohene Parker is a visionary Ghanaian singer and songwriter who masterfully 
                  weaves together the rich tapestry of Afro-fusion music. His unique sound blends English with 
                  the indigenous Twi language, creating an authentic musical experience that speaks to both 
                  local and global audiences.
                </p>
                <p>
                  His music serves as a bridge between cultures, reflecting personal experiences and deep 
                  cultural themes that resonate with listeners worldwide. Through his artistry, Ohene Parker 
                  continues to push the boundaries of contemporary African music.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-accent px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-accent-foreground">Ghana</span>
                </div>
                <div className="flex items-center space-x-2 bg-accent px-4 py-2 rounded-full">
                  <Music2 className="w-4 h-4 text-primary" />
                  <span className="text-accent-foreground">Afro-Fusion</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-96">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2Fedd064acd53b42f4adc6256fd3ed0a88?format=webp&width=800"
                alt="Ohene Parker performing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Latest Releases</h2>
            <p className="text-xl text-muted-foreground">Discover the sound that's captivating audiences worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Breathe */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <Play className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Breathe</h3>
              <p className="text-muted-foreground mb-3">April 2023</p>
              <p className="text-sm text-muted-foreground mb-4">
                A high-energy funk track encouraging listeners to take a moment to breathe and overcome obstacles.
              </p>
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center justify-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Listen Now</span>
              </button>
            </div>

            {/* Dash Card */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <Play className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Dash Card</h3>
              <p className="text-muted-foreground mb-3">August 2025</p>
              <p className="text-sm text-muted-foreground mb-4">
                An anthem about resilience and self-belief, featuring a bass-driven groove and infectious hook.
              </p>
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center justify-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Listen Now</span>
              </button>
            </div>

            {/* Grace over Babylon */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <Play className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Grace over Babylon</h3>
              <p className="text-muted-foreground mb-3">March 2025</p>
              <p className="text-sm text-muted-foreground mb-4">
                A powerful single continuing to showcase his signature Afro-fusion style and lyrical depth.
              </p>
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center justify-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Listen Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Social Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">Connect With Ohene Parker</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Stay updated with the latest music, tour dates, and behind-the-scenes content
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="https://www.instagram.com/ohene.parker/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <Instagram className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Instagram</h3>
              <p className="text-muted-foreground">@ohene.parker</p>
            </a>
            
            <a 
              href="https://twitter.com/ohene_Parker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <Twitter className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Twitter</h3>
              <p className="text-muted-foreground">@ohene_Parker</p>
            </a>
            
            <a 
              href="https://www.youtube.com/@oheneparker7013" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <Youtube className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">YouTube</h3>
              <p className="text-muted-foreground">Ohene Parker Official</p>
            </a>
          </div>
          
          <div className="bg-accent/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-accent-foreground mb-4">Booking & Press Inquiries</h3>
            <p className="text-accent-foreground/80 mb-6">
              For booking, press, and collaboration opportunities, please contact the management team.
            </p>
            <Link 
              to="/contact"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition-opacity duration-200 flex items-center space-x-2 mx-auto"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Contact Management</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Music2 className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">OHENE PARKER</span>
          </div>
          <p className="text-muted-foreground mb-4">
            © 2025 Ohene Parker. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.instagram.com/ohene.parker/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/ohene_Parker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/@oheneparker7013" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
