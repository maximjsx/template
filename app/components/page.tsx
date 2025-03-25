"use client";

import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import Image from "next/image";
import { Link } from "@heroui/link";
import ElasticLine from "@/fancy/components/physics/elastic-line";

const componentLibraries = [
  {
    name: "HeroUI",
    icon: "/techicons/heroui.png",
    description: "Installation of the button component",
    installCommandMap: {
      npm: "npm install @heroui/button",
      yarn: "yarn add @heroui/button",
      pnpm: "pnpm add @heroui/button",
      bun: "bun add @heroui/button",
    },
    docLink: "https://www.heroui.com/docs/components/button",
  },
  {
    name: "Aceternity UI",
    description: "Installation of the 3D card component",
    icon: "/techicons/aceternity.png",
    installCommandMap: {
      npm: "npx shadcn@latest add https://ui.aceternity.com/registry/3d-card.json",
    },
    docLink: "https://ui.aceternity.com/components/3d-card-effect",
  },
  {
    name: "Shadcn UI",
    icon: "/techicons/shadcn.png",
    description: "Installation of the button component",
    installCommandMap: {
      npm: "npx shadcn-ui@latest add button",
      yarn: "yarn dlx shadcn-ui@latest add button",
      pnpm: "pnpm dlx shadcn@latest add button",
      bun: "bunx --bun shadcn@latest add button",
    },
    docLink: "https://ui.shadcn.com/docs/components/button",
  },
  {
    name: "Magic UI",
    icon: "/techicons/magicui.png",
    description: "Installation of the shiny component",
    installCommandMap: {
      npm: `npx shadcn@latest add "https://magicui.design/r/shiny-button"`,
      yarn: `npx shadcn@latest add "https://magicui.design/r/shiny-button"`,
      pnpm: `pnpm dlx shadcn@latest add "https://magicui.design/r/shiny-button"`,
      bun: `bun x --bun shadcn@latest add "https://magicui.design/r/shiny-button"`,
    },
    docLink: "https://magicui.design/docs/components/shiny-button",
  },
  {
    name: "Fancy Components",
    icon: "/techicons/fancycomponents.ico",
    description: "Installation of the elastic line component",
    installCommandMap: {
      npm: `npx shadcn@latest add "https://fancycomponents.dev/r/elastic-line.json"`,
    },
    docLink:
      "https://www.fancycomponents.dev/docs/components/physics/elastic-line",
  },
];

export default function ComponentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <title>Components Overview</title>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-4xl font-bold">
          Components
        </TextAnimate>
      </header>

      <section className="mb-12">
        <TextAnimate
          animation="slideUp"
          by="word"
          className="text-center text-lg">
          Examples on how to add certain components from different UI libraries
          to this template
        </TextAnimate>

        <div className="mt-4 text-center text-yellow-500 flex items-center justify-center space-x-2">
          <TextAnimate
            animation="scaleUp"
            by="text"
            className="text-center text-sm">
            💡 Most of the following components are already installed in this
            template
          </TextAnimate>
        </div>

        <div className="w-full flex justify-center mt-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 justify-center">
          {componentLibraries.map((library) => {
            const domain = new URL(library.docLink).origin;
            const multipleOptions =
              Object.keys(library.installCommandMap).length > 1;
            return (
              <Card
                key={library.name}
                className="w-full max-w-[500px] mx-auto p-6 text-lg">
                <CardHeader className="flex gap-4 items-center">
                  <Image
                    alt={`${library.name} logo`}
                    height={50}
                    src={library.icon}
                    width={50}
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">{library.name}</p>
                    <p className="text-base text-default-500 truncate">
                      {domain}
                    </p>
                  </div>
                </CardHeader>

                <CardBody>
                  <p className="text-white font-bold w-full mb-4">
                    {library.description}
                  </p>

                  <div className="w-full">
                    <ScriptCopyBtn
                      className="w-full max-w-[700px] ml-0 mr-auto"
                      lightTheme="nord"
                      darkTheme="vitesse-dark"
                      commandMap={library.installCommandMap}
                      showMultiplePackageOptions={multipleOptions}
                      codeLanguage="shell"
                    />
                  </div>
                </CardBody>

                <CardFooter className="flex flex-col gap-4 items-start">
                  <div className="w-full">
                    <Link isExternal showAnchorIcon href={library.docLink}>
                      Visit {library.name} Documentation
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
