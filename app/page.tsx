export default function ETHomeServices() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-black tracking-tight text-xl">
            <span className="text-white">E.T.</span>
            <span className="ml-1 text-lime-300">Home Services</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#work" className="hover:opacity-80">Before & After</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#book" className="hover:opacity-80">Book</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+611300000000" className="rounded-xl border border-white/20 px-3 py-1.5 text-sm hover:bg-white/10">Call 1300 000 000</a>
            <a href="#book" className="rounded-xl bg-lime-300 text-black font-semibold px-3 py-1.5 text-sm hover:bg-lime-200">Get a Quote</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(161,255,66,0.25),transparent_65%)]" />
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Homes, scrubbed to <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-300 via-white to-lime-300">showroom‑clean</span>.
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-prose">
              Gen‑Z simple. No fluff. Book a clean or maintenance visit in minutes. Servicing Melbourne and surrounds.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className="rounded-2xl bg-lime-300 text-black font-semibold px-5 py-3 hover:bg-lime-200">Book Now</a>
              <a href="#work" className="rounded-2xl border border-white/20 px-5 py-3 hover:bg-white/10">See Results</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-white/60">
              <div className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-lime-300"/> Same‑week availability</div>
              <div>Police‑checked • Insured • ABN‑registered</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              {/* Replace with real hero image */}
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop" alt="Freshly cleaned modern kitchen" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-black/70 backdrop-blur rounded-2xl border border-white/10 p-4 text-sm">
              <div className="font-semibold">Average job rating</div>
              <div className="text-2xl">4.9/5</div>
              <div className="text-white/60">based on recent customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-4xl font-black">What we do</h2>
          <span className="text-white/50 text-sm">Transparent pricing. No upsell games.</span>
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
            title: 'End‑of‑Lease',
            desc: 'Bond‑back checklist with photo proof for property managers.',
            price: 'Custom quote',
          }].map((s) => (
            <div key={s.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="text-lg font-semibold">{s.title}</div>
              <div className="mt-2 text-white/70 text-sm">{s.desc}</div>
              <div className="mt-6 text-lime-300 font-bold">{s.price}</div>
              <a href="#book" className="mt-6 inline-block rounded-xl bg-lime-300 text-black font-semibold px-4 py-2 hover:bg-lime-200">Book</a>
            </div>
          ))}
        </div>
      </section>

      {/* Before & After */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-black">Before & After</h2>
        <p className="mt-2 text-white/70 max-w-prose">Real jobs. Real results. Replace these with your own photos for credibility.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              before: 'https://images.unsplash.com/photo-1524008279394-3aed4643b30b?q=80&w=1600&auto=format&fit=crop',
              after: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
              caption: 'Bathroom refresh',
            },
            {
              before: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?q=80&w=1600&auto=format&fit=crop',
              after: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
              caption: 'Kitchen detail clean',
            },
            {
              before: 'https://images.unsplash.com/photo-1521783988139-893ce83b0c0f?q=80&w=1600&auto=format&fit=crop',
              after: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop',
              caption: 'Lounge tidy',
            },
          ].map((item, i) => (
            <div key={i} className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <div className="grid grid-cols-2">
                <figure className="relative">
                  <img src={item.before} alt={`${item.caption} — before`} className="h-48 md:h-56 w-full object-cover" />
                  <figcaption className="absolute bottom-2 left-2 text-xs bg-black/70 px-2 py-1 rounded">Before</figcaption>
                </figure>
                <figure className="relative">
                  <img src={item.after} alt={`${item.caption} — after`} className="h-48 md:h-56 w-full object-cover" />
                  <figcaption className="absolute bottom-2 left-2 text-xs bg-black/70 px-2 py-1 rounded">After</figcaption>
                </figure>
              </div>
              <div className="p-4 text-sm text-white/80 border-t border-white/10">{item.caption}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof (Honest) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h3 className="text-xl font-bold">Recent customer notes</h3>
          <p className="mt-2 text-white/70 text-sm">Keep it real: replace these with genuine short quotes or star ratings pulled from Google Reviews once you have them.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
            <blockquote className="rounded-2xl bg-black/40 p-4 border border-white/10">“On time, super thorough, easy to book.” — James, South Yarra</blockquote>
            <blockquote className="rounded-2xl bg-black/40 p-4 border border-white/10">“Bond clean passed inspection first go.” — Priya, Docklands</blockquote>
            <blockquote className="rounded-2xl bg-black/40 p-4 border border-white/10">“Best value we found. Will rebook.” — Marco, Brunswick</blockquote>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-black">About E.T. Home Services</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              We are a small Melbourne team focused on fast, reliable home cleaning and light maintenance. No call centres, no confusing plans — just clear pricing and quality results. We bring our own supplies and leave your place better than we found it.
            </p>
            <ul className="mt-6 space-y-2 text-white/80 text-sm list-disc list-inside">
              <li>Police checks and insurance on file</li>
              <li>Eco‑friendly products on request</li>
              <li>Flexible time slots — weekdays and Saturdays</li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10">
            <img src="https://images.unsplash.com/photo-1598300053654-52a0dede84c5?q=80&w=1600&auto=format&fit=crop" alt="Team at work" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="md:flex items-start gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-black">Book in minutes</h2>
              <p className="mt-2 text-white/70 text-sm">Prefer to talk? Call <a className="underline" href="tel:+611300000000">1300 000 000</a> or SMS <a className="underline" href="sms:+61400000000">0400 000 000</a>.</p>
              <ol className="mt-6 space-y-2 text-sm text-white/80 list-decimal list-inside">
                <li>Choose service and time</li>
                <li>Share address and access notes</li>
                <li>Get instant confirmation</li>
              </ol>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              {/* Replace src with your Tally form link */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <iframe src="https://tally.so/r/PLACEHOLDER" width="100%" height="100%" frameBorder="0" title="Booking form" className="w-full h-full"></iframe>
              </div>
              <p className="mt-3 text-xs text-white/50">No Tally yet? Swap the iframe for a mailto or simple contact form later.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} E.T. Home Services. Melbourne, VIC.</div>
          <div className="flex gap-6">
            <a href="#top" className="hover:opacity-80">Back to top</a>
            <a href="mailto:hello@ethomeservices.au" className="hover:opacity-80">hello@ethomeservices.au</a>
            <a href="/privacy" className="hover:opacity-80">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
