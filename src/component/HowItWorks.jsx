import React, { useState, useEffect } from 'react';

import './HowItWorks.css';
import { FiSearch, FiUserPlus, FiPhoneCall, FiShield, FiClock, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const CustomCountUp = ({ end, suffix, inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const duration = 2000; 
        const frameRate = 1000 / 60; 
        const totalFrames = Math.round(duration / frameRate);
        const increment = end / totalFrames;

        let currentFrame = 0;
        const counter = setInterval(() => {
            currentFrame++;
            start += increment;
            if (currentFrame >= totalFrames) {
                setCount(end);
                clearInterval(counter);
            } else {
                setCount(Math.floor(start));
            }
        }, frameRate);

        return () => clearInterval(counter);
    }, [inView,end]);

    return <span>{count.toLocaleString()}{suffix}</span>;
};

function HowItWorks() {

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

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
            transition: { duration: 0.5, ease: 'easeOut' }
        },
    };

    const featuresData = [
        { icon: <FiSearch />, title: "Find Blood Instantly", description: "Search for available blood donors by group and location in seconds during emergencies." },
        { icon: <FiUserPlus />, title: "Register as Donor", description: "Sign up and become part of a life-saving community. Your donation can save up to 3 lives." },
        { icon: <FiPhoneCall />, title: "Emergency Contact", description: "Directly call or WhatsApp donors when every second counts in critical situations." },
        { icon: <FiShield />, title: "Verified Donors", description: "All donors are verified and their availability status is updated in real-time." },
        { icon: <FiClock />, title: "24/7 Availability", description: "Our platform is available round the clock because emergencies do not wait." },
        { icon: <FiHeart />, title: "Save Lives", description: "Every blood donation can save up to three lives. Be a hero, donate blood." }
    ]
    const statsData = [
        { numericValue: 10000, suffix: "+", label: "Registered Donors" },
        { numericValue: 25000, suffix: "+", label: "Lives Saved" },
        { numericValue: 500, suffix: "+", label: "Hospitals Connected" },
        { numericValue: 50, suffix: "+", label: "Cities Covered" }
    ];
    return (
        <>
            <section className='how-it-works-section text-white'>
                <div className='container '>

                    <div className='mb-5 text-center pt-5 '>
                        <motion.h2 className='fw-bold display-6 mb-3' variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                            How <span className='text-danger'>BloodLink</span> Works
                        </motion.h2>
                        <motion.p className='text-secondary mx-auto ' style={{ maxWidth: '600px' }} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                            A seamless platform connecting those who need blood with those willing to donate.
                            Simple, fast, and reliable.
                        </motion.p>
                    </div>

                    <motion.div className='row  g-4' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>


                        {
                            featuresData.map((feature, index) => (
                                <motion.div key={index} className='col-12 col-md-6 col-lg-4' variants={cardVariants} >
                                    <div className='feature-card p-4 h-100 rounded-4'>

                                        <div className='icon-wrapper mb-3 d-flex align-items-center justify-content-center'>
                                            {feature.icon}
                                        </div>

                                        <h5 className='fw-bold text-white mb-2'>{feature.title}</h5>

                                        <p className='text-secondary  mb-0 small '>
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>

                            ))
                        }



                    </motion.div>
                </div>

               <div className='stats-full-banner' ref={ref}>
                <div className='container'>
                    <div className='row g-4 text-center align-items-center justify-content-center'>
                        {statsData.map((stat, index) => (
                            <div key={index} className='col-6 col-md-3'>
                                <h2 className='fw-bold text-danger display-5 mb-1'>
                                    <CustomCountUp 
                                        end={stat.numericValue} 
                                        suffix={stat.suffix} 
                                        inView={inView} 
                                    />
                                </h2>
                                <p className='text-secondary small mb-0 fw-medium'>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            </section>
        </>
    )
}

export default HowItWorks