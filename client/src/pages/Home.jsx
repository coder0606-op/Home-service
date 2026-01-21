import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        On-Demand Home Services
      </h1>

      <p className="text-gray-600 max-w-xl mb-8">
        Book trusted professionals for plumbing, electrical work,
        cleaning and more — all from one platform.
      </p>

      <Link
        to="/services"
        className="bg-blue-600 text-white px-6 py-3 rounded text-lg"
      >
        Explore Services
      </Link>
    </section>
  );
}
