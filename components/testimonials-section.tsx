"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "United Kingdom",
    rating: 5,
    text: "Absolutely incredible experience! The white water rafting was thrilling, and the guides were so professional. This was the highlight of our Sri Lanka trip!",
    adventure: "Thrill Seeker Package",
  },
  {
    id: 2,
    name: "Marcus Chen",
    location: "Singapore",
    rating: 5,
    text: "The waterfall abseiling was beyond amazing. I was nervous at first, but the team made me feel completely safe. Highly recommend to anyone seeking adventure!",
    adventure: "Waterfall Abseiling",
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "India",
    rating: 5,
    text: "Our corporate team had the best bonding experience here. The organization was flawless, food was delicious, and the memories are unforgettable.",
    adventure: "Ultimate Adventure Package",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            What People Say
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Adventurer Reviews
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our adventurers have to say about their experiences.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="bg-card border-border hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="h-8 w-8 text-primary/30" />
                <p className="text-muted-foreground leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-xs text-primary mt-1">{testimonial.adventure}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium text-primary"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm">15,000+ Happy Adventurers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm">4.9/5 Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}
