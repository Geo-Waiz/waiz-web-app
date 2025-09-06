"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Star, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function PricingPage() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [isYearly, setIsYearly] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const plans = [
    {
      name: t("pricing.starter"),
      price: isYearly ? 99 : 129,
      description: "Perfect for small businesses starting their AI journey",
      features: [
        "AI-powered automation (up to 5 processes)",
        "Basic analytics dashboard",
        "Email support",
        "Monthly AI consultation (1 hour)",
        "Standard integrations",
      ],
      popular: false,
    },
    {
      name: t("pricing.professional"),
      price: isYearly ? 299 : 399,
      description: "Ideal for growing companies ready to scale with AI",
      features: [
        "Advanced AI automation (unlimited processes)",
        "Custom AI model development",
        "Priority support (24/7)",
        "Weekly AI consultation (2 hours)",
        "Advanced integrations & APIs",
        "Dedicated account manager",
        "Performance analytics & reporting",
      ],
      popular: true,
    },
    {
      name: t("pricing.enterprise"),
      price: "Custom",
      description: "Tailored AI solutions for large organizations",
      features: [
        "Full AI transformation suite",
        "Custom AI infrastructure",
        "White-glove implementation",
        "Unlimited consultation & support",
        "Enterprise-grade security",
        "Custom integrations & development",
        "On-site training & workshops",
        "SLA guarantees",
      ],
      popular: false,
    },
  ]

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
              {t("pricing.title")}
            </Badge>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient`}
            >
              {t("pricing.subtitle")}
            </h1>

            <p
              className={`text-xl text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} leading-relaxed`}
            >
              Choose the perfect AI-powered plan to accelerate your business transformation
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-sm ${!isYearly ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                {t("pricing.monthly")}
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isYearly ? "bg-primary" : "bg-muted"}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isYearly ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
              <span className={`text-sm ${isYearly ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                {t("pricing.yearly")}
                <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary">
                  Save 25%
                </Badge>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`relative border-2 transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm ${
                  plan.popular
                    ? "border-primary/50 shadow-2xl shadow-primary/20"
                    : "border-border/50 hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    {typeof plan.price === "number" ? (
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-primary">${plan.price}</span>
                        <span className="text-muted-foreground ml-1">/{isYearly ? "year" : "month"}</span>
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-primary">{plan.price}</div>
                    )}
                  </div>
                  <CardDescription className="mt-4 text-base">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"
                    } hover:scale-105 transition-all duration-200`}
                  >
                    {plan.name === t("pricing.enterprise") ? t("pricing.contactUs") : t("pricing.getStarted")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our AI-powered pricing plans
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Can I upgrade or downgrade my plan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take
                  effect at the next billing cycle.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Do you offer custom AI solutions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our Enterprise plan includes fully customized AI solutions tailored to your specific business needs
                  and requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">What kind of support do you provide?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer email support for Starter, 24/7 priority support for Professional, and dedicated account
                  management for Enterprise plans.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Is there a free trial available?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer a 14-day free trial for all plans so you can experience the power of our AI solutions
                  before committing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-accent text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your AI Journey?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already transforming their business with our AI solutions
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-200 bg-background text-foreground hover:bg-background/90"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
