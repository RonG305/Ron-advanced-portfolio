import React from 'react'


const menuItems = [
    {
        linkName: 'home',
        url: '/home'
        
    },

    {
        linkName: 'about',
        url: '/about'
        
    },

    {
        linkName: 'resume',
        url: '/resume'
        
    },

    {
        linkName: 'services',
        url: '/services'
        
    },

    {
        linkName: 'skills',
        url: '/skills'
        
    },

    {
        linkName: 'projects',
        url: '/projects'
        
    },

    {
        linkName: 'blog',
        url: '/blog'
        
    },

    {
        linkName: 'contact',
        url: '/contact'
        
    },

]

const Header = () => {

    const headerStyles = {
        mainContainer: ' bg-slate-800 flex items-center justify-between min-h-[70px] text-white',
        logo: 'font-bold text-3xl',
        listStyle: ' md:flex items-center justify-between gap-2' 
    }


    
  return (
    <div className={headerStyles.mainContainer}>
        <h3 className={headerStyles.logo}>Ronald</h3>
        <div className={headerStyles.listStyle} style={{listStyle: 'none'}}>
            {menuItems.map((menuItem) => (
                <li className=' '>{menuItem.linkName}</li>
            ))}
        </div>

    </div>
  )
}

export default Header