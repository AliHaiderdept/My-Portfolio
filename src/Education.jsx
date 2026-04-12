import { useDownload } from "./useDownload";

function Education() {
  const { downloadResume } = useDownload();

  return (
    
    

      <div className="glass">
        <p>Full-stack Developer (2026 - Present)</p>
        <p>Intermediate CS - Punjab College (2022-2024)</p>
        <p>BSCS - Punjab University (2024-2028)</p>

        <button onClick={downloadResume} className="btn">⬇ Download Resume</button>
      </div>
    
  );
}

export default Education;