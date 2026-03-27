import Image from "next/image";
import { urlFor } from "../sanity/lib/sanity";
import { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;

      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).height(450).url()}
            alt={value.alt || "Article image"}
            width={800}
            height={450}
            className="rounded-xl shadow-md w-full object-cover"
          />
          {value.caption && (
            <p className="text-sm text-gray-600 text-center mt-2 italic">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },

  block: {
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-lg font-bold text-gray-900 mt-10 mb-5">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base font-semibold text-gray-800 mt-8 mb-4">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-6 text-justify">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-main-maroon pl-6 py-2 my-8 italic text-gray-700 bg-gray-50 rounded-r">
        {children}
      </blockquote>
    ),
  },

  
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-6">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-8 space-y-2 text-gray-700 mb-6">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;

      return (
        <a
          href={value.href}
          rel={rel}
          className="text-main-maroon underline hover:text-[#7A2C38] transition-colors"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
  },
};
