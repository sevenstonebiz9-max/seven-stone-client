"use client";

import Image from "next/image";
import React from "react";

type ProgramCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  alt?: string;
  className?: string;
};

const ProgramCard: React.FC<ProgramCardProps> = ({
  imageSrc,
  title,
  description,
  alt = "Program image",
  className = "",
}) => {
  return (
    <article
      className={`relative w-full h-[26rem] md:h-[32rem] rounded-2xl overflow-hidden shadow-lg ${className} group`}
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-center group-hover:scale-105 transition-all duration-500"
        priority={false}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h3 className="text-white text-2xl md:text-3xl font-semibold drop-shadow-sm">
          {title}
        </h3>
        <p className="mt-2 text-base md:text-base text-gray-200/90 max-w-md">
          {description}
        </p>

        {/* Glass-style button */}
        <button
          className="mt-5 pointer-events-none select-none rounded-full px-6 py-2 text-sm md:text-base font-medium backdrop-blur-md bg-white/5 border border-white/25 text-white shadow-sm"
          aria-disabled="true"
        >
          Coming Soon
        </button>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black/40 to-transparent" />
    </article>
  );
};

export default ProgramCard;
