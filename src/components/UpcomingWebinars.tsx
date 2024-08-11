'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";
import { Button } from "./ui/moving-border";


const featuredWebinars = [
    {
        title: 'Understanding Music Theory',
        description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
        slug: 'understanding-music-theory',
        isFeatured: true,
    },
    {
        title: 'The Art of Songwriting',
        description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
        slug: 'the-art-of-songwriting',
        isFeatured: true,
    },
    {
        title: 'Mastering Your Instrument',
        description:
            'Advanced techniques to master your musical instrument of choice.',
        slug: 'mastering-your-instrument',
        isFeatured: true,
    },
    {
        title: 'Music Production Essentials',
        description:
            'Get started with music production with this comprehensive overview.',
        slug: 'music-production-essentials',
        isFeatured: true,
    },
    // Added two more webinars
    {
        title: 'Live Performance Techniques',
        description:
            'Enhance your live performance skills with expert tips and strategies.',
        slug: 'live-performance-techniques',
        isFeatured: true,
    },
    {
        title: 'Digital Music Marketing',
        description:
            'Learn how to promote your music effectively in the digital age.',
        slug: 'digital-music-marketing',
        isFeatured: true,
    },
];

function UpcomingWebinars() {
    return (

            <div className=' dark:bg-dot-white/[0.2]'>
        <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >

         

            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='text-center'>
                    <h2 className='test-case text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
                    <p className='mt-2 text-3xl leading-8 font-ectrabold tracking-tight text-white'>Enhance Musical Journey</p>
                </div>

                <div className='mt-10'>
                    <HoverEffect
                        items={featuredWebinars.map(webinar => (
                            {
                                title: webinar.title,
                                description: webinar.description,
                                link: '/'
                            }
                        ))}
                    />
                </div>


                <div className='mt-10 text-center'>
                    <Link href={'/'}> <Button borderRadius="1.75rem"
             className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
                View All Webinar</Button></Link>
                </div>
            </div>

        </motion.div>
    </AuroraBackground>
        </div>
    )
}

export default UpcomingWebinars
