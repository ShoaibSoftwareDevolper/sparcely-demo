import React from 'react';
import data from '@/app/api/data.js';

// Layout Sections
import ContactHero from '../components/sections/ContactHero';
import ContactSection from '../components/sections/ContactSection';
import StudioLocations from '../components/sections/StudioLocations';


const ContactPage = () => {
    const contactData = data.pages.contact;
    const companyData = data.company;

    return (
        <div className="flex flex-col bg-background ">
            {/* 01 — HERO */}
            <div className="h-15 md:h-20" />


            <ContactHero
                heading={contactData.heading}
                subheading={contactData.subheading}
            />

            <div className="h-10 md:h-20" />

            {/* 02 — MAIN CONTACT (FORM & DETAILS) */}
            <ContactSection details={contactData.details} />

            <div className="h-20 md:h-40" />

            {/* 03 — STUDIO LOCATIONS */}
            <StudioLocations studios={contactData.details.studios} />

            <div className="h-32 md:h-40" />
        </div>
    );
};


export default ContactPage;
