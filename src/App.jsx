import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import CartPage from './Components/CartPage/CartPage'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import {store} from './App/Store'
import {Provider} from 'react-redux'
import Footer from './Components/Footer/Footer'


function App() {
 
  return (
    <Provider store={store}>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetails />}/>
      <Route path='/cart' element={<CartPage/>}/>
      
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
