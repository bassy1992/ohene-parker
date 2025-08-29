import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function Shop() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const shopItems = [
    { id: 1, image: "/shop pic 1.jpg", title: "Merchandise Item 1" },
    { id: 2, image: "/shop pic 2.jpg", title: "Merchandise Item 2" },
    { id: 3, image: "/shop pic 3.jpg", title: "Merchandise Item 3" },
    { id: 4, image: "/shop pic 4.jpg", title: "Merchandise Item 4" },
    { id: 5, image: "/shop pic 5.jpg", title: "Merchandise Item 5" },
    { id: 6, image: "/shop pic 6.jpg", title: "Merchandise Item 6" },
    { id: 7, image: "/shop pic 7.jpg", title: "Merchandise Item 7" },
    { id: 8, image: "/shop pic 8.jpg", title: "Merchandise Item 8" },
    { id: 9, image: "/shop pic 9.jpg", title: "Merchandise Item 9" },
    { id: 10, image: "/shop pic 10.jpg", title: "Merchandise Item 10" },
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Official Merchandise
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Click on any image to view it larger
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {shopItems.map((item) => (
              <div
                key={item.id}
                onClick={() => openModal(item.image)}
                className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}