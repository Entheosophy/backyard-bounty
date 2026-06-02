// /Users/entheos/Documents/Backyard Bounty/pages/index.jsx
import ProductList from "../components/ProductList";
import { siteLinks } from "../data/siteLinks";

export default function Home() {
  return (
    <div className="pt-24">
      <section id="home" className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-6xl items-center gap-10 px-6 pb-16 md:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-red-900 theme-night:text-red-200">
            Caldwell, Idaho
          </p>
          <h1 className="mt-4 text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">
            Backyard Bounty
          </h1>
          <p className="mt-4 text-2xl font-semibold italic">Preserving the flavor of home</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Small-batch salsa made with heirloom tomatoes, organic garlic, and peppers
            grown for real flavor instead of shelf sameness.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="rounded-full bg-red-800 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] !text-white shadow-lg transition hover:bg-red-700 hover:!text-white"
            >
              See salsas
            </a>
            <a
              href="#where-to-buy"
              className="rounded-full border border-stone-900/25 bg-[#fff7df]/70 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-[var(--scene-text)] backdrop-blur transition hover:border-red-800 hover:text-red-900 theme-night:border-stone-100/25 theme-night:bg-stone-950/55 theme-night:hover:text-red-200"
            >
              Find it locally
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm rounded-md border border-stone-900/20 bg-[#fff7df]/92 p-5 text-center shadow-[0_24px_70px_rgba(73,44,20,0.18)] theme-night:border-stone-100/15 theme-night:bg-stone-950/82">
          <img
            src="/backyard-bounty-logo-small.png"
            alt="Backyard Bounty"
            className="mx-auto h-28 w-28 object-contain"
            draggable={false}
          />
          <div className="mt-4 border-y border-stone-900/15 py-5 theme-night:border-stone-100/15">
            <p className="text-xs font-bold uppercase tracking-[0.28em] opacity-65">Heirloom salsa</p>
            <p className="mt-3 text-4xl font-black uppercase leading-none">Mild to Fire</p>
            <p className="mt-3 text-sm font-semibold italic opacity-80">Organic tomatoes. Idaho roots.</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed opacity-80">
            Available at{" "}
            <a
              href={siteLinks.redBarnFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-red-900 underline decoration-red-900/30 underline-offset-4 transition hover:text-red-700 theme-night:text-red-200 theme-night:hover:text-red-100"
            >
              Red Barn Produce in Fruitland
            </a>{" "}
            while batches are in stock.
          </p>
          <a
            href={siteLinks.backyardBountyFacebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-sm font-extrabold text-red-900 underline decoration-red-900/30 underline-offset-4 transition hover:text-red-700 theme-night:text-red-200 theme-night:hover:text-red-100"
          >
            Follow Backyard Bounty on Facebook
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-md border border-stone-900/15 bg-[#fff7df]/76 px-6 py-8 text-center shadow-sm backdrop-blur theme-night:border-stone-100/15 theme-night:bg-stone-950/62 md:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-900 theme-night:text-red-200">
            Our story
          </p>
          <h2 className="mt-3 text-3xl font-bold">Grown close to home, made to taste that way.</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-relaxed">
            Backyard Bounty began with Tim's passion for growing heirloom vegetables
            and preserving the taste of home. Every jar is crafted small-batch in
            Caldwell with fresh-picked tomatoes, peppers, garlic, and the kind of care
            that still tastes local.
          </p>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-md border border-stone-900/15 bg-[#fff3cb]/78 px-5 py-8 shadow-sm backdrop-blur theme-night:border-stone-100/15 theme-night:bg-stone-950/68 md:px-8">
          <ProductList />
        </div>
      </section>

      <section id="where-to-buy" className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-md border border-stone-900/15 bg-[#fff7df]/84 p-6 shadow-sm backdrop-blur theme-night:border-stone-100/15 theme-night:bg-stone-950/70 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-900 theme-night:text-red-200">
            Where to buy
          </p>
          <h2 className="mt-3 text-3xl font-bold">Red Barn Produce</h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            Find Backyard Bounty products at{" "}
            <a
              href={siteLinks.redBarnFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-red-900 hover:text-red-700 theme-night:text-red-200 theme-night:hover:text-red-100"
            >
              Red Barn Produce
            </a>{" "}
            in Fruitland, ID. Contact the shop directly to check what is in stock.
          </p>

          <div className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
            <a
              href={siteLinks.redBarnDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-red-800 px-4 py-3 text-center font-bold !text-white transition hover:bg-red-700 hover:!text-white"
            >
              Directions
            </a>
            <a
              href={siteLinks.redBarnPhone}
              className="rounded-full border border-stone-900/20 bg-white/45 px-4 py-3 text-center font-bold transition hover:border-red-800 hover:text-red-900 theme-night:border-stone-100/20 theme-night:bg-white/5 theme-night:hover:text-red-200"
            >
              Call Red Barn
            </a>
            <a
              href={siteLinks.redBarnEmail}
              className="rounded-full border border-stone-900/20 bg-white/45 px-4 py-3 text-center font-bold transition hover:border-red-800 hover:text-red-900 theme-night:border-stone-100/20 theme-night:bg-white/5 theme-night:hover:text-red-200"
            >
              Email Red Barn
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-2xl px-6 py-16">
        <div className="rounded-md border border-stone-900/15 bg-[#fff7df]/84 p-6 text-center shadow-sm backdrop-blur theme-night:border-stone-100/15 theme-night:bg-stone-950/70 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-900 theme-night:text-red-200">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold">Questions for Tim?</h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed">
            For product questions, batch availability, or local requests, follow
            Backyard Bounty on Facebook or send Tim a note directly.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={siteLinks.backyardBountyFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-red-800 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] !text-white transition hover:bg-red-700 hover:!text-white"
            >
              Follow on Facebook
            </a>
            <a
              href={siteLinks.backyardBountyEmail}
              className="inline-flex rounded-full border border-stone-900/20 bg-white/45 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] transition hover:border-red-800 hover:text-red-900 theme-night:border-stone-100/20 theme-night:bg-white/5 theme-night:hover:text-red-200"
            >
              Email Tim
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
