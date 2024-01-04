import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import dataList from '../data.js';
import Rating from './Rating.js';


const Product = ({ product }) => {

    // const { product } = product;
    return (

        <div className=''>
            {/* <div className='bg-slate-100 inline-block rounded-xl'> */}
            <div className=' inline-block rounded-xl border-[1px] border-white'>
                <Link to={`/product/${product._id}`}>
                    <img src={product.image} alt={product.name} width={300} height={300} />
                </Link>
                <div className='px-2 py-1'>
                    <Link to={`/product/${product._id}`}>
                        <h1 className='text-xl font-bold py-1'>{product.name}</h1>
                    </Link>

                    <div >

                        <Rating rating={product.rating} numReview={product.numReview} />
                    </div>
                    <h1 className='text-xl'>$ {product.price}</h1>
                </div>
            </div>


        </div>


        // <div className=''>
        //     <div className='grid grid-cols-4 gap-4'>
        //         {
        //             dataList.products.map((product) => {
        //                 return <div className='bg-slate-100 inline-block rounded-xl' key={product._id}>
        //                     <Link to={`/product/${product._id}`}>
        //                         <img src={product.image} alt={product.name} width={300} height={300} />
        //                     </Link>
        //                     <div className='px-2 py-1'>
        //                         <Link to={`/product/${product._id}`}>
        //                             <h1 className='text-xl font-medium py-1'>{product.name}</h1>
        //                         </Link>

        //                         <div className='flex gap-2 text-amber-500 py-1'>
        //                         <span><i><AiFillStar size={20} /></i></span>
        //                         <span><i><AiFillStar size={20} /></i></span>
        //                         <span><i><AiFillStar size={20} /></i></span>
        //                         <span><i><BsStarHalf size={20} /></i></span>
        //                         <span><i><AiOutlineStar size={20} /></i></span>

        //                     </div>
        //                         <h1 className='text-xl'>$ {product.price}</h1>
        //                     </div>
        //                 </div>
        //             })
        //         }
        //     </div>

        // </div>
    );
};

export default Product;
