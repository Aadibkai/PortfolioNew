"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Crypto",
    description:
      "CryptoTrack is a comprehensive cryptocurrency tracking and management application designed for both novice and experienced traders. The app provides real-time price updates",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aadibkai/Crypto-Currancy",
    previewUrl: "",
  },
  {
    id: 2,
    title: "ExpenseEase",
    description:
      "ExpenseEase is an intuitive app designed to help you manage your finances effortlessly. Track daily expenses, set budgets, and categorize spending to gain insights into your financial habits.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description:
      "dynamic e-commerce platform designed to provide a seamless shopping experience for users. Our website offers a wide range of products, from electronics to fashion, ensuring there is something for everyone",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aadibkai/Shopping",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Movie App",
    description:
      "CineView is your ultimate companion for discovering and enjoying movies. Whether you're a cinephile or casual viewer, CineView offers a rich array of features to enhance your movie-watching experience",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Aadibkai/Movie-App",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Chat-App",
    description:
      "ChatNow is a modern and versatile messaging application designed to keep you connected with friends, family, and colleagues. Whether you're chatting one-on-one or in groups, ChatNow offers a seamless communication experience with a variety of feature",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aadibkai/chat-app",
    previewUrl: "https://main--chatttapppp.netlify.app/",
  },
  {
    id: 6,
    title: " Travling Web",
    description:
      "Travel is your gateway to seamless travel planning and booking experiences. Whether you're dreaming of a tropical getaway, a cultural adventure, or a business trip, TravelVista offers a comprehensive suite of features to cater to your travel needs",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aadibkai/Airnb",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6"></div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
