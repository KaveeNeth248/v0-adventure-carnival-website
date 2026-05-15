"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Kitulgala, Sabaragamuwa Province", "Sri Lanka"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+94 77 123 4567", "+94 11 234 5678"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@kitulgalaadventure.lk", "bookings@kitulgalaadventure.lk"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Daily: 6:00 AM - 6:00 PM", "Office: 8:00 AM - 8:00 PM"],
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Ready to start your adventure? Reach out to us for bookings, inquiries, 
            or custom adventure packages.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+94 77 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-input border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your adventure plans..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-input border-border focus:border-primary resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative h-64 rounded-xl overflow-hidden bg-muted border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Kitulgala, Sri Lanka</p>
                  <p className="text-sm text-muted-foreground">7.0239° N, 80.4190° E</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
