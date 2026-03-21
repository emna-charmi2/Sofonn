import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-[#f4f6fb] py-24 px-6">

      {/* Background grid */}

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Title */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1546b0] leading-tight tracking-tight"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Meet Sofonn <br />
          The perfect solution to ...<br />
                            &ldquo;90% OF SHIPPING COMPANIES STRUGGLE WITH DATA ISSUES AFFECTING THEIR DECISION-MAKING&rdquo;

        </h2>

        {/* Subtitle */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <div className="h-px w-16 bg-blue-500/40" />

          <p className="max-w-xl text-gray-600 text-lg leading-relaxed">
          Unlock Your Potential, Build Your Success. From streamlined logistics to efficient operations, <br/> 
          we have everything you need to elevate your business on the high seas.
        </p>

          <div className="h-px w-16 bg-blue-500/40" />
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/pricing"
            className="group flex items-center overflow-hidden rounded-full bg-[#e8edf7] hover:bg-[#dde5f4] transition shadow-sm"
          >
            <span className="px-8 py-4 text-gray-800 font-medium">
             Request demo
            </span>

            <span className="flex h-12 w-12 items-center justify-center bg-[#1546b0] text-white">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M204 64V168a12 12 0 0 1-24 0V93L72.49 200.49a12 12 0 0 1-17-17L163 76H88a12 12 0 0 1 0-24H192A12 12 0 0 1 204 64Z" />
              </svg>
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}