import React from "react";
import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto flex flex-col  mt-28 p-3 items-center gap-6">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
        Take a look at all the cool stuff I've made!
      </p>
      <CallToAction />
    </div>
  );
}
