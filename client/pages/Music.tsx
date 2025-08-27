import Navigation from "@/components/Navigation";
import { HiPlay as Play, HiOutlineExternalLink as ExternalLink } from "react-icons/hi";
import { FaInstagram as Instagram, FaTwitter as Twitter, FaYoutube as Youtube } from "react-icons/fa";

export default function Music() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Music & Releases
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Explore Ohene Parker's discography and connect with his music across all platforms
            </p>
          </div>
        </div>
      </section>


      {/* Social Media & Streaming */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Follow the Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay connected with Ohene Parker across all platforms for the latest music, behind-the-scenes content, and live updates
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/ohene.parker?igsh=ZnRidDMzNWUxenNs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Instagram</h3>
              <p className="text-muted-foreground mb-4">
                Visual stories, behind-the-scenes content, and daily updates from the artist's life and creative process.
              </p>
              <div className="flex items-center justify-center space-x-2 text-primary">
                <span className="font-medium">@ohene.parker</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* Twitter/X */}
            <a 
              href="https://x.com/ohene_parker?s=21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center"
            >
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Twitter className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Twitter / X</h3>
              <p className="text-muted-foreground mb-4">
                Real-time thoughts, music updates, cultural commentary, and direct engagement with fans worldwide.
              </p>
              <div className="flex items-center justify-center space-x-2 text-primary">
                <span className="font-medium">@ohene_parker</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* YouTube */}
            <a 
              href="https://youtube.com/@oheneparker?si=1tQuIXqzfhkUp9Tf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center"
            >
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">YouTube</h3>
              <p className="text-muted-foreground mb-4">
                Official music videos, live performances, studio sessions, and exclusive video content from Ohene Parker.
              </p>
              <div className="flex items-center justify-center space-x-2 text-primary">
                <span className="font-medium">Ohene Parker Official</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@oheneparker_?_t=ZM-8z0c8XhPjBI&_r=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-black via-red-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">TikTok</h3>
              <p className="text-muted-foreground mb-4">
                Short-form creative content, music previews, cultural moments, and viral content that showcases personality.
              </p>
              <div className="flex items-center justify-center space-x-2 text-primary">
                <span className="font-medium">@oheneparker_</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Streaming Platforms */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Stream Everywhere</h2>
            <p className="text-xl text-muted-foreground">
              Find Ohene Parker's music on all major streaming platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://open.spotify.com/artist/2BrgnYd9IX1KW0qqyfV6uM?si=sNPskMAsTIuKAEjnngFp3g"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white p-6 rounded-xl hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-3"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">♪</span>
              </div>
              <span className="text-lg font-semibold">Spotify</span>
            </a>

            <a
              href="https://music.apple.com/us/artist/ohene-parker/1545224999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white p-6 rounded-xl hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-3"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">♪</span>
              </div>
              <span className="text-lg font-semibold">Apple Music</span>
            </a>

            <a
              href="https://www.boomplay.com/artists/28056131?from=search&srModel=COPYLINK&srList=WEB"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white p-6 rounded-xl hover:bg-red-600 transition-colors duration-200 flex items-center justify-center space-x-3"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-500 font-bold text-sm">♪</span>
              </div>
              <span className="text-lg font-semibold">Boomplay</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
