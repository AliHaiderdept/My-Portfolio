import { useEffect, useRef } from "react";
import * as THREE from "three";

function SilkBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const uniforms = {
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_resolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight)
      }
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      fragmentShader: `
        uniform float u_time;
        uniform vec2 u_mouse;
        uniform vec2 u_resolution;

        void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;

          // center shift
          uv -= 0.5;

          float dist = length(uv - (u_mouse - 0.5));

          // silk fold distortion
          uv += 0.15 * sin(uv.yx * 4.0 + u_time);
          uv += 0.05 * sin(uv.yx * 8.0 + u_time * 1.5);

          // cursor drag effect
          uv -= (uv - (u_mouse - 0.5)) * exp(-dist * 4.0) * 0.3;
          
          // deep blue base
          vec3 color = vec3(0.02, 0.05, 0.12); // deep blue base

          // purple flow layer
          color += vec3(0.35, 0.0, 0.6) * sin(u_time + uv.x * 3.0);

          // blue highlight layer
         color += vec3(0.7, 0.1, 0.5) * cos(u_time + uv.y * 3.0);
          // silk shading (this is KEY)
          float shade = sin(uv.x * 6.0) * sin(uv.y * 6.0);
          color *= 0.8 + shade * 0.2;
          color *= 0.85;
          // reduce glow (premium look)
          color = pow(color, vec3(1.3));

          gl_FragColor = vec4(color, 1.0);
        }
      `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const animate = () => {
      uniforms.u_time.value += 0.02;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", (e) => {
      uniforms.u_mouse.value.x = e.clientX / window.innerWidth;
      uniforms.u_mouse.value.y = 1 - e.clientY / window.innerHeight;
    });

    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.u_resolution.value.set(
        window.innerWidth,
        window.innerHeight
      );
    });

  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1
      }}
    />
  );
}

export default SilkBackground;