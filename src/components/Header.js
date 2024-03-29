import React, { useState } from 'react';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import {HashLink as Link} from 'react-router-hash-link'


const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const headerStyles = {
    wrapper: "fixed w-full z-10",
    mainContainer: 'flex items-center justify-between min-h-[70px] bg-black bg-opacity-70 text-white px-4',
    logo: 'font-bold text-3xl font-lobster text-purple-500',
    listStyle: 'flex items-center justify-between gap-4'
  };

  return (
    <div className={headerStyles.wrapper}>
      <div className={headerStyles.mainContainer}>
        <h3 className={headerStyles.logo}>Ronald</h3>
        <div className={headerStyles.listStyle}>
          <ul className={`md:flex ${showLinks ? 'flex flex-col transition-all ease-out delay-150 duration-300' : 'hidden'} py-5 gap-4`}>
           
            <Link smooth to='#hero'>Home</Link>
            <Link smooth to='#tech-skills'>Tech Skills</Link>
            <Link smooth to='#about'>About</Link>
            <Link smooth to='#resume'>Resume</Link>
            <Link smooth to='#services'>services</Link>
            <Link smooth to='#freelance'>Freelance</Link>
            <Link smooth to='#projects'>Projects</Link>
            <Link smooth to='#contact'>Contact</Link>
           
            
          </ul>
          <div className='md:hidden'>
            {showLinks ? <RxCross2 size={30} onClick={handleShowLinks} /> : <HiOutlineBars3BottomRight onClick={handleShowLinks} size={30} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
