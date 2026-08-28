"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function Carousel({ items, renderItem }) {
  const [viewportRef, api] = useEmblaCarousel({ loop: true, align: "start", dragFree: false });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [selected, setSelected] = useState(0);

  const update = useCallback((embla) => {
    if (!embla) return;
    setCanPrev(embla.canScrollPrev());
    setCanNext(embla.canScrollNext());
    setSelected(embla.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return undefined;

    update(api);
    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api, update]);

  return (
    <div className="carousel-wrap">
      <div className="carousel-viewport" ref={viewportRef}>
        <div className="carousel-content">
          {items.map((item, index) => (
            <div className="carousel-item" key={item.id || index}>
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-button"
          disabled={!canPrev}
          onClick={() => api?.scrollPrev()}
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="carousel-dots">
          {items.map((item, index) => (
            <button
              type="button"
              key={item.id || index}
              className={`carousel-dot ${selected === index ? "active" : ""}`.trim()}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="carousel-button"
          disabled={!canNext}
          onClick={() => api?.scrollNext()}
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
