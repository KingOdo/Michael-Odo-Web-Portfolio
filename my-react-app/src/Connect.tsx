import { useState } from "react";
import { Activity, ArrowUpRight, Mail } from "lucide-react";
import michaelImage from "./assets/img/Michael.jpeg";

const contactEmail = "mikeodo1970@gmail.com";

export default function Connect() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="bg-[#e5f0f0] px-6 pt-12 pb-6 md:px-10 md:pt-16">
      <div className="mx-auto max-w-6xl">
        {/* Appointment banner */}
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

            <form
              onSubmit={(event) => {
                event.preventDefault();

                if (!contactEmail) return;

                const subject = encodeURIComponent(
                  "Appointment enquiry"
                );
                const body = encodeURIComponent(
                  `Hello Dr. Michael,\n\nI would like to enquire about an appointment.\n\nMy phone number: ${phone}`
                );

                window.location.href =
                  `mailto:${contactEmail}?subject=${subject}&body=${body}`;
              }}
              className="w-full md:max-w-xs"
            >
              <label htmlFor="contact-phone" className="sr-only">
                Your phone number
              </label>

              <div className="flex rounded-md border border-[#a5bec3] p-1 focus-within:ring-2 focus-within:ring-[#648591]">
                <input
                  id="contact-phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Phone number"
                  className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-[#365b63] outline-none placeholder:text-[#718e95]"
                />

                <button
                  type="submit"
                  disabled={!contactEmail}
                  className="rounded-sm bg-[#365b63] px-5 py-2 text-xs text-white transition-colors hover:bg-[#284850] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Send
                </button>
              </div>

              <p className="mt-2 text-xs text-[#56757d]">
                {contactEmail
                  ? "Opens your email app to send an enquiry."
                  : "Contact email will be available soon."}
              </p>
            </form>
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

              <form
                onSubmit={(event) => {
                  event.preventDefault();

                  if (!contactEmail) return;

                  const subject = encodeURIComponent(
                    "Website contact enquiry"
                  );
                  const body = encodeURIComponent(
                    `Hello Dr. Michael,\n\nI would like to connect with you.\n\nMy email: ${email}`
                  );

                  window.location.href =
                    `mailto:${contactEmail}?subject=${subject}&body=${body}`;
                }}
                className="w-full md:max-w-sm"
              >
                <label htmlFor="connect-email" className="sr-only">
                  Your email address
                </label>

                <div className="flex items-center border-b border-[#b5cdd2]/60">
                  <input
                    id="connect-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email"
                    className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-[#d5e5e8]"
                  />

                  <button
                    type="submit"
                    aria-label="Connect by email"
                    disabled={!contactEmail}
                    className="rounded-sm p-3 text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </form>
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
                  {contactEmail && (
                    <a
                      href={`mailto:${contactEmail}`}
                      aria-label="Email Dr. Michael"
                      className="rounded-md border border-[#a5bec3] p-2 text-[#365b63] transition-colors hover:bg-[#d5e5e7]"
                    >
                      <Mail size={16} />
                    </a>
                  )}

                  {/* Add social links when the profile URLs are ready. */}
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
                      href="/#expertise"
                      className="hover:text-[#243b40]"
                    >
                      Areas of Expertise
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#case-studies"
                      className="hover:text-[#243b40]"
                    >
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="hover:text-[#243b40]"
                    >
                      Services
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
                      href="/#contact"
                      className="hover:text-[#243b40]"
                    >
                      Contact
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