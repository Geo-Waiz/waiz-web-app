"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Shield, Zap, Users, CheckCircle, Cloud, Database, Cpu } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function ServicesPage() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/15 animate-gradient" />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className={`mb-6 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} hover:scale-110 bg-primary/10 text-primary border-primary/20`}
            >
              <Zap className="h-3 w-3 mr-1 animate-pulse" />
              {t("services.title")}
            </Badge>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient`}
            >
              {t("services.subtitle")}
            </h1>

            <p
              className={`text-xl text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} leading-relaxed`}
            >
              Discover our comprehensive suite of AI-powered IT services designed to transform your business operations
              and drive unprecedented growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Brain className="h-16 w-16 text-primary mb-4" />
                <CardTitle className="text-2xl">{t("services.automation.title")}</CardTitle>
                <CardDescription className="text-lg">{t("services.automation.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Process Automation & Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>AI-Powered Workflow Management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Intelligent Decision Making Systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Shield className="h-16 w-16 text-primary mb-4" />
                <CardTitle className="text-2xl">{t("services.consulting.title")}</CardTitle>
                <CardDescription className="text-lg">{t("services.consulting.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>AI Strategy Development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Technology Assessment & Planning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Digital Transformation Roadmaps</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Cpu className="h-16 w-16 text-primary mb-4" />
                <CardTitle className="text-2xl">{t("services.development.title")}</CardTitle>
                <CardDescription className="text-lg">{t("services.development.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Custom AI Application Development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Machine Learning Model Creation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>API Integration & Development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Users className="h-16 w-16 text-primary mb-4" />
                <CardTitle className="text-2xl">{t("services.support.title")}</CardTitle>
                <CardDescription className="text-lg">{t("services.support.description")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>AI-Assisted Technical Support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Proactive System Monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Continuous Optimization Services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Specialized AI Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI services tailored to specific industry needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>AI Cloud Migration</CardTitle>
                <CardDescription>
                  Seamlessly migrate your infrastructure to AI-optimized cloud environments
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Data Analytics & AI</CardTitle>
                <CardDescription>
                  Transform your data into actionable insights with advanced AI analytics
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>AI Training & Education</CardTitle>
                <CardDescription>
                  Empower your team with comprehensive AI training and certification programs
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-accent text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI-powered services can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-200 bg-background text-foreground hover:bg-background/90"
              >
                {t("contact.title")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover:scale-105 transition-all duration-200"
              >
                {t("nav.pricing")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
