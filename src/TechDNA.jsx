import { useEffect, useRef, useState } from "react";

const techItems = [
  {
    name: "Problem Solver",
    percent: 75,
    start: "#3fd5d1",
    end: "#22b8b0"
  },
  {
    name: "Speed Learner",
    percent: 95,
    start: "#6ee7a6",
    end: "#2fbf79"
  },
  {
    name: "AI Explorer",
    percent: 65,
    start: "#ffd166",
    end: "#ff9800"
  },
  {
    name: "Design Sense",
    percent: 90,
    start: "#b59dff",
    end: "#7a63ff"
  }
];

function TechDNA() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [barValues, setBarValues] = useState(techItems.map(() => 0));

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35
      }
    );

    observer.observe(sectionElement);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    let animationFrameId = 0;
    const animationStart = performance.now();
    const duration = 1400;
    const stagger = 180;

    const animate = (currentTime) => {
      const elapsed = currentTime - animationStart;

      setBarValues(
        techItems.map((item, index) => {
          const itemElapsed = Math.max(0, elapsed - index * stagger);
          const progress = Math.min(itemElapsed / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          return Math.round(item.percent * easedProgress);
        })
      );

      if (elapsed < duration + stagger * (techItems.length - 1)) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible]);

  return (
    <section id="tech-dna" ref={sectionRef}>
      <h2>My Tech DNA</h2>

      <div className="glass tech-dna-card">
        {techItems.map((item, index) => (
          <div className="tech-dna-item" key={item.name}>
            <div
              className="tech-dna-track"
              role="progressbar"
              aria-label={item.name}
              aria-valuenow={barValues[index]}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="tech-bar"
                style={{
                  width: `${barValues[index]}%`,
                  transitionDelay: `${index * 0.15}s`,
                  "--bar-start": item.start,
                  "--bar-end": item.end
                }}
              >
                <span className="tech-bar-text">
                  {item.name} {barValues[index]}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechDNA;