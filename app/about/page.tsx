"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Users, Target, Award, Zap } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function AboutPage() {
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
              <Brain className="h-3 w-3 mr-1 animate-pulse" />
              {t("about.title")}
            </Badge>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient`}
            >
              Pioneers in AI-Powered IT Solutions
            </h1>

            <p
              className={`text-xl text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} leading-relaxed`}
            >
              {t("about.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t("about.mission")}</p>
              <div className="flex items-center gap-4">
                <Target className="h-8 w-8 text-primary" />
                <span className="text-primary font-semibold">Innovation Through AI</span>
              </div>
            </div>
            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Industry Recognition</h3>
                <p className="text-muted-foreground">
                  Recognized as a leading AI solutions provider with over 500+ successful implementations across various
                  industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that drive our AI-powered innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Innovation First</CardTitle>
                <CardDescription>
                  We constantly push the boundaries of what's possible with AI technology
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Client Success</CardTitle>
                <CardDescription>
                  Your success is our success. We're committed to delivering exceptional results
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Continuous Learning</CardTitle>
                <CardDescription>
                  We stay ahead of the curve by continuously learning and adapting to new technologies
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-accent text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already benefiting from our AI-powered solutions
          </p>
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
        </div>
      </section>
    </div>
  )
}
