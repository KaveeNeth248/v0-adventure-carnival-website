import Link from "next/link"
import { Mountain, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const footerLinks = {
  adventures: [
    { label: "White Water Rafting", href: "#" },
    { label: "Waterfall Abseiling", href: "#" },
    { label: "Jungle Trekking", href: "#" },
    { label: "Canopy Zipline", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  support: [
    { label: "FAQs", href: "#" },
    { label: "Safety Guidelines", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Mountain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                Kitulgala<span className="text-primary">Adventure</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Experience the thrill of a lifetime at Sri Lanka&apos;s premier adventure destination. 
              Creating unforgettable memories since 2010.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Adventures Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Adventures</h4>
            <ul className="space-y-3">
              {footerLinks.adventures.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Kitulgala Adventure Carnival. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ in Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  )
}
