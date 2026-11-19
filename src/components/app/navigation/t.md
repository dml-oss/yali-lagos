"use client"

import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    quote: "Ordina gave our team a clearer rhythm for planning, sharing feedback, and moving work forward together.",
    name: "Maya Chen",
    role: "Operations Lead",
    brand: "Journey",
    image: "/testimonials/journey.png",
    alt: "Maya Chen, Operations Lead",
  },
  {
    quote: "Ordina stood out from the first moment. After a week, our entire team felt more structured, aligned, and clear on what to prioritize.",
    name: "Liam Hart",
    role: "Product Lead",
    brand: "AIVA",
    image: "/testimonials/aiva.png",
    alt: "Liam Hart, Product Lead",
  },
  {
    quote: "The level of clarity Ordina provides is incredible. Our projects stay organized, and collaboration finally feels effortless.",
    name: "Sofia Alvarez",
    role: "Team Lead, Product Strategy",
    brand: "Alexun",
    image: "/testimonials/alexun.png",
    alt: "Sofia Alvarez, Team Lead, Product Strategy",
  },
]

export function TestimonialCarousel() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveIndex(1)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      onPointerMove={(event) => {
        if (event.pointerType === "touch") return
        const card = (event.target as HTMLElement).closest<HTMLElement>("[data-testimonial-index]")
        if (!card) return
        const nextIndex = Number(card.dataset.testimonialIndex)
        setActiveIndex((currentIndex) => currentIndex === nextIndex ? currentIndex : nextIndex)
      }}
      onPointerLeave={() => setActiveIndex(1)}
      className="flex min-h-screen items-center bg-white px-6 py-12 text-white sm:px-10 lg:px-[6vw]"
      aria-label="Customer testimonials"
    >
      <div className="mx-auto flex w-full max-w-[1500px] gap-5 max-md:flex-col">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.name}
            testimonial={testimonial}
            isActive={activeIndex === index}
            onActivate={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

function TestimonialCard({
  testimonial,
  isActive,
  onActivate,
}: {
  testimonial: (typeof testimonials)[number]
  isActive: boolean
  onActivate: () => void
}) {
  return (
    <article
      data-testimonial-index={testimonials.indexOf(testimonial)}
      onFocus={onActivate}
      className="group flex min-h-[598px] min-w-0 overflow-hidden rounded-2xl transition-[flex-grow,background-color,padding] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] max-md:min-h-[460px]"
      style={{
        flexGrow: isActive ? 2.2 : 0.52,
        flexBasis: 0,
        backgroundColor: isActive ? "#171717" : "transparent",
        padding: isActive ? "1rem" : 0,
      }}
    >
      <div
        className="relative min-w-0 overflow-hidden rounded-xl bg-[#b9ccd0] transition-[flex-grow,flex-basis] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          flexGrow: isActive ? 0 : 1,
          flexShrink: isActive ? 0 : 1,
          flexBasis: isActive ? "235px" : "100%",
        }}
      >
        <img src={testimonial.image} alt={testimonial.alt} className="size-full object-cover" />
        <span className="absolute bottom-6 left-6 text-[27px] font-semibold tracking-[-0.05em]">{testimonial.brand}</span>
      </div>
      
      <div
        className="min-w-0 flex flex-col justify-between overflow-hidden py-7 transition-[flex-grow,flex-basis,opacity,padding] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          paddingRight: isActive ? "1.75rem" : 0,
          opacity: isActive ? 1 : 0,
        }}
      >
        <blockquote className="m-0 min-w-[300px] text-[clamp(25px,2.05vw,37px)] leading-[1.18] tracking-[-0.045em]">“{testimonial.quote}”</blockquote>
        <footer className="flex min-w-[220px] flex-col gap-1 text-[17px]">
          <strong className="font-medium">{testimonial.name}</strong>
          <span className="text-white/60">{testimonial.role}</span>
        </footer>
      </div>
    </article>
  )
}