import React from 'react'
import raja from './yourlogo.png'
import { Facebook, Instagram, Twitter, Youtube ,Truck,Headphones,ShieldCheck} from 'lucide-react';
import {Link} from "react-router-dom"
function Footer() {
  return (
    <footer className='bg-white shadow-md'>
        <div className='container mx-auto px-4'>
           <div className='min-h-16'>
            <div className='flex justify-between items-start flex-col md:flex-row py-10'>
                    
                    <div >
                    <Truck size={60} className='bg-black text-white rounded-full mx-12'/>
                    <h2 className='font-bold'>Free and Fast Delivery</h2>
                    <p>Free delivey for all order</p>
                </div>
                <div >
                    <Headphones size={60} className='bg-black text-white rounded-full mx-12 '/>
                    <h2 className='font-bold'>24/7 Customer Service</h2>
                    <p>Friendly 24/7 customer support</p>
                </div>
                <div >
                    <ShieldCheck size={60} className='bg-black text-white rounded-full mx-12 '/>
                    <h2 className='font-bold'>Secure Payment</h2>
                    <p>We return money within 7 days</p>
                </div>
                
            </div>
           </div>
        </div>
        <div className='bg-slate-800 text-white py-8'>
            <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                <div>
                    <img src={raja} alt="" className='my-4 w-20'/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, debitis. Aut illo labore nisi dignissimos sint? Atque laudantium optio eos.</p>
                    <div className='flex items-center gap-8 mt-5'>
                        <Facebook size={40} className='bg-white text-black rounded-md p-2'/>
                        <Twitter size={40} className='bg-white text-black rounded-md p-2'/>
                        <Youtube size={40} className='bg-white text-black rounded-md p-2'/>
                        <Instagram size={40} className='bg-white text-black rounded-md p-2'/>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold my-4'>Pages</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">about</Link>
                        </li>
                        <li>
                            <Link to="/">Faqs</Link>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold my-4'>Categories</h2>
                    <ul>
                        <li>
                            <Link to="/">Moniter</Link>
                        </li>
                        <li>
                            <Link to="/">laptop</Link>
                        </li>
                        <li>
                            <Link to="/">Mobile</Link>
                        </li>
                        <li>
                            <Link to="/">Tv</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold my-4'>Contact Us</h2>
                    <p>mdkaifwtca@gmail.com</p>
                    <p>+918228809713</p>
                    <p>Noida Uttar Pradesh</p>
                </div>
            </div>
            </div>
        </div>
        <div className='container mx-auto text-center py-4 text-white'>
            <p> &copy; Copyright Md Kaif 2025. All right reserved</p>
        </div>
    </footer>
  )
}

export default Footer;
