// pages/_app.jsx
import { BasketProvider } from "../context/BasketContext.jsx";
import Layout from "../components/Layout.jsx";
import "../index.css";

export default function App({ Component, pageProps }) {
  return (
    <BasketProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BasketProvider>
  );
}
