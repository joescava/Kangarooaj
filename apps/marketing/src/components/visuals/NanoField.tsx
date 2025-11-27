"use client";

import { useEffect, useRef } from "react";

interface Particle {
  baseX: number;
  baseY: number;
  nx: number; // 0..1 en ancho
  ny: number; // 0..1 en alto
  offset: number;
}

type ShapeMode = "grid" | "city" | "chip" | "robot";

const SHAPES: ShapeMode[] = ["grid", "city", "chip", "robot"];
const SHAPE_DURATION = 12; // segundos por forma
const COLS = 32;
const ROWS = 18;

function createParticles(width: number, height: number): Particle[] {
  const particles: Particle[] = [];

  const spacingX = width / (COLS + 1);
  const spacingY = height / (ROWS + 1);

  for (let y = 1; y <= ROWS; y++) {
    for (let x = 1; x <= COLS; x++) {
      const nx = x / (COLS + 1);
      const ny = y / (ROWS + 1);
      particles.push({
        baseX: spacingX * x,
        baseY: spacingY * y,
        nx,
        ny,
        offset: Math.random() * Math.PI * 2,
      });
    }
  }

  return particles;
}

// “Ruido” determinista simple basado en un índice, para que las formas sean estables
function hash01(n: number): number {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function smoothstep(t: number): number {
  return t * t * (3 - 2 * t);
}

function getShapePosition(
  p: Particle,
  mode: ShapeMode,
  width: number,
  height: number,
  t: number
): { x: number; y: number } {
  const { baseX, baseY, nx, ny, offset } = p;

  if (mode === "grid") {
    const wave = Math.sin(t * 0.8 + offset) * 4 + Math.cos(t * 0.6 + offset * 1.3) * 3;

    return {
      x: baseX + wave * 0.5,
      y: baseY + wave,
    };
  }

  if (mode === "city") {
    // Línea de “suelo”
    const groundY = height * 0.86;
    const sectorCount = 6;
    const sectorIndex = Math.floor(nx * sectorCount);
    const hNorm = 0.35 + 0.45 * hash01(sectorIndex + 10); // altura relativa del edificio
    const buildingTopY = groundY - hNorm * height * 0.7;

    // mapeamos ny al rango (top, ground)
    const localY = buildingTopY + (groundY - buildingTopY) * ny;

    const swayX = Math.sin(t * 0.4 + sectorIndex) * 4;
    const jitterY = (Math.sin(t * 1.2 + offset * 3) + Math.cos(t * 0.7 + offset * 2)) * 0.8;

    return {
      x: baseX + swayX,
      y: localY + jitterY,
    };
  }

  if (mode === "chip") {
    // “Chip” central con pistas
    const cx = width * 0.5;
    const cy = height * 0.55;
    const radiusX = width * 0.22;
    const radiusY = height * 0.16;

    const localX = (nx - 0.5) * 2; // -1..1
    const localY = (ny - 0.5) * 2;

    let x = cx + localX * radiusX;
    let y = cy + localY * radiusY;

    // Pistas horizontales/verticales
    const trackFactor = Math.abs(localX) < 0.15 || Math.abs(localY) < 0.15 ? 1 : 0;
    if (trackFactor > 0) {
      const pull = 6 * (0.6 + 0.4 * Math.sin(t * 1.1 + offset * 4 + (localX + localY) * 3));
      x += trackFactor * pull * Math.sign(localX || 1);
      y += trackFactor * pull * Math.sign(localY || 1);
    }

    const jitter = 0.7 * (Math.sin(t * 1.5 + offset * 2) + Math.cos(t * 1.1 + offset * 1.7));

    return {
      x,
      y: y + jitter,
    };
  }

  // mode === "robot": figura central estilizada
  const centerX = width * 0.5;
  const centerY = height * 0.52;

  // cuerpo base
  const bodyWidth = width * 0.18;
  const bodyHeight = height * 0.22;

  // coordenadas normalizadas alrededor del centro
  const lx = (nx - 0.5) * 2;
  const ly = (ny - 0.5) * 2;

  // cuerpo principal
  let x = centerX + lx * bodyWidth;
  let y = centerY + ly * bodyHeight;

  // cabeza
  const headTop = centerY - bodyHeight * 0.95;
  const headHeight = bodyHeight * 0.5;
  if (ny < 0.35) {
    const factor = smoothstep(1 - ny / 0.35);
    x = centerX + lx * bodyWidth * 0.5 * factor;
    y = headTop + headHeight * (ny / 0.35) + Math.sin(t * 1.4 + offset * 3) * 1.2 * factor;
  }

  // brazos laterales
  if (ny > 0.35 && ny < 0.75) {
    const armFactor = smoothstep(1 - Math.abs(lx)); /* más fuerte cerca del centro */
    x += (bodyWidth * 0.6 + Math.sign(lx || 1) * 10) * lx * armFactor;
  }

  // “respiración” del robot
  const breath = (0.5 + 0.5 * Math.sin(t * 1.1 + offset * 2)) * 4;
  y += breath;

  return { x, y };
}

export function NanoField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasEl = canvas as HTMLCanvasElement;
    const context = ctx as CanvasRenderingContext2D;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    function resize() {
      const rect = canvasEl.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      if (width === 0 || height === 0) {
        return;
      }

      const dpr = window.devicePixelRatio || 1;
      canvasEl.width = width * dpr;
      canvasEl.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = createParticles(width, height);
    }

    resize();
    window.addEventListener("resize", resize);

    function draw(timeMs: number) {
      const t = timeMs / 1000;

      if (width === 0 || height === 0 || particles.length === 0) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      // ciclo de formas
      const totalDuration = SHAPES.length * SHAPE_DURATION;
      const cycleTime = t % totalDuration;
      const shapeIndex = Math.floor(cycleTime / SHAPE_DURATION);
      const nextIndex = (shapeIndex + 1) % SHAPES.length;
      const localTime = (cycleTime % SHAPE_DURATION) / SHAPE_DURATION;
      const mix = smoothstep(localTime);

      const currentShape = SHAPES[shapeIndex];
      const nextShape = SHAPES[nextIndex];

      // fondo base (oscuro, ligeramente reactivo)
      const baseAlpha = 0.8 + 0.2 * Math.sin(t * 0.2);
      context.fillStyle = `rgba(2, 6, 23, ${baseAlpha})`; // slate-950
      context.fillRect(0, 0, width, height);

      // líneas de conexión
      context.lineWidth = 0.6;
      context.strokeStyle = "rgba(148, 163, 184, 0.16)";
      context.beginPath();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const posA = getShapePosition(p, currentShape, width, height, t);
        const posB = getShapePosition(p, nextShape, width, height, t);

        const x = posA.x * (1 - mix) + posB.x * mix;
        const y = posA.y * (1 - mix) + posB.y * mix;

        // conectar con el siguiente en la fila para dar sensación de malla
        const isLastInRow = (i + 1) % COLS === 0;
        if (!isLastInRow) {
          const pNext = particles[i + 1];
          const nA = getShapePosition(pNext, currentShape, width, height, t);
          const nB = getShapePosition(pNext, nextShape, width, height, t);

          const nx = nA.x * (1 - mix) + nB.x * mix;
          const ny = nA.y * (1 - mix) + nB.y * mix;

          context.moveTo(x, y);
          context.lineTo(nx, ny);
        }
      }
      context.stroke();

      // puntos “nanobots”
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const posA = getShapePosition(p, currentShape, width, height, t);
        const posB = getShapePosition(p, nextShape, width, height, t);

        const x = posA.x * (1 - mix) + posB.x * mix;
        const y = posA.y * (1 - mix) + posB.y * mix;

        const intensity = 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(t * 1.3 + p.offset * 2.7));

        context.beginPath();
        context.fillStyle = `rgba(56, 189, 248, ${0.2 + intensity * 0.25})`; // cian
        context.arc(x, y, 1.2 + intensity * 1.1, 0, Math.PI * 2);
        context.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
      aria-hidden="true"
    />
  );
}
