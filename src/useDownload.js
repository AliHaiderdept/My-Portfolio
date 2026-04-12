import resumePdf from "./assets/Resume.pdf";

export const useDownload = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return { downloadResume };
};