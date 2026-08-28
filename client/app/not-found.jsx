import Link from "next/link";

export const metadata = {
  title: "Page not found | Ali Haider"
};

export default function NotFound() {
  return (
    <main className="archive-page">
      <div className="container not-found">
        <span className="eyebrow">404</span>
        <h1 className="section-title">This page drifted off the grid</h1>
        <p className="section-description">The page you are looking for does not exist or has been moved.</p>

        <Link className="button button-primary" href="/">
          Back to Portfolio
        </Link>
      </div>
    </main>
  );
}
