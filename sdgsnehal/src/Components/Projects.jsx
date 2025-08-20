import Sass from "../assets/saas.webp";
import Bank from "../assets/Bank.webp";

import Task from "../assets/task.webp";
import price from "../assets/price.webp";
import Probox from "./Probox";
import "./Projects.scss";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <Probox
                title="Task App"
                img={Task}
                date="(February 2024)"
                description="A task management app that helps users organize and prioritize their tasks efficiently."
                techno1="Nextjs"
                techno2="Tailwind css"
                code="https://github.com/sdgsnehal/taskfy"
                demo="https://cbstask.vercel.app/"
                scrollY="-83%"
                icon="🚗"
              />

              <Probox
                title="PriceWise"
                date="(February 2023)"
                img={price}
                description="PriceWise is a Next.js + TypeScript project styled with Tailwind CSS, providing a reactive UI scaffold for price tracking and comparison."
                techno1="Next.js"
                techno2="TypeScript"
                code="https://github.com/sdgsnehal/pricevise"
                demo="https://pricevise.vercel.app/"
                scrollY="-74%"
                icon="🪙"
                cName="reversed-proj"
              />

              <Probox
                title="HooBank"
                date="(January 2023)"
                img={Bank}
                description="HooBank is a modern and responsive banking landing page built with React and Tailwind CSS. It showcases a next-generation payment solution with sleek UI, animations in a clean, professional way"
                techno1="React"
                techno2="Tailwind CSS"
                code="https://github.com/sdgsnehal/HooBank"
                demo="https://hoo-bank-pi-two.vercel.app/"
                scrollY="-89%"
                icon="🏋️"
              />

              <Probox
                title="SaaS"
                date="(December 2022)"
                img={Sass}
                description="A clean, modern, and responsive SaaS website template built with React and Tailwind CSS. It features sections for product highlights, pricing plans, testimonials, and a call-to-action, making it perfect for showcasing SaaS products and boosting conversions"
                techno1="Next js"
                techno2="Framer Motion"
                code="https://github.com/sdgsnehal/light-saas-landing-page"
                demo="https://light-saas-landing-page-ten.vercel.app/"
                scrollY="-71%"
                icon="🛒"
                cName="reversed-proj"
              />
            </div>
          </div>
          {/* <h2 className="new-projects">New projects coming soon.. 🤠</h2> */}
        </div>
      </section>
    </>
  );
}

export default Projects;
