import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState({
    content: "Loading a fresh quote...",
    author: ""
  });
  const [loading, setLoading] = useState(false);

  const fallbackQuotes = [
    { content: "Great design is invisible until it makes everything feel easier.", author: "Ali Haider" },
    { content: "Small improvements, repeated often, create the biggest results.", author: "Unknown" },
    { content: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { content: "Build things that feel calm, clear, and useful.", author: "Ali Haider" }
  ];

  const loadQuote = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("Quote API request failed");
      }

      const data = await response.json();
      setQuote({
        content: data.content,
        author: data.author || "Unknown"
      });
    } catch {
      const randomFallback = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
      setQuote(randomFallback);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQuote();
  }, []);

  return (
    <section id="quotes">
      <h2>Quotes</h2>

      <div className="glass quote-card">
        <blockquote className="quote-text">&ldquo;{quote.content}&rdquo;</blockquote>
        <p className="quote-author">{quote.author ? `— ${quote.author}` : ""}</p>
        <button className="btn quote-btn" onClick={loadQuote} disabled={loading}>
          {loading ? "Loading..." : "New Quote"}
        </button>
      </div>
    </section>
  );
}

export default Quote;