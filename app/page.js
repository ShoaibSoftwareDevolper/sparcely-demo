import React from 'react';
import data from '@/app/api/data.js';

// Layout Sections (each section is its own component)
import Hero from './components/ui/Hero';
import AboutIntro from './components/sections/AboutIntro';
import TechStack from './components/sections/TechStack';
import AdBanner from './components/sections/AdBanner';
import WorksGrid from './components/sections/WorksGrid';
import VideoSection from './components/sections/VideoSection';
import ReviewsClients from './components/sections/ReviewsClients';
import Projects from './components/sections/projects';
import ServicesIntro from './components/sections/ServicesIntro';
import ProcessSection from './components/sections/ProcessSection';
import BlogSection from './components/sections/BlogSection';

const HomePage = () => {
    const homeData = data.pages.home;
    const worksData = data.pages.works.projects;
    return (
        <div className="flex flex-col bg-background">

            {/* 01 — HERO */}
            <div className="h-15 md:h-20" />
            <Hero />

            {/* 02 — ABOUT INTRO */}
            <AboutIntro content={homeData.sections[1].content} />

            <div className="h-40 md:h-80" />

            {/* 03 — PROJECT CASE (Horizontal Scroll) */}
            <Projects projects={worksData} />

            {/* 03.1 — TECH STACK */}
            <TechStack />

            <div className="h-32 md:h-60" />

            {/* 03.2 — SERVICES INTRO */}
            <ServicesIntro data={homeData.sections.find(s => s.id === 'services-intro')} />

            <div className="h-32 md:h-60" />

            {/* 03.3 — SYSTEM WORKFLOW */}
            <ProcessSection />

            <div className="h-32 md:h-40" />

            <ReviewsClients />
            <div className="h-32 md:h-40" />
            {/* 04 — AD BANNER */}
            <div className="mt-32 md:mt-60">
                <AdBanner />
            </div>

            {/* 05 — WORKS GRID */}
            {/* <WorksGrid projects={worksData} /> */}

            {/* 06 — VIDEO SECTION */}
            {/* <VideoSection heading={homeData.sections[5].heading} /> */}

            {/* 07 — REVIEWS & CLIENTS */}


            {/* 08 — DIGITAL PULSE (BLOG) */}
            <BlogSection />

        </div>
    );
};

export default HomePage;