// app/xw/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Polices – XY",
  description: "Visualisation rapide de toutes les polices installées",
};

const cardClass =
  "ds-surface-raised rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow";

export default function PageXy() {
  return (
    <main className="min-h-screen ds-page section py-12 px-6 md:px-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-12 text-center">Test des polices</h1>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className={cardClass}>
            <div className="font-arimo">
              <p>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="mt-4 text-sm font-mono ds-text-secondary">
              <p>className=&quot;font-arimo&quot;</p>
            </div>
          </div>

          <div className={cardClass}>
            <div className="font-inter">
              <p>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="mt-4 text-sm font-mono ds-text-secondary">
              <p>className=&quot;font-inter&quot;</p>
            </div>
          </div>

          <div className={cardClass}>
            <div className="font-mulish">
              <p>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="mt-4 text-sm font-mono ds-text-secondary">
              <p>className=&quot;font-mulish&quot;</p>
            </div>
          </div>

          <div className={cardClass}>
            <div className="font-figtree">
              <p>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="mt-4 text-sm font-mono ds-text-secondary">
              <p>className=&quot;font-figtree&quot;</p>
            </div>
          </div>

          <div className={cardClass}>
            <div className="font-poppins-semibold font-semibold">
              <p>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="mt-4 text-sm font-mono ds-text-secondary">
              <p>className=&quot;font-poppins-semibold&quot;</p>
            </div>
          </div>

          <div className={cardClass}>
            <div className="font-lato-regular">
              <p>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="mt-4 text-sm font-mono ds-text-secondary">
              <p>className=&quot;font-lato-regular&quot;</p>
            </div>
          </div>

          <div className={cardClass}>
            <div className="font-noto-sans">
              <p>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="mt-4 text-sm font-mono ds-text-secondary">
              <p>className=&quot;font-noto-sans&quot;</p>
            </div>
          </div>

          <div className={cardClass}>
            <div className="font-nunito-sans">
              <p>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="mt-4 text-sm font-mono ds-text-secondary">
              <p>className=&quot;font-nunito-sans&quot;</p>
            </div>
          </div>

          <div className={cardClass}>
            <div className="font-public-sans">
              <p>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="mt-4 text-sm font-mono ds-text-secondary">
              <p>className=&quot;font-public-sans&quot;</p>
            </div>
          </div>

          <div className={cardClass}>
            <div className="font-sans">
              <p>Ceci utilise la police que tu as définie dans --font-sans</p>
            </div>
            <div className="mt-4 text-sm font-mono ds-text-secondary">
              <p>className=&quot;font-sans&quot;</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-sm ds-text-secondary">
          <p>
            Vérifie dans l&apos;onglet <strong>Network</strong> → filtre{" "}
            <code>woff2</code> si les fichiers se chargent.
          </p>
          <p className="mt-2">
            Si une police ne s&apos;affiche pas → vérifie le nom exact de la
            classe et la variable dans <code>globals.css</code> et{" "}
            <code>layout.tsx</code>.
          </p>
        </div>
      </div>
    </main>
  );
}
