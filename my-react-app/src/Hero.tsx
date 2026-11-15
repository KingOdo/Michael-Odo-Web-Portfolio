import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import michaelImage from "./assets/img/Michael.jpeg";
import aboutImage from "./assets/img/michaelimg2.avif";

import expertiseOne from "./assets/img/expertise-1.jpeg";
import expertiseTwo from "./assets/img/expertise-2.jpeg";
import expertiseThree from "./assets/img/expertise-3.jpeg";

import caseStudyOne from "./assets/img/case-study-1.jpeg";
import caseStudyTwo from "./assets/img/case-study-2.jpeg";


export default function Hero() {
  return (
    <>
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#e5f0f0]"
    >
      {/* Background gradient and vertical lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              transparent 45%,
              #e5f0f0 100%
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 39px,
              rgba(255,255,255,0.22) 40px,
              transparent 42px
            ),
            linear-gradient(
              to bottom,
              #bfd2d6,
              #e5f0f0
            )
          `,
        }}
      />

      <div className="relative mx-auto h-[620px] max-w-6xl px-6 md:h-[680px]">
        {/* Large heading behind the portrait */}
        <div className="absolute inset-x-6 top-28 md:top-32">
          <h1 className="whitespace-nowrap text-center text-[clamp(2.4rem,8.5vw,7rem)] leading-none font-semibold tracking-[-0.055em] text-[#76949c]">
            Meet Dr. Michael
          </h1>

          <p className="mt-5 text-right text-[10px] text-[#6b8b94] md:text-sm">
            MB BCH, MSc, MPH (Medicine)
          </p>
        </div>

        {/* Circular portrait */}
<div className="absolute bottom-28 left-1/2 z-10 -translate-x-1/2 md:bottom-12">
  <div className="rounded-full border border-white/60 bg-white/15 p-2.5 shadow-[0_20px_60px_-20px_rgba(36,68,77,0.35)] md:p-3">
    <div className="h-[280px] w-[280px] overflow-hidden rounded-full border-2 border-[#76949c]/60 bg-transparent md:h-[370px] md:w-[370px]">
      <img
        src={michaelImage}
        alt="Dr. Michael"
        fetchPriority="high"
        className="h-full w-full object-cover object-[center_20%]"
      />
    </div>
  </div>
</div>
      
        {/* Appointment button and statistics */}
        <div className="absolute inset-x-6 bottom-8 z-20 flex items-end justify-between gap-4 md:bottom-24">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-sm bg-[#365b63] px-3 py-3 text-[10px] text-white transition-colors hover:bg-[#284850] md:gap-5 md:px-5 md:text-xs"
          >
            Book Appointment
            <ArrowUpRight size={14} />
          </a>

          <div className="flex gap-5 md:gap-10">
            <div>
              <p className="text-2xl tracking-tight text-[#496f79] md:text-3xl">
                10k+
              </p>
              <p className="mt-1 text-[8px] text-[#718e95] md:text-[10px]">
                Satisfied Patients
              </p>
            </div>

            <div>
              <p className="text-2xl tracking-tight text-[#496f79] md:text-3xl">
                20+
              </p>
              <p className="mt-1 text-[8px] text-[#718e95] md:text-[10px]">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


 {/* About section */}
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-[#e5f0f0] px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto w-full grid max-w-7xl items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
        <div className="aspect-[4/3] overflow-hidden rounded-xl md:aspect-[5/4]">
          <img
            src={aboutImage}
            alt="Dr. Michael"
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div>
          <h2
            id="about-title"
            className="mb-5 text-2xl font-semibold tracking-tight text-[#202c2d] md:text-3xl"
          >
            About
          </h2>

          <p className="max-w-xl text-xl leading-snug tracking-tight text-[#293638] md:text-[28px]">
            Dr. Michael is a{" "}
            <strong className="font-semibold">Public Health Physician</strong>{" "}
           with 23 years of impactful practice in health systems strengthening and service delivery in multiple sub-Saharan African countries.
          </p>

        <Link
  to="/about"
  className="mt-7 inline-flex items-center gap-4 rounded-sm bg-[#365b63] px-4 py-3 text-xs text-white transition-colors hover:bg-[#284850]"
>
  More About Me
  <ArrowUpRight size={14} />
</Link>
        </div>
      </div>
    </section>

    {/* Areas of Expertise section */}

    <section
  id="expertise"
  aria-labelledby="expertise-title"
  className="bg-[#e5f0f0] px-6 py-12 md:px-10 md:py-16"
>
  <div className="mx-auto max-w-6xl">
    {/* Heading */}
    <div className="mb-8 flex items-center justify-between gap-4">
      <h2
        id="expertise-title"
        className="text-2xl font-semibold tracking-tight text-[#202c2d] md:text-4xl"
      >
        Areas of Expertise
      </h2>

      <a
        href="/services"
        className="inline-flex shrink-0 items-center gap-3 rounded-sm bg-[#365b63] px-4 py-2.5 text-xs text-white transition-colors hover:bg-[#284850]"
      >
        See More
        <ArrowUpRight size={14} />
      </a>
    </div>

    {/* Cards — sample titles from the reference */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          image: expertiseOne,
          title: "Clinical Technical Advisory & Complex Disease Control (HIV/TB & MNCH)",
        },
        {
          image: expertiseTwo,
          title: "Health Systems Strengthening (HSS), Policy & Multi-Stakeholder Diplomacy",
        },
        {
          image: expertiseThree,
          title: "Large-Scale Public Health Program & Grants Management",
        },
      ].map((item) => (
        <a
          key={item.title}
          href="/services"
          className="group block min-w-0"
        >
          <div className="aspect-square overflow-hidden rounded-xl bg-[#d5e5e7]">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
            />
          </div>

          <div className="mt-3 flex min-h-12 items-center justify-between gap-3 rounded-md bg-[#648591] py-2 pr-2 pl-4 text-white">
            <h3 className="text-sm font-normal">
              {item.title}
            </h3>

            <span className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-[#365b63] transition-colors group-hover:bg-[#284850]">
              <ArrowUpRight size={19} aria-hidden="true" />
            </span>
          </div>
        </a>
      ))}
    </div>
  </div>
  </section>

{/* Case Studies */}
<section
  id="case-studies"
  aria-labelledby="case-studies-title"
  className="bg-[#e5f0f0] px-6 py-12 md:px-10 md:py-16"
>
  <div className="mx-auto max-w-6xl">
    <div className="mb-8">
      <h2
        id="case-studies-title"
        className="text-2xl font-semibold tracking-tight text-[#202c2d] md:text-4xl"
      >
       Read Articles & Case Studies
      </h2>
    </div>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {[
        {
          image: caseStudyOne,
          title:
            "TB Infection Control in TB/HIV Settings in Cross River State, Nigeria: Policy Vs Practice",
          link:
            "https://scispace.com/papers/tb-infection-control-in-tb-hiv-settings-in-cross-river-state-3849jtr7tt",
        },
        {
          image: caseStudyTwo,
          title:
            "Cascade Variabilities in TB Case Finding among People Living with HIV and the Use of IPT: Assessment in Three Levels of Care in Cross River State, Nigeria",
          link:
            "https://scispace.com/papers/cascade-variabilities-in-tb-case-finding-among-people-living-20fkt5mp4n",
        },
      ].map((study) => (
        <a
          key={study.link}
          href={study.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read ${study.title} (opens in a new tab)`}
          className="group grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1.1fr]"
        >
          {/* Study image */}
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-[#d5e5e7] sm:aspect-auto sm:min-h-72">
            <img
              src={study.image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
            />
          </div>

          {/* Study details */}
          <div className="flex flex-col rounded-lg bg-[#648591] p-5 text-white">
            <span className="mb-3 text-[10px] font-medium uppercase tracking-widest text-[#d8e8eb]">
              Public Health Research
            </span>

            <h3 className="text-base leading-relaxed font-medium">
              {study.title}
            </h3>

            <div className="mt-auto pt-6">
              <div className="flex items-center justify-between gap-3 rounded-sm border border-[#b5cdd2] bg-[#dcecee] p-1.5 pl-3 text-xs text-[#365b63]">
                Read Full Study

                <span className="flex size-7 shrink-0 items-center justify-center rounded-sm bg-[#365b63] text-white transition-colors group-hover:bg-[#284850]">
                  <ArrowUpRight size={17} aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>
    </>
);
  
}