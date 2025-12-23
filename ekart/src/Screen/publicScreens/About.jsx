import Navbar from "../../Components/Navbar";
import { useEffect } from "react";
import { Phone, Linkedin, MessageCircle } from "lucide-react";

const About = () => {
  useEffect(() => {
    localStorage.setItem("activelink", "About");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar/>

      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 text-center mt-12">
        {" "}
        <h1 className="text-4xl font-bold text-pink-600 mb-6">
          {" "}
          About Our Beauty Store{" "}
        </h1>{" "}
        <p className="text-lg leading-relaxed mb-4">
          {" "}
          Welcome to <span className="font-semibold">GlowCart</span>, your
          trusted destination for premium beauty, skincare, and cosmetic
          products. We believe beauty is personal, expressive, and empowering.{" "}
        </p>{" "}
        <p className="text-lg leading-relaxed mb-4">
          {" "}
          Our platform brings together authentic beauty products from trusted
          brands, ensuring quality, safety, and satisfaction with every order.{" "}
        </p>{" "}
        <p className="text-lg leading-relaxed mb-10">
          {" "}
          From everyday essentials to luxury collections, we focus on genuine
          products, seamless shopping, and fast delivery — because your beauty
          deserves the best.{" "}
        </p>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
          {" "}
          <div className="flex items-center gap-3">
            {" "}
            <span className="text-pink-600 text-xl">✔</span>{" "}
            <span>100% Genuine Products</span>{" "}
          </div>{" "}
          <div className="flex items-center gap-3">
            {" "}
            <span className="text-pink-600 text-xl">✔</span>{" "}
            <span>Trusted Beauty Brands</span>{" "}
          </div>{" "}
          <div className="flex items-center gap-3">
            {" "}
            <span className="text-pink-600 text-xl">✔</span>{" "}
            <span>Secure Payments</span>{" "}
          </div>{" "}
          <div className="flex items-center gap-3">
            {" "}
            <span className="text-pink-600 text-xl">✔</span>{" "}
            <span>Fast & Reliable Delivery</span>{" "}
          </div>{" "}
        </div>{" "}
      </main>

      <footer className="w-full bg-gray-900 text-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm">
          Developed by <span className="font-semibold">Deepak Kumar Gupta</span>
        </p>

        <div className="flex items-center gap-5">
          <a href="tel:8441006695" aria-label="Call">
            <Phone size={22} />
          </a>
          <a
            href="https://wa.me/918441006695"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/our-deepak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default About;
