"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingBag, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navLinks = [
    { name: "Collection", href: "#collection" },
    { name: "Nouveautés", href: "#new" },
    { name: "Habaya", href: "#habaya" },
    { name: "Accessoires", href: "#accessories" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <motion.nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
                        : "bg-transparent py-6"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <a href="#" className="font-serif text-2xl md:text-3xl font-bold tracking-tighter text-white relative z-50 mix-blend-difference">
                        Timouuk
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm uppercase tracking-widest text-white/80 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 text-white">
                        <Button variant="ghost" size="icon" className="hover:bg-white/10 rounded-full">
                            <Search className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-white/10 rounded-full">
                            <ShoppingBag className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden hover:bg-white/10 rounded-full relative z-50"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </Button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-black text-white flex flex-col items-center justify-center pt-20"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="font-serif text-4xl font-light hover:text-white/70 transition-colors"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            className="mt-12 opacity-50 text-sm tracking-widest uppercase"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 0.6 }}
                        >
                            Bamako, Mali
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
