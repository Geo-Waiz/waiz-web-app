"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Shield, Zap, Users, Star, Sparkles } from "lucide-react"
import { WaizLogo } from "@/components/waiz-logo"
import { Navigation } from "@/components/navigation"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function HomePage() {
  const { t } = useLanguage()
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
      <div className="fixed inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/15 animate-gradient" />

      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div
        className="fixed w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none transition-all duration-500 ease-out animate-pulse-purple"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <Navigation
        className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      />

      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className={`mb-6 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} hover:scale-110 bg-primary/10 text-primary border-primary/20`}
            >
              <Sparkles className="h-3 w-3 mr-1 animate-pulse" />
              {t("hero.title")}
            </Badge>

            <h1
              className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-balance mb-6 transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient`}
            >
              {t("hero.subtitle")}
            </h1>

            <p
              className={`text-xl text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} leading-relaxed`}
            >
              {t("hero.description")}
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Button
                size="lg"
                className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 group bg-primary hover:bg-primary/90 animate-glow"
              >
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 bg-transparent border-primary/30 hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              >
                {t("hero.learnMore")}
              </Button>
            </div>

            <div className="absolute top-20 left-10 animate-float delay-1000">
              <Brain className="h-10 w-10 text-primary/40" />
            </div>
            <div className="absolute top-40 right-20 animate-float delay-2000">
              <Sparkles className="h-8 w-8 text-primary/50" />
            </div>
            <div className="absolute bottom-20 left-20 animate-float delay-3000">
              <Zap className="h-9 w-9 text-primary/45" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card/30 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {t("services.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("services.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group animate-fade-in-up delay-100 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-primary">{t("services.automation.title")}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t("services.automation.description")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group animate-fade-in-up delay-300 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-primary">{t("services.consulting.title")}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t("services.consulting.description")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group animate-fade-in-up delay-500 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-primary">{t("services.development.title")}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t("services.development.description")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group animate-fade-in-up delay-700 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-primary">{t("services.support.title")}</CardTitle>
                <CardDescription className="text-muted-foreground">{t("services.support.description")}</CardDescription>
              </CardHeader>
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
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-gradient" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 animate-fade-in-up">{t("contact.title")}</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">{t("contact.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-200 bg-background text-foreground hover:bg-background/90"
              >
                {t("hero.cta")}
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover:scale-105 transition-all duration-200"
              >
                {t("hero.learnMore")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border/50 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <WaizLogo className="mb-4" />
              <p className="text-muted-foreground leading-relaxed">{t("about.description")}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">{t("services.title")}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">
                  <Link href="/services">{t("services.automation.title")}</Link>
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  <Link href="/services">{t("services.consulting.title")}</Link>
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  <Link href="/services">{t("services.development.title")}</Link>
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  <Link href="/services">{t("services.support.title")}</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">{t("nav.about")}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">
                  <Link href="/about">{t("about.title")}</Link>
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  <Link href="/about">Careers</Link>
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  <Link href="/about">Blog</Link>
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  <Link href="/contact">{t("nav.contact")}</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">{t("nav.contact")}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary transition-colors">
                  <Link href="mailto:hello@waiz.ai">hello@waiz.ai</Link>
                </li>
                <li className="hover:text-primary transition-colors">
                  <Link href="tel:+15551234567">+1 (555) 123-4567</Link>
                </li>
                <li className="hover:text-primary transition-colors">San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 wAIz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
