"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

// const content = [
//     {
//       title: "Collaborative Building",
//       description:
//         "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//       content: (
//         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//           Collaborative Building
//         </div>
//       ),
//     },
//     {
//       title: "Real time changes",
//       description:
//         "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//       content: (
//         <div className="h-full w-full  flex items-center justify-center text-white">
         
//         </div>
//       ),
//     },
//     {
//       title: "Version control",
//       description:
//         "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//       content: (
//         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//           Version control
//         </div>
//       ),
//     },
//     {
//       title: "Running out of content",
//       description:
//         "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//       content: (
//         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//           Running out of content
//         </div>
//       ),
//     },
//   ];

const content = [
    {
      title: "Web Development Mastery",
      description:
        "Master the art of building modern, responsive websites from scratch. Learn HTML, CSS, JavaScript, and popular frameworks like React. Perfect for beginners and professionals looking to upgrade their skills.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Web Development
        </div>
      ),
      image: "/images/web-dev.jpg", // Image showing coding or web development
    },
    {
      title: "Data Science & Machine Learning",
      description:
        "Dive into data science and machine learning to gain insights from data. This course covers Python, machine learning algorithms, and data visualization techniques, empowering you to make data-driven decisions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--purple-500))] flex items-center justify-center text-white">
          Data Science & ML
        </div>
      ),
      image: "/images/data-science.jpg", // Image showing data analysis or AI
    },
    {
      title: "Database Management Systems",
      description:
        "Learn how to design, build, and manage databases. This course introduces SQL, NoSQL, and the fundamentals of database management systems, ensuring your data remains structured and accessible.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--teal-500))] flex items-center justify-center text-white">
          Database Management
        </div>
      ),
      image: "/images/dbms.jpg", // Image related to database systems or SQL
    },
    {
      title: "Data Structures & Algorithms",
      description:
        "Strengthen your problem-solving skills by mastering data structures and algorithms. This course is essential for coding interviews and helps you optimize performance with the right approach to complex problems.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          DSA Mastery
        </div>
      ),
      image: "/images/dsa.jpg", // Image showing algorithmic flow or coding
    },
    {
      title: "Collaborative Teamwork",
      description:
        "Work together with your team in real-time, sharing ideas and making decisions on the fly. This course focuses on team collaboration tools and best practices for managing remote or in-house teams.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--purple-500))] flex items-center justify-center text-white">
          Collaborative Teamwork
        </div>
      ),
      image: "/images/teamwork.jpg", // Image showing a team working together
    },
    {
      title: "Real-time Updates & Changes",
      description:
        "Stay updated with real-time changes across your projects. This course covers real-time syncing, collaboration tools, and how to manage updates in fast-paced environments without losing track of progress.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          Real-time Changes
        </div>
      ),
      image: "/images/real-time.jpg", // Image showing live data updates or syncing
    },
    {
      title: "Version Control with Git & GitHub",
      description:
        "Master version control with Git and GitHub. Learn how to collaborate with others, track changes, and manage your projects efficiently. Say goodbye to version confusion with hands-on Git workflows.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))] flex items-center justify-center text-white">
          Version Control
        </div>
      ),
      image: "/images/version-control.jpg", // Image related to Git, branches, or repositories
    },
  ];
  
function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
