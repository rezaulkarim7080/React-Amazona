import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Header = () => {
    const [nav, setNav] = useState(false);
    const handlenav = () => {
        setNav(!nav);
    };



    return (

        <div className="bg-slate-100 flex justify-between items-center h-20 
    mx-auto px-10 mb-5">
            <div>
                <h1 className="width-full text-3xl font-bold text-[#f29f05]">
                    Amazona
                </h1>
            </div>
            <div className="md:block hidden">
                <input type="text" placeholder='Search' className='px-10 py-1 rounded-lg' />
            </div>
            <div>
                <ul className="hidden md:flex text-lg menu menu-horizontal" >
                    <Link to={'/'}>

                        <li className="p-4 hover:text-[#f29f05] ">Home</li>
                    </Link>

                    <li className="p-4 hover:text-[#f29f05]">Cart</li>
                    <li className="p-4 hover:text-[#f29f05]">Signin</li>
                </ul>

            </div>


            {/* Reaponsive */}

            <div onClick={handlenav} className="block md:hidden">
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}

            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[80%]  h-full bg-[#f29f05] ease-out duration-500' : 'fixed left-[-100%]'}>
                <ul className="pt-24 uppercase">
                    <li className="responsive-nav">Home</li>
                    <li className="responsive-nav">
                        Shop
                    </li>
                    <li className="responsive-nav">
                        Saler
                    </li>
                    <li className="responsive-nav">Admin</li>
                    <li className="responsive-nav">
                        Cart
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Header;
