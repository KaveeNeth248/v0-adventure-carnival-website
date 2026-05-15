import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AdventuresSection } from "@/components/adventures-section"
import { PackagesSection } from "@/components/packages-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AdventuresSection />
      <PackagesSection />
      <GallerySection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
