"use client";

import { FormEvent, useState } from "react";
import { Mail, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  name: string;
  businessName: string;
  email: string;
  serviceNeeded: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  businessName: "",
  email: "",
  serviceNeeded: "",
  message: ""
};

export function ContactSection() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatusMessage(result.error ?? "Unable to submit. Please try again.");
        return;
      }

      setFormData(initialState);
      setStatusMessage("Thanks. Your details have been sent successfully.");
    } catch {
      setStatusMessage("Unable to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.22em] text-agency-soft">Contact Us</p>
            <h2 className="font-display text-3xl font-semibold text-white md:text-5xl">
              Let&apos;s craft your premium digital presence
            </h2>
            <p className="text-white/70">
              Share your vision and goals. Our team will map out a high-impact digital strategy for your business.
            </p>
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3 text-sm text-white/75">
                <Mail className="h-4 w-4 text-agency-soft" /> arohaadigitalsolutions@gmail.com
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm text-white/75">
                <PhoneCall className="h-4 w-4 text-agency-soft" /> 6302543764
              </div>
            </div>
          </div>

          <form className="glass-card rounded-2xl p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/80">Name</label>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/80">Business Name</label>
                <Input
                  placeholder="Business name"
                  value={formData.businessName}
                  onChange={(event) => setFormData((prev) => ({ ...prev, businessName: event.target.value }))}
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm text-white/80">Email</label>
              <Input
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                required
              />
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm text-white/80">Service Needed</label>
              <Select
                value={formData.serviceNeeded}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, serviceNeeded: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Online Business Setup">Online Business Setup</SelectItem>
                  <SelectItem value="Online Platform Management">Online Platform Management</SelectItem>
                  <SelectItem value="Premium Website Development">Premium Website Development</SelectItem>
                  <SelectItem value="Creative Editing Suite">Creative Editing Suite</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm text-white/80">Message</label>
              <Textarea
                placeholder="Tell us about your project goals"
                value={formData.message}
                onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                required
              />
            </div>

            <Button type="submit" size="lg" className="mt-6 w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Start Your Business"}
            </Button>
            {statusMessage ? <p className="mt-3 text-sm text-white/80">{statusMessage}</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
