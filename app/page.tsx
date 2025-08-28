"use client";

import React, { useEffect, useState } from "react";

// ---------- Small utilities ----------
function clsx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SafeImg({
  src,
  alt,
  className,
  fallback = "https://picsum.photos/1200/800?random=42",
}: {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(fallback)}
      loading="lazy"
    />
  );
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <div className="flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={clsx(
            "h-4 w-4",
            i < full ? "text-blue-600" : "text-slate-300"
          )}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.62L10 0 7.19 6.62 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      ))}
    </div>
  );
}

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50); // percent
  return (
    <div className="relative w-full h-56 md:h-64 select-none overflow-hidden rounded-2xl">
      {/* After (clean) */}
      <SafeImg src={after} alt="after" className="absolute inset-0 w-full h-full object-cover" />
      {/* Before (dirty) clipped by slider */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <SafeImg src={before} alt="before" className="w-full h-full object-cover" />
      </div>
      {/* Divider */}
      <div className="absolute top-0 bottom-0" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
        <div className="h-full w-0.5 bg-white/90 shadow" />
      </div>
      {/* Range control */}
      <div className="absolute left-0 right-0 bottom-3 flex justify-center">
        <input
          aria-label="compare slider"
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="w-11/12 md:w-3/4 accent-blue-600"
        />
      </div>
    </div>
  );
}

function TestimonialCarousel({
  items,
}: {
  items: { quote: string; name: string; suburb: string; rating: number }[];
}) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [items.length]);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const next = () => setI((p) => (p + 1) % items.length);
  const current = items[i];
  return (
    <div className="relative">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <StarRating rating={current.rating} />
        <p className="mt-3 text-slate-800">“{current.quote}”</p>
        <div className="mt-2 text-sm text-slate-500">— {current.name}, {current.suburb}</div>
      </div>
      <div className="absolute -bottom-5 right-3 flex gap-2">
        <button onClick={prev} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm hover:bg-slate-50">Prev</button>
        <button onClick={next} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm hover:bg-slate-50">Next</button>
      </div>
    </div>
  );
}

export default function ETHomeServices() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-black tracking-tight text-xl">
            <span className="text-slate-900">E.T.</span>
            <span className="ml-1 text-blue-600"> Home Services</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#work" className="hover:text-blue-600 transition">Before & After</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#book" className="hover:text-blue-600 transition">Book</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+611300000000" className="rounded-xl border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 transition">Call 1300 000 000</a>
            <a href="#book" className="rounded-xl bg-blue-600 text-white font-semibold px-3 py-1.5 text-sm hover:bg-blue-500 transition">Get a Quote</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.18),transparent_65%)]" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="[&_*]:transition-all">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Blue and white. Clean and bright.
            </h1>
            <p className="mt-5 text-lg text-slate-700 max-w-prose">
              E.T. Home Services is a Melbourne-based cleaning and maintenance team. We specialise in **driveway pressure washing**, **window detailing**, bathroom and kitchen deep cleans, and end-of-lease work. Straight pricing, fast bookings, insured and police-checked.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className="rounded-2xl bg-blue-600 text-white font-semibold px-5 py-3 hover:scale-[1.02] hover:bg-blue-500 transition">Book Now</a>
              <a href="#work" className="rounded-2xl border border-slate-300 px-5 py-3 hover:bg-slate-50 transition">See Results</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-blue-600"/> Same-week availability</div>
              <div>Police-checked • Insured • ABN-registered</div>
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-2xl">
              <SafeImg
                src="https://images.unsplash.com/photo-1601662528567-526cd06f6589?q=80&w=1600&auto=format&fit=crop"
                fallback="https://picsum.photos/seed/driveway-clean/1600/1200"
                alt="Pressure-washed clean driveway"
                className="h-full w-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur rounded-2xl border border-slate-200 p-4 text-sm shadow">
              <div className="font-semibold text-slate-900">Average job rating</div>
              <div className="text-2xl text-blue-600">4.9/5</div>
              <div className="text-slate-600">from recent customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-4xl font-black">What we do</h2>
          <span className="text-slate-500 text-sm">Transparent pricing. No upsell games.</span>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Driveway Pressure Washing",
              desc: "Oil stains, mould, and grime gone. Concrete and pavers look new again.",
              price: "From $199",
              img: "https://images.unsplash.com/photo-1548438294-1ad5d5f4efbf?q=80&w=1600&auto=format&fit=crop",
            },
            {
              title: "Windows & Exterior Glass",
              desc: "Streak-free window detailing. Frames and tracks included on request.",
              price: "From $159",
              img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
            },
            {
              title: "Deep Clean (Kitchen/Bathroom)",
              desc: "Degrease, descale, detail. Ovens, grout, skirting, hard-to-reach spots.",
              price: "From $299",
              img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
            },
          ].map((s) => (
            <div key={s.title} className="group rounded-3xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl transition">
              <div className="aspect-[4/3] overflow-hidden">
                <SafeImg src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700" />
              </div>
              <div className="p-6">
                <div className="text-lg font-semibold">{s.title}</div>
                <div className="mt-2 text-slate-600 text-sm">{s.desc}</div>
                <div className="mt-4 text-blue-600 font-bold">{s.price}</div>
                <a href="#book" className="mt-6 inline-block rounded-xl bg-blue-600 text-white font-semibold px-4 py-2 hover:bg-blue-500 transition">Book</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before & After with Slider */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-black">Before & After</h2>
        <p className="mt-2 text-slate-600 max-w-prose">Slide to compare. Replace these with your own job photos for instant credibility.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-4">
            <BeforeAfterSlider
              before="https://images.unsplash.com/photo-1521783988139-893ce83b0c0f?q=80&w=1600&auto=format&fit=crop"
              after="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop"
            />
            <div className="px-1 pt-3 text-sm text-slate-700">Driveway pressure wash</div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-4">
            <BeforeAfterSlider
              before="https://images.unsplash.com/photo-1528323273322-d81458248d40?q=80&w=1600&auto=format&fit=crop"
              after="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop"
            />
            <div className="px-1 pt-3 text-sm text-slate-700">Windows detail clean</div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-4">
            <BeforeAfterSlider
              before="https://images.unsplash.com/photo-1524008279394-3aed4643b30b?q=80&w=1600&auto=format&fit=crop"
              after="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
            />
            <div className="px-1 pt-3 text-sm text-slate-700">Bathroom refresh</div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">What customers say</h3>
            <div className="text-sm text-slate-500">Pulled from recent jobs</div>
          </div>
          <div className="mt-6">
            <TestimonialCarousel
              items={[
                { quote: "Driveway looks brand new. Quick and professional.", name: "James", suburb: "South Yarra", rating: 5 },
                { quote: "Windows are crystal. Booking was easy.", name: "Priya", suburb: "Docklands", rating: 5 },
                { quote: "Deep clean smashed it. Will rebook.", name: "Marco", suburb: "Brunswick", rating: 4 },
              ]}
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-black">About E.T. Home Services</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              We’re a small, reliable Melbourne crew focused on fast turnarounds and quality results. We bring our own supplies, use eco options on request, and leave photo proof on end-of-lease and exterior jobs. No call centres. No confusing plans. Just clear pricing and a tidy home.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700 text-sm list-disc list-inside">
              <li>Police checks and public liability insurance</li>
              <li>Same-week availability, Saturdays on request</li>
              <li>Driveways, windows, kitchens, bathrooms, bond cleans</li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden ring-1 ring-slate-200">
            <SafeImg
              src="https://images.unsplash.com/photo-1598300053654-52a0dede84c5?q=80&w=1600&auto=format&fit=crop"
              fallback="https://picsum.photos/seed/team-clean/1600/1200"
              alt="Team at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="md:flex items-start gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-black">Book in minutes</h2>
              <p className="mt-2 text-slate-600 text-sm">Prefer to talk? Call <a className="underline text-blue-600" href="tel:+611300000000">1300 000 000</a> or SMS <a className="underline text-blue-600" href="sms:+61400000000">0400 000 000</a>.</p>
              <ol className="mt-6 space-y-2 text-sm text-slate-700 list-decimal list-inside">
                <li>Choose your service and time</li>
                <li>Share address and access notes</li>
                <li>Get instant confirmation</li>
              </ol>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              {/* Replace src with your Tally form link */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200">
                <iframe src="https://tally.so/r/PLACEHOLDER" width="100%" height="100%" frameBorder="0" title="Booking form" className="w-full h-full"></iframe>
              </div>
              <p className="mt-3 text-xs text-slate-500">No Tally yet? Swap the iframe for a mailto link or simple contact form later.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} E.T. Home Services. Melbourne, VIC.</div>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-blue-600 transition">Back to top</a>
            <a href="mailto:hello@ethomeservices.au" className="hover:text-blue-600 transition">hello@ethomeservices.au</a>
            <a href="/privacy" className="hover:text-blue-600 transition">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
