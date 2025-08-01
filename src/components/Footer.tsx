import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { isFilled } from "@prismicio/client";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <footer className="px-4 py-10 md:px-6 md:py-14 lg:py-16 text-slate-600">
      <div className="mx-auto w-full max-w-7xl">
        <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
          <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
            <Link
              href="/"
              className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-red-300"
            >
              {settings.data.name}
            </Link>
            <span
              className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
              aria-hidden={true}
            >
              /
            </span>
            <p className=" text-sm text-slate-300 ">
              © {new Date().getFullYear()} {settings.data.name}
            </p>
          </div>

          <div className="socials inline-flex justify-center sm:justify-end">
            {isFilled.link(settings.data.github) && (
              <PrismicNextLink
                field={settings.data.github}
                className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-red-300"
                aria-label={settings.data.name + " on GitHub"}
              >
                <FaGithub />
              </PrismicNextLink>
            )}
            {isFilled.link(settings.data.linkedin) && (
              <PrismicNextLink
                field={settings.data.linkedin}
                className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-red-300"
                aria-label={settings.data.name + " on LinkedIn"}
              >
                <FaLinkedin />
              </PrismicNextLink>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
