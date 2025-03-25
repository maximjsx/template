"use client";

import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Snippet } from "@heroui/snippet";
import ElasticLine from "@/fancy/components/physics/elastic-line";

export default function InstallationPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center text-center">
      <header className="mb-8">
        <title>Installation</title>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-4xl font-bold">
          Project Installation
        </TextAnimate>
      </header>

      <section className="mb-12 w-full max-w-2xl">
        <TextAnimate animation="fadeIn" by="word" className="text-lg">
          Clone and Install the Project Template
        </TextAnimate>

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
        <div className="mt-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Clone Repository</h2>
            <Snippet>
              git clone https://github.com/maximjsx/template.git
            </Snippet>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Install Dependencies</h2>
            <Snippet>npm install</Snippet>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Run Development Server
            </h2>
            <Snippet>npm run dev</Snippet>
          </div>
        </div>
      </section>
    </div>
  );
}
