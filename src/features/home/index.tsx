"use client";
import React from "react";
import Hero from "./components/Hero";
import SectionRow from "./components/SectionRow";
import { bandungHomes, tangerangHomes } from "./data";

const HomeContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <Hero />
      <main className="mx-auto max-w-6xl w-full px-4 pb-20">
        <SectionRow title="Popular homes in Bandung" items={bandungHomes} />
        <SectionRow
          title="Available in Kabupaten Tangerang this weekend"
          items={tangerangHomes}
        />
      </main>
    </div>
  );
};

export default HomeContent;
