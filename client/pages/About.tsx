import Navigation from "@/components/Navigation";
import { HiMusicNote as Music2, HiLocationMarker as MapPin, HiCalendar as Calendar, HiStar as Star, HiAward as Award, HiHeart as Heart, HiMicrophone as Mic, HiGlobe as Globe } from "react-icons/hi";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About Ohene Parker
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              The story of Jake Amoah and his journey to becoming one of Ghana's most promising Afro-fusion artists
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Artist Image */}
            <div className="space-y-8">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2Ff491b61836cd448a904a9cbea63cc26b?format=webp&width=800"
                  alt="Ohene Parker professional portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Quick Facts */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Born in Ghana</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Music2 className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Afro-Fusion Genre</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">English & Twi Languages</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mic className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Singer & Songwriter</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">The Artist Behind the Music</h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Born Jake Amoah, Ohene Parker represents a new generation of African artists who are 
                    redefining the global music landscape. His journey from Ghana to international recognition 
                    is a testament to the power of authentic storytelling and cultural pride in music.
                  </p>
                  
                  <p>
                    As an Afro-fusion artist, Ohene Parker masterfully blends contemporary sounds with 
                    traditional Ghanaian musical elements, creating a unique sonic signature that resonates 
                    with audiences across continents. His bilingual approach, seamlessly weaving English 
                    with the indigenous Twi language, serves as a bridge between local authenticity and 
                    global accessibility.
                  </p>
                  
                  <p>
                    His music is deeply rooted in personal experiences and cultural narratives, making each 
                    song a window into the rich tapestry of Ghanaian life and the universal human experience. 
                    Through his artistry, Ohene Parker continues to challenge conventional boundaries and 
                    push the evolution of African music on the world stage.
                  </p>
                </div>
              </div>

              {/* Musical Journey */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Musical Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Ohene Parker's musical journey reflects his commitment to authenticity and innovation. 
                    His recent releases showcase an artist who isn't afraid to experiment while staying 
                    true to his cultural roots.
                  </p>
                  <p>
                    From the high-energy funk of "Breathe" to the resilient anthem "Dash Card," each 
                    release demonstrates his versatility and growth as an artist. His ability to craft 
                    hooks that stick while delivering meaningful messages sets him apart in the 
                    contemporary African music scene.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Vision */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Artist Philosophy</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding the vision and values that drive Ohene Parker's creative process
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Authentic Expression</h3>
              <p className="text-muted-foreground">
                Every song tells a story rooted in genuine experience and cultural truth, 
                creating music that resonates on a deeply personal level.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Cultural Bridge</h3>
              <p className="text-muted-foreground">
                Using music as a universal language to connect Ghanaian culture with global 
                audiences, fostering understanding and appreciation.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly pushing creative boundaries while honoring traditional roots, 
                creating fresh sounds that advance African music globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Influences & Style */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Musical Influences</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ohene Parker's sound draws from a rich palette of influences, blending traditional 
                  Ghanaian rhythms with contemporary global genres. His Afro-fusion style incorporates 
                  elements of funk, soul, and modern production techniques.
                </p>
                <p>
                  The use of both English and Twi in his lyrics reflects his multicultural perspective 
                  and commitment to preserving his linguistic heritage while reaching international audiences.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Traditional Ghanaian Music</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Contemporary Afrobeats</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Funk & Soul</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Modern R&B</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Signature Style</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  What sets Ohene Parker apart is his ability to seamlessly blend languages and cultures 
                  within a single musical experience. His songs often feature infectious grooves, 
                  memorable hooks, and meaningful lyrics that speak to universal themes.
                </p>
                <p>
                  His production style favors warm, bass-driven sounds that complement his smooth vocal 
                  delivery, creating an immersive listening experience that feels both familiar and fresh.
                </p>
              </div>
              
              <div className="mt-8 bg-accent/50 rounded-xl p-6">
                <blockquote className="text-lg italic text-accent-foreground">
                  "Music is the universal language that transcends all boundaries. Through my art, 
                  I aim to share the beauty of Ghanaian culture while creating sounds that speak 
                  to hearts everywhere."
                </blockquote>
                <cite className="block mt-4 text-sm text-accent-foreground/80">— Ohene Parker</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">Looking Forward</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              As Ohene Parker continues to evolve as an artist, his vision extends beyond just creating music. 
              He aims to be a cultural ambassador, using his platform to showcase the richness of African 
              creativity and to inspire the next generation of artists.
            </p>
            <p>
              With each release, he pushes the boundaries of what Afro-fusion can be, constantly innovating 
              while staying true to his roots. His journey represents the future of African music – 
              global in reach, local in soul.
            </p>
          </div>
          
          <div className="mt-12">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition-opacity duration-200 text-lg">
              Explore the Music
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
