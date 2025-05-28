// pages/basket.jsx
import { useBasket } from "../context/BasketContext";
import { toast } from "react-hot-toast";

export default function Basket() {
  const { items, updateQuantity, removeItem, clearBasket } = useBasket();

  const handleQuantityChange = (id, amount) => {
    updateQuantity(id, amount);
  };

  const handleRemove = (id) => {
    removeItem(id);
    toast.success("Item removed from basket");
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + item.quantity * (item.price ?? 0),
    0
  );

  if (items.length === 0) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your Basket</h2>
        <p className="opacity-70">You haven’t added anything yet. Let’s change that!</p>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">Your Basket</h2>

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex justify-between items-center"
          >
            <div className="space-y-1">
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-sm opacity-80">{item.description}</p>
              <p className="text-sm italic">Price: {item.price ? `$${item.price}` : "?"}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                className="px-2 py-1 text-lg rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                −
              </button>
              <span className="font-mono text-lg">{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="px-2 py-1 text-lg rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                +
              </button>
              <button
                onClick={() => handleRemove(item.id)}
                className="ml-4 px-2 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="text-right mt-8 space-y-2">
        <p className="text-lg font-semibold">
          Total: <span className="font-mono">{totalPrice > 0 ? `$${totalPrice.toFixed(2)}` : "?"}</span>
        </p>
        <button
          onClick={() => {
            clearBasket();
            toast.success("Basket cleared");
          }}
          className="mt-2 px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
        >
          Clear Basket
        </button>
      </div>
    </section>
  );
}
