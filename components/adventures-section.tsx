"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, Users, Zap } from "lucide-react"

const adventures = [
  {
    id: 1,
    title: "White Water Rafting",
    subtitle: "Grade 3-4 Rapids",
    description: "Navigate the thrilling rapids of the Kelani River through dense rainforest. An unforgettable 5km journey of pure adrenaline.",
    image: "/images/rafting.jpg",
    duration: "3-4 Hours",
    groupSize: "4-8 People",
    difficulty: "Moderate",
    price: "$45",
    featured: true,
  },
  {
    id: 2,
    title: "Waterfall Abseiling",
    subtitle: "30m Descent",
    description: "Rappel down a stunning 30-meter waterfall surrounded by pristine jungle. Feel the rush as water cascades around you.",
    image: "/images/abseiling.jpg",
    duration: "2-3 Hours",
    groupSize: "2-6 People",
    difficulty: "Challenging",
    price: "$55",
    featured: true,
  },
  {
    id: 3,
    title: "Jungle Trekking",
    subtitle: "Rainforest Expedition",
    description: "Explore ancient rainforest trails, discover exotic wildlife, and witness breathtaking views of the Sri Lankan highlands.",
    image: "/images/trekking.jpg",
    duration: "4-5 Hours",
    groupSize: "2-12 People",
    difficulty: "Easy-Moderate",
    price: "$35",
    featured: false,
  },
  {
    id: 4,
    title: "Canopy Zipline",
    subtitle: "Flying Fox Adventure",
    description: "Soar above the treetops on our 500m zipline course. Experience the jungle from a bird&apos;s eye view.",
    image: "/images/zipline.jpg",
    duration: "1-2 Hours",
    groupSize: "1-4 People",
    difficulty: "Easy",
    price: "$40",
    featured: false,
  },
]

export function AdventuresSection() {
  return (
    <section id="adventures" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            What Awaits You
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Adventures
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            From heart-pumping water sports to serene nature walks, discover experiences 
            that will create memories of a lifetime.
          </p>
        </div>

        {/* Featured Adventures Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {adventures.filter(a => a.featured).map((adventure) => (
            <Card 
              key={adventure.id}
              className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-64 sm:h-80">
                <Image
                  src={adventure.image}
                  alt={adventure.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm text-primary font-medium">{adventure.subtitle}</p>
                  <h3 className="text-2xl font-bold text-foreground">{adventure.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {adventure.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    {adventure.duration}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    {adventure.groupSize}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Zap className="h-4 w-4 text-primary" />
                    {adventure.difficulty}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">{adventure.price}</span>
                    <span className="text-muted-foreground text-sm"> / person</span>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Adventures Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {adventures.filter(a => !a.featured).map((adventure) => (
            <Card 
              key={adventure.id}
              className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0">
                  <Image
                    src={adventure.image}
                    alt={adventure.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-xs text-primary font-medium mb-1">{adventure.subtitle}</p>
                    <h3 className="text-lg font-bold text-foreground mb-2">{adventure.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {adventure.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{adventure.price}</span>
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
