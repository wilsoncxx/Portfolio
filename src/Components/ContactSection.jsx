import {
  CheckCircle2,
  Github,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  contactEmailHref,
  contactFormEndpoint,
  recipientEmail,
} from "@/lib/contact";
import { useInView } from "@/lib/useInView";

const phoneNumbers = [
  {
    country: "MY",
    label: "+60 11-5508 6875",
    href: "tel:+601155086875",
  },
  {
    country: "SG",
    label: "+65 8087 4152",
    href: "tel:+6580874152",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/wilsoncxx",
    icon: Github,
  },
  {
    label: "Email",
    href: contactEmailHref,
    icon: Mail,
  },
];

export const ContactSection = () => {
  const { ref, isInView } = useInView();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      toast({
        title: "Missing details",
        description: "Please complete every field before sending.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _replyto: email,
          _subject: `Portfolio inquiry from ${name}`,
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      toast({
        title: "Message sent",
        description: "Thanks for reaching out. I will get back to you soon.",
      });
      form.reset();
    } catch {
      toast({
        variant: "destructive",
        title: "Message not sent",
        description: "Please try again or email me using the link beside the form.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      data-visible={isInView ? "true" : "false"}
      className="py-24 px-4 relative overflow-hidden bg-secondary/30"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            style={{ "--reveal-delay": "0ms" }}
            className="reveal-up text-3xl md:text-4xl font-bold mb-4"
          >
            Get In <span className="text-primary">Touch</span>
          </h2>

          <p
            style={{ "--reveal-delay": "90ms" }}
            className="reveal-up text-muted-foreground mb-12"
          >
            Have a project, opportunity, or collaboration in mind? Send the
            details and I will get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-10 items-start">
          <div
            style={{ "--reveal-delay": "170ms" }}
            className="reveal-up space-y-6"
          >
            <div className="contact-kicker">
              <MessageSquare className="h-4 w-4" />
              <span>Available for meaningful work</span>
            </div>

            <div className="space-y-4">
              <div className="contact-method">
                <div className="contact-icon">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="contact-copy">
                  <h3 className="contact-label">Email</h3>
                  <a
                    href={contactEmailHref}
                    className="contact-value"
                  >
                    {recipientEmail}
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="contact-copy">
                  <h3 className="contact-label">Phone</h3>
                  <div className="phone-stack">
                    {phoneNumbers.map((phone) => (
                      <a
                        key={phone.country}
                        href={phone.href}
                        className="phone-pill"
                        aria-label={`Call ${phone.country} number ${phone.label}`}
                      >
                        <span className="phone-pill-code">{phone.country}</span>
                        <span>{phone.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="contact-copy">
                  <h3 className="contact-label">Location</h3>
                  <p className="contact-value">Malaysia and Singapore</p>
                </div>
              </div>
            </div>

            <div className="contact-note">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <p>
                Best for React, .NET, portfolio, dashboard, and application
                development work.
              </p>
            </div>

            <div>
              <h3 className="text-left text-sm font-semibold text-muted-foreground mb-3">
                Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="contact-social-link"
                      aria-label={link.label}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <form
            style={{ "--reveal-delay": "260ms" }}
            className="reveal-up motion-card contact-form-card"
            onSubmit={handleSubmit}
          >
            <div className="mb-7 text-left">
              <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
              <p className="text-sm text-muted-foreground">
                Share the context, timeline, and how I can help.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="contact-field">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="contact-input"
                  placeholder="Your Name Here..."
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="contact-input"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="contact-field mt-5">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="contact-input contact-textarea"
                placeholder="Hello, I would like to talk about..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="cosmic-button mt-6 w-full flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span>{isSubmitting ? "Preparing..." : "Send Message"}</span>
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
