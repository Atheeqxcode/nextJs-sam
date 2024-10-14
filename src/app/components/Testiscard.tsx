'use client';
// import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testis = [
    {
      quote: "The platform has revolutionized how our team collaborates. With real-time updates and seamless version control, we can now work faster and more efficiently. No more outdated files or communication gaps. It's truly been a game-changer for our workflow, and I highly recommend it to any team looking to boost productivity and improve collaboration across departments.",
      name: "Emily Johnson",
      title: "Project Manager at Tech Solutions"
    },
    {
      quote: "As a freelance developer, using this platform has allowed me to focus more on coding and less on managing files and updates. The real-time changes ensure that I am always working on the latest version, and the collaborative tools make working with clients much easier. It's like having a virtual office space where everyone stays on the same page.",
      name: "David Roberts",
      title: "Freelance Web Developer"
    },
    {
      quote: "This tool has completely streamlined our internal processes. From managing client feedback to tracking changes, it has made everything so much more efficient. The real-time collaboration features have significantly reduced project delays, and the version control system ensures that we never lose track of progress. Our entire team is more aligned and productive.",
      name: "Sarah Lee",
      title: "Creative Director at DesignLab"
    },
    {
      quote: "Implementing this platform was one of the best decisions we made for our startup. It has greatly simplified project management, and our team now collaborates better than ever. The real-time updates and version control features keep everyone on track, and the productivity boost is noticeable. I can't imagine going back to the old ways of managing projects.",
      name: "Jake Matthews",
      title: "Co-Founder & CTO at InnovateTech"
    },
    {
      quote: "Using this platform has transformed how we manage our projects. The ability to collaborate in real time with team members across different locations has been a huge asset to our organization. We've saved countless hours on version control, and the platform has allowed us to stay organized, improve communication, and deliver projects faster.",
      name: "Laura Green",
      title: "Operations Manager at Global Solutions"
    }
  ];
  
function Testiscard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black

dark:bg-grid-white/[0.2] relative flex flex-col

items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8

z-10">
            Hear our Voice of Success
        </h2>
        <div className="flex justify-center w-full

overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
        items={testis}
        direction="right"
        speed="slow"
      />
            </div>
        </div>
     
    </div>
  )
}

export default Testiscard
