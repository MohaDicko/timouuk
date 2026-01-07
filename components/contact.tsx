"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "https://instagram.com", color: "hover:text-pink-500" },
  { name: "Facebook", icon: Facebook, url: "https://facebook.com", color: "hover:text-blue-600" },
  {
    name: "Snapchat",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.206 2.024c-1.93 0-4.73 1.487-4.73 5.44 0 .906.169 1.76.497 2.537-.304.077-.64.104-.957.104-.479 0-.918-.104-1.233-.318-.315-.214-.472-.514-.472-.883 0-.283.09-.566.27-.82.18-.254.443-.479.765-.655.322-.176.693-.277 1.077-.277.383 0 .754.1 1.076.277.322.176.585.4.765.655.18.254.27.537.27.82 0 .369-.157.669-.472.883-.315.214-.754.318-1.233.318-.316 0-.653-.027-.957-.104.328-.777.497-1.63.497-2.537 0-3.953-2.8-5.44-4.73-5.44-1.93 0-4.73 1.487-4.73 5.44 0 .906.169 1.76.497 2.537-.304.077-.64.104-.957.104-.479 0-.918-.104-1.233-.318-.315-.214-.472-.514-.472-.883 0-.283.09-.566.27-.82.18-.254.443-.479.765-.655.322-.176.693-.277 1.077-.277.383 0 .754.1 1.076.277.322.176.585.4.765.655.18.254.27.537.27.82 0 .369-.157.669-.472.883-.315.214-.754.318-1.233.318-.316 0-.653-.027-.957-.104.328-.777.497-1.63.497-2.537 0-3.953-2.8-5.44-4.73-5.44z" />
      </svg>
    ),
    url: "https://snapchat.com",
    color: "hover:text-yellow-400",
  },
  {
    name: "TikTok",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
    url: "https://tiktok.com",
    color: "hover:text-black dark:hover:text-white",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-light mb-4 text-balance">Contactez-nous</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            {"Visitez notre boutique ou contactez-nous pour plus d'informations"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-light mb-6">Informations</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Adresse</h4>
                    <p className="text-muted-foreground">Bamako, Mali</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Téléphone</h4>
                    <a href="tel:+22376198644" className="text-muted-foreground hover:text-primary transition-colors">
                      +223 76 19 86 44
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a
                      href="mailto:fatimoukouma@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      fatimoukouma@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-light mb-6">Suivez-nous</h3>
              <p className="text-muted-foreground mb-8 text-pretty">
                {
                  "Restez connectés avec nous sur les réseaux sociaux pour découvrir nos dernières collections et offres exclusives."
                }
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Button
                      key={social.name}
                      variant="outline"
                      size="lg"
                      className={`justify-start gap-3 ${social.color} transition-colors`}
                      asChild
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <Icon />
                        <span>{social.name}</span>
                      </a>
                    </Button>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
