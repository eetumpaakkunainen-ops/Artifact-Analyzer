"use client";

import { useMemo, useState } from "react";

const classifications = [
  "FORBIDDEN ORGANIC ENTITY",
  "DIMENSIONAL THREAT",
  "ELDRITCH HOUSEHOLD OBJECT",
  "CLASSIFIED FRUIT",
  "REALITY-ALTERING RELIC",
  "UNREGISTERED BIO-WEAPON",
  "ANCIENT CONSUMER ARTIFACT",
  "COSMICALLY UNSTABLE ITEM",
  "RESTRICTED DOMESTIC OBJECT",
  "UNKNOWN LIFEFORM",
];

const rarityTiers = [
  "COMMON",
  "RARE",
  "EPIC",
  "LEGENDARY",
  "MYTHIC",
  "FORBIDDEN",
  "Illegal",
];

const funFacts = [
  "Possible communistic history.",
  "Probably radioactive.",
  "The Vatican declined comment.",
  "Unknown to the FDA.",
  "Banned in 14 countries.",
  "Observed staring at researchers.",
  "Refuses to elaborate.",
  "Linked to the 1997 soup incident.",
  "Cannot legally enter Switzerland.",
  "Makes nearby electronics nervous.",
  "May contain forbidden protein.",
  "Classified to as the big boom by the dwarf people of california.",
  "Researchers disappeared shortly after analysis.",
  "Possibly sentient after midnight.",
  "Big yahu used to use it everyday",
  "The IDF is planning to terminate it",
  "Lover of Sigeons",

];

const loreLines = [
  "Recovered from an abandoned research facility beneath Helsinki.",
  "First documented during the Great Kitchen Collapse.",
  "Believed to predate modern civilization.",
  "Accidentally activated during routine cleaning.",
  "Once worshipped by an unknown online community.",
  "Its true purpose remains heavily classified.",
  "Researchers advise against prolonged eye contact.",
  "Several governments deny its existence.",
  "Caused minor dimensional instability during testing.",
  "The original containment team has not been found.",
  "Used to be the great dictator of Lohja",
  "Worked as Napoleons brave femboy during the collapse of the Roman empire",
];

const secretImages = [
  "/secret-images/1.png",
  "/secret-images/2.png",
  "/secret-images/3.png",
  "/secret-images/4.png",
  "/secret-images/5.png",
];

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export default function ArtifactAnalyzer() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [secretImage, setSecretImage] = useState<string | null>(null);
  const stats = useMemo(() => {
    return {
      classification: pick(classifications),
      powerLevel: random(1000, 999999),
      rarity: pick(rarityTiers),
      corruption: random(1, 100),
      forbiddenKnowledge: random(1, 100),
      blackMarketValue: random(5000, 50000000).toLocaleString(),
      funFact: pick(funFacts),
      lore: pick(loreLines),
      dangerLevel: random(1, 100),
    };
  }, [generated]);

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
    setLoading(true);
    setGenerated(false);

    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 2500);
  }
function triggerSecretImage() {
  if (secretImage) return;

  const randomImage =
    secretImages[Math.floor(Math.random() * secretImages.length)];

  setSecretImage(randomImage);

  setTimeout(() => {
    setSecretImage(null);
  }, 1500);
}

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.08)_51%)] bg-[length:100%_4px]" />

      <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block border border-red-500 text-red-500 px-4 py-1 rounded-full text-xs tracking-[0.3em] mb-6">
            CLASSIFIED GOVERMENT SECRETS
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Artifact Analyzer V1.1
          </h1>

          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Upload any object and uncover its forbidden history.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

  <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 shadow-2xl relative overflow-visible">

    {secretImage && (
      <img
        src={secretImage}
        alt="Classified"
        className="absolute -top-16 -left-10 w-48 opacity-80 pointer-events-none animate-secret-slide"
      />
    )}

    <div className="relative border border-dashed border-neutral-700 rounded-2xl p-6 min-h-[500px] flex flex-col items-center justify-center text-center overflow-hidden">

      <div
        onMouseEnter={() => {
          if (Math.random() < 0.5) {
            triggerSecretImage();
          }
        }}
        className="absolute top-4 left-4 w-12 h-12 z-20"
      ></div>
              {image ? (
                <>
                  <img
                    src={image}
                    alt="Artifact"
                    className="max-h-[420px] object-contain rounded-xl grayscale contrast-125 brightness-90"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.06)_51%)] bg-[length:100%_3px] pointer-events-none opacity-30" />
                </>
              ) : (
                <>
                  <div className="text-7xl mb-6">☣️</div>

                  <h2 className="text-2xl font-bold mb-3">
                    Upload Artifact
                  </h2>

                  <p className="text-neutral-500 mb-8 max-w-sm">
                    Any object may contain unknown historical significance.
                  </p>
                </>
              )}

              <div className="mt-8 flex flex-col items-center gap-4">
  {/* Camera Button */}
  <label className="flex items-center justify-center bg-blue-500 hover:bg-cyan-500 transition-all duration-300 text-white w-20 h-20 rounded-full cursor-pointer shadow-2xl hover:scale-110">
    
    <span className="text-3xl">📷</span>

    <input
      type="file"
      accept="image/*"
      capture="environment"
      className="hidden"
      onChange={handleUpload}
    />
  </label>

  {/* Upload Button */}
  <label className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 hover:bg-amber-300 transition-transform cursor-pointer">
    Upload Existing Image

    <input
      type="file"
      accept="image/*"
      className="hidden"
      disabled={!objectName.trim()}
      onChange={handleUpload}
    />
  </label>
</div>
            </div>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 shadow-2xl min-h-[500px]">
            {!generated && !loading && (
              <div className="h-full flex flex-col items-center justify-center text-center text-neutral-500 py-20">
                <div className="text-5xl mb-6">📡</div>
                Awaiting artifact analysis.
              </div>
            )}

            {loading && (
              <div className="py-20">
                <div className="text-red-500 tracking-[0.3em] text-sm mb-8 animate-pulse">
                  ANALYZING ARTIFACT...
                </div>

                <div className="space-y-4">
                  <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 animate-pulse w-3/4" />
                  </div>

                  <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 animate-pulse w-1/2" />
                  </div>

                  <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 animate-pulse w-5/6" />
                  </div>
                </div>

                <div className="mt-10 text-neutral-500 text-sm leading-relaxed space-y-2">
                  <p>{"> Running corruption diagnostics"}</p>
                  <p>{"> Scanning historical timelines"}</p>
                  <p>{"> Estimating black market demand"}</p>
                  <p>{"> Contacting unauthorized researchers"}</p>
                </div>
                <div className="mt-12 flex justify-center">
  <a
    href="https://ko-fi.com/objectanalyzer"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-red-700 bg-red-950/30 hover:bg-blue-300 transition-colors px-6 py-3 rounded-2xl font-bold text-red-300 tracking-wide"
  >
    FUND FURTHER ARTIFACT RESEARCH
  </a>
</div>
              </div>
            )}

            {generated && (
              <div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                  <div>
                    <div className="text-xs tracking-[0.3em] text-red-500 mb-2">
                      CLASSIFICATION
                    </div>

                    <div className="text-2xl font-black leading-tight">
                      {stats.classification}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-neutral-500 mb-1">
                      DANGER LEVEL
                    </div>

                    <div className="text-4xl font-black text-red-500">
                      {stats.dangerLevel}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Stat label="POWER LEVEL" value={stats.powerLevel.toLocaleString()} />
                  <Stat label="RARITY TIER" value={stats.rarity} />
                  <Stat label="CORRUPTION" value={`${stats.corruption}%`} />
                  <Stat
                    label="FORBIDDEN KNOWLEDGE"
                    value={`${stats.forbiddenKnowledge}%`}
                  />
                  <Stat
                    label="BLACK MARKET VALUE"
                    value={`€${stats.blackMarketValue}`}
                  />
                </div>

                <div className="mt-8 border border-neutral-800 rounded-2xl p-5 bg-neutral-900">
                  <div className="text-xs tracking-[0.25em] text-neutral-500 mb-3">
                    ARCHIVED LORE
                  </div>

                  <p className="text-neutral-200 leading-relaxed">
                    {stats.lore}
                  </p>
                </div>

                <div className="mt-6 border border-red-900 bg-red-950/20 rounded-2xl p-5">
                  <div className="text-xs tracking-[0.25em] text-red-400 mb-3">
                    FUN FACT
                  </div>

                  <p className="text-red-100 text-lg">
                    {stats.funFact}
                  </p>
                </div>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `CLASSIFICATION: ${stats.classification}\nDANGER LEVEL: ${stats.dangerLevel}\nPOWER LEVEL: ${stats.powerLevel}\nRARITY: ${stats.rarity}\nCORRUPTION: ${stats.corruption}%\nFUN FACT: ${stats.funFact}`
                    );
                  }}
                  className="w-full mt-8 bg-white text-black font-bold py-4 rounded-2xl hover:scale-[1.02] transition-transform"
                >
                  Copy Report
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center text-neutral-600 text-sm tracking-wide">
          Unauthorized artifact possession may violate interdimensional law.
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-neutral-800 bg-neutral-900 rounded-2xl p-4 flex items-center justify-between">
      <div className="text-sm tracking-[0.2em] text-neutral-500">
        {label}
      </div>

      <div className="text-xl font-black">
        {value}
      </div>
      <style jsx global>{`
  @keyframes secret-slide {
    0% {
      transform: translateX(120px) rotate(8deg);
      opacity: 0;
    }

    20% {
      opacity: 0.9;
    }

    80% {
      opacity: 0.9;
    }

    100% {
      transform: translateX(0px) rotate(0deg);
      opacity: 0;
    }
  }

  .animate-secret-slide {
    animation: secret-slide 1.5s ease forwards;
  }
`}</style>

    </div>
  );
}
