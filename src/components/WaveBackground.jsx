import { useEffect, useRef, useCallback } from 'react'

/**
 * Animated Wave & Circular Rounding Motion Background using Canvas API.
 * Features:
 * 1. Concentric undulating circular wave rings with sinusoidal ripples.
 * 2. Rotating circular orbital rings with satellite particles in continuous rounding motion.
 * 3. Flowing horizontal topography wave fields in Royal Blue, Deep Navy, and Cyan.
 * 4. Responsive cursor parallax and reduced-motion support.
 */
export default function WaveBackground() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const rafRef = useRef(null)
  const timeRef = useRef(0)

  const handleMouseMove = useCallback((e) => {
    mouseRef.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1200

    /* --- Flowing Wave Lines Configuration --- */
    const waveConfigs = [
      { amplitude: 45, wavelength: 750, speed: 0.015, yOffset: 0.22, color: 'rgba(29, 78, 216, 0.09)', lineWidth: 2.5 },
      { amplitude: 35, wavelength: 550, speed: 0.022, yOffset: 0.32, color: 'rgba(30, 41, 59, 0.07)', lineWidth: 2 },
      { amplitude: 55, wavelength: 900, speed: 0.012, yOffset: 0.46, color: 'rgba(29, 78, 216, 0.12)', lineWidth: 3 },
      { amplitude: 30, wavelength: 480, speed: 0.028, yOffset: 0.58, color: 'rgba(2, 132, 199, 0.08)', lineWidth: 1.5 },
      { amplitude: 50, wavelength: 850, speed: 0.018, yOffset: 0.70, color: 'rgba(30, 41, 59, 0.06)', lineWidth: 2.5 },
      { amplitude: 38, wavelength: 650, speed: 0.024, yOffset: 0.82, color: 'rgba(29, 78, 216, 0.08)', lineWidth: 2 },
    ]
    const activeWaves = isMobile ? waveConfigs.slice(0, 3) : isTablet ? waveConfigs.slice(0, 5) : waveConfigs

    /* --- Circular Rounding Motion Orbits Configuration --- */
    // Two circular centers: Primary in the Hero right area, secondary in lower-left
    const circularOrbits = [
      { radius: 90, speed: 0.018, color: 'rgba(29, 78, 216, 0.25)', lineWidth: 1.8, dash: [8, 8], nodes: 3 },
      { radius: 150, speed: -0.012, color: 'rgba(2, 132, 199, 0.22)', lineWidth: 1.5, dash: [14, 10], nodes: 4 },
      { radius: 220, speed: 0.009, color: 'rgba(30, 41, 59, 0.18)', lineWidth: 2.0, dash: [20, 14], nodes: 5 },
      { radius: 290, speed: -0.007, color: 'rgba(29, 78, 216, 0.16)', lineWidth: 1.5, dash: [28, 18], nodes: 6 },
      { radius: 370, speed: 0.005, color: 'rgba(250, 204, 21, 0.20)', lineWidth: 1.8, dash: [10, 15], nodes: 4 },
      { radius: 460, speed: -0.004, color: 'rgba(2, 132, 199, 0.12)', lineWidth: 1.2, dash: [35, 20], nodes: 7 },
    ]
    const activeCircularOrbits = isMobile ? circularOrbits.slice(0, 3) : circularOrbits

    /* --- Floating & Orbiting Particles --- */
    const particleCount = isMobile ? 16 : isTablet ? 28 : 42
    const particles = Array.from({ length: particleCount }, (_, idx) => ({
      orbitRadius: 70 + (idx % 7) * 55 + Math.random() * 20,
      angle: Math.random() * Math.PI * 2,
      orbitSpeed: ((idx % 2 === 0 ? 1 : -1) * (0.006 + Math.random() * 0.008)),
      size: Math.random() * 3.5 + 1.5,
      opacity: Math.random() * 0.35 + 0.15,
      color: ['#1D4ED8', '#0284C7', '#1E293B', '#FACC15'][idx % 4],
    }))

    /* --- Helper: Draw Undulating Circular Wave --- */
    function drawWavyCircle(ctx, cx, cy, baseRadius, time, speed, harmonics, amplitude, color, lineWidth) {
      ctx.beginPath()
      ctx.strokeStyle = color
      ctx.lineWidth = lineWidth
      const points = 72
      for (let i = 0; i <= points; i++) {
        const theta = (i / points) * Math.PI * 2
        // Circular sinusoidal rounding ripples
        const r = baseRadius +
          Math.sin(theta * harmonics + time * speed) * amplitude +
          Math.cos(theta * 2 + time * speed * 0.7) * (amplitude * 0.4)
        const x = cx + r * Math.cos(theta)
        const y = cy + r * Math.sin(theta)
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.stroke()
    }

    /* --- Main Animation Loop --- */
    function draw() {
      if (prefersReducedMotion) return

      const w = window.innerWidth
      const h = window.innerHeight
      timeRef.current += 1
      const t = timeRef.current
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      ctx.clearRect(0, 0, w, h)

      /* --- 1. Draw Circular Rounding Motions (Hero & Background) --- */
      // Primary circular center located in the hero visual area (desktop: 72% width, mobile: 50%)
      const circleCenterX = (isMobile ? w * 0.5 : w * 0.72) + (mx - 0.5) * 30
      const circleCenterY = (isMobile ? h * 0.38 : h * 0.44) + (my - 0.5) * 25

      // Secondary circular center (lower-left background)
      const secCenterX = w * 0.15 + (mx - 0.5) * 20
      const secCenterY = h * 0.78 + (my - 0.5) * 15

      // (A) Draw Undulating Breathing Concentric Wave Circles
      const circularWaveCounts = isMobile ? 4 : 7
      for (let k = 1; k <= circularWaveCounts; k++) {
        const baseR = k * (isMobile ? 45 : 65)
        const waveColor = k % 2 === 0
          ? `rgba(29, 78, 216, ${0.14 - k * 0.015})`
          : `rgba(2, 132, 199, ${0.12 - k * 0.012})`
        drawWavyCircle(
          ctx,
          circleCenterX,
          circleCenterY,
          baseR,
          t,
          0.02 + k * 0.003,
          5 + (k % 3),
          10 + k * 2.5,
          waveColor,
          1.8
        )
      }

      // Secondary subtle circular wave on lower left
      if (!isMobile) {
        for (let s = 1; s <= 4; s++) {
          drawWavyCircle(
            ctx,
            secCenterX,
            secCenterY,
            s * 75,
            t,
            -0.015,
            4,
            12,
            `rgba(30, 41, 59, ${0.08 - s * 0.015})`,
            1.5
          )
        }
      }

      // (B) Draw Rotating Circular Orbital Rings with Dashes
      activeCircularOrbits.forEach((orbit, idx) => {
        ctx.save()
        ctx.translate(circleCenterX, circleCenterY)
        // Continuous 360 degree rounding rotation
        ctx.rotate(t * orbit.speed)

        ctx.beginPath()
        ctx.arc(0, 0, orbit.radius, 0, Math.PI * 2)
        ctx.strokeStyle = orbit.color
        ctx.lineWidth = orbit.lineWidth
        if (orbit.dash) ctx.setLineDash(orbit.dash)
        ctx.stroke()

        // Rotating satellites/nodes along the circle
        ctx.setLineDash([])
        for (let n = 0; n < orbit.nodes; n++) {
          const nodeAngle = (n / orbit.nodes) * Math.PI * 2
          const nx = orbit.radius * Math.cos(nodeAngle)
          const ny = orbit.radius * Math.sin(nodeAngle)

          ctx.beginPath()
          ctx.arc(nx, ny, 3.5, 0, Math.PI * 2)
          ctx.fillStyle = orbit.color.replace(/[\d\.]+\)$/, '0.75)')
          ctx.fill()

          // Inner bright core for satellite
          ctx.beginPath()
          ctx.arc(nx, ny, 1.5, 0, Math.PI * 2)
          ctx.fillStyle = '#FFFFFF'
          ctx.fill()
        }

        ctx.restore()
      })

      // (C) Orbiting Particles moving along circular trajectories
      particles.forEach((p) => {
        p.angle += p.orbitSpeed
        const px = circleCenterX + p.orbitRadius * Math.cos(p.angle)
        const py = circleCenterY + (p.orbitRadius * 0.85) * Math.sin(p.angle) // slight perspective tilt

        ctx.beginPath()
        ctx.arc(px, py, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()

        // Soft glow around particle
        ctx.beginPath()
        ctx.arc(px, py, p.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity * 0.25
        ctx.fill()
        ctx.globalAlpha = 1.0
      })

      /* --- 2. Flowing Topographic Horizontal Wave Lines --- */
      activeWaves.forEach((wave, idx) => {
        const mouseInfluence = isMobile ? 0 : (mx - 0.5) * 16 * (idx % 2 === 0 ? 1 : -1)

        ctx.beginPath()
        ctx.strokeStyle = wave.color
        ctx.lineWidth = wave.lineWidth

        const step = isMobile ? 6 : 3
        for (let x = 0; x <= w; x += step) {
          const normalX = x / wave.wavelength
          // Combine horizontal flow with circular gravity distortion around the circular center
          const distToCenter = Math.hypot(x - circleCenterX, (wave.yOffset * h) - circleCenterY)
          const circularInfluence = Math.exp(-distToCenter / 250) * 25 * Math.sin(t * 0.03 + distToCenter * 0.02)

          const y = wave.yOffset * h +
            Math.sin(normalX * Math.PI * 2 + t * wave.speed) * wave.amplitude +
            Math.sin(normalX * Math.PI * 1.3 + t * wave.speed * 0.7 + idx) * (wave.amplitude * 0.4) +
            circularInfluence +
            mouseInfluence * Math.sin(normalX * Math.PI + t * 0.01)

          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
      })

      rafRef.current = requestAnimationFrame(draw)
    }

    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(rafRef.current)
      else rafRef.current = requestAnimationFrame(draw)
    }
    document.addEventListener('visibilitychange', handleVisibility)
    window.addEventListener('mousemove', handleMouseMove)

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [handleMouseMove])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  )
}
