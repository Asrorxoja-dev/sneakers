import cart from '../assets/image-avatar.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import image from '../assets/image-product-1-thumbnail.jpg'

function Navbar() {

  const {total, products, price,amount } =useSelector((store)=> store.products)

  const subtotal = products.reduce((acc, product) => {
    return acc + product.price * product.amount;
  }, 0);

  const totalAmount = useSelector((state)=>state.products.totalAmount)
  return (
    <div className="mx-20 mb-5">
        <div className="navbar mt-3 bg-base-100 border-b pb-3">
  <div className="flex-1">
    <a className="btn btn-ghost  font-bold text-3xl">sneakers</a>
  </div>
  <div className="navbar-center">
                {/* Navlinks */}
<ul className=' gap-5 hidden lg:flex mr-[-160px]'>
  <li className='cursor-pointer'>Collections</li>
  <li className='cursor-pointer'>Men</li>
  <li className='cursor-pointer'>Women</li>
  <li className='cursor-pointer'>About</li>
  <li className='cursor-pointer'>Contact</li>
</ul>
        </div>
  <div className="flex-none navbar-end">
    <div className="dropdown   mr-4 dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{total}</span>
        </div>
      </div>

      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
      
  
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={cart} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80">
      <div className='flex p-2 gap-5'>

      <img className='w-24 rounded ' src={image} alt="" />
      <div>
      <p className='text-sm w-36 mb-2'>Fall Limited Edition Sneakers</p>
       <p>125$ x{total} <span className='font-bold'>{price}$</span></p>
       <button className='btn btn-sm bg-orange-500 mt-3'>checkout</button>
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