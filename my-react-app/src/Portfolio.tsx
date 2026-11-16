import { ArrowUpRight } from "lucide-react";
import caseStudyOne from "./assets/img/case-study-1.jpeg";
import caseStudyTwo from "./assets/img/case-study-2.jpeg";
import caseStudyThree from "./assets/img/case-study-3.jpeg";
import caseStudyFour from "./assets/img/case-study-4.jpeg";

const caseStudies = [
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
  {
    image: caseStudyThree,
    title:
      "Early-phase scale-up of isoniazid preventive therapy for people living with HIV in two districts in Malawi (2017)",
    link:
    "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0248115",
  },
  {
    image: caseStudyFour,
    title:
      "Debunking the Myths Perpetuating low implementation of isoniazid preventive therapy amongst human immunodeficiency virus-infected persons",
    link:
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC4419114/",
  }
];

export default function Portfolio() {
  return (
    <>
      {/* Page heading */}
      <section
        aria-labelledby="portfolio-title"
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
          id="portfolio-title"
          className="text-center text-3xl font-semibold tracking-tight text-[#202c2d] md:text-5xl"
        >
          Case Studies
        </h1>
      </section>

      {/* Research cards */}
      <section
        aria-label="Research case studies"
        className="bg-[#e5f0f0] px-6 pb-16 md:px-10 md:pb-24"
      >
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <a
              key={study.link}
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read ${study.title} (opens in a new tab)`}
              className="group grid min-w-0 grid-cols-1 gap-2 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#365b63] sm:grid-cols-2"
            >
              {/* Photo */}
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-[#d5e5e7] sm:aspect-auto sm:min-h-[320px]">
                <img
                  src={study.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                />
              </div>

              {/* Title and link */}
              <div className="flex flex-col rounded-lg bg-[#648591] p-4 text-white">
                <h2 className="text-base leading-relaxed font-medium">
                  {study.title}
                </h2>

                <div className="mt-auto pt-8">
                  <div className="flex items-center justify-between gap-3 rounded-sm bg-[#e5f0f0] p-1.5 pl-3 text-xs text-[#365b63]">
                    Full Case Study

                    <span className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-[#365b63] text-white transition-colors group-hover:bg-[#284850]">
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Show More button */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=fDyjSxkAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-sm bg-[#365b63] px-5 py-3 text-xs text-white transition-colors hover:bg-[#284850]"
          >
            Show More
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </section>

      
    </>
  );
}