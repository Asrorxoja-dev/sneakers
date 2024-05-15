import image1 from '../assets/image-product-1.jpg'
import image2 from '../assets/image-product-2.jpg'
import image3 from '../assets/image-product-3.jpg'
import image4 from '../assets/image-product-4.jpg'
import product from '../assets/icon-cart.svg'
import thumnail1 from '../assets/image-product-1-thumbnail.jpg'
import thumnail2 from '../assets/image-product-2-thumbnail.jpg'
import thumnail3 from '../assets/image-product-3-thumbnail.jpg'
import thumnail4 from '../assets/image-product-4-thumbnail.jpg'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, increaseAmount, decreaseAmount, removeItem , updateTotalItems} from '../../features/productSlice'

function Hero() {
  const productsInStore = useSelector((state) => state.products.products);
  console.log(productsInStore);
  const dispatch = useDispatch();

  useEffect(() => {
    const totalAmount = productsInStore.reduce((total, product) => total + product.amount, 0);
    dispatch(updateTotalItems(totalAmount));
  }, [productsInStore, dispatch]);
  

  const totalAmount = productsInStore.reduce((total, product) => total + product.amount, 0)
  

  const handleIncrease = (productId) => {
    dispatch(increaseAmount(productId));
     
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseAmount(productId));
  };

  const handleRemove = (productId) => {
    dispatch(removeItem(productId));
  };

  const handleAddToCart = () => {
    dispatch(addItem({ id: uuidv4(), price: 125.00 }));
    toast.success("item succesfully added")
  };




  return (
    <div className='align-content'>
      <div className="mt-20 grid items-center gap-y-8 lg:grid-cols-2 mb-10 lg:gap-x-16">
        <div>
        <img
        onClick={()=>document.getElementById('my_modal_3').showModal()}
            src={image1}
            className="w-80 h-80 object-cover rounded-lg lg:w-full"
          />
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-0 ">✕</button>
    </form>
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={image1} alt="" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={image2} alt="" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={image3} alt="" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={image4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  </div>
</dialog>
         
          <div className='gap-11 w-24 mt-5 lg:flex hidden md:grid-cols-2 items-center '>
            <img className='rounded-xl object-cover' src={thumnail1} alt="" />
            <img className='rounded-xl object-cover' src={thumnail2} alt="" />
            <img className='rounded-xl object-cover' src={thumnail3} alt="" />
            <img className='rounded-xl object-cover' src={thumnail4} alt="" />
          </div>
        </div>
        <div>
          <p className='text-orange-500 text-sm font-semibold'>Sneaker Company</p>
          <h1 className="capitalize text-4xl w-96 mt-3 font-bold">Fall Limited Edition Sneakers</h1>
          <h4 className="title-xl text-netural-content font-sans mt-4">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
          </h4>
          <p className="mt-3 text-xl font-bold">
            $125.00 <span className='text-sm font-bold ml-3 text-orange-400 bg-orange-200 rounded p-1'>50%</span>
          </p>
          <p className='line-through text-slate-400 mt-3'>$250.00</p>
          <div className='flex mt-16 gap-10 items-center'>
            <div className="card-actions bg-slate-200 px-5 rounded items-center">
              <button className='text-2xl text-orange-600 font-bold' onClick={() => handleDecrease(product)}>-</button>
              <button className="btn text-3xl btn-ghost">{totalAmount}</button>
              <button className='text-3xl w-4  text-orange-600 font-bold' onClick={() => handleIncrease(product)}>+</button>
            </div>
            <div>
              <button className="btn px-10 btn-warning bg-orange-500 text-white hover">
                <img className='w-4 ' src={product} alt="" onClick={()=>handleAddToCart()} /> Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
