"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"

export default function ContactPage() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/15 animate-gradient" />

      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className={`mb-6 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} hover:scale-110 bg-primary/10 text-primary border-primary/20`}
            >
              <Mail className="h-3 w-3 mr-1 animate-pulse" />
              {t("contact.title")}
            </Badge>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient`}
            >
              {t("contact.subtitle")}
            </h1>

            <p
              className={`text-xl text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} leading-relaxed`}
            >
              Let's discuss how our AI-powered solutions can transform your business. Our experts are ready to help you
              get started.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t("contact.name")}</label>
                    <Input placeholder="Your name" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t("contact.email")}</label>
                    <Input type="email" placeholder="your@email.com" className="bg-background/50" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">{t("contact.phone")}</label>
                  <Input placeholder="Your phone number" className="bg-background/50" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Company</label>
                  <Input placeholder="Your company name" className="bg-background/50" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">{t("contact.message")}</label>
                  <Textarea
                    placeholder="Tell us about your AI needs and how we can help..."
                    className="min-h-32 bg-background/50"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-200">
                  <Send className="h-4 w-4 mr-2" />
                  {t("contact.send")}
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                      <p className="text-muted-foreground mb-2">Get in touch via email for detailed inquiries</p>
                      <p className="text-primary font-medium">hello@waiz.ai</p>
                      <p className="text-primary font-medium">support@waiz.ai</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                      <p className="text-muted-foreground mb-2">Speak directly with our AI experts</p>
                      <p className="text-primary font-medium">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM PST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                      <p className="text-muted-foreground mb-2">Come see our AI innovation center</p>
                      <p className="text-primary font-medium">
                        123 AI Innovation Drive
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                      <div className="space-y-1 text-sm">
                        <p className="flex justify-between">
                          <span className="text-muted-foreground">Monday - Friday:</span>
                          <span className="text-primary font-medium">9:00 AM - 6:00 PM</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-muted-foreground">Saturday:</span>
                          <span className="text-primary font-medium">10:00 AM - 4:00 PM</span>
                        </p>
                        <p className="flex justify-between">
                          <span className="text-muted-foreground">Sunday:</span>
                          <span className="text-muted-foreground">Closed</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-accent text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discover how AI can revolutionize your operations
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-200 bg-background text-foreground hover:bg-background/90"
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
