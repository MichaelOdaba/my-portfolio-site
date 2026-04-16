import {
  Facebook,
  Instagram,
  Linkedin,
  Loader,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  User2,
} from "lucide-react";

import { toast } from "../hooks/use-toast";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Get your form endpoint from https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqaewne";

export const ContactMe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          toast({
            title: "Message sent!",
            description:
              "Thank you for your message. I'll get back to you soon",
          });
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        } else {
          throw new Error("Form submission failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast({
          title: "Error",
          description:
            "Failed to send message. Please check your internet or email me directly at odabamichael1@gmail.com",
          variant: "destructive",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="contact">
      <div className="container mx-auto max-w-5xl">
        <p className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </p>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          <span className="text-primary">
            {" "}
            I'm always open to discussing new opportunities.
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact <span className="text-primary">Information</span>
            </h3>

            <div className="space-y-6 justify-center bg-card card-hover">
              <div className="p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary *:" />{" "}
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:odabamichael1@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    odabamichael1@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 justify-center bg-card card-hover">
              <div className="p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />{" "}
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+234 9025345705"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +234 9025345705
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 justify-center bg-card card-hover">
              <div className="p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary *:" />{" "}
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Makurdi, Benue State, Nigeria
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 bg-card card-hover">
              <User2 className="h-6 w-6 text-primary ml-3 " />{" "}
              <h4 className="font-medium mb-4">Connect with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/feed/"
                  className="mb-4 hover:text-primary"
                >
                  <Linkedin />
                </a>

                <a href="" className="hover:text-primary">
                  <Twitter />
                </a>

                <a
                  href="https://www.instagram.com/Michaelodaba"
                  className="hover:text-primary"
                >
                  <Instagram />
                </a>

                <a
                  href="https://www.facebook.com/Michaelodaba"
                  className="hover:text-primary"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Send a <span className="text-primary">Message</span>
            </h3>
            <div className="bg-card p-8 card-hover rounded-lg shadow-xs">
              <form action="" className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name:{" "}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Michael Odaba"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email:{" "}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="odabamichael@gmail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message:{" "}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Hello Michael, i would like to talk about..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "my-button w-full flex items-center justify-center gap-2",
                    isSubmitting && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? <Loader size={16} /> : <Send size={16} />}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
