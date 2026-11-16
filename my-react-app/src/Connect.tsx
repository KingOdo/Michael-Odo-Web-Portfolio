import { Activity, ArrowUpRight, Mail } from "lucide-react";
import michaelImage from "./assets/img/Michael.jpeg";

const contactEmail = "mikeodo1970@gmail.com";

function createGmailLink(subject: string, body: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: contactEmail,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

const enquiryLink = createGmailLink(
  "",
  "Hello Dr. Michael,\n\nI would like to get in touch about...\n\nKind regards,\n"
);

const connectLink = createGmailLink(
  "Let’s connect",
  "Hello Dr. Michael,\n\nI would like to connect with you about...\n\nKind regards,\n"
);

export default function Connect() {
  return (
    <div className="bg-[#e5f0f0] px-6 pt-12 pb-6 md:px-10 md:pt-16">
      <div className="mx-auto max-w-6xl">
        {/* Contact banner */}
        <section
          id="contact"
          aria-labelledby="connect-title"
          className="relative isolate overflow-hidden rounded-2xl px-6 py-12 md:px-12 md:py-16"
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
                  transparent 35px,
                  rgba(255,255,255,0.25) 36px,
                  transparent 39px
                ),
                linear-gradient(to right, #d1e3e5, #dcebed)
              `,
            }}
          />

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <h2
              id="connect-title"
              className="text-2xl leading-tight font-semibold tracking-tight text-[#202c2d] md:text-3xl"
            >
              Get in touch with me
            </h2>

            <div>
              <a
                href={enquiryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 rounded-md bg-[#365b63] px-6 py-3 text-sm text-white transition-colors hover:bg-[#284850]"
              >
                <Mail size={18} aria-hidden="true" />
                Email Me
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 overflow-hidden rounded-2xl bg-[#648591] p-2 md:mt-24">
          <div className="relative overflow-hidden px-5 py-10 md:px-10 md:py-12">
            <Activity
              aria-hidden="true"
              strokeWidth={1}
              className="pointer-events-none absolute -right-8 top-0 h-full w-80 text-[#b5d2d4]/25 md:w-[520px]"
            />

            <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <h2 className="text-3xl leading-tight font-semibold tracking-tight text-[#edf6f5] md:text-4xl">
                Let’s Connect
                <br />
                With Me
              </h2>

              <div className="w-full md:max-w-sm">
                <a
                  href={connectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 border-b border-[#b5cdd2]/60 py-3 text-sm text-white transition-colors hover:border-white"
                >
                  <span>Start a conversation</span>

                  <ArrowUpRight
                    size={20}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                  />
                </a>

                <p className="mt-2 text-xs text-[#d5e5e8]">
                  Write to me through Gmail.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-[#e5f0f0] px-6 pt-8 pb-5 md:px-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-[2fr_1fr_1fr]">
              {/* Profile */}
              <div className="col-span-2 md:col-span-1">
                <a href="/" className="inline-flex items-center gap-3">
                  <img
                    src={michaelImage}
                    alt=""
                    loading="lazy"
                    className="size-11 rounded-lg object-cover object-top"
                  />

                  <div>
                    <p className="font-semibold text-[#243b40]">
                      Dr. Michael
                    </p>

                    <p className="mt-1 text-xs text-[#648591]">
                      Public Health Physician
                    </p>
                  </div>
                </a>

                <div className="mt-5 flex gap-2">
                  <a
                    href={enquiryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email Dr. Michael through Gmail (opens in a new tab)"
                    className="rounded-md border border-[#a5bec3] p-2 text-[#365b63] transition-colors hover:bg-[#d5e5e7]"
                  >
                    <Mail size={16} aria-hidden="true" />
                  </a>

                   {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/michael-odo-83679244/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Dr. Michael on LinkedIn (opens in a new tab)"
    className="rounded-md border border-[#a5bec3] p-2 text-[#365b63] transition-colors hover:bg-[#d5e5e7]"
  >
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
>
  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
</svg>
  </a>
                </div>
              </div>

              {/* Explore */}
              <div>
                <h3 className="mb-4 text-sm font-semibold text-[#243b40]">
                  Explore
                </h3>

                <ul className="space-y-3 text-xs text-[#56757d]">
                  <li>
                    <a
                      href="/portfolio"
                      className="hover:text-[#243b40]"
                    >
                      Areas of Expertise
                    </a>
                  </li>

                  <li>
                    <a
                      href="/portfolio"
                      className="hover:text-[#243b40]"
                    >
                      Case Studies
                    </a>
                  </li>

                  <li>
                    <a
                      href="/#contact"
                      className="hover:text-[#243b40]"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Quick links */}
              <div>
                <h3 className="mb-4 text-sm font-semibold text-[#243b40]">
                  Quick Links
                </h3>

                <ul className="space-y-3 text-xs text-[#56757d]">
                  <li>
                    <a href="/" className="hover:text-[#243b40]">
                      Home
                    </a>
                  </li>

                  <li>
                    <a href="/about" className="hover:text-[#243b40]">
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="/portfolio"
                      className="hover:text-[#243b40]"
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-10 text-center text-[10px] text-[#648591]">
              © {new Date().getFullYear()} Dr. Michael. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}