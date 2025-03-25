"use client";

import React, { forwardRef, ReactNode, Ref } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

type CircleProps = {
  className?: string;
  children?: ReactNode;
};

const Circle = forwardRef<HTMLDivElement, CircleProps>(
  ({ className, children }: CircleProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 hover:scale-105 transition-all duration-100 cursor-grab flex size-12 items-center justify-center rounded-full border-1 bg-white p-0.5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className
        )}>
        {children}
      </div>
    );
  }
);

Circle.displayName = "Circle";

export function TechConnections() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const div1Ref = React.useRef<HTMLDivElement>(null);
  const div2Ref = React.useRef<HTMLDivElement>(null);
  const div3Ref = React.useRef<HTMLDivElement>(null);
  const div4Ref = React.useRef<HTMLDivElement>(null);
  const div5Ref = React.useRef<HTMLDivElement>(null);
  const div6Ref = React.useRef<HTMLDivElement>(null);
  const div7Ref = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}>
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center">
            <Circle ref={div1Ref}>
              <Image
                src="/techicons/fancycomponents.ico"
                alt="favicon"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Circle>
            <span className="mt-2 text-xs font-medium">Fancy Components</span>
          </div>
          <div className="flex flex-col items-center">
            <Circle ref={div5Ref}>
              <Image
                src="/techicons/nextjs.png"
                alt="Favicon"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Circle>
            <span className="mt-2 text-xs font-medium">Next.js</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center">
            <Circle ref={div2Ref}>
              <Image
                src="/techicons/heroui.png"
                alt="Favicon"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Circle>
            <span className="mt-2 text-xs font-medium">Hero UI</span>
          </div>
          <div className="flex flex-col items-center">
            <Circle ref={div4Ref} className="size-16">
              <Image
                src="/favicon.ico"
                alt="Favicon"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Circle>
            <span className="mt-2 text-xs font-medium">Template</span>
          </div>
          <div className="flex flex-col items-center">
            <Circle ref={div6Ref}>
              <Image
                src="/techicons/aceternity.png"
                alt="Favicon"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Circle>
            <span className="mt-2 text-xs font-medium">Aceternity</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center">
            <Circle ref={div3Ref}>
              <Image
                src="/techicons/magicui.png"
                alt="Favicon"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Circle>
            <span className="mt-2 text-xs font-medium">Magic UI</span>
          </div>
          <div className="flex flex-col items-center">
            <Circle ref={div7Ref}>
              <Image
                src="/techicons/shadcn.png"
                alt="Favicon"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Circle>
            <span className="mt-2 text-xs font-medium">Shadcn</span>
          </div>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
