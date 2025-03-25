"use client";

import React, { useState } from "react";
import { Button } from "@heroui/button";
import Link from "next/link";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  MoonFilledIcon,
  SunFilledIcon,
  GithubIcon,
  MenuIcon,
  CloseIcon,
} from "@/components/icons";

const routes = [
  { name: "Home", path: "/" },
  { name: "Installation", path: "/installation" },
  { name: "Components", path: "/components" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <HeroNavbar
      disableAnimation={true}
      isBordered
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between md:hidden w-full px-4">
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            Template
          </Link>
        </NavbarBrand>
        <div className="flex items-center gap-2">
          <Button
            isIconOnly
            variant="light"
            aria-label="GitHub"
            onPress={() => {
              window.open(
                "https://github.com/maximjsx/template",
                "_blank",
                "noopener,noreferrer"
              );
            }}>
            <GithubIcon className="h-5 w-5" />
          </Button>
          <Button
            isIconOnly
            variant="light"
            aria-label="Toggle theme"
            onPress={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? (
              <MoonFilledIcon className="h-5 w-5" />
            ) : (
              <SunFilledIcon className="h-5 w-5" />
            )}
          </Button>
          <Button
            isIconOnly
            variant="light"
            aria-label="Toggle Menu"
            onPress={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </Button>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-between w-full px-4">
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            Template
          </Link>
        </NavbarBrand>
        <NavbarContent className="flex gap-4" justify="center">
          {routes.map((route) => (
            <NavbarItem key={route.path} className="relative">
              <Link
                href={route.path}
                className={`text-sm font-medium transition-colors ${
                  pathname === route.path
                    ? "text-primary"
                    : "text-default-500 hover:text-primary"
                }`}>
                <motion.span
                  initial={false}
                  animate={{ y: pathname === route.path ? -3 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{ display: "inline-block" }}>
                  {route.name}
                </motion.span>
                {pathname === route.path && (
                  <motion.div
                    layoutId="navbar-underline"
                    initial={false}
                    className="absolute bottom-0 left-0 right-0 bg-primary"
                    style={{ height: "2px" }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end" className="gap-2">
          <NavbarItem className="flex items-center">
            <Button
              isIconOnly
              variant="light"
              aria-label="GitHub"
              onPress={() => {
                window.open(
                  "https://github.com/maximjsx/template",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}>
              <GithubIcon className="h-5 w-5" />
            </Button>
            <Button
              isIconOnly
              variant="light"
              aria-label="Toggle theme"
              onPress={() => setTheme(theme === "light" ? "dark" : "light")}>
              {theme === "light" ? (
                <MoonFilledIcon className="h-5 w-5" />
              ) : (
                <SunFilledIcon className="h-5 w-5" />
              )}
            </Button>
          </NavbarItem>
        </NavbarContent>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden absolute top-full left-0 right-0 bg-background shadow-md">
            <div className="flex flex-col p-4 space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={toggleMenu}
                  className={`text-sm font-medium transition-colors ${
                    pathname === route.path
                      ? "text-primary"
                      : "text-default-500 hover:text-primary"
                  }`}>
                  {route.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </HeroNavbar>
  );
}
