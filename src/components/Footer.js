import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook, BsLinkedin, BsPinterest } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-100 ">
                <div className="text-lg flex flex-col p-4  md:p-8 lg:flex-row ">
                    <ul className="self-center  space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                        <li className='hover:text-[#f29f05]'>Shop</li>
                        <li className='hover:text-[#f29f05]'>About</li>
                        <li className='hover:text-[#f29f05]'> Blog</li>
                        <li className='hover:text-[#f29f05]'>Pricing</li>
                        <li className='hover:text-[#f29f05]'>Contact</li>
                    </ul>

                    {/* icons */}

                    <div className="flex flex-col justify-center pt-6 lg:pt-0">
                        <div >
                            <ul className="flex justify-center space-x-4 text-xl " >
                                <li className='hover:text-[#f29f05]'> <Link to={"https://www.facebook.com/"}><BsFacebook /></Link></li>
                                <li className='hover:text-[#f29f05]'> <Link><BsLinkedin /></Link></li>
                                <li className='hover:text-[#f29f05]'> <Link><AiFillTwitterCircle /></Link></li>
                                <li className='hover:text-[#f29f05]'> <Link><BsPinterest /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;