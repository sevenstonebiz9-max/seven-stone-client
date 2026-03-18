'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;

      const orbs = container.querySelectorAll<HTMLElement>('.parallax-orb');
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.4;
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center"
      style={{ background: '#faf7f5', fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* --- Background orbs --- */}
      <div
        className="parallax-orb absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 40% 40%, rgba(139,43,60,0.18) 0%, rgba(139,43,60,0.04) 60%, transparent 100%)',
          top: '-120px',
          right: '-180px',
          transition: 'transform 0.12s ease-out',
        }}
      />
      <div
        className="parallax-orb absolute pointer-events-none"
        style={{
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 60% 60%, rgba(168,75,88,0.14) 0%, rgba(168,75,88,0.03) 60%, transparent 100%)',
          bottom: '-80px',
          left: '-100px',
          transition: 'transform 0.18s ease-out',
        }}
      />
      <div
        className="parallax-orb absolute pointer-events-none"
        style={{
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(122,44,56,0.10) 0%, transparent 70%)',
          top: '38%',
          left: '8%',
          transition: 'transform 0.25s ease-out',
        }}
      />

      {/* --- Thin horizontal rule top --- */}
      <div
        className="absolute top-0 left-0 w-full"
        style={{ height: '3px', background: 'linear-gradient(90deg, #8B2B3C 0%, #A84B58 50%, transparent 100%)' }}
      />

      {/* --- Main card --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl w-full">

        {/* 404 large display */}
        <div className="relative mb-2 select-none" style={{ lineHeight: 1 }}>
          <span
            style={{
              fontSize: 'clamp(120px, 22vw, 220px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              background: 'linear-gradient(135deg, #8B2B3C 0%, #A84B58 40%, #C97080 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'block',
              animation: 'fadeSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) both',
            }}
          >
            404
          </span>
          {/* Decorative underline */}
          <div
            style={{
              height: '3px',
              width: '60%',
              margin: '0 auto',
              background: 'linear-gradient(90deg, transparent, #8B2B3C, transparent)',
              borderRadius: '2px',
              animation: 'expandWidth 0.9s 0.3s cubic-bezier(0.22,1,0.36,1) both',
            }}
          />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: '#8B2B3C',
            fontStyle: 'italic',
            fontWeight: 400,
            marginTop: '1.2rem',
            marginBottom: '0.5rem',
            letterSpacing: '0.02em',
            animation: 'fadeSlideUp 0.7s 0.15s cubic-bezier(0.22,1,0.36,1) both',
            opacity: 0,
          }}
        >
          This page seems to have wandered off.
        </p>

        {/* Description */}
        <p
          style={{
            fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)',
            color: '#6b5c5f',
            lineHeight: 1.75,
            maxWidth: '480px',
            marginBottom: '2.8rem',
            animation: 'fadeSlideUp 0.7s 0.28s cubic-bezier(0.22,1,0.36,1) both',
            opacity: 0,
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 400,
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Let&apos;s get you back on the right path.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            animation: 'fadeSlideUp 0.7s 0.4s cubic-bezier(0.22,1,0.36,1) both',
            opacity: 0,
          }}
        >
          {/* Primary button — matches navbar Contact Us */}
          <Link
            href="/"
            style={{
              background: 'linear-gradient(135deg, #8B2B3C 0%, #7A2C38 50%, #A84B58 100%)',
              color: '#fff',
              borderRadius: '999px',
              paddingLeft: '1.4rem',
              paddingRight: '0.7rem',
              paddingTop: '0.6rem',
              paddingBottom: '0.6rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontWeight: 600,
              fontSize: '0.92rem',
              letterSpacing: '0.03em',
              textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.2s',
              boxShadow: '0 4px 24px rgba(139,43,60,0.28)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.opacity = '0.9';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.opacity = '1';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            Back to Home
            <span
              style={{
                background: '#fff',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#8B2B3C',
                flexShrink: 0,
              }}
            >
              <IoArrowForwardOutline style={{ width: '17px', height: '17px', transform: 'rotate(-45deg)' }} />
            </span>
          </Link>

          {/* Secondary ghost button */}
          <Link
            href="/contact-us"
            style={{
              border: '1.5px solid rgba(139,43,60,0.35)',
              color: '#8B2B3C',
              borderRadius: '999px',
              padding: '0.6rem 1.6rem',
              display: 'inline-flex',
              alignItems: 'center',
              fontWeight: 600,
              fontSize: '0.92rem',
              letterSpacing: '0.03em',
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s, transform 0.2s',
              background: 'transparent',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(139,43,60,0.07)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Decorative divider */}
        <div
          style={{
            marginTop: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            width: '100%',
            maxWidth: '380px',
            animation: 'fadeSlideUp 0.7s 0.52s cubic-bezier(0.22,1,0.36,1) both',
            opacity: 0,
          }}
        >
          <div style={{ flex: 1, height: '1px', background: 'rgba(139,43,60,0.15)' }} />
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', color: '#b08a8f', textTransform: 'uppercase' }}>
            Quick Links
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(139,43,60,0.15)' }} />
        </div>

        {/* Quick links row */}
        <div
          style={{
            marginTop: '1.2rem',
            display: 'flex',
            gap: '1.4rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            animation: 'fadeSlideUp 0.7s 0.62s cubic-bezier(0.22,1,0.36,1) both',
            opacity: 0,
          }}
        >
          {[
            { label: 'About Us', href: '/about-us' },
            { label: 'Our Services', href: '/our-services' },
            { label: 'Programs', href: '/programs' },
            { label: 'News & Insights', href: '/news-and-insights' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: '#8B2B3C',
                fontSize: '0.83rem',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 600,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                opacity: 0.7,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '0.7')}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 right-0 w-full"
        style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #A84B58 100%)' }}
      />

      {/* Keyframe animations via style tag */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandWidth {
          from { width: 0; opacity: 0; }
          to   { width: 60%; opacity: 1; }
        }
      `}</style>
    </div>
  );
}