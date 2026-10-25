"use client";
import { useRef } from "react";
import { useSectionReveal } from "../useSectionReveal";
const certificates = [
  {
    id: 1,
    title: "Cluade AI Fluency",
    issuer: "Claude",
    date: "September 2026",
    image: "/certificates/Claude Ai Fluency.png",
    link: "https://example.com/certificate-1",
  },
  {
    id: 2,
    title: "Fundamentals of Gen AI",
    issuer: "IBM Skill Builder",
    date: "August 2026",
    image: "/certificates/Gen AI Sticker.png",
    link: "https://example.com/certificate-2",
  },
  
];
export default function Certificates() {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, ".certificates-content");

	return (
		<>
		<main className="relative z-10">
    <section ref={sectionRef} id="certificates" className="title-section">
			<div className="title-inner mx-4 sm:mx-6 md:mx-12 mt-12 grid grid-cols-[40px_minmax(0,1fr)] sm:grid-cols-[60px_minmax(0,1fr)] gap-4 sm:gap-8 lg:gap-12 items-start">

  <div
    className="title-index font-geist-sans shrink-0"
    aria-hidden="true"
  >
    04
  </div>

  <div className="title-copy min-w-0 w-full md:mx-10 lg:mx-12 sm:mx-8">
    <span className="title-label font-geist-sans block">
      Certificates
    </span>

    <p className="title-title">
      Some Archives which <br className="hidden sm:block" /> give richness to my profile.
    </p>
  </div>
</div>



         {/*-----CONTENT-----*/}
       <div className="certificates-content px-6 py-12 m-10 ">
         <h2 className="mb-8 text-3xl font-bold font-geist-mono">
        My Certificates
      </h2>
          

      <div className="certificates-items font-archivo-black grid grid-cols-1 justify-center justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="w-full max-w-md overflow-hidden border border-white/10 bg-white/5 shadow-lg backdrop-blur-md"
          >
            {/* Certificate Image */}
            <img
              src={certificate.image}
              alt={certificate.title}
              className="h-48 w-full object-contain p-2"
            />

            {/* Certificate Details */}
            <div className="space-y-3 p-5">
              <h3 className="text-xl font-semibold">
                {certificate.title}
              </h3>

              <p className="text-sm text-gray-400">
                Issued by: {certificate.issuer}
              </p>

              <p className="text-sm text-gray-400">
                Date: {certificate.date}
              </p>

              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white/20 px-4 py-2 font-geist-mono text-sm transition hover:bg-white hover:text-black"
              >
                View Certificate ↗
              </a>
            </div>
          </div>
        ))}
      </div>
        </div>

			</section>
			</main>
			</>
	)
}

