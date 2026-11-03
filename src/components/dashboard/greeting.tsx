"use client";

import { useEffect, useState } from "react";

function greetingFor(hour: number) {
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export function Greeting({ name }: { name: string }) {
  // Starts neutral so server and browser render the same HTML, then uses the browser's clock
  const [text, setText] = useState("Hello");
  useEffect(() => setText(greetingFor(new Date().getHours())), []);

  return (
    <div>
      <h1 className="text-xl font-semibold text-navy">
        {text}, {name}
      </h1>
      <p className="mt-0.5 text-sm text-gray-500">
        Here&apos;s what&apos;s happening with your store today.
      </p>
    </div>
  );
}
