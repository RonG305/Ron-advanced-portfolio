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
  return (
    <div className=' bg-blue-950 flex items-center justify-between min-h-[70px] text-white '>
        <h3 className=' font-bold text-3xl'>Ronald</h3>
        <div className=' flex items-center justify-between gap-2' style={{listStyle: 'none'}}>
            {menuItems.map((menuItem) => (
                <li className=' '>{menuItem.linkName}</li>
            ))}
        </div>

    </div>
  )
}

export default Header