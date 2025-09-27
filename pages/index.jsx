// pages/index.jsx
import ProductList from "../components/ProductList";

export default function Home() {
  const hoverCardClass = "transform transition duration-200 ease-out hover:scale-105 hover:shadow-2xl";

  return (
    <div className="pt-36 space-y-16">
      {/* Hero / Welcome Section */}
      <section id="home" className="max-w-4xl mx-auto px-6 text-center">
        <div className={`backdrop-blur-md rounded-lg shadow-lg px-8 pt-6 pb-8 ${hoverCardClass}`}>
          <h1 className="text-4xl font-bold mb-4">Welcome to Backyard Bounty</h1>
          <p className="text-lg">
            Honest flavor from Idaho soil to your table. Small-batch, sun-grown salsa crafted with love by Tim.
          </p>
        </div>
      </section>

      {/* About / Our Story Section */}
      <section id="about" className="max-w-3xl mx-auto px-6">
        <div className={`backdrop-blur-md rounded-lg shadow-lg px-8 pt-6 pb-8 text-center ${hoverCardClass}`}>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p>
            Backyard Bounty began in the heart of Idaho with Tim’s passion for growing heirloom vegetables and preserving the taste of home.  
            Every jar of salsa is made with fresh-picked tomatoes, peppers, garlic, and love — crafted small-batch in Caldwell to bring bold, honest flavor to your table.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="max-w-5xl mx-auto px-6">
        <div className={`backdrop-blur-md rounded-lg shadow-lg px-8 pt-6 pb-8 text-center ${hoverCardClass}`}>
          <h2 className="text-2xl font-semibold mb-6">Products</h2>
          <ProductList />
        </div>
      </section>

{/* Where to Buy Section */}
<section id="where-to-buy" className="max-w-3xl mx-auto px-6">
  <div className={`backdrop-blur-md rounded-lg shadow-lg px-8 pt-2 pb-8 text-center ${hoverCardClass}`}>
    <h2 className="text-2xl font-semibold mb-4">Where to Buy</h2>

    <p className="mb-4">
      Find Backyard Bounty products at{" "}
      <a
        href="https://www.facebook.com/RedBarnFreshProduce"
        target="_blank"
        rel="noopener noreferrer"
        className="!text-red-900 dark:!text-red-400 font-extrabold hover:!text-red-600 dark:hover:!text-red-500 transition-colors"
      >
        Red Barn Produce
      </a>{" "}
      in Fruitland, ID.
    </p>

    <div className="flex flex-col sm:flex-row sm:justify-center gap-3 text-sm">
      <a
        href="https://www.google.com/maps/place/Red+Barn+Produce%2F+Red+Barn+French+Deli+%26+Coffee+shop/@43.982257,-116.9145264,17z/data=!4m15!1m8!3m7!1s0x54af904540b17189:0x136081305a9b21a7!2s6525+US-95,+Fruitland,+ID+83619!3b1!8m2!3d43.982257!4d-116.9145264!16s%2Fg%2F11twqc4dp3!3m5!1s0x54af9128a057e363:0xd2de5137dfd1e1e5!8m2!3d43.982257!4d-116.9145265!16s%2Fg%2F11hz6nd8kp?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 rounded bg-amber-500 text-white font-medium hover:bg-amber-600 hover:text-black transition-colors text-center"
      >
        Get Directions
      </a>

      <a
        href="tel:+12087397157"
        className="px-3 py-1 rounded bg-amber-500 text-white font-medium hover:bg-amber-600 hover:text-black transition-colors text-center"
      >
        Call
      </a>

      <a
        href="mailto:redbarn.992@gmail.com"
        className="px-3 py-1 rounded bg-amber-500 text-white font-medium hover:bg-amber-600 hover:text-black transition-colors text-center"
      >
        Email
      </a>
    </div>
    <p className="mt-4 text-sm opacity-90">
      Contact{" "}
      <a
        href="https://www.facebook.com/RedBarnFreshProduce"
        target="_blank"
        rel="noopener noreferrer"
        className="!text-red-900 dark:!text-red-400 font-extrabold hover:!text-red-600 dark:hover:!text-red-500 transition-colors"
      >
        Red Barn Produce
      </a>{" "}
      directly to check what's in stock!
    </p>
  </div>
</section>


{/* Contact Section */}
<section id="contact" className="max-w-md mx-auto px-6">
  <div className={`backdrop-blur-md rounded-lg shadow-lg px-8 pt-2 pb-8 text-center ${hoverCardClass}`}>
    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

    <p className="mb-4">
      Questions or comments for Tim? <br />
      Just send him an email:
    </p>
    
    <a
      href="mailto:backyardbounty@email.com"
      className={`inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded font-semibold ${hoverCardClass} mb-4`}
    >
      Email Tim
    </a>
  </div>
</section>
    </div>
  );
}
