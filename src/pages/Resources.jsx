import React, { useState, useEffect, useId, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DarkVeil from '../component/DarkVeilBackground';
import "./Resources.css";

const cards = [
  {
    title: "Personal Projects",
    description: "A guide on how to make your own projects and share them with the community.",
    image: "https://images.pexels.com/photos/7869048/pexels-photo-7869048.jpeg",
    content:
      "Having a personal project is a way to make your resume better, but it also shows that you have a true interest in STEM. Your personal project can be simple, or it can be complex. As long as you are showing your skills and taking into consideration your intended major. "
  },
  {
    title: "Internships",
    description: "A guide on how to find and make the most of your internship experience.",
    image: "https://static.studyusa.com/course-category/applied-and-pure-sciences_md_1x.webp",
    content:
      "Internships are a great way to gain real-world experience in your field of interest. They help you build professional skills, make connections, and often lead to full-time job opportunities."
  },
  {
    title: "Women in STEM",
    description: "A guide on how to support and encourage women in science, technology, engineering, and mathematics.",
    image: "https://live.staticflickr.com/65535/49238278308_a5cf3bbd4f_b.jpg",
    content:
      "Babbu Maan is a Punjabi singer known for emotional and cultural storytelling."
  },
  {
    title: "Mentorship",
    description: "A guide on how to find and benefit from mentorship opportunities.",
    image: "https://www.greenbayymca.org/wp-content/uploads/2024/09/y-achievers-img5.jpg",
    content:
      "Mentorship is a valuable way to gain insights, guidance, and support from experienced professionals in your field."
  },
  {
    title: "Extracurriculars",
    description: "A guide on how to find and benefit from extracurricular activities.",
    image: "https://images.pexels.com/photos/17260648/pexels-photo-17260648/free-photo-of-robotics-event-for-children.jpeg",
    content:
      "Extracurricular activities are a great way to build leadership skills, explore interests, and make connections outside of the classroom."
  },
  {
    title: "Research Opportunities",
    description: "A guide on how to find and benefit from research opportunities.",
    image: "https://images.squarespace-cdn.com/content/v1/660310f08da6362acad70e42/1756921094005-MSJQNGASQTSEOHVUS586/Science.jpg",
    content:
      "Research opportunities are a great way to gain hands-on experience in your field of interest, work with experts, and contribute to scientific knowledge."
  },
  {
    title: "youth-led STEM initiatives",
    description: "A guide on how to find and benefit from youth-led STEM initiatives.",
    image: "https://live.staticflickr.com/8863/28247975656_e1a41fb921_b.jpg",
    content:
      "Youth-led STEM initiatives are programs run by young people to promote science, technology, engineering, and mathematics education and engagement."
  },
  {
    title: "underrepresented groups in STEM",
    description: "A guide on how to find and benefit from underrepresented groups in STEM.",
    image: "https://images.pexels.com/photos/9242855/pexels-photo-9242855.jpeg",
    content:
      "Underrepresented groups in STEM include women, minorities, and individuals from disadvantaged backgrounds who face barriers in pursuing science, technology, engineering, and mathematics careers."
  },
  {
    title: "public speaking and communication skills",
    description: "A guide on how to find and benefit from public speaking and communication skills.",
    image: "https://images.pexels.com/photos/17558086/pexels-photo-17558086.jpeg",
    content:
      "Public speaking and communication skills are essential for presenting ideas effectively, building confidence, and engaging with audiences in STEM fields."
  },
  {
    title: "academic pathways and college applications",
    description: "A guide on how to navigate academic pathways and college applications.",
    image: "https://cdn.prod.website-files.com/643507075046cf6dcb169402/672b3d9875015f19bfb411eb_aat-accounting-technician-pathway-for-bookkeepers-659f5012a22d7.webp",
    content:
      "Understanding academic pathways and college applications is crucial for students planning their future in STEM fields."
  },
  {
    title: "study abroad and international opportunities",
    description: "A guide on how to find and benefit from study abroad and international opportunities.",
    image: "https://c.pxhere.com/images/a7/c9/e15fcbe8e90577163fa57c3f1e33-1634253.jpg!d",
    content:
      "Study abroad and international opportunities are valuable ways to gain global perspectives, learn new languages, and build cross-cultural connections in STEM fields."
  },
   {
    title: "financial aid and scholarships",
    description: "A guide on how to find and benefit from financial aid and scholarships.",
    image: "https://static.studyusa.com/article/aws_Y2JOzRGA-GAxLWF7ks-mLrvGYnjwbobK_sm_2x.jpg?format=webp",
    content:
      "Financial aid and scholarships are essential resources for students pursuing STEM education, helping to reduce the cost of tuition and support academic success."
  },
   {
    title: "graduate school and advanced degrees",
    description: "A guide on how to find and benefit from graduate school and advanced degrees.",
    image: "https://images.pexels.com/photos/7713345/pexels-photo-7713345.jpeg",
    content:
      "Graduate school and advanced degrees are pathways for students to deepen their knowledge, specialize in a field, and pursue research or professional opportunities."
  },
  {
    title: "job search and career development",
    description: "A guide on how to find and benefit from job search and career development resources.",
    image: "https://prolinkworks.com/sites/default/files/styles/half/public/images/blog/istock-1365329872.jpg",
    content:
      "Job search and career development resources help students and professionals navigate the job market, build professional skills, and advance their careers in STEM fields."
  },
  {
    title: "key skills for STEM careers",
    description: "A guide on how to find and benefit from key skills for STEM careers.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Life_Skills.jpg",
    content:
      "Key skills for STEM careers include problem-solving, critical thinking, communication, teamwork, and adaptability. These skills are essential for success in any STEM field."
  },
  {
    title: "volunteering and community involvement",
    description: "A guide on how to find and benefit from volunteering and community involvement.",
    image: "https://www.greenbayymca.org/wp-content/uploads/2024/09/community-events-overview-slide.jpg",
    content:
      "Volunteering and community involvement are valuable ways to gain experience, build networks, and contribute to STEM initiatives in your local community."
  },
  {
    title: "balancing academics and extracurriculars",
    description: "A guide on how to find and benefit from balancing academics and extracurriculars.",
    image: "https://images.pexels.com/photos/7683730/pexels-photo-7683730.jpeg",
    content:
      "Balancing academics and extracurriculars is essential for maintaining a healthy lifestyle and achieving success in both areas."
  },
  {
    title: "mental health and wellness in STEM",
    description: "A guide on how to find and benefit from mental health and wellness resources in STEM fields.",
    image: "https://www.publicdomainpictures.net/pictures/620000/nahled/mental-health.jpg",
    content:
      "Mental health and wellness are crucial for students and professionals in STEM fields. This guide provides resources and strategies for maintaining mental well-being while pursuing academic and career goals."
  }
];

export default function Resources() {
  const [active, setActive] = useState(null);
  const id = useId();
  const modalRef = useRef(null);

  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  return (
    <>
    <section className="hero-wrapper">
  <div className="hero-bg">
    <DarkVeil
      hueShift={0}
      noiseIntensity={0}
      scanlineIntensity={0}
      speed={1}
      scanlineFrequency={0}
      warpAmount={0}
    />
  </div>

  <div className="hero-content">
    <h2 className="hero-top-title">Resource</h2>
    <p className="hero-top-sub">
      Your roadmap to success in STEM
    </p>
  </div>
</section>



      <AnimatePresence>
        {active && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="modal">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={modalRef}
              className="modal-card"
            >
              <motion.img
                layoutId={`image-${active.title}-${id}`}
                src={active.image}
                alt={active.title}
              />

              <div className="modal-content">
                <motion.h2 layoutId={`title-${active.title}-${id}`}>
                  {active.title}
                </motion.h2>
                <motion.p
                  layoutId={`desc-${active.description}-${id}`}
                  className="desc"
                >
                  {active.description}
                </motion.p>

                <p>{active.content}</p>
              </div>

              <button className="close" onClick={() => setActive(null)}>✕</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="resources-grid">
  {cards.map((card, i) => (
    <motion.div
      key={i}
      layoutId={`card-${card.title}-${id}`}
      className="resource-card"
      onClick={() => setActive(card)}

      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
      viewport={{ once: true }}
    >

            <motion.img
              layoutId={`image-${card.title}-${id}`}
              src={card.image}
              alt={card.title}
            />
            <div className="card-text">
              <motion.h3 layoutId={`title-${card.title}-${id}`}>
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`desc-${card.description}-${id}`}
                className="desc"
              >
                {card.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
