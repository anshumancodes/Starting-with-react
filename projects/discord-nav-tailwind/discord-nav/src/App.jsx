import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { GrAnalytics, GrAnchor, GrArchlinux } from "react-icons/gr";
import { BsDiscord } from "react-icons/bs";

import { AiOutlinePlus } from "react-icons/ai";


function App() {
    return (
        <>
            <nav className='bg-discord-sec w-20 items-center flex flex-col gap-6 p-3 h-screen fixed top-0'>
                <NavItem  icon={<BsDiscord />}  style={{backgroundColor:'#7289DA'}}/>
                <div className='bg-discord-line h-1'></div>
                <NavItem icon={<AiOutlinePlus/>} style={{ backgroundColor: 'rgb(34, 197, 97)', borderRadius: '0.25rem' }}/>


                <NavItem icon={<GrAnalytics/>} />
                <NavItem icon={<GrAnchor/>} />
                <NavItem icon={<GrArchlinux/>} />
               
                
            </nav>
        </>
    );
}

const StyledNavItem = styled.div`
  
`;

const NavItem = ({ icon, style }) => {
   return <div className='bg-white text-4xl p-3 rounded hover:bg-green-500  hover:rounded-xl transition-all duration-300 ease-linear' style={style}>{icon}</div>
}

export default App;

