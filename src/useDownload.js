import resumePdf from "./assets/Resume.pdf";
import { incrementDownloadsCount } from "./statsApi";

export const useDownload = () => {
  const downloadResume = () => {
    incrementDownloadsCount()
      .then(() => {
        window.dispatchEvent(new CustomEvent("portfolio-stats-updated"));
      })
      .catch((error) => {
        console.error("Failed to increment downloads counter", error);
      });

    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return { downloadResume };
};