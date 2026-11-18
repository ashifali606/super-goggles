import React from 'react'
import './whyBloodMatters.css';
import { LuAward, LuHeart, LuUsers, LuClock, LuDroplets } from 'react-icons/lu';
import { IconBase } from 'react-icons/lib';
import { motion } from 'framer-motion';
function WhyBloodMatters() {

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
      opacity: 2,
      y: 0,
      transition: { duration: 3, ease: 'easeOut' },
    },
  };


  return (
    <section className='body-of-component'>
      <div className='container'>
        <div className='row'>

          <motion.div className='col-12 col-lg-6' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >

            <motion.h1 className='heading-title ' variants={cardVariants}>
              Why Blood Donation <span className='highlight-red ' ><br />Matters?</span>
            </motion.h1>

            <motion.span className='whyBloodMattersContent' variants={cardVariants}>
              Every 2 seconds, someone in India needs blood. Yet only 1% of the eligible population donates regularly.
              Blood cannot be manufactured -- it can only come from generous donors.
            </motion.span>
            <br />
            <br />

            <motion.span className='whyBloodMattersContent' variants={cardVariants}>
              A single donation can save up to 3 lives.
              Blood is needed for surgeries, cancer treatments, chronic illnesses, and traumatic injuries.
              Your contribution matters more than you know.
            </motion.span>

            {/* start */}
            <motion.div className='WhyBloodMatters-cards-grid' variants={containerVariants}>
              {/* card-1 */}
              <motion.div className='WhyBloodMatters-features-card' variants={cardVariants}>
                <div className='WhyBloodMatters-icon-box'>
                  <LuAward size={20} />
                </div>

                <span className='card-text'>
                  Safe & Quick Process
                </span>
              </motion.div>

              {/* card-2 */}
              <motion.div className='WhyBloodMatters-features-card' variants={cardVariants}>
                <div className='WhyBloodMatters-icon-box'>
                  <LuHeart size={20} />
                </div>

                <span className='card-text'>
                  Save Up to 3 Lives
                </span>
              </motion.div>

              {/* card-3 */}

              <motion.div className='WhyBloodMatters-features-card' variants={cardVariants}>
                <div className='WhyBloodMatters-icon-box'>
                  <LuUsers size={20} />
                </div>

                <span className='card-text'>
                  Join 10K+ Donors
                </span>
              </motion.div>

              {/* card-4 */}

              <motion.div className='WhyBloodMatters-features-card' variants={cardVariants}>
                <div className='WhyBloodMatters-icon-box'>
                  <LuClock size={20} />
                </div>

                <span className='card-text'>
                  Only 15 Minutes
                </span>
              </motion.div>

            </motion.div>





            {/* end */}

          </motion.div>

          <div className='col-12 col-lg-6 d-flex align-items-center'>

            <motion.div
              className='compatibility-card'
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >

              <motion.div className='compatibility-header' variants={cardVariants}>
                <LuDroplets className='header-icon' size={22} />
                <h3 className='compatibility-title'>Blood Group Compatibility</h3>
              </motion.div>

              <motion.div className='compatibility-row' variants={cardVariants}>
                <span className='blood-type'>O-</span>
                <span className='recipient-text'>Universal Donor (All Groups)</span>
              </motion.div>

              <motion.div className='compatibility-row' variants={cardVariants}>
                <span className='blood-type'>O+</span>
                <span className='recipient-text'>O+, A+, B+, AB+</span>
              </motion.div>

              <motion.div className='compatibility-row' variants={cardVariants}>
                <span className='blood-type'>A+</span>
                <span className='recipient-text'>A+, AB+</span>
              </motion.div>

              <motion.div className='compatibility-row' variants={cardVariants}>
                <span className='blood-type'>B+</span>
                <span className='recipient-text'>B+, AB+</span>
              </motion.div>

              <motion.div className='compatibility-row' variants={cardVariants}>
                <span className='blood-type'>AB+</span>
                <span className='recipient-text'>AB+ Only</span>
              </motion.div>

            </motion.div>

          </div>


        </div>

      </div>
    </section>
  )
}

export default WhyBloodMatters