"use client"

import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, ArrowDown } from "lucide-react"

export function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: 5000 }),
    Fade(),
  ])

  const slides = [
    {
      image: "/hero-abaya.png",
      title: "Timouuk",
      subtitle: "Élégance & Raffinement",
      cta: "Découvrir la collection",
      href: "#collection",
    },
    {
      image: "/hero-accessories.png",
      title: "Accessoires de Luxe",
      subtitle: "La touche finale parfaite",
      cta: "Voir les accessoires",
      href: "#collection",
    },
    {
      image: "/hero-perfume.png",
      title: "Fragrances Uniques",
      subtitle: "L'essence de la sophistication",
      cta: "Explorer les parfums",
      href: "#collection",
    },
  ]

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div className="relative flex-[0_0_100%] h-full min-h-screen" key={index}>
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />
              <div className="absolute inset-0 bg-black/20 z-10" />
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className="w-full h-full object-cover animate-in fade-in zoom-in-105 duration-[3000ms]"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center text-center pb-20">
                <div className="container px-4">
                  <h1 className="font-serif text-4xl md:text-7xl lg:text-9xl text-white font-light tracking-tight mb-4 md:mb-6 drop-shadow-lg animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300 fill-mode-both">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-3xl text-white/95 font-light tracking-wide mb-8 md:mb-10 max-w-2xl mx-auto drop-shadow-md animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-500 fill-mode-both">
                    {slide.subtitle}
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-none tracking-widest uppercase transition-transform hover:scale-105 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-700 fill-mode-both"
                    asChild
                  >
                    <a href={slide.href}>{slide.cta}</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30 p-8 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 text-white/70 animate-bounce">
          <ArrowDown className="w-6 h-6" />
        </div>

        <div className="hidden md:block text-white/50 text-sm tracking-widest uppercase">
          Collection 2026
        </div>
      </div>
    </section>
  )
}
