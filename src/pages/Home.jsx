import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItem from '../components/FoodItem'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-B6NX6K8FLJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-B6NX6K8FLJ');
</script>
    <Navbar />
    <CategoryMenu />
    <FoodItem />
    <Cart />
    </>
  )
}

export default Home