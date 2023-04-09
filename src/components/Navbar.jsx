import { useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'



export default function Navbar () {
  const quantity = useSelector((state)=> state.cart.quantity)
  return (
    //container
    <div className=' px-12 bg-orange-600 flex items-center justify-between fixed w-screen z-50' style={{height: '100px'}}>
      {/* //container item Call btn */}
      <div className='flex items-center'>
        <div className=' rounded-full bg-white p-2 hover:cursor-pointer'>
          <Image src='https://res.cloudinary.com/dgiocioqk/image/upload/v1681038118/telephone_yurgn0.png' width={32} height={32}></Image>
        </div>
        <div className=' ml-5 text-white'>
          <p>ORDER NOW</p>
          <p className=' font-bold'>0712345678</p>
        </div>

      </div>
      {/* //container navigation item */}
      <div className=' justify-start'>
        <ul className=' flex text-white font-semibold items-center justify-between'>
          <Link href='/' passHref>
          <li className=' m-5 cursor-pointer'>Homepage</li>
          </Link>
          
          <li className=' m-5 cursor-pointer'>Products</li>
          
          <li className=' m-5 cursor-pointer'>Menu</li>
          
          
          <Image src='https://res.cloudinary.com/dgiocioqk/image/upload/v1681038107/logo_euopyd.png' alt='restaurant logo' className=' rounded-sm p-0 m-0' width={100} height={100}/>
          <li className=' m-5'>Events</li>
          <li className=' m-5'>Contact</li>
        </ul>
      </div>
      {/* //container cart item */}
      <Link href='/cart' passHref>
      <div className=' relative justify-end'>
        <div>
          <Image src='https://res.cloudinary.com/dgiocioqk/image/upload/v1681038071/cart_rjbdjs.png' alt='cart image' width={30} height={30}/>
          <div className='flex w-5 h-5 absolute -top-3 -right-3 bg-white text-orange-600 font-bold items-center justify-center rounded-full p-1'>{quantity}</div>
        </div>
      </div>
      </Link>
      
    </div>
  )
}
