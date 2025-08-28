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
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#work" className="hover:text-blue-600 transition-colors">Before & After</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#book" className="hover:text-blue-600 transition-colors">Book</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+611300000000" className="rounded-xl border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 transition">Call 1300 000 000</a>
            <a href="#book" className="rounded-xl bg-blue-600 text-white font-semibold px-3 py-1.5 text-sm hover:bg-blue-500 transition">Get a Quote</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.12),transparent_65%)]" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="[&_*]:transition-all">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Blue & white. Clean & bright.
            </h1>
            <p className="mt-5 text-lg text-slate-700 max-w-prose">
              Simple bookings. Spotless results. Servicing Melbourne and surrounds.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className="rounded-2xl bg-blue-600 text-white font-semibold px-5 py-3 hover:scale-[1.02] hover:bg-blue-500 transition">Book Now</a>
              <a href="#work" className="rounded-2xl border border-slate-300 px-5 py-3 hover:bg-slate-50 transition">See Results</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-blue-600"/> Same‑week availability</div>
              <div>Police‑checked • Insured • ABN‑registered</div>
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-2xl">
              {/* Replace with your own hero image of a clean driveway */}
              <img src="https://images.unsplash.com/photo-1601662528567-526cd06f6589?q=80&w=1600&auto=format&fit=crop" alt="Freshly cleaned driveway" className="h-full w-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur rounded-2xl border border-slate-200 p-4 text-sm shadow">
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
          {[{
            title: 'Standard Clean',
            desc: 'Kitchen, bathrooms, dust, vacuum, mop. Supplies included.',
            price: 'From $149',
          }, {
            title: 'Deep Clean',
            desc: 'Oven, mould treatment, skirting boards, hard‑to‑reach spots.',
            price: 'From $299',
          }, {
            title: 'Driveway/Windows',
            desc: 'Pressure wash, window detailing, outdoor tidy.',
            price: 'Custom quote',
          }].map((s) => (
            <div key={s.title} className="rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:-translate-y-0.5 transition">
              <div className="text-lg font-semibold">{s.title}</div>
              <div className="mt-2 text-slate-600 text-sm">{s.desc}</div>
              <div className="mt-6 text-blue-600 font-bold">{s.price}</div>
              <a href="#book" className="mt-6 inline-block rounded-xl bg-blue-600 text-white font-semibold px-4 py-2 hover:bg-blue-500 transition">Book</a>
            </div>
          ))}
        </div>
      </section>

      {/* Before & After with Slider */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-black">Before & After</h2>
        <p className="mt-2 text-slate-600 max-w-prose">Slide to compare. Replace these with your own jobs for credibility.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <BeforeAfterCard caption="Driveway pressure wash"
            before="https://images.unsplash.com/photo-1548438294-1ad5d5f4efbf?q=80&w=1600&auto=format&fit=crop"
            after="https://images.unsplash.com/photo-1616597099327-6c6b7965b5d9?q=80&w=1600&auto=format&fit=crop" />
          <BeforeAfterCard caption="Windows detail"
            before="https://images.unsplash.com/photo-1523419409543-8c4d6222b9fb?q=80&w=1600&auto=format&fit=crop"
            after="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop" />
          <BeforeAfterCard caption="Bathroom refresh"
            before="https://images.unsplash.com/photo-1524008279394-3aed4643b30b?q=80&w=1600&auto=format&fit=crop"
            after="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop" />
        </div>
      </section>

      {/* Social Proof */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
          <h3 className="text-xl font-bold">Recent customer notes</h3>
          <p className="mt-2 text-slate-600 text-sm">Keep it real: replace these with genuine quotes or star ratings once you have them.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
            <blockquote className="rounded-2xl bg-slate-50 p-4 border border-slate-200">“On time, super thorough, easy to book.” — James, South Yarra</blockquote>
            <blockquote className="rounded-2xl bg-slate-50 p-4 border border-slate-200">“Bond clean passed inspection first go.” — Priya, Docklands</blockquote>
            <blockquote className="rounded-2xl bg-slate-50 p-4 border border-slate-200">“Best value we found. Will rebook.” — Marco, Brunswick</blockquote>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-black">About E.T. Home Services</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              We’re a Melbourne team focused on fast, reliable cleaning and light maintenance. No call centres, no confusing plans — just clear pricing and quality results. We bring our own supplies and leave your place better than we found it.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700 text-sm list-disc list-inside">
              <li>Police checks and insurance on file</li>
              <li>Eco‑friendly products on request</li>
              <li>Flexible time slots — weekdays and Saturdays</li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden ring-1 ring-slate-200">
            <img src="https://images.unsplash.com/photo-1598300053654-52a0dede84c5?q=80&w=1600&auto=format&fit=crop" alt="Team at work" className="w-full h-full object-cover"/>
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
                <li>Choose service and time</li>
                <li>Share address and access notes</li>
                <li>Get instant confirmation</li>
              </ol>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              {/* Replace src with your Tally form link */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200">
                <iframe src="https://tally.so/r/PLACEHOLDER" width="100%" height="100%" frameBorder="0" title="Booking form" className="w-full h-full"></iframe>
              </div>
              <p className="mt-3 text-xs text-slate-500">No Tally yet? Swap the iframe for a mailto or simple contact form later.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} E.T. Home Services. Melbourne, VIC.</div>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-blue-600 transition-colors">Back to top</a>
            <a href="mailto:hello@ethomeservices.au" className="hover:text-blue-600 transition-colors">hello@ethomeservices.au</a>
            <a href="/privacy" className="hover:text-blue-600 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Before/After Slider Components ---
import { useState } from "react";

function BeforeAfterCard({ before, after, caption }: { before: string; after: string; caption: string }) {
  return (
    <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white">
      <BeforeAfterSlider before={before} after={after} />
      <div className="p-4 text-sm text-slate-700 border-t border-slate-200">{caption}</div>
    </div>
  );
}

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50); // percent
  return (
    <div className="relative w-full h-56 md:h-64 select-none">
      {/* After image (clean) */}
      <img src={after} alt="after" className="absolute inset-0 w-full h-full object-cover" />
      {/* Before image (dirty) clipped by slider */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt="before" className="w-full h-full object-cover" />
      </div>
      {/* Divider line */}
      <div className="absolute top-0 bottom-0" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
        <div className="h-full w-0.5 bg-white/80 shadow" />
      </div>
      {/* Handle */}
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