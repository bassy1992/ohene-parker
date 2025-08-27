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

      {/* Featured Release - Dash Card */}
      <section className="py-20 bg-gradient-to-br from-red-500/10 to-orange-500/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              NEW RELEASE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Dash Card</h2>
            <p className="text-xl text-muted-foreground">The latest single from Ohene Parker</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Album Cover */}
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/dashcard.png" 
                  alt="Dash Card by Ohene Parker"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a 
                  href="https://youtu.be/qsDjyx6AfNM?si=QUq0msn1L9SAHdbi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/90 hover:bg-white text-black p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
                >
                  <Play className="w-8 h-8 ml-1" />
                </a>
              </div>
            </div>
            
            {/* Song Info & Actions */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">About "Dash Card"</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ohene Parker's latest release showcases his signature style with infectious rhythms and compelling storytelling. 
                  "Dash Card" represents a new chapter in his artistic journey, blending contemporary sounds with authentic expression.
                </p>
              </div>
              
              {/* Streaming Links */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Listen Now</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://open.spotify.com/artist/2BrgnYd9IX1KW0qqyfV6uM?si=sNPskMAsTIuKAEjnngFp3g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-xs">♪</span>
                    </div>
                    <span className="font-semibold">Spotify</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  
                  <a
                    href="https://music.apple.com/us/artist/ohene-parker/1545224999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 hover:bg-gray-800 text-white p-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-xs">♪</span>
                    </div>
                    <span className="font-semibold">Apple Music</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              {/* Share */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Share this release:</p>
                <div className="flex space-x-4">
                  <button className="bg-card hover:bg-accent border border-border p-3 rounded-lg transition-colors duration-200">
                    <Twitter className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <button className="bg-card hover:bg-accent border border-border p-3 rounded-lg transition-colors duration-200">
                    <Instagram className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discography Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Discography</h2>
            <p className="text-xl text-muted-foreground">
              Explore Ohene Parker's musical journey through his releases
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Follow */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative aspect-square">
                <img 
                  src="/follow.jpg" 
                  alt="Follow by Ohene Parker"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="w-full h-full bg-gradient-to-br from-red-500 via-red-600 to-red-700 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center text-white">
                    <h4 className="text-4xl font-bold mb-2">FOLLOW</h4>
                    <p className="text-lg opacity-90">Ohene Parker</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href="https://youtu.be/a1M1s-f3lI8?si=g7Gn5F6C1QuFnBAv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
                  >
                    <Play className="w-6 h-6 ml-0.5" />
                  </a>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    SINGLE
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Follow</h3>
                <p className="text-muted-foreground mb-4">
                  A captivating track that showcases Ohene Parker's artistic evolution with its distinctive red aesthetic and compelling narrative.
                </p>
                
                <div className="flex space-x-3">
                  <a
                    href="https://open.spotify.com/artist/2BrgnYd9IX1KW0qqyfV6uM?si=sNPskMAsTIuKAEjnngFp3g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-sm"
                  >
                    <span className="font-medium">Spotify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  
                  <a
                    href="https://music.apple.com/us/artist/ohene-parker/1545224999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-sm"
                  >
                    <span className="font-medium">Apple</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Rick and Morty */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative aspect-square">
                <img 
                  src="/ricky.jpg" 
                  alt="Rick and Morty by Ohene Parker"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-green-900 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center text-white">
                    <h4 className="text-2xl font-bold mb-2 text-green-400">RICK AND MORTY</h4>
                    <p className="text-sm opacity-90">feat. Sticky M, Questo, Zotto</p>
                    <p className="text-lg mt-2">Ohene Parker</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href="https://youtu.be/IsO1yTQ0pIU?si=axTm8Fuaj4D-Ynpv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
                  >
                    <Play className="w-6 h-6 ml-0.5" />
                  </a>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    COLLABORATION
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Rick and Morty</h3>
                <p className="text-muted-foreground mb-4">
                  A dynamic collaboration featuring Sticky M, Questo, and Zotto. This track brings together multiple artists for an explosive musical experience.
                </p>
                
                <div className="flex space-x-3">
                  <a
                    href="https://open.spotify.com/artist/2BrgnYd9IX1KW0qqyfV6uM?si=sNPskMAsTIuKAEjnngFp3g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-sm"
                  >
                    <span className="font-medium">Spotify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  
                  <a
                    href="https://music.apple.com/us/artist/ohene-parker/1545224999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-sm"
                  >
                    <span className="font-medium">Apple</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card/50 border border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎤</span>
              </div>
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">New Projects</h3>
              <p className="text-muted-foreground text-sm">
                Exciting collaborations and solo work in development
              </p>
            </div>
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
