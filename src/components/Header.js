import React from 'react'
import {FaBars} from 'react-icons/fa'


const Header = () => {

    const headerStyles = {
        wrapper: "fixed ",
        mainContainer: ' flex items-center justify-between min-h-[70px] text-white ',
        logo: 'font-bold text-3xl font-lobster text-purple-500',
        listStyle: ' md:flex items-center justify-between gap-2' 
    }



  return (
    <div className={headerStyles.wrapper}>
        <div className={headerStyles.mainContainer}>
            <h3 className={headerStyles.logo}>Ronald</h3>
            <FaBars size={30} />
        </div>
    </div>
    
  )
}

export default Header