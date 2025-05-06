"use client";

import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen  bg-gray-100 font-[family-name:var(--font-urbanist)]">
      <ContactForm />
      <Map />
    </main>
  );
}
