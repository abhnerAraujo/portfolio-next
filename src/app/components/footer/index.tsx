"use client";
import "./styles.scss";

import { useEmail } from "@/app/hooks/use-email";
import { Orbitron } from "next/font/google";
import { useEffect } from "react";
import * as Button from "../button";
import { Input } from "../input";
import { Social } from "../social";
import { Textarea } from "../textarea";

const orbitron = Orbitron({ subsets: ["latin"], weight: "600" });

export function Footer() {
  const heading2Class = "mb-8 text-4xl " + orbitron.className;
  const { isSubmitting, stateMessage, sendEmail } = useEmail();

  useEffect(() => {}, [isSubmitting, stateMessage]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-10 lg:max-w-screen-xl w-full lg:m-auto">
      <div className="lg:flex-1">
        <h2 id="find-me" className={heading2Class}>
          Find Me
        </h2>
        <Social type="full" />
      </div>
      <div className="divider"></div>
      <div className="lg:flex-1 flex flex-col">
        <h2 id="contact" className={heading2Class}>
          Contact me
        </h2>
        <form className="w-full flex-1" onSubmit={sendEmail}>
          <div className="grid w-full mb-4">
            <div className="flex align-baseline justify-between">
              <label>Email</label>
              <span className="hidden">Invalid Email</span>
              <span className="hidden">Required</span>
            </div>
            <div className="w-full">
              <Input>
                <input
                  type="text"
                  name="from_email"
                  placeholder="name@company.com"
                  className="rounded-lg p-4 h-14 text-lg w-full"
                />
              </Input>
            </div>
          </div>
          <div className="grid w-full mb-4">
            <div className="flex align-baseline justify-between">
              <label>Content</label>
              <span className="hidden">Invalid Email</span>
              <span className="hidden">Required</span>
            </div>
            <div className="w-full">
              <Textarea>
                <textarea
                  name="message"
                  placeholder="Say something..."
                  className="rounded-lg p-4 min-h-24 text-lg w-full"
                ></textarea>
              </Textarea>
            </div>
          </div>

          <div className="flex justify-end">
            <Button.Root type="flat">
              <button className="w-full lg:w-2/5">Send</button>
            </Button.Root>
          </div>
          {stateMessage && (
            <div className="text-center text-lg mt-4">{stateMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
}
