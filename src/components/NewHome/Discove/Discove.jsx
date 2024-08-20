import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Discove() {
  return (
    <div>
      <motion.div>
        <motion.div
          className="brand_and_influencers_main_parent_div"
          initial={{ opacity: 0, height: 0, y: 50 }}
          whileInView={{ opacity: 1, height: "200px", y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div className="Discover_Your_Next_Brand_Ambassador">
            Discover Your Next Brand Ambassador
          </motion.div>
          <motion.div className="connect_with_influencers">
            Connect with influencers who resonate with your audience and boost your brand's presence.
          </motion.div>
        </motion.div>

        <motion.div className="d-md-flex px-5 py-3">
          {/* left */}
          <motion.div
            className="w-100 where_brands_and_influencers_div"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where Brands and Influencers Unite for Success
          </motion.div>
          {/* right */}
          <motion.div
            className="w-100 d-flex flex-column"
            style={{ gap: '30px' }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* top */}
            {/* <motion.div
              className="d-flex"
              style={{ gap: '10px' }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div className="border-5 border w-75 text-center p-2 header_filters_sech">Search</motion.div>
              <motion.div className="border-5 border w-25 text-center p-2 header_filters_sech">Filter</motion.div>
            </motion.div> */}
            {/* bottom */}
            <motion.div
              className="w-100 d-flex flex-column"
              style={{ gap: '10px' }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to={"/index"} style={{ textDecoration: "none" }} >

              {/* <motion.div className="home_Find_Influencers_section_options">
                Find Influencers
              </motion.div> */}
              </Link>
              <Link to={"/creator/register"} style={{ textDecoration: "none" }} >
              <motion.div className="home_Find_Influencers_section_options">
                Join as an Influencer
              </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Discove;
