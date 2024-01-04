import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import dataList from '../data.js';
import Product from './Product.js';

const AllProduct = ({ product }) => {
    return (
        <div>


            <div className=''>
                <div className='justify-center grid md:grid-cols-4 md:gap-4 gap-2'>
                    {
                        dataList.products.map((product) => {
                            return <div  >
                                <Product key={product._id} product={product} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProduct;