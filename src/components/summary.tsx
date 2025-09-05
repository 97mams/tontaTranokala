"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";

export function Summary(props: {
  projects: Array<{ id: number; name: string; GroupSite: { title: string } }>;
  active: number;
}) {
  const [activeSection, setActiveSection] = useState<String>(
    props.projects[0].name + props.projects[0].id
  );

  console.log(activeSection === props.projects[0].name + props.projects[0].id);

  useEffect(() => {
    const handleScroll = () => {
      let current = props.projects[0].name + props.projects[0].id;
      props.projects.forEach((section) => {
        const element = document.getElementById(section.name + section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) current = section.name + section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scroll({
        top: element.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <Card className="w-70 absolute right-8 top-70">
      <CardContent>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
          Résumé
        </h3>
        <p className="text-muted-foreground text-sm">
          Voici un aperçu de vos projets.
        </p>
        <h4 className="capitalize text-xl">
          {props.projects[0].GroupSite.title}
        </h4>
        <ul>
          {props.projects.map((project) => (
            <li
              key={project.id}
              className={`
                text-sm ml-3 mb-2 capitalize
              `}
              onClick={() => scrollToSection(project.name + project.id)}
            >
              <a
                href={project.name + project.id}
                className={
                  activeSection === project.name + project.id ? "underline" : ""
                }
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
