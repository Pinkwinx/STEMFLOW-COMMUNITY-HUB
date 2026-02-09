import React, { useState, useEffect, useMemo } from "react";
import "./Blog.css";
import MagicBento from "../component/MagicBento";
import LightPillar from "../component/LightPillarBackground";

/* BLOG DATA */
const blogPosts = [
  {
    id: 1,
    title: "How CRISPR Is Changing Medicine",
    description: "A beginner-friendly breakdown of gene editing.",
    category: "Biotech",
    image: "https://gamebeer.cz/storage/uploads/placeholder.png",
    content: (
      <>
        <p>CRISPR is a gene-editing tool that lets scientists modify DNA with extreme precision.</p>
        <p>It’s being used to research cancer treatments, genetic disorders, and even viruses.</p>
        <p>The future of medicine is heavily tied to this technology.</p>
      </>
    )
  },
  {
    id: 2,
    title: "AI in Space Exploration",
    description: "How machine learning helps NASA explore the universe.",
    category: "AI",
    image: "https://gamebeer.cz/storage/uploads/placeholder.png",
    content: (
      <>
        <p>AI analyzes telescope data faster than humans ever could.</p>
        <p>It helps identify exoplanets and map galaxies.</p>
      </>
    )
  },
  {
    id: 3,
    title: "Engineering Your First Robot",
    description: "Start building with Arduino and motors.",
    category: "Engineering",
    image: "https://gamebeer.cz/storage/uploads/placeholder.png",
    content: (
      <>
        <p>Robotics combines electrical engineering, programming, and mechanics.</p>
        <p>Arduino is the easiest place to start.</p>
      </>
    )
  },
  {
    id: 4,
    title: "Quantum Computing Explained",
    description: "Why qubits are different from bits.",
    category: "Physics",
    image: "https://gamebeer.cz/storage/uploads/placeholder.png",
    content: (
      <>
        <p>Qubits can be both 0 and 1 at the same time.</p>
        <p>This allows quantum computers to solve problems classical ones can’t.</p>
      </>
    )
  },
  {
    id: 5,
    title: "How CRISPR Is Changing Medicine",
    description: "A beginner-friendly breakdown of gene editing.",
    category: "Biotech",
    image: "https://gamebeer.cz/storage/uploads/placeholder.png",
    content: (
      <>
        <p>CRISPR is a gene-editing tool that lets scientists modify DNA with extreme precision.</p>
        <p>It’s being used to research cancer treatments, genetic disorders, and even viruses.</p>
        <p>The future of medicine is heavily tied to this technology.</p>
      </>
    )
  },
  {
    id: 6,
    title: "How CRISPR Is Changing Medicine",
    description: "A beginner-friendly breakdown of gene editing.",
    category: "Biotech",
    image: "https://gamebeer.cz/storage/uploads/placeholder.png",
    content: (
      <>
        <p>CRISPR is a gene-editing tool that lets scientists modify DNA with extreme precision.</p>
        <p>It’s being used to research cancer treatments, genetic disorders, and even viruses.</p>
        <p>The future of medicine is heavily tied to this technology.</p>
      </>
    )
  },
  {
    id: 7,
    title: "How CRISPR Is Changing Medicine",
    description: "A beginner-friendly breakdown of gene editing.",
    category: "Biotech",
    image: "https://gamebeer.cz/storage/uploads/placeholder.png",
    content: (
      <>
        <p>CRISPR is a gene-editing tool that lets scientists modify DNA with extreme precision.</p>
        <p>It’s being used to research cancer treatments, genetic disorders, and even viruses.</p>
        <p>The future of medicine is heavily tied to this technology.</p>
      </>
    )
  },
  {
    id: 8,
    title: "How CRISPR Is Changing Medicine",
    description: "A beginner-friendly breakdown of gene editing.",
    category: "Biotech",
    image: "https://gamebeer.cz/storage/uploads/placeholder.png",
    content: (
      <>
        <p>CRISPR is a gene-editing tool that lets scientists modify DNA with extreme precision.</p>
        <p>It’s being used to research cancer treatments, genetic disorders, and even viruses.</p>
        <p>The future of medicine is heavily tied to this technology.</p>
      </>
    )
  },
  {
    id: 9,
    title: "How CRISPR Is Changing Medicine",
    description: "A beginner-friendly breakdown of gene editing.",
    category: "Biotech",
    image: "https://gamebeer.cz/storage/uploads/placeholder.png",
    content: (
      <>
        <p>CRISPR is a gene-editing tool that lets scientists modify DNA with extreme precision.</p>
        <p>It’s being used to research cancer treatments, genetic disorders, and even viruses.</p>
        <p>The future of medicine is heavily tied to this technology.</p>
      </>
    )
  },
  {
    id: 10,
    title: "How CRISPR Is Changing Medicine",
    description: "A beginner-friendly breakdown of gene editing.",
    category: "Biotech",
    image: "https://gamebeer.cz/storage/uploads/placeholder.png",
    content: (
      <>
        <p>CRISPR is a gene-editing tool that lets scientists modify DNA with extreme precision.</p>
        <p>It’s being used to research cancer treatments, genetic disorders, and even viruses.</p>
        <p>The future of medicine is heavily tied to this technology.</p>
      </>
    )
  },
  {
    id: 11,
    title: "How CRISPR Is Changing Medicine",
    description: "A beginner-friendly breakdown of gene editing.",
    category: "Biotech",
    image: "https://gamebeer.cz/storage/uploads/placeholder.png",
    content: (
      <>
        <p>CRISPR is a gene-editing tool that lets scientists modify DNA with extreme precision.</p>
        <p>It’s being used to research cancer treatments, genetic disorders, and even viruses.</p>
        <p>The future of medicine is heavily tied to this technology.</p>
      </>
    )
  },
  {
    id: 12,
    title: "How CRISPR Is Changing Medicine",
    description: "A beginner-friendly breakdown of gene editing.",
    category: "Biotech",
    image: "https://gamebeer.cz/storage/uploads/placeholder.png",
    content: (
      <>
        <p>CRISPR is a gene-editing tool that lets scientists modify DNA with extreme precision.</p>
        <p>It’s being used to research cancer treatments, genetic disorders, and even viruses.</p>
        <p>The future of medicine is heavily tied to this technology.</p>
      </>
    )
  },
  {
    id: 13,
    title: "How CRISPR Is Changing Medicine",
    description: "A beginner-friendly breakdown of gene editing.",
    category: "Biotech",
    image: "https://gamebeer.cz/storage/uploads/placeholder.png",
    content: (
      <>
        <p>CRISPR is a gene-editing tool that lets scientists modify DNA with extreme precision.</p>
        <p>It’s being used to research cancer treatments, genetic disorders, and even viruses.</p>
        <p>The future of medicine is heavily tied to this technology.</p>
      </>
    )
  },
  {
    id: 14,
    title: "How CRISPR Is Changing Medicine",
    description: "A beginner-friendly breakdown of gene editing.",
    category: "Biotech",
    image: "https://gamebeer.cz/storage/uploads/placeholder.png",
    content: (
      <>
        <p>CRISPR is a gene-editing tool that lets scientists modify DNA with extreme precision.</p>
        <p>It’s being used to research cancer treatments, genetic disorders, and even viruses.</p>
        <p>The future of medicine is heavily tied to this technology.</p>
      </>
    )
  },
  {
    id: 15,
    title: "How CRISPR Is Changing Medicine",
    description: "A beginner-friendly breakdown of gene editing.",
    category: "Biotech",
    image: "https://gamebeer.cz/storage/uploads/placeholder.png",
    content: (
      <>
        <p>CRISPR is a gene-editing tool that lets scientists modify DNA with extreme precision.</p>
        <p>It’s being used to research cancer treatments, genetic disorders, and even viruses.</p>
        <p>The future of medicine is heavily tied to this technology.</p>
      </>
    )
  },
  {
    id: 16,
    title: "How CRISPR Is Changing Medicine",
    description: "A beginner-friendly breakdown of gene editing.",
    category: "Biotech",
    image: "https://gamebeer.cz/storage/uploads/placeholder.png",
    content: (
      <>
        <p>CRISPR is a gene-editing tool that lets scientists modify DNA with extreme precision.</p>
        <p>It’s being used to research cancer treatments, genetic disorders, and even viruses.</p>
        <p>The future of medicine is heavily tied to this technology.</p>
      </>
    )
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [closing, setClosing] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setSelectedPost(null);
      setClosing(false);
    }, 200);
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === "Escape" && selectedPost) closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPost]);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || post.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <>
      {/* HERO */}
      <section className="hero-wrapper">
        <div className="hero-bg">
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={0.9}
            rotationSpeed={2}
            glowAmount={0.002}
            pillarWidth={3}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={false}
            mixBlendMode="normal"
            quality="high"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h2 className="hero-top-title">STEMFLOW Blog</h2>
          <p className="hero-top-sub">Your weekly dose of STEM inspiration</p>
        </div>
      </section>

      <div className="blog-root">
        {/* FILTER BAR */}
        <div className="blog-toolbar">
          <input
            className="blog-search"
            placeholder="Search articles..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <select
            className="blog-filter"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>AI</option>
            <option>Biotech</option>
            <option>Engineering</option>
            <option>Physics</option>
          </select>
        </div>

        {/* CARDS */}
        <MagicBento
          onCardClick={setSelectedPost}
          customData={filteredPosts}
        />

        {/* MODAL */}
        {selectedPost && (
          <div
            className={`blog-modal-overlay ${closing ? "fade-out" : "fade-in"}`}
            onClick={closeModal}
          >
            <div
              className={`blog-modal ${closing ? "scale-out" : "scale-in"}`}
              onClick={e => e.stopPropagation()}
            >
              <button className="blog-modal-close" onClick={closeModal}>
                ✕
              </button>

              <h2>{selectedPost.title}</h2>

{selectedPost.image && (
  <img
    src={selectedPost.image}
    alt={selectedPost.title}
    className="blog-modal-image"
  />
)}

<p>{selectedPost.description}</p>

              <div className="blog-modal-body">
                {selectedPost.content}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
