import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';

const Hero = () => {
  const { isLoading, products, error } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);
  

  const data = products?.slice(3, 4);

  
  

  return (
    <section className='min-h-[calc(100vh-80px)] w-full grid place-items-center'>
      <div className="container main-container grid lg:grid-cols-2 gap-4">
        <div className='order-2 lg:order-1 grid place-items-center'>
          <div className='sm:text-center lg:text-left'>
            <h1 className='text-3xl  lg:text-5xl xl:text-7xl tracking-wide mb-1 lg:mb-[6px] roboto-medium'>Discover Exclusive Products</h1>
            <h3 className='text-xl lg:text-3xl mb-1 lg:mb-[6px]'>Curated Collections Just for You</h3>
            <p className='max-w-96 sm:text-lg lg:text-xl mb-2 lg:mb-4 text-[#6B7280]'>
              Explore our wide range of high-quality products, handpicked to suit your
              style and needs. From the latest trends to timeless classics, we have
              something for everyone.
            </p>
            <Link className="btn px-10 text-lg tracking-wide text-[#F3F4F6] bg-[#1D4ED8] transition-all ease-in-out duration-150 hover:bg-[#3B82F6] border-none">Shop Now</Link>
          </div>
        </div>
        <div className='order-1 lg:order-2 grid place-items-center'>
          {data?.map((item) => {
            return (
              <img src={item?.images[0]} alt={item?.name} className='w-full max-w-[450px] object-cover rounded-xl shadow-lg' />
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;

