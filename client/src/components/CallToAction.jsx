import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="md:text-2xl text-xl">
          Want to see what I've been working on? Check it out here!
        </h2>
        <p className="text-gray-500 my-2">
          Explore My Portfolio for Creative Inspirations!
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://my-portfolio-pvg.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Portfolio
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          className="border border-gray-600"
          src="https://i.imgur.com/Mz4bCfb.png"
          alt="portfolio image"
        />
      </div>
    </div>
  );
}
