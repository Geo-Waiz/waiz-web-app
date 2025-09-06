"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Shield, Zap, Users, CheckCircle, Star, Sparkles } from "lucide-react"
import { WaizLogo } from "@/components/waiz-logo"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 animate-pulse" />

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse follower effect */}
      <div
        className="fixed w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Header */}
      <header
        className={`border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="animate-pulse">
              <WaizLogo />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                Contact
              </a>
            </nav>
            <Button className="hover:scale-105 transition-transform duration-200">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className={`mb-6 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} hover:scale-110`}
            >
              <Zap className="h-3 w-3 mr-1 animate-pulse" />
              AI-Powered Solutions
            </Badge>

            {/* Staggered animation to hero title */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              Smart IT & Automation, <span className="text-primary animate-pulse">Powered by AI</span>
            </h1>

            <p
              className={`text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              Transform your business with intelligent IT solutions and automation services. We put{" "}
              <span className="font-semibold text-primary">AI at the core</span> of everything we do to drive
              innovation, efficiency, and growth.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Button size="lg" className="text-lg px-8 hover:scale-105 transition-all duration-300 group">
                Start Your AI Transformation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent hover:scale-105 transition-all duration-300"
              >
                Discover AI Solutions
              </Button>
            </div>

            {/* Floating AI icons */}
            <div className="absolute top-20 left-10 animate-bounce delay-1000">
              <Brain className="h-8 w-8 text-primary/30" />
            </div>
            <div className="absolute top-40 right-20 animate-bounce delay-2000">
              <Sparkles className="h-6 w-6 text-primary/40" />
            </div>
            <div className="absolute bottom-20 left-20 animate-bounce delay-3000">
              <Zap className="h-7 w-7 text-primary/35" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-accent/30 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-pulse">AI-Driven IT & Automation Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how our <span className="font-semibold text-primary animate-pulse">AI-first approach</span>{" "}
              revolutionizes your IT infrastructure and business processes
            </p>
          </div>

          {/* Staggered card animations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group animate-fade-in-up delay-100">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse" />
                <CardTitle>AI-Powered Infrastructure</CardTitle>
                <CardDescription>
                  Intelligent systems that learn, adapt, and optimize your IT environment automatically
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm hover:translate-x-2 transition-transform duration-200">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    AI-driven monitoring & optimization
                  </li>
                  <li className="flex items-center text-sm hover:translate-x-2 transition-transform duration-200 delay-75">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Predictive maintenance with ML
                  </li>
                  <li className="flex items-center text-sm hover:translate-x-2 transition-transform duration-200 delay-150">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Intelligent resource allocation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group animate-fade-in-up delay-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse" />
                <CardTitle>AI Security & Compliance</CardTitle>
                <CardDescription>
                  Advanced AI algorithms that protect your business from evolving cyber threats
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm hover:translate-x-2 transition-transform duration-200">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    AI threat detection & response
                  </li>
                  <li className="flex items-center text-sm hover:translate-x-2 transition-transform duration-200 delay-75">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Automated incident remediation
                  </li>
                  <li className="flex items-center text-sm hover:translate-x-2 transition-transform duration-200 delay-150">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Behavioral pattern analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group animate-fade-in-up delay-500">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse" />
                <CardTitle>Intelligent Automation</CardTitle>
                <CardDescription>
                  AI-powered process automation that transforms how your business operates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm hover:translate-x-2 transition-transform duration-200">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    AI workflow optimization
                  </li>
                  <li className="flex items-center text-sm hover:translate-x-2 transition-transform duration-200 delay-75">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Smart decision automation
                  </li>
                  <li className="flex items-center text-sm hover:translate-x-2 transition-transform duration-200 delay-150">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Predictive analytics & insights
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground">
              See how we've transformed businesses with our AI-powered solutions
            </p>
          </div>

          {/* Hover animations to testimonial cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary hover:animate-spin" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "wAIz transformed our IT infrastructure with their AI solutions. We've seen 40% improvement in
                  efficiency and 60% reduction in downtime."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 hover:animate-pulse">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">CTO, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary hover:animate-spin" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The AI-powered automation has revolutionized our operations. Zero security incidents and 50% faster
                  response times since partnering with wAIz."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 hover:animate-pulse">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">CISO, SecureBank</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary hover:animate-spin" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Outstanding AI-driven support and innovative automation solutions. wAIz is our trusted technology
                  partner for the future."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 hover:animate-pulse">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Emily Rodriguez</p>
                    <p className="text-sm text-muted-foreground">CEO, InnovateLab</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-primary-foreground rounded-full animate-ping" />
          <div className="absolute bottom-20 right-20 w-16 h-16 border border-primary-foreground rounded-full animate-ping delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-primary-foreground rounded-full animate-ping delay-2000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-pulse">Ready for AI-Powered Transformation?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already benefiting from our AI-driven IT solutions and intelligent automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 hover:scale-105 transition-transform duration-200"
            >
              Schedule AI Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover:scale-105 transition-all duration-200"
            >
              View AI Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <WaizLogo className="mb-4" />
              <p className="text-muted-foreground">
                Smart IT solutions and automation powered by artificial intelligence
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">AI Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>AI-Powered Infrastructure</li>
                <li>Intelligent Security</li>
                <li>Smart Automation</li>
                <li>AI Cloud Solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>AI Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>hello@waiz.ai</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 wAIz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
