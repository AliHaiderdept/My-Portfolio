"use client";

import dynamic from "next/dynamic";

const GridScan = dynamic(() => import("./GridScan"), { ssr: false });

/**
 * Fixed background layer. Pointer events off hain taake page normally
 * scroll aur click hota rahe, aur grid smooth chalta rahe.
 */
export default function Background() {
  return (
    <div className="background-layer" aria-hidden="true">
      <GridScan
        sensitivity={0.55}
        lineThickness={1}
        linesColor="#2F293A"
        gridScale={0.1}
        scanColor="#FF9FFC"
        scanOpacity={0.4}
        enablePost
        bloomIntensity={0.6}
        chromaticAberration={0.002}
        noiseIntensity={0.01}
        lineJitter={0.1}
        scanGlow={0.5}
        scanSoftness={2}
        enableWebcam={false}
        showPreview={false}
      />
    </div>
  );
}
