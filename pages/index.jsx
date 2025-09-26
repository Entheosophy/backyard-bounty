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
        <div className={`backdrop-blur-md rounded-lg shadow-lg px-8 pt-6 pb-8 ${hoverCardClass}`}>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p>
            Backyard Bounty began in the heart of Idaho with Tim’s passion for growing heirloom vegetables and preserving the taste of home.  
            Every jar of salsa is made with fresh-picked tomatoes, peppers, garlic, and love — crafted small-batch in Caldwell to bring bold, honest flavor to your table.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="max-w-5xl mx-auto px-6">
        <div className={`backdrop-blur-md rounded-lg shadow-lg px-8 pt-6 pb-8 ${hoverCardClass}`}>
          <h2 className="text-2xl font-semibold mb-6">Products</h2>
          <ProductList />
        </div>
      </section>

      {/* Where to Buy Section */}
      <section id="where-to-buy" className="max-w-3xl mx-auto px-6">
        <div className={`backdrop-blur-md rounded-lg shadow-lg px-8 pt-2 pb-8 ${hoverCardClass}`}>
          <h2 className="text-2xl font-semibold mb-4">Where to Buy</h2>
          <p>
            For now, you can find Backyard Bounty products at Red Barn Produce in Fruitland, ID.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-md mx-auto px-6">
        <div className={`backdrop-blur-md rounded-lg shadow-lg px-8 pt-2 pb-8 text-center ${hoverCardClass}`}>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-6">
            Questions or comments for Tim?  <br />
            Just send us an email:
          </p>
          <a
            href="mailto:backyardbounty@email.com"
            className={`inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded font-semibold ${hoverCardClass}`}
          >
            Email Tim
          </a>
        </div>
      </section>
    </div>
  );
}
