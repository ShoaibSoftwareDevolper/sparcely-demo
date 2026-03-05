import React from 'react';
import data from '@/app/api/data.js';

// Layout Sections (each section is its own component)
import Hero from './components/ui/Hero';
import AboutIntro from './components/sections/AboutIntro';
import ServicesIntro from './components/sections/ServicesIntro';
import AdBanner from './components/sections/AdBanner';
import WorksGrid from './components/sections/WorksGrid';
import VideoSection from './components/sections/VideoSection';
import ReviewsClients from './components/sections/ReviewsClients';

const HomePage = () => {
    const homeData = data.pages.home;
    const worksData = data.pages.works.projects;

    return (
        <div className="flex flex-col bg-background">

            {/* 01 — HERO */}
            <Hero />

            {/* 02 — ABOUT INTRO */}
            <AboutIntro content={homeData.sections[1].content} />

            {/* 03 — PROJECT CASE (Horizontal Scroll) */}
            <ServicesIntro projects={worksData} />

            {/* 04 — AD BANNER */}
            <AdBanner content={homeData.sections[3].content} />

            {/* 05 — WORKS GRID */}
            {/* <WorksGrid projects={worksData} /> */}

            {/* 06 — VIDEO SECTION */}
            <VideoSection heading={homeData.sections[5].heading} />

            {/* 07 — REVIEWS & CLIENTS */}
            {/* <ReviewsClients /> */}

        </div>
    );
};

export default HomePage;