"use client";
import Graph from "@/components/Graph";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Home() {
  const [device, setDevice] = useState("desktop");
  return (
    <div className="w-screen">
      <h1 className="text-4xl font-bold align-middle text-center mt-10">
        SpeedVitals Internship Assessment
      </h1>
      <div className="flex flex-col md:flex-row  justify-center mt-8  items-center">
        <span className="font-bold text-xl text-gray-600 md:mr-8">
          Choose a Device
        </span>
        <div className="w-[160px]">
          <Select onValueChange={(value) => setDevice(value)} value={device}>
            <SelectTrigger>
              <SelectValue placeholder="Select a Device" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desktop">
                <span className="text-gray-600">Desktop</span>
              </SelectItem>
              <SelectItem value="mobile">
                <span className="text-gray-600">Mobile</span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 m-8 p-5">
        {/* Graph for LCP */}
        <Graph metric="lcp" device={device} />

        {/* Graph for CLS */}
        <Graph metric="cls" device={device} />
      </div>
    </div>
  );
}
