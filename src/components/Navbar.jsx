import cart from '../assets/image-avatar.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import image from '../assets/image-product-1-thumbnail.jpg';
import deleteIcon from '../assets/icon-delete.svg'
import { removeItem } from '../../features/productSlice';
import { useDispatch } from 'react-redux';
import logo from '../assets/logo.svg'

function Navbar() {
const dispatch = useDispatch()
  const {total, products, price, amount } =useSelector((store)=> store.products)

  const subtotal = products.reduce((acc, product) => {
    return acc + product.price * product.amount;
  }, 0);

  const handleRemove = () => {
    const id = products[0].id;
    dispatch(removeItem(id));
  };

  return (
    <div className="mx-20 mb-5">
        <div className="navbar mt-3 bg-base-100 border-b pb-3">
  <div className="flex-1 navbar-start">
 
<Link to="/">
<img src={logo} alt="" />
</Link>
  </div>
  <div className="navbar-center">
                {/* Navlinks */}
<div>
<ul className='gap-5  hidden lg:flex '>
  <Link to="/collection" className='cursor-pointer'>Collections</Link>
  <Link to="/man" className='cursor-pointer'>Men</Link>
  <Link to="/woman" className='cursor-pointer'>Women</Link>
  <Link to="/about" className='cursor-pointer'>About</Link>
  <Link to="/contact" className='cursor-pointer'>Contact</Link>
</ul>
</div>



        </div>
  <div className="flex-none navbar-end">
    <div className="dropdown   mr-2 dropdown-end">
      <div tabIndex={0} role="button" className="btn  btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5  w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{total}</span>
        </div>
      </div>


    </div>
    <div className="dropdown  dropdown-end">
      <div tabIndex={0} role="button" className="btn  btn-ghost btn-circle avatar">
        <div className="w-10  rounded-full">
          <img alt="Tailwind CSS Navbar component" src={cart} />
        </div>
      </div>
      <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-72">
      <div className='flex p-2 gap-5'>

      <img className='w-24 h-24 rounded ' src={image} alt="" />
      <div className='pr-2'>
      <p className='text-sm  w-32 mb-2'>Fall Limited Edition Sneakers</p>
      <div className='flex  items-center'>
      <p >125$ x{total} <span className='font-bold ml-1 mr-6'>{subtotal}$</span> </p>
       <span className='hover:bg-slate-200 cursor-pointer'><img onClick={()=>handleRemove()} src={deleteIcon} alt="" /></span>
      </div>
       <button className='btn w-32 btn-sm bg-orange-500 text-white mt-3'>checkout</button>
       </div>
      </div>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar