"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  threshold?: number; // How much of the element is visible (0.1 to 1.0)
}

const RevealOnScroll = ({ children, threshold = 0.2 }: RevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop watching once it's visible
        }
      },
      { 
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before it hits the view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;