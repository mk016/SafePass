import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-purple-100 text-white '>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

                <div className="logo font-bold text-white text-2xl">
                    <span className='text-purple-500'> &lt;</span>
                   
                    <span className='text-black'>Safe</span><span className='text-purple-500'>Pass/&gt;</span>
                  
                    
                    </div>
                {/* <ul>
                    <li className='flex gap-4 '>
                        <a className='hover:font-bold' href='/'>Home</a>
                        <a className='hover:font-bold' href='#'>About</a>
                        <a className='hover:font-bold' href='#'>Contact</a>
                    </li>
                </ul> */}
                <button className='text-white  bg-gradient-to-t from-[#8678f9] from-0% to-[#c7d2fe]  my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1'> 
                    <img className='invert  w-10 p-1' src="/icons/github.svg" alt="github logo" />
                    <a className='font-bold px-2'href="https://github.com/mk016">GitHub</a>
                    
                </button>
            </div>
        </nav>
    )
}

export default Navbar