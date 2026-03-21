import Image from "next/image";

export default function newEdgeA() {
  const items = [
    {
      id: "efficiency",
      title: "Improve Efficiency",
      desc: "Streamline workflows with automated intelligence, reducing manual data entry and operational lag.",
      image: "/images/efficiency.jpg", // remplace par ta propre image
    },
    {
      id: "profitability",
      title: "Boost Profitability",
      desc: "Reduce overhead and optimize resource allocation through data-driven financial insights.",
      image: "/images/profitability.jpg",
    },
    {
      id: "standards",
      title: "Enhance Standards",
      desc: "Maintain peak compliance and safety protocols with automated tracking and real-time audits.",
      image: "/images/standards.jpg",
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
            Your Competitive Edge
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-6">
            Tools that move the needle for modern maritime operators.
          </p>
          <div className="flex justify-center">
            <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
              See More
            </button>
          </div>
        </div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map(({ id, title, desc, image }) => (
            <div key={id} className="group cursor-pointer">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-bold text-black mb-1">{title}</h3>
              <p className="text-slate-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}