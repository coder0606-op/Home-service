import services from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        All Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
