import { GraduationCap } from "lucide-react";
import aboutBanner from "./assets/img/about-michael.jpeg";
import educationImage from "./assets/img/education.jpeg";
import stethoscopeImage from "./assets/img/sthestoscope.avif";

// Credentials
const credentials = [
  "Doctor of Philosophy (PhD): Texila American University",
  "Master of Public Health(MPH): University of Liverpool, UK(2013)",
  "Master of Science(MSc): University of Calabar, Nigeria(2005)",
  "Bachelor of Medicine, Bachelor of Sugery (MB:BCH): University of Calabar, Nigeria(1997)",
];

export default function About() {
  return (
    <>
      {/* Page heading */}
      <section
        aria-labelledby="about-page-title"
        className="relative isolate overflow-hidden bg-[#e5f0f0] px-6 pt-32 pb-12 md:px-10 md:pt-40 md:pb-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, transparent, #e5f0f0),
              repeating-linear-gradient(
                90deg,
                transparent 0px,
                transparent 39px,
                rgba(255,255,255,0.25) 40px,
                transparent 43px
              ),
              linear-gradient(to bottom, #bfd2d6, #e5f0f0)
            `,
          }}
        />

        <h1
          id="about-page-title"
          className="text-center text-3xl font-semibold tracking-tight text-[#202c2d] md:text-5xl"
        >
          About
        </h1>
      </section>

      {/* Introduction */}
      <section
        aria-label="About Dr. Michael"
        className="bg-[#e5f0f0] px-6 pb-12 md:px-10 md:pb-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="aspect-[4/3] overflow-hidden rounded-xl sm:aspect-[12/5]">
            <img
              src={aboutBanner}
              alt="Dr. Michael"
              fetchPriority="high"
              className="h-full w-full object-contain object-center"
            />
          </div>

          {/* Replace with Michael's confirmed biography. */}
          <p className="mt-5 text-sm leading-relaxed text-[#293638] md:text-base">
            Dr. Michael Odo is an accomplished public health physician with over <b>23 years of impactful experience</b> in health systems strengthening, large-scale program management, and clinical service delivery across multiple sub-saharan African countries, including Nigeria, Malawi, South Africa and Liberia.
          </p>
        </div>
      </section>

      {/* Education and credentials */}
      <section
        aria-labelledby="education-title"
        className="bg-[#e5f0f0] px-6 pt-2 pb-16 md:px-10 md:pt-4 md:pb-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Full portrait */}
          <div className="mx-auto w-full max-w-[400px] overflow-hidden rounded-xl">
            <img
              src={educationImage}
              alt="Dr. Michael in graduation attire"
              loading="lazy"
              className="block h-auto w-full"
            />
          </div>

          {/* Credentials beside the portrait */}
          <div>
            <h2
              id="education-title"
              className="text-xl font-semibold tracking-tight text-[#202c2d] md:text-2xl"
            >
              Education &amp; Credentials
            </h2>

            <ul className="mt-5 space-y-4">
              {credentials.map((credential) => (
                <li
                  key={credential}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#293638] md:text-base"
                >
                  <GraduationCap
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-[#648591]"
                  />

                  <span>{credential}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    {/* Areas of Expertise */}
<section
  aria-labelledby="about-expertise-title"
  className="bg-[#e5f0f0] px-6 pb-16 md:px-10 md:pb-24"
>
  <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-12">
    {/* Expertise — sample content from the design */}
    <div>
      <h2
        id="about-expertise-title"
        className="text-xl font-semibold tracking-tight text-[#202c2d] md:text-2xl"
      >
        Areas of Expertise
      </h2>

      <ul className="mt-5 space-y-4">
        {[
          "National Health Policy & Guideline Development",
          "HIV/AIDS & Drug-Resistant TB Clinical Management",
          "Supply Chain & Laboratory Systems Strengthening",
          "Large-Scale Donor & Grant Management",
          "Implementation Science & Health Data Analytics",
          
        ].map((expertise) => (
          <li
            key={expertise}
            className="flex items-start gap-3 text-sm leading-relaxed text-[#293638] md:text-base"
          >
            <span
              aria-hidden="true"
              className="mt-2 size-2 shrink-0 rotate-45 border border-[#648591]"
            />

            <span>{expertise}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Stethoscope photo */}
    <div className="overflow-hidden rounded-xl border border-[#a5bec3]/40">
      <img
        src={stethoscopeImage}
        alt="Stethoscope"
        loading="lazy"
        className="block h-auto w-full"
      />
    </div>
  </div>
</section>
      
    </>
  );
}