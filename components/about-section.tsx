"use client"

import { Shield, Award, Heart, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description: "International safety standards with certified equipment and trained professionals ensuring your security throughout every adventure.",
  },
  {
    icon: Award,
    title: "Expert Guides",
    description: "Our experienced guides have over 10 years of local expertise, ensuring you get the most authentic and thrilling experience.",
  },
  {
    icon: Heart,
    title: "Eco-Friendly",
    description: "We are committed to sustainable tourism, preserving the natural beauty of Kitulgala for future generations to enjoy.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Personalized attention with small group sizes, ensuring quality experience and building lasting memories together.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                About Us
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Sri Lanka&apos;s Premier Adventure Destination
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nestled in the heart of Sri Lanka&apos;s rainforest, Kitulgala has been the 
                  nation&apos;s adventure capital for decades. Our carnival brings together the 
                  best of outdoor experiences in this UNESCO-recognized biodiversity hotspot.
                </p>
                <p>
                  From the legendary rapids of the Kelani River that gained fame in the 
                  Oscar-winning film &quot;Bridge on the River Kwai&quot; to pristine waterfalls 
                  hidden in ancient jungle, every moment here is an adventure waiting to unfold.
                </p>
                <p>
                  Founded by passionate adventurers, we&apos;ve been creating unforgettable 
                  experiences since 2010, hosting over 15,000 visitors from around the world.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-border">
              <div>
                <p className="text-3xl font-bold text-primary">14+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Expert Guides</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Safety Record</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
