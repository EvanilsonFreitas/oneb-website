import { useEffect, useRef } from 'react';
import './AnimatedLogo.css';

export function AnimatedLogo({ className = '' }: { className?: string }) {
  const logoRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const separatorRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const isExploding = useRef(false);
  const timeoutsRef = useRef<Set<number>>(new Set());
  const createParticleRef = useRef<() => void>(() => {});

  useEffect(() => {
    if (!logoRef.current || !wordRef.current || !separatorRef.current || !cursorRef.current) return;

    const logo = logoRef.current;
    const word = wordRef.current;
    const separator = separatorRef.current;
    const cursor = cursorRef.current;

    // =========================
    // PARTICULAS ORBITAIS COM VIDA
    // =========================

    function createParticle() {
      if (!logo || isExploding.current) return;
      const particle = document.createElement('div');
      particle.className = 'animated-logo-particle';
      logo.appendChild(particle);
      animateParticle(particle);
    }

    createParticleRef.current = createParticle;

    function animateParticle(particle: HTMLDivElement) {
      const radius = 48 + Math.random() * 11;
      const size = 1 + Math.random() * 2.5;
      const duration = 5000 + Math.random() * 6000;
      const start = Math.random() * 360;

      particle.style.width = size + 'px';
      particle.style.height = size + 'px';

      particle.animate(
        [
          {
            transform: `translate(-50%,-50%) rotate(${start}deg) translateX(${radius}px) scale(.2)`,
            opacity: 0,
          },
          {
            transform: `translate(-50%,-50%) rotate(${start + 120}deg) translateX(${radius}px) scale(1)`,
            opacity: 0.8,
          },
          {
            transform: `translate(-50%,-50%) rotate(${start + 240}deg) translateX(${radius}px) scale(.8)`,
            opacity: 0.5,
          },
          {
            transform: `translate(-50%,-50%) rotate(${start + 360}deg) translateX(${radius}px) scale(.1)`,
            opacity: 0,
          },
        ],
        {
          duration: duration,
          easing: 'linear',
        }
      );

      const t = window.setTimeout(() => {
        timeoutsRef.current.delete(t);
        if (logo.contains(particle)) {
          particle.remove();
        }
        createParticle();
      }, duration);
      timeoutsRef.current.add(t);
    }

    for (let i = 0; i < 28; i++) {
      createParticle();
    }

    // =========================
    // TYPEWRITER CLEAN
    // =========================
    const words = ['Business Intelligence', 'Consulting', 'Data Science', 'Automation'];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let firstCycle = true;
    let typeTimeout: number;

    function smoothText(text: string) {
      word.classList.remove('animated-logo-enter');
      void word.offsetWidth;
      word.textContent = text;
      word.classList.add('animated-logo-enter');
    }

    function blinkTimes(element: HTMLElement, times: number, speed = 350): Promise<void> {
      return new Promise((resolve) => {
        let count = 0;
        element.style.opacity = '1';

        const timer = setInterval(() => {
          element.style.opacity = element.style.opacity === '0' ? '1' : '0';
          count++;

          if (count >= times * 2) {
            clearInterval(timer);
            element.style.opacity = '1';
            resolve();
          }
        }, speed);
      });
    }

    async function typingEffect() {
      const currentWord = words[wordIndex];

      if (!deleting) {
        separator.style.visibility = 'visible';
        separator.style.animation = 'none';
        separator.style.opacity = '1';

        cursor.style.visibility = 'visible';
        cursor.classList.remove('animated-logo-dot');
        cursor.textContent = '|';

        smoothText(currentWord.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex === currentWord.length) {
          cursor.classList.add('animated-logo-dot');
          cursor.textContent = '.';

          await blinkTimes(cursor, 3, 350);

          deleting = true;
          cursor.style.visibility = 'hidden';

          separator.style.visibility = 'visible';
          separator.style.animation = 'none';
          separator.style.opacity = '1';

          return typingEffect();
        }
      } else {
        smoothText(currentWord.substring(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          deleting = false;
          wordIndex++;

          if (wordIndex >= words.length) {
            wordIndex = 0;
          }

          cursor.style.visibility = 'hidden';
          separator.style.visibility = 'visible';

          if (firstCycle) {
            await blinkTimes(separator, 2, 350);
            firstCycle = false;
          } else {
            separator.style.opacity = '1';
            separator.style.animation = 'none';
          }

          return typingEffect();
        }
      }

      typeTimeout = window.setTimeout(typingEffect, deleting ? 80 : 140);
    }

    separator.style.visibility = 'visible';
    cursor.style.visibility = 'hidden';
    typingEffect();

    return () => {
      timeoutsRef.current.forEach((t) => clearTimeout(t));
      timeoutsRef.current.clear();
      clearTimeout(typeTimeout);
    };
  }, []);

  const handleExplosion = () => {
    if (!logoRef.current || isExploding.current) return;
    const logo = logoRef.current;
    
    isExploding.current = true;

    // Dispatch event to push background canvas particles away
    const rect = logo.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    window.dispatchEvent(
      new CustomEvent('logoExplosion', {
        detail: { x: centerX, y: centerY },
      })
    );

    // Clear all ambient timeouts so no new ambient particles spawn during explosion
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current.clear();

    const existingParticles = Array.from(logo.querySelectorAll('.animated-logo-particle')) as HTMLDivElement[];
    
    existingParticles.forEach((particle) => {
      // Cancel the current orbit animation
      const animations = particle.getAnimations();
      animations.forEach(a => a.cancel());
      
      const angle = Math.random() * Math.PI * 2;
      const velocity = 250 + Math.random() * 400; // Explode further
      const duration = 1500 + Math.random() * 1000; // Slower explosion (1.5s to 2.5s)
      
      particle.animate([
        {
          transform: `translate(-50%, -50%) scale(1.5)`,
          opacity: 1
        },
        {
          transform: `translate(calc(-50% + ${Math.cos(angle) * velocity}px), calc(-50% + ${Math.sin(angle) * velocity}px)) scale(0)`,
          opacity: 0
        }
      ], {
        duration,
        easing: 'cubic-bezier(0.15, 1, 0.3, 1)',
        fill: 'forwards'
      });
      
      setTimeout(() => {
        if (logo.contains(particle)) {
          particle.remove();
        }
      }, duration);
    });

    // After explosion, restart the ambient particles
    setTimeout(() => {
      isExploding.current = false;
      for (let i = 0; i < 28; i++) {
        createParticleRef.current();
      }
    }, 2500); // Wait 2.5s for explosion to fully clear
  };

  return (
    <div className={`animated-logo-container ${className}`} onClick={handleExplosion}>
      <div className="animated-logo-hero">
        <div className="animated-logo-wrapper">
          <div className="animated-logo-circle" ref={logoRef}>
            <div className="animated-logo-blackhole"></div>
          </div>
        </div>

        <div className="animated-logo-brand">
          <span className="animated-logo-brand-name">OneB</span>
          <span className="animated-logo-separator" ref={separatorRef}>
            |
          </span>
          <span className="animated-logo-typing">
            <span id="animated-logo-word" ref={wordRef}></span>
            <span className="animated-logo-cursor" ref={cursorRef}>
              |
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
