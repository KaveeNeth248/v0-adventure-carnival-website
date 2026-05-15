"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

const packages = [
  {
    id: 1,
    name: "Explorer",
    subtitle: "Perfect for beginners",
    price: "$89",
    period: "per person",
    features: [
      "White Water Rafting (5km)",
      "Jungle Trekking (2 hours)",
      "Lunch included",
      "Safety equipment provided",
      "Professional guide",
      "Transport from Colombo",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Thrill Seeker",
    subtitle: "Most popular choice",
    price: "$149",
    period: "per person",
    features: [
      "White Water Rafting (7km)",
      "Waterfall Abseiling",
      "Canopy Zipline",
      "Full day meals included",
      "Premium safety gear",
      "Professional guide & photos",
      "Transport from Colombo",
      "Complimentary refreshments",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Ultimate Adventure",
    subtitle: "The complete experience",
    price: "$249",
    period: "per person",
    features: [
      "All adventures included",
      "2 Days / 1 Night stay",
      "Private cabin accommodation",
      "All meals & beverages",
      "Premium photography package",
      "Dedicated personal guide",
      "VIP transport",
      "Adventure merchandise",
      "Priority booking",
    ],
    popular: false,
  },
]

export function PackagesSection() {
  return (
    <section id="packages" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Choose Your Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Adventure Packages
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Select the perfect package that matches your appetite for adventure. 
            Group discounts available for 6+ people.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id}
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular 
                  ? 'bg-card border-primary shadow-lg shadow-primary/20' 
                  : 'bg-card border-border hover:border-primary/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
                </div>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground text-sm ml-2">{pkg.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full mt-6 ${
                    pkg.popular 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                  size="lg"
                >
                  {pkg.popular ? 'Book This Package' : 'Select Package'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Group Booking CTA */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-secondary/50 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-2">Planning a Group Adventure?</h3>
          <p className="text-muted-foreground mb-4">
            Get special rates for corporate events, team building, and large groups.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Contact for Group Rates
          </Button>
        </div>
      </div>
    </section>
  )
}
