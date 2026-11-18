import React from 'react'
import './Hero.css';
import { MdOutlineBloodtype } from 'react-icons/md';
import { BiSearch, BiUserPlus } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
// import { MdOutlineBloodtype } from "react-icons/md";
import { motion } from 'framer-motion';

function Hero() {
   const SlidUp = {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8 }
   };

   const PopIn = {
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 1, ease: "easeOut" }
   }

   const PopIn1 = {
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 2, ease: "easeOut" }
   }
   const PopIn2 = {
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 3, ease: "easeOut" }
   }

   const cardVariants = {
      hidden: { opacity: 0, y: 40 },
      visible: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.5, ease: 'easeOut' }
      },
   };
   return (
      <section className='hero-section d-flex text-white align-items-center'>
         <div className='container-fluid'>
            <div className='row align-items-center right-side'>
               <div className='col-lg-6 mb-5 mb-lg-0'>

                  <motion.div className='hero-badge mt-5 mb-4 ms-lg-5 ms-sm-0 '{...SlidUp}>
                     <MdOutlineBloodtype className='text-danger me-2 fs-3' />
                     <span>Every Drop Counts</span>
                  </motion.div>

                  <motion.h1 className='hero-title fw-bold mb-3 ms-lg-5 ms-sm-0'{...SlidUp}>
                     Donate Blood,<span className='text-danger'>Save <br />Lives.</span>
                  </motion.h1>

                  <motion.p className='hero-description text-secondary mb-5 ms-lg-5 ms-sm-0'{...SlidUp}>
                     BloodLink connects patients with verified blood donors in real-time.
                     During emergencies, every second matters. Find the right donor, right now.
                  </motion.p>

                  <motion.div className='d-flex user-btn  gap-3 mb-4  ms-sm-0 me-3 me-sm-0' {...SlidUp}>

                     <NavLink to='/find-blood' className='text-decoration-none' >
                        <button className='costum-btn btn btn-danger btn-lg px-4 py-2  ms-lg-5 ms-sm-0 d-flex align-items-center gap-2 fw-semibold'>
                           <BiSearch />
                           Find Blood Now
                        </button>
                     </NavLink>

                     <NavLink to='/become-donor' className='text-decoration-none'>
                        <button className='costum-btn btn btn-outline-light btn-lg  px-4 py-2 d-flex align-items-center gap-2 fw-semibold'>
                           <BiUserPlus />
                           Become a Donor
                        </button>
                     </NavLink>

                  </motion.div>

                  <div className='d-flex gap-4 ms-lg-5 ms-lg-0 custom-state-counters'>

                     <motion.div {...PopIn}>
                        <h3 className='fw-bold mb-0 fs-5'>10K+</h3>
                        <small className='text-secondary'>Donors</small>
                     </motion.div>

                     <motion.div {...PopIn1}>
                        <h3 className='fw-bold mb-0 fs-5'>25K+</h3>
                        <small className='text-secondary'>Lives Saved</small>
                     </motion.div>

                     <motion.div {...PopIn2}>
                        <h3 className='fw-bold mb-0 fs-5'>50+</h3>
                        <small className='text-secondary'>Cities</small>
                     </motion.div>

                  </div>
               </div>

               <div className='col-lg-6 d-flex justify-content-center align-items-center  mt-1 mt-lg-0'>

                  <motion.div className='hero-visual-wrapper position-relative'{...SlidUp}>
                     <div className='radar-circle circle-1'></div>
                     <div className='radar-circle circle-2'></div>
                     <div className='radar-circle circle-3'></div>

                     <div className='radar-core d-flex justify-content-center align-items-center'>
                        <MdOutlineBloodtype className='text-danger core-icon' />
                     </div>

                     <div className='floting-badge badge-top-right'>
                        <h6 className='mb-0 fw-bold text-danger fs-6'>O+ Available</h6>
                        <small>12 donors nearby</small>
                     </div>

                     <div className='floting-badge badge-mid-right'>
                        <h6 className='mb-0 fw-bold text-warning fs-6'>A+ Needed</h6>
                        <small>3 units urgent</small>
                     </div>

                     <div className='floting-badge badge-bottom-left border-emerald'>
                        <h6 className='mb-0 fw-bold text-emerald fs-6'>Emergency</h6>
                        <small>Response in 5 min</small>
                     </div>

                  </motion.div>

               </div>

            </div>

            <div className='row ' >
               <motion.div className='col-12 custom-container mb-5 flex-column flex-sm-row gap-3 text-center text-sm-start justify-content-sm-between   justify-content-sm-start mt-5 mt-lg-0' variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} >

                  <div className='d-flex align-items-center gap-2 text-white fw-semibold'>
                     <span className='emergnecy-dot'></span>
                     <span>Emergency? Need blood urgently?</span>
                  </div>

                  <NavLink to='/blood-request' className='text-decoration-none'>
                     <button className='btn btn-light text-danger fw-bold px-4'>Post Emergency Request</button>
                  </NavLink>
               </motion.div>
            </div>

         </div>

      </section>
   )
}

export default Hero