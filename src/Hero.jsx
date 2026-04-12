import { useEffect, useState } from "react";
import { useDownload } from "./useDownload";


function Hero() {
  const fullName = "Ali Haider!";
  const [typedName, setTypedName] = useState("");
  const { downloadResume } = useDownload();

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index += 1;
      setTypedName(fullName.slice(0, index));

      if (index >= fullName.length) {
        clearInterval(intervalId);
      }
    }, 140);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-copy">
        <p className="pixel">Hey, I'm</p>
        <h1 className="fancy typewriter-name">
          {typedName}
          <span className="typewriter-cursor" aria-hidden="true">|</span>
        </h1>

        <p className="hero-subtitle">Full-Stack Developer | AI Integration and Data Enthusiast</p>

        <button className="btn">Projects</button>
        <button onClick={downloadResume} className="btn">⬇ Resume</button>
      </div>

      <div className="hero-image-frame">
        <img
          className="hero-image"
          src="https://i.pinimg.com/736x/64/25/d9/6425d9533e83434d24d667db3dbe79bf.jpg"
          alt="Ali Haider portrait"
        />
      </div>
    </section>
  );
}

export default Hero;