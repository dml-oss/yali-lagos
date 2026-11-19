'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface IMarqueeGeometryOverlay {
  className?: string
  accent?: 'violet' | 'cyan'
}

const palette = {
  violet: {
    lines: 0x8b5cf6,
    glow: 0x4f46e5,
  },
  cyan: {
    lines: 0x4faedc,
    glow: 0x22d3ee,
  },
}

const MarqueeGeometryOverlay = ({
  className = '',
  accent = 'violet',
}: IMarqueeGeometryOverlay) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrapper = wrapperRef.current

    if (!canvas || !wrapper) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100)
    camera.position.set(0, 0, 18)

    const group = new THREE.Group()
    scene.add(group)

    const colors = palette[accent]
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: colors.lines,
      wireframe: true,
      transparent: true,
      opacity: 0.34,
    })

    const solidMaterial = new THREE.MeshBasicMaterial({
      color: colors.glow,
      transparent: true,
      opacity: 0.08,
    })

    const meshes: THREE.Object3D[] = []
    const geometries = [
      new THREE.IcosahedronGeometry(1.6, 0),
      new THREE.TorusKnotGeometry(1.15, 0.24, 84, 10),
      new THREE.OctahedronGeometry(1.35, 0),
      new THREE.TetrahedronGeometry(1.3, 0),
    ]

    geometries.forEach((geometry, index) => {
      const wireframe = new THREE.Mesh(geometry, wireMaterial)
      const glow = new THREE.Mesh(geometry, solidMaterial)
      const container = new THREE.Group()
      const direction = index % 2 === 0 ? 1 : -1

      container.position.set(-8 + (index * 5.2), direction * 0.8, -2 + (index % 3))
      container.rotation.set(index * 0.4, index * 0.25, index * 0.15)
      container.userData = {
        speed: 0.0025 + index * 0.0006,
        drift: direction * (0.002 + index * 0.0004),
        seed: index * 1.7,
      }

      glow.scale.setScalar(1.08)
      container.add(glow)
      container.add(wireframe)
      group.add(container)
      meshes.push(container)
    })

    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambient)

    const resize = () => {
      const bounds = wrapper.getBoundingClientRect()
      const width = Math.max(bounds.width, 1)
      const height = Math.max(bounds.height, 1)
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    let frame = 0

    const render = () => {
      const time = performance.now() * 0.001

      meshes.forEach((mesh) => {
        const { speed, drift, seed } = mesh.userData as {
          speed: number
          drift: number
          seed: number
        }

        mesh.rotation.x += speed
        mesh.rotation.y -= speed * 1.2
        mesh.position.y += Math.sin(time + seed) * 0.0028
        mesh.position.x += Math.cos((time * 0.6) + seed) * drift * 0.3
      })

      group.rotation.y = Math.sin(time * 0.22) * 0.12
      renderer.render(scene, camera)

      if (!prefersReducedMotion) {
        frame = window.requestAnimationFrame(render)
      }
    }

    resize()
    render()

    const observer = new ResizeObserver(resize)
    observer.observe(wrapper)
    window.addEventListener('resize', resize)

    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('resize', resize)
      geometries.forEach((geometry) => geometry.dispose())
      wireMaterial.dispose()
      solidMaterial.dispose()
      renderer.dispose()
    }
  }, [accent])

  return (
    <div
      ref={wrapperRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="h-full w-full opacity-90" />
    </div>
  )
}

export default MarqueeGeometryOverlay
