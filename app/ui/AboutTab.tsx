"use client";

import { useState } from "react";
import { tabContent, tabs } from "../lib/data";
import { ubuntu_sans } from "./fonts";

const AboutTab = () => {
  const [activeTab, setActiveTab] = useState<string>("tab2");

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col border-r-2 text-white">
        {tabs.map((tab) => (
          <button key={tab.id}
            className={`text-xl px-10 py-6 font-bold ${
              activeTab === tab.id
                ? "border-r-4 border-r-lima-400 text-fruit-salad-600"
                : "text-white hover:text-fruit-salad-600"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="text-white text-center ml-4">
        <p className={`${ubuntu_sans.className} text-base sm:text-lg w-[50vw]`}>
          {tabContent[activeTab as keyof typeof tabContent]}
        </p>
      </div>
    </div>
  );
};

export default AboutTab;
