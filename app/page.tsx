"use client"

import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Download, ChevronRight, Instagram, Car, Bike, Truck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { LucideIcon } from "lucide-react"

const partners = [
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
]

interface VehicleProps {
  Icon: LucideIcon;
  direction: 'left' | 'right';
  lane: number;
}

const Vehicle: React.FC<VehicleProps> = ({ Icon, direction, lane }) => {
  const [position, setPosition] = useState(direction === 'left' ? 100 : -20)

  useEffect(() => {
    const animateVehicle = () => {
      const newPosition = direction === 'left' ? position - 0.1 : position + 0.1
      setPosition(newPosition % 120 - 20)
      requestAnimationFrame(animateVehicle)
    }

    const animationFrame = requestAnimationFrame(animateVehicle)
    return () => cancelAnimationFrame(animationFrame)
  }, [direction, position])

  return (
    <div
      className="absolute text-cyan-400"
      style={{
        left: `${position}%`,
        bottom: `${10 + lane * 5}%`,
        transform: `scaleX(${direction === 'left' ? 1 : -1})`,
        transition: 'left 0.1s linear',
      }}
    >
      <Icon size={24} />
    </div>
  )
}

export default function Component() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-sm border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center">
                <Image src="/bob.webp" alt="bob Logo" width={40} height={40} />
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Features
                </Link>
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  How it Works
                </Link>
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Partners
                </Link>
              </div>
              <Button className="bg-cyan-400 text-black hover:bg-cyan-500">
                Download App
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_50%)]" />

          {/* Left Floating Panels */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 space-y-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-64 h-40 bg-black/30 backdrop-blur-md rounded-lg border border-white/10 p-4"
            >
              <div className="text-cyan-400 text-2xl font-bold mb-2">4D</div>
              <div className="text-white/60 text-sm">Real-time fare tracking and comparison</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="w-64 h-40 bg-black/30 backdrop-blur-md rounded-lg border border-white/10 p-4"
            >
              <Button className="w-full bg-cyan-400 hover:bg-cyan-500 text-black mb-4">
                <Download className="mr-2 h-4 w-4" />
                Download App
              </Button>
            </motion.div>
          </div>

          {/* Right Floating Panels */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-64 h-40 bg-black/30 backdrop-blur-md rounded-lg border border-white/10 p-4"
            >
              <div className="text-cyan-400 text-2xl font-bold mb-2">2D</div>
              <div className="h-24 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-md" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="w-64 h-40 bg-black/30 backdrop-blur-md rounded-lg border border-white/10 p-4"
            >
              <div className="space-y-2">
                <div className="h-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full" />
                <div className="h-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full" />
                <div className="h-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full" />
              </div>
            </motion.div>
          </div>

          {/* Central Content */}
          <div className="relative z-10 text-center space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Fast. Efficient. Affordable.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-8"
            >
              Discover the best deal for your next ride
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center space-y-4"
            >
              <Button className="w-64 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-black">
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>

              <div className="flex items-center justify-center space-x-4">
                <Image
                  src="/placeholder.svg?height=40&width=135"
                  width={135}
                  height={40}
                  alt="App Store"
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
                <Image
                  src="/placeholder.svg?height=40&width=135"
                  width={135}
                  height={40}
                  alt="Google Play"
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
            </motion.div>
          </div>

          {/* Animated Traffic Grid */}
          <div className="absolute bottom-0 w-full h-[30vh] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,255,255,0.1)_50%,transparent)] 
              [background-size:50px_50px] [background-position:center] [transform:perspective(500px)_rotateX(60deg)]"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,255,255,0.1) 1px, transparent 1px),
                                 linear-gradient(to bottom, rgba(0,255,255,0.1) 1px, transparent 1px)`
              }}
            />
            <div className="relative w-full h-full text-cyan-400">
              <Vehicle Icon={Car} direction="left" lane={0} />
              <Vehicle Icon={Bike} direction="right" lane={1} />
              <Vehicle Icon={Truck} direction="left" lane={2} />
              <Vehicle Icon={Car} direction="right" lane={3} />
              <Vehicle Icon={Bike} direction="left" lane={4} />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why bob?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "No Multiple App Switching", icon: "🔄" },
                { title: "Compare Prices", icon: "💰" },
                { title: "No Need for duplicating Effort", icon: "🚀" },
                { title: "No Performance Issues", icon: "⚡" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">Streamline your ride selection with bob's innovative features.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How it Works</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { step: 1, title: "Download App" },
                { step: 2, title: "Enter Destination" },
                { step: 3, title: "Compare Prices" },
                { step: 4, title: "Choose Ride" },
                { step: 5, title: "Enjoy Journey" }
              ].map((item) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * item.step }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center text-black text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <p className="text-center text-gray-400">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Modest Amount of DATA</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Prevalence", value: "70%", description: "of urban Indian commuters use ride-sharing apps regularly" },
                { title: "Frustration", value: "68%", description: "of Indian users expressed frustration with comparing prices" },
                { title: "Confusion", value: "60%", description: "of urban commuters face difficulties in choosing the best ride option" },
                { title: "Integration", value: "75%", description: "of Indian consumers prefer using integrated apps" },
                { title: "Openness", value: "82%", description: "of Indian urban commuters are open to adopting new technology" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                  <p  className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</p>
                  <p className="text-gray-400">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Image src={partner} width={120} height={60} alt={`Partner ${index + 1}`} className="opacity-50 hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div>
                <Image src="/bob.webp" alt="bob Logo" width={60} height={60} className="mb-4" />
                <p className="text-gray-400">Compare rides, find the best prices, and travel smarter with bob.</p>
                <div className="flex space-x-4 mt-4">
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    <Instagram />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    <Instagram />
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-cyan-400">About Us</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-cyan-400">Careers</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-cyan-400">Privacy Policy</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-cyan-400">Contact Us</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-cyan-400">Terms of Service</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
                <p className="text-gray-400 mb-4">Get the latest updates and offers straight to your inbox.</p>
                <form className="flex">
                  <Input type="email" placeholder="Enter your email" className="bg-white/10 border-white/20 text-white" />
                  <Button type="submit" className="ml-2 bg-cyan-400 text-black hover:bg-cyan-500">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
              <p>© 2024 bob INC. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  )
}