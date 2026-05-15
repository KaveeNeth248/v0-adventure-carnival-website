"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Kitulgala Adventure Destination"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">2026 Season Now Open</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
            <span className="block">KITULGALA</span>
            <span className="block text-primary">ADVENTURE</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-light mt-2 text-muted-foreground">
              CARNIVAL
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Experience the ultimate adrenaline rush in Sri Lanka&apos;s adventure capital. 
            White water rafting, waterfall abseiling, and unforgettable thrills await.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
              Explore Adventures
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-foreground/20 text-foreground hover:bg-foreground/10 text-lg px-8 py-6"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Adventures</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary">15K+</p>
              <p className="text-sm text-muted-foreground mt-1">Happy Visitors</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary">5★</p>
              <p className="text-sm text-muted-foreground mt-1">Rated Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  )
}
