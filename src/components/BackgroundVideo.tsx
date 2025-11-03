"use client";

import React from "react";

type BackgroundVideoProps = {
  src?: string;
  poster?: string;
  className?: string;
};

export default function BackgroundVideo({
  src = "/News_Website_Background_Video_Generation.mp4",
  poster,
  className = "",
}: BackgroundVideoProps) {
  return (
    <div className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden ${className}`} aria-hidden>
      <video
        className="h-full w-full object-cover motion-safe:opacity-100 motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}


