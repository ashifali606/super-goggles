import React from 'react';
import './WhatPeopleSay.css';
import { FaStar } from 'react-icons/fa';
import { LuUsers } from 'react-icons/lu';
import { motion } from 'framer-motion';

function WhatPeopleSay() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    const DesignData = [
        {
            say: 'BloodLink helped me find a donor for my father within 30 minutes during a critical surgery. This platform is a lifesaver',
            name: 'Sabeeh Ali Hassan k',
            city: "Malappuram"
        },
        {
            say: 'I registered as a donor and got called within a week. The feeling of saving a life is unmatched. Thank you BloodLink.',
            name: ' Arifa Shafi N.P ',
            city: "Dubai"
        },
        {
            say: 'As a hospital administrator, BloodLink has streamlined our blood procurement process significantly. Highly recommended',
            name: 'Tm6s',
            city: "United States"
        }
    ];

    return (
        <>
            <section className='WhatPeopleSay-body-part'>
                <div className='container'>

                    <div className='row'>
                        <div className='col-12'>
                            <motion.div
                                className='WhatPeopleSay-header'
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <h1 className='WhatPeopleSay-title'>
                                    What People <span className='WhatPeopleSay-highlight'>Say?</span>
                                </h1>
                                <p className='WhatPeopleSay-subtitle'>
                                    Real stories from people whose lives were touched by BloodLink.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        className='row g-4'
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {
                            DesignData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className='col-12 col-md-4'
                                    variants={cardVariants}
                                >
                                    <div className='testimonial-card h-100'>

                                        <div className='star'>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>

                                        <p className='testimonial-quote'>{item.say}</p>

                                        <div className='testimonial-user'>
                                            <div className='testimonial-avatar'>
                                                <LuUsers size={18} />
                                            </div>

                                            <div>
                                                <h6 className='testimonial-name'>{item.name}</h6>
                                                <span className='testimonial-city'>{item.city}</span>
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>
                            ))
                        }
                    </motion.div>

                </div>
            </section>
        </>
    );
}

export default WhatPeopleSay;
