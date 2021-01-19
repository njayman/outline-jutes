// import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../components/Layouts/Layout'
import styles from '../styles/Home.module.scss'
// import axios from 'axios'
export default function Home() {
  const router = useRouter()
  // const [products, setProducts] = useState([])
  // const [idx, setidx] = useState(0)
  // const getProducts = async () => {
  //   try {
  //     const { data } = await axios.get('/api/products');
  //     setProducts(data)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  // useEffect(() => {
  //   getProducts()
  // }, [])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setidx(Number(Math.floor(Math.random() * (products?.length - 1))))
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Outline Jutes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="cta">
        <div className="cta__description">
          <h1>Welcome to Outline Jutes</h1>
          <h3>We provide with high quality jute products from Bangladesh. These jute products are 100% bio degradable in eco-friendly.</h3>
          <div className="cta__action">
            <button onClick={() => router.push('/products')}>Browse our products</button>
            <button onClick={() => router.push('/contact')}>Contact us</button>
          </div>
          <h2>Lets contribute to a greater future.</h2>
          <p>Plastic and polythene has done their part in harming the environment for decades. It is time to switch to a more eco-friendly solution. Jute products are produced from natural jute fibres which are bio degradable, eco-friendly and safe to dispose.</p>
        </div>
        {/* <img className="cta__image" src={`${products[idx]?.link}`} alt="" /> */}
      </div>
    </div>
  )
}

Home.Layout = Layout;
