"use client";
import Image from "next/image";
import { ArrowLeft, Award } from "lucide-react";
import Link from "next/link";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Reveal from "./Reveal";
import Tilt3D from "./Tilt3D";

const certificates = [
  {
    id: 1,
    title: "AI Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "13th August 2026",
    description:
      "Certificate awarded for successfully completing AI Fundamentals and gaining foundational knowledge of Artificial Intelligence and Generative AI.",
    image: "/certificates/Gen AI Sticker.png",
  },

  {
    id: 2,
    title: "Certificate 02",
    issuer: "",
    date: "",
    description: "",
    image: "",
  },

  {
    id: 3,
    title: "Certificate 03",
    issuer: "",
    date: "",
    description: "",
    image: "",
  },

  {
    id: 4,
    title: "Certificate 04",
    issuer: "",
    date: "",
    description: "",
    image: "",
  },

  {
    id: 5,
    title: "Certificate 05",
    issuer: "",
    date: "",
    description: "",
    image: "",
  },

  {
    id: 6,
    title: "Certificate 06",
    issuer: "",
    date: "",
    description: "",
    image: "",
  },
];

export default function CertificatesPageClient() {
  return (
    <>
      <main className="archive-page">
        <div className="container">
          <div className="archive-back">
            <Link href="/" className="button button-glass">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
          </div>

          <Reveal className="archive-hero">
            <span className="eyebrow">
              <Award size={15} /> Credentials Archive
            </span>
            <h1 className="section-title">Certificates</h1>
            <p className="section-description">
               Achieved Certificates are displayed!
            </p>
          </Reveal>

          <Reveal delay={140}>
            <Carousel
              items={certificates}
              renderItem={(certificate) => (
                <Tilt3D max={8}>
                  <article className="glass-card archive-card certificate-card">
                    <div className="certificate-placeholder">
  {certificate.image ? (
    <Image
      src={certificate.image}
      alt={`${certificate.title} certificate`}
      width={500}
      height={200}
    />
  ) : (
    <>
      <Award size={42} />
      <span>{certificate.title}</span>
    </>
  )}
</div>
                    <div className="certificate-info">
                      <h2>{certificate.issuer}</h2>
                      <p>{certificate.description}</p>

                      <div className="certificate-meta">
                        <span>{certificate.date}</span>
                           </div>
                    </div>
                  </article>
                </Tilt3D>
              )}
            />
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
