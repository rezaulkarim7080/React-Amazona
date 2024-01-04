import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import { TbReplace, TbTruckDelivery, } from "react-icons/tb";
import { MdSecurity, } from "react-icons/md";
import Rating from '../components/Rating';
import { useParams } from 'react-router-dom';
import PageNavigation from '../components/PageNavigation';


const SingleProduct = (props) => {

  const { id } = useParams();
  const product = data.products.find((x) => x._id === id);

  // const product = data.products.find((x) => x._id === props.match.params.id)

  if (!product) {
    return <div>Product Not Found</div>
  }

  return (
    <div className='px-5'>

      {/* Navigation */}

      <div className='flex justify-between items-center'>
        <div >
          <PageNavigation title={product.name} />
        </div>
        <div className="py-5">
          <Link className='underline hover:text-cyan-600' to={'/'}>
            Back to home
          </Link>
        </div>
      </div>


      {/* Main Part */}

      <div className='grid md:grid-cols-3 gap-10'>
        {/* Part 1: Product Image */}

        <div>
          <img src={product.image} alt={product.name} width={500} />
        </div>

        {/* Part 2: Product Name */}

        <div>
          <h1 className='text-2xl font-semibold py-1'>{product.name}</h1>
          <Rating rating={product.rating} numReview={product.numReview} />
          <h1 className='text-base font-medium '>price: $ {product.price}</h1>
          <h1 className='text-base'>description: {product.description}</h1>

          {/* icons  */}
          <div className='flex justify-evenly items-center py-5'>
            <div className='flex flex-col items-center '>
              <TbTruckDelivery size={25} className='' />
              <p>Free Delivery</p>
            </div>
            <div className='flex flex-col items-center '>
              <TbReplace size={25} className='' />
              <p>30 Days Replacement</p>
            </div>
            <div className='flex flex-col items-center '>
              <TbTruckDelivery size={25} className='' />
              <p>Shipper Deliver</p>
            </div>


          </div>
        </div>

        {/* Part 3: Product Cart  */}

        <div className=' '>
          <div className='bg-slate-100 h-[200px] p-5 rounded-lg '>
            <h1 className='text-lg font-medium py-1'>price: ${product.price}</h1>
            <h1 className='text-lg '>status :</h1>
            <div>
              {product.countInstock > 0 ? <h1 className='text-lg text-[#008000] font-medium py-1'>In stock</h1> : <h1 className='text-lg text-red-600 font-medium py-1'>Unavailable</h1>}
            </div>
            <Link to={"/"}>
              <button className='bg-[#f29f05] hover:border-solid hover:border-2 hover:border-black h-[30%] w-[100%] font-medium text-lg'> Add to Cart</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Grid End */}
      {/* Simmiler Items */}
      <div>
        <div>
          <h1>Simillar item</h1>
        </div>
      </div>



    </div>
  );
};

export default SingleProduct;
