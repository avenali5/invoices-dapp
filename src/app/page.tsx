"use client";
import AddContact from "@/components/AddInvoice/AddInvoice";
import ContactList from "@/components/ContactList/ContactList";
import Header from "@/components/Header/Header";
import EnterCosmos from "@/sections/EnterCosmos/EnterCosmos";
import Features from "@/sections/Features/Features";
import Hero from "@/sections/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <EnterCosmos />
    </main>
  );
}
