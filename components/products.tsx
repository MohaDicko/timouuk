"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, ShoppingBag, Watch, Flower } from "lucide-react"

const products = [
  {
    title: "Habaya",
    description: "Collection exclusive de Habaya élégantes et modernes",
    icon: Sparkles,
    image: "/elegant-black-abaya-fashion.jpg",
  },
  {
    title: "Accessoires & Chaussures",
    description: "Sacs à main raffinés et chaussures tendance",
    icon: ShoppingBag,
    image: "/luxury-handbags-and-shoes-display.jpg",
  },
  {
    title: "Montres",
    description: "Montres élégantes pour compléter votre style",
    icon: Watch,
    image: "/elegant-luxury-watches-display.jpg",
  },
  {
    title: "Parfums en Vrac",
    description: "Fragrances authentiques et envoûtantes",
    icon: Flower,
    image: "/luxury-perfume-bottles-display.jpg",
  },
]

function TiltCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Icon = product.icon

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-full perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-4 rounded-xl shadow-2xl z-10 pointer-events-none"
      />
      <Card className="h-full border-0 shadow-xl overflow-hidden rounded-xl bg-card">
        <CardContent className="p-0 h-full relative">
          <motion.div
            style={{ transform: "translateZ(20px)" }}
            className="absolute inset-0 z-0 h-full w-full"
          >
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          </motion.div>

          <motion.div
            style={{ transform: "translateZ(60px)" }}
            className="absolute bottom-0 left-0 right-0 p-8 text-white z-20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif text-3xl font-light tracking-wide">{product.title}</h3>
            </div>
            <p className="text-white/80 text-lg font-light leading-relaxed">{product.description}</p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Products() {
  return (
    <section id="collection" className="py-32 bg-secondary/5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-light mb-6 text-balance"
          >
            Notre Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto text-pretty font-light"
          >
            {"Une sélection d'exception où chaque pièce raconte une histoire d'élégance"}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {products.map((product, index) => (
            <TiltCard key={index} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
