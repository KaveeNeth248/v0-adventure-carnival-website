"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  { src: "/images/rafting.jpg", alt: "White Water Rafting", category: "Rafting" },
  { src: "/images/abseiling.jpg", alt: "Waterfall Abseiling", category: "Abseiling" },
  { src: "/images/trekking.jpg", alt: "Jungle Trekking", category: "Trekking" },
  { src: "/images/zipline.jpg", alt: "Canopy Zipline", category: "Zipline" },
  { src: "/images/hero-bg.jpg", alt: "Kitulgala Landscape", category: "Scenery" },
  { src: "/images/rafting.jpg", alt: "River Adventure", category: "Rafting" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }
  
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Captured Moments
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Adventure Gallery
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Get a glimpse of the incredible experiences awaiting you at Kitulgala Adventure Carnival.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative cursor-pointer overflow-hidden rounded-xl group ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <div className={`relative ${index === 0 ? 'h-64 md:h-full min-h-[400px]' : 'h-48 md:h-64'}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <p className="text-foreground font-bold text-lg">{image.alt}</p>
                    <p className="text-primary text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-foreground hover:bg-muted"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground hover:bg-muted"
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            
            <div 
              className="relative w-full max-w-4xl h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground hover:bg-muted"
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <p className="text-foreground font-semibold">{galleryImages[selectedImage].alt}</p>
              <p className="text-muted-foreground text-sm">{selectedImage + 1} / {galleryImages.length}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
