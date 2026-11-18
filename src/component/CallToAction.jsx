import './CallToAction.css';
import { LuDroplets, LuUserPlus, LuArrowRight, LuSearch } from "react-icons/lu";
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

function CallToAction() {
  const [isScrolled, setScrolled] = useState(false);

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

  return (
    <section className='CallToAction-body-part'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <motion.div
              className='CallToAction-Card'
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              onViewportEnter={() => {
                setTimeout(() => {
                  setScrolled(true);
                }, 1000);
              }}
            >
              <div className='CallToAction-Content'>
                <motion.div variants={cardVariants}>
                  <LuDroplets className='CallToAction-icone' />
                </motion.div>

                <motion.h1 variants={cardVariants}>
                  Ready to Make a <span>Difference</span>?
                </motion.h1>

                <motion.p variants={cardVariants}>
                  Join thousands of donors who are making a real impact. Your blood
                  donation can be the difference between life and death.
                </motion.p>
              </div>

              <motion.div 
                className={`CallToAction-button ${isScrolled ? 'row-layout' : 'column-layout'}`} 
                variants={cardVariants}
              >
                <motion.div
                  layout
                  transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                  className="btn-wrapper"
                >
                  <NavLink to='/become-donor' className='cta-register-btn'>
                    <LuUserPlus />
                    <span>Register as Donor</span>
                    <LuArrowRight />
                  </NavLink>
                </motion.div>

                <motion.div
                  layout
                  transition={{ duration: 4.5, ease: [0.25, 1, 0.5, 1] }}
                  className="btn-wrapper"
                >
                  <NavLink to='/find-blood' className='cta-find-btn'>
                    <LuSearch />
                    <span>Find Blood</span>
                  </NavLink>
                </motion.div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
