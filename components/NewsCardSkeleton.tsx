"use client";

import { motion } from "framer-motion";

interface NewsCardSkeletonProps {
  index?: number;
}

const NewsCardSkeleton = ({ index = 0 }: NewsCardSkeletonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.2,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="block rounded-2xl overflow-hidden bg-white"
    >
      {/* Image Skeleton */}
      <div className="relative w-full h-52 bg-gray-200 animate-pulse" />

      {/* Content Skeleton */}
      <div className="py-6 px-5 flex flex-col justify-between h-full">
        <div>
          {/* Date Skeleton */}
          <div className="h-3 w-24 bg-gray-200 rounded animate-pulse mb-2" />

          {/* Title Skeleton */}
          <div className="space-y-2 mb-3">
            <div className="h-5 bg-gray-200 rounded animate-pulse w-full" />
            <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4" />
          </div>

          {/* Excerpt Skeleton */}
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
          </div>
        </div>

        {/* Read More Button Skeleton */}
        <div className="flex items-center gap-3">
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
          <div className="w-9 h-9 bg-gray-200 rounded-full animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCardSkeleton;