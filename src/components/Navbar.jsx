
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'


export default function Navbar () {
  return (
    //container
    <div className=' px-12 bg-orange-600 flex items-center justify-between fixed w-screen z-50' style={{height: '100px'}}>
      {/* //container item Call btn */}
      <div className='flex items-center'>
        <div className=' rounded-full bg-white p-2 hover:cursor-pointer'>
          <Image src='/../public/images/telephone.png' alt='call us image' width={32} height={32}></Image>
        </div>
        <div className=' ml-5 text-white'>
          <p>ORDER NOW</p>
          <p className=' font-bold'>0712345678</p>
        </div>

      </div>
      {/* //container navigation item */}
      <div className=' justify-start'>
        <ul className=' flex text-white font-semibold items-center justify-between'>
          <li className=' m-5'>Homepage</li>
          <li className=' m-5'>Products</li>
          <li className=' m-5'>Menu</li>
          <Image src='/../public/images/logo.png' alt='restaurant logo' className=' rounded-sm p-0 m-0' width={100} height={100}/>
          <li className=' m-5'>Events</li>
          <li className=' m-5'>Contact</li>
        </ul>
      </div>
      {/* //container cart item */}
      <div className=' relative justify-end'>
        <div>
          <Image src='/../public/images/cart.png' alt='cart image' width={30} height={30}/>
          <div className='flex w-5 h-5 absolute -top-3 -right-3 bg-white text-orange-600 font-bold items-center justify-center rounded-full p-1'>2</div>
        </div>
      </div>
      {/* //container item */}
    </div>
  )
}
