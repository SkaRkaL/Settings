import React from 'react'
import './Settings.modules.css'
import { Link } from "react-router-dom";
import "./Nav_Bar.css";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';


function Settings(Props) {
	return (
		<div
      className="nav_bar_div sticky top-0 z-10 bg-[#300488] text-white  border-gray-200 flex"
      style={{
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(13, 9, 10, 0.4)",
      }}
    >
      <div className="div_logo flex-1 p-2">
        <img className="ml-20" id="logo_nav_bar" src="game_logo.svg" alt="logo game" />
      </div>

      <div id="paths_list" className="paths_nav_bar flex-1  flex justify-center items-center">
        <ul className="flex">
          <motion.li
            className="nav_bar_items"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href="#l_p_1">Home</a>
          </motion.li>
          <motion.li
            className="nav_bar_items"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href="#l_p_2">Discover</a>
          </motion.li>
          <motion.li
            className="nav_bar_items"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href="#l_p_3">About</a>
          </motion.li>
          <motion.li
            className="nav_bar_items"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="login">Login</Link>
          </motion.li>
          <motion.li
            className="nav_bar_items"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="signup">Signup</Link>
          </motion.li>
        </ul>
      </div>
      <img id="options" className="w-10 mr-12 hidden" onClick={show_hide_sd_bar} src="./Home_page/lines.svg" alt="paths" />
    </div>
  );
//   return (
// 	<div className='mainclass'>
// 		<div className='sidebar'>
// 			<div className='overview'>
// 				<a class="active" href='#overview'>Overview</a>
// 				<a href='#profile'>Profile</a>
// 				<a href='#play'>Play</a>
// 				<a href='#friends'>Friends</a>
// 				<a href='#shop'>Shop</a>

// 			</div>
// 			<div className='options'>
// 				<a href='#notification'>Notification</a>
// 				<a href='#settings'>Settings</a>
// 				<a href='#logout'>Logout</a>
// 			</div>
// 		</div>
// 	</div>
//   )
}

export default Settings