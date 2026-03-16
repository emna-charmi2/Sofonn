// app/xy/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Polices – XY",
  description: "Visualisation rapide de toutes les polices installées",
};

export default function PageXy() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Test des polices
        </h1>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* 1 */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <p className=" font-arimo" >
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="mt-4 text-sm text-gray-500 font-mono">className=&quot;font-arimo&quot;</p>
          </div>

          {/* 2 */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <p className=" font-inter" >
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="mt-4 text-sm text-gray-500 font-mono">className=&quot;font-inter&quot;</p>
          </div>

          {/* 3 */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <p className=" font-mulish" >
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="mt-4 text-sm text-gray-500 font-mono">className=&quot;font-mulish&quot;</p>
          </div>

          {/* 4 */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <p className=" font-figtree" >
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="mt-4 text-sm text-gray-500 font-mono">className=&quot;font-figtree&quot;</p>
          </div>

          {/* 5 */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <p className=" font-poppins-semibold" style={{ fontWeight: "600" }}>
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="mt-4 text-sm text-gray-500 font-mono">className=&quot;font-poppins-semibold&quot;</p>
          </div>

          {/* 6 */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <p className=" font-lato-regular" >
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="mt-4 text-sm text-gray-500 font-mono">className=&quot;font-lato-regular&quot;</p>
          </div>

          {/* 7 */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <p className=" font-noto-sans" >
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="mt-4 text-sm text-gray-500 font-mono">className=&quot;font-noto-sans&quot;</p>
          </div>

          {/* 8 */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <p className=" font-nunito-sans" >
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="mt-4 text-sm text-gray-500 font-mono">className=&quot;font-nunito-sans&quot;</p>
          </div>

          {/* 9 */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <p className=" font-public-sans" >
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="mt-4 text-sm text-gray-500 font-mono">className=&quot;font-public-sans&quot;</p>
          </div>

          {/* Police par défaut */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <p className=" font-sans" >
              Ceci utilise la police que tu as définie dans --font-sans
            </p>
            <p className="mt-4 text-sm text-gray-500 font-mono">className=&quot;font-sans&quot;</p>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>
            Vérifie dans l'onglet <strong>Network</strong> → filtre <code>woff2</code> si les fichiers se chargent.
          </p>
          <p className="mt-2">
            Si une police ne s'affiche pas → vérifie le nom exact de la classe et la variable dans <code>globals.css</code> et <code>layout.tsx</code>.
          </p>
        </div>
      </div>
    </main>
  );
}