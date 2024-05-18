"use client";
import "./styles.scss";

import { Orbitron } from "next/font/google";
import * as Button from "../button";
import { Input } from "../input";
import { Social } from "../social";
import { Textarea } from "../textarea";

const orbitron = Orbitron({ subsets: ["latin"], weight: "600" });

export function Footer() {
  const heading2Class = "text-4xl " + orbitron.className;

  return (
    <>
      <h2 className={heading2Class}>Contact Me</h2>

      <div className="flex">
        <form className="lg:w-1/2 w-full flex-1">
          <div className="grid w-full mb-4">
            <div className="flex align-baseline justify-between">
              <label>Email</label>
              <span className="hidden">Invalid Email</span>
              <span className="hidden">Required</span>
            </div>
            <div className="w-full">
              <Input size="full" placeholder="Email" />
            </div>
          </div>
          <div className="grid w-full mb-4">
            <div className="flex align-baseline justify-between">
              <label>Content</label>
              <span className="hidden">Invalid Email</span>
              <span className="hidden">Required</span>
            </div>
            <div className="w-full">
              <Textarea size="full" placeholder="Say something..." />
            </div>
          </div>

          <div className="flex justify-end">
            <Button.Root type="flat">
              <button className="w-full lg:w-fit">Send</button>
            </Button.Root>
          </div>
        </form>
        <div className="flex-1 flex flex-col justify-end items-end">
          <Social />
        </div>
      </div>
    </>
  );
}
