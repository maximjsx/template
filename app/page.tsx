"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";
import { TechConnections } from "@/components/custom/tech-connections";
import ElasticLine from "@/fancy/components/physics/elastic-line";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 py-14 px-4 sm:px-6 min-h-screen flex flex-col items-center justify-center gap-2">
        <div className="relative flex h-full w-full items-center justify-center bg-white dark:bg-black">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:20px_20px]",
              "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
              "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)] dark:bg-black"></div>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white">
                NextJS Template
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                A powerful starter template combining NextJS, HeroUI, MagicUI
                Shadcn, and Aceternity UI. Designed for modern web development.
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/banner.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Template Thumbnail"
                />
              </CardItem>

              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/components"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  Components →
                </CardItem>

                <CardItem translateZ={20}>
                  <Button
                    color="primary"
                    variant="shadow"
                    size="sm"
                    as={Link}
                    href="/installation">
                    Get Started
                  </Button>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <div className="relative w-full max-w-4xl">
          <ElasticLine
            releaseThreshold={50}
            strokeWidth={2}
            animateInTransition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: 0.15,
            }}
          />
        </div>

        <div className="w-full max-w-4xl">
          <TechConnections />
        </div>
      </div>
    </div>
  );
}
