import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { type ISourceOptions, type Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false, zIndex: -1 },
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: ["#3b82f6", "#8b5cf6", "#ffffff"] },
        links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
        move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
        number: { density: { enable: true }, value: 80 },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <ParticlesProvider init={async (engine: Engine) => await loadSlim(engine)}>
      <Particles id="tsparticles" options={options} className="absolute inset-0 w-full h-full" />
    </ParticlesProvider>
  );
}
