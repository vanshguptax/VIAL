"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  TrendingUp,
  BarChart3,
  Users,
  MessageSquare,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Vial</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:underline underline-offset-4">
              Portfolio
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <a href="#contact">
  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
    Get in Touch
  </Button>
</a>

        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center space-y-4"
              >
               <div className="space-y-2">
  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
    Elevate Your <span className="text-purple-500">Social Media</span> Presence
  </h1>
  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
    Strategic social media management to grow your brand, engage your audience, and drive measurable results.
  </p>
</div>

<div className="flex flex-col gap-2 min-[400px]:flex-row">
  <a href="#portfolio">
    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
      View My Work
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  </a>

  <a href="#contact">
    <Button size="lg" variant="outline">
      Contact Me
    </Button>
  </a>
</div>

              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto lg:mr-0 relative"
              >
                <div className="relative w-full max-w-[500px] aspect-square rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-1">
                  <div className="absolute inset-1 rounded-full overflow-hidden bg-white dark:bg-slate-950">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="Social Media Manager"
                      width={600}
                      height={600}
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 rounded-full p-3 shadow-lg">
                  <div className="flex space-x-2">
                   
                  <a href="https://www.instagram.com/vansh_reads/" target="_blank" rel="noopener noreferrer">
      <div className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition">
        <Instagram className="h-5 w-5" />
      </div>
    </a>
    <a href="https://x.com/Vanshreads" target="_blank" rel="noopener noreferrer">
      <div className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition">
        <Twitter className="h-5 w-5" />
      </div>
    </a>

    <a href="https://www.linkedin.com/in/vansh-gupta-598801204" target="_blank" rel="noopener noreferrer">
      <div className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition">
        <Linkedin className="h-5 w-5" />
      </div>
    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I'm a passionate social media manager with 3+ years of experience helping brands build meaningful
                  connections.
                </p>
              </div>
            </motion.div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mt-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold">My Approach</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  I believe in data-driven strategies that align with your business goals. Every post, every campaign,
                  and every interaction is an opportunity to strengthen your brand and connect with your audience.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  My expertise spans across multiple platforms including Instagram, Facebook, Twitter, LinkedIn, TikTok,
                  and Pinterest. I stay ahead of algorithm changes and emerging trends to ensure your social media
                  presence remains relevant and effective.
                </p>
                <div className="pt-4">
  <a href="/VANSH GUPTA.pdf" download>
    <Button
      variant="outline"
      className="border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950"
    >
      Download Resume
    </Button>
  </a>
</div>

                
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                    <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold">Growth Strategy</h3>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Strategic approaches to grow your audience organically
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900">
                    <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold">Analytics</h3>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Data-driven insights to optimize performance
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-pink-100 p-3 dark:bg-pink-900">
                    <Users className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold">Community</h3>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Building engaged and loyal communities
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                    <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold">Content</h3>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Compelling content that resonates with your audience
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Services</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Comprehensive social media management solutions tailored to your specific needs
                </p>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-4">
                        <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center dark:bg-purple-900">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
                        <ul className="space-y-2 pt-4">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <div className="mr-2 h-4 w-4 rounded-full bg-green-500"></div>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Portfolio</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Showcasing successful campaigns and social media transformations
                </p>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="object-cover w-full aspect-[4/3] transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                    <div className="flex space-x-2 mt-4">
                      {item.platforms.map((platform, i) => (
                        <div key={i} className="text-white p-1.5 rounded-full">
                          {platform}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button size="lg" variant="outline">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="text-4xl font-bold">{stat.value}</div>
                  <div className="text-purple-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  What my clients say about working with me
                </p>
              </div>
            </motion.div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-bold">{testimonial.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                        </div>
                        <p className="text-gray-500 dark:text-gray-400">"{testimonial.text}"</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

  {/* Contact Section */}
<section id="contact" className="py-16 md:py-24">
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Ready to elevate your social media presence? Let's discuss how I can help your brand grow.
          </p>
        </div>
        <div className="space-y-4 pt-4">
          <div className="flex items-center space-x-3">
            <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
              <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <span>vanshguptax@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
              <Phone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <span>+91-7051366411</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
              <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <span>Jammu & Kashmir, INDIA</span>
          </div>
        </div>
        <div className="flex space-x-4 pt-4">
          <a
            href="https://www.instagram.com/vansh_reads/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-100 p-2 dark:bg-gray-800"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://x.com/Vanshreads"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-100 p-2 dark:bg-gray-800"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vansh-gupta-598801204"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-100 p-2 dark:bg-gray-800"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <form
            action="https://formspree.io/f/xkgjpbzo"
            method="POST"
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="first-name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  First name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="last-name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Last name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your message"
              />
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Send Message
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-gray-500 dark:text-gray-400 md:text-left">
            © 2025 Vansh Gupta. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-500 underline-offset-4 hover:underline dark:text-gray-400">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-500 underline-offset-4 hover:underline dark:text-gray-400">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample data
const services = [
  {
    icon: <Instagram className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    title: "Social Media Management",
    description: "Complete management of your social media accounts to grow your brand and engage your audience.",
    features: ["Content creation & curation", "Community management", "Scheduling & posting", "Performance reporting"],
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    title: "Strategy Development",
    description: "Custom social media strategies aligned with your business goals and target audience.",
    features: ["Competitor analysis", "Platform selection", "Content calendar", "Growth tactics"],
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    title: "Paid Social Campaigns",
    description: "Strategic paid campaigns to amplify your reach and drive conversions.",
    features: ["Ad creative development", "Audience targeting", "Budget optimization", "Performance analysis"],
  },
]

const portfolioItems = [
  {
    image: "/images/1.png?height=400&width=600",
    title: "Fashion Brand Growth",
    description: "Increased engagement by 150% in 3 months",
    platforms: [
      <a
        key="ig"
        href="https://www.instagram.com/thetreepie_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="h-4 w-4" />
      </a>,
         ],
  },
  {
    image: "/images/2.png?height=400&width=600",
    title: "Restaurant Social Revamp",
    description: "Doubled follower count and increased bookings by 35%",
    platforms: [
      <Instagram key="ig" className="h-4 w-4" />,
      <Facebook key="fb" className="h-4 w-4" />,
      <Twitter key="tw" className="h-4 w-4" />,
    ],
  },
  {
    image: "/images/3.png?height=400&width=600",
    title: "Agritech Startup Launch",
    description: "Generated 100+ subscribers in first month",
    platforms: [<Twitter key="tw" className="h-4 w-4" />, <Linkedin key="li" className="h-4 w-4" />],
  },
  
]

const stats = [
  { value: "5+", label: "Clients" },
  { value: "12+", label: "Campaigns" },
  { value: "100K+", label: "Engagement" },
  { value: "200%", label: "Avg. Engagement Increase" },
]

const testimonials = [
  {
    avatar: "/placeholder.svg?height=100&width=100",
    name: "Tushant Pansotra",
    position: "Marketing Director, Cafe & Restaurant",
    rating: 4,
    text: "Our restaurant's social media presence has completely transformed. We're now booked weeks in advance thanks to our improved online visibility.",
    
  },
  {
    avatar: "/placeholder.svg?height=100&width=100",
    name: "Nexus Media",
    position: "Founder, Clothing Brand",
    rating: 4,
    text: "The strategic approach to our social launch was impressive. We gained traction quickly and established our brand voice effectively.",
  },
  {
    avatar: "/placeholder.svg?height=100&width=100",
    name: "Prachi Gupta",
    position: "CEO, Agritech Startup",
    rating: 5,
    text: "Working with this social media manager transformed our online presence. Our engagement rates have skyrocketed and we're seeing real business results.",
    
  },
]

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

