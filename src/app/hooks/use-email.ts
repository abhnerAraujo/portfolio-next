"use client";
import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";

export function useEmail() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState("");
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    const target: HTMLFormElement = e.target as HTMLFormElement;
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      )
      .then(
        () => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage("");
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          console.log(error);
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage("");
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    target.reset();
  };

  return { isSubmitting, stateMessage, sendEmail };
}
