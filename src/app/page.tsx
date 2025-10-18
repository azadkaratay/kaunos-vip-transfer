import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero */}
      <section className="bg-ink-950 text-sand-50">
        <div className="mx-auto max-w-7xl px-6 py-24 grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Dalaman VIP Transfer
            </h1>
            <p className="mt-4 text-lg text-sand-100">
              Premium airport transfers across Dalaman and the Turkish Riviera.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Button className="btn-primary">Get a Quote</Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
          <div className="card p-6">
            <ul className="grid grid-cols-2 gap-4 text-sm">
              <li>
                <span className="text-muted-foreground">24/7 Service</span>
              </li>
              <li>
                <span className="text-muted-foreground">Business Class Fleet</span>
              </li>
              <li>
                <span className="text-muted-foreground">English & Turkish Support</span>
              </li>
              <li>
                <span className="text-muted-foreground">Fixed Transparent Pricing</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="card p-8">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="mt-2 text-muted-foreground">
            We provide reliable, safe, and comfortable VIP transfer services from Dalaman Airport to destinations across the region. Our professional drivers and premium vehicles ensure a seamless travel experience.
          </p>
        </div>
      </section>

      {/* CTA Placeholder */}
      <section id="cta" className="mx-auto max-w-7xl px-6">
        <div className="card p-8 flex items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Ready to book?</h3>
            <p className="text-muted-foreground">Get a quick quote for your route.</p>
          </div>
          <a href="#" className="btn-primary">Start Booking</a>
        </div>
      </section>
    </div>
  );
}
