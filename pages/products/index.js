import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layouts/Layout"
import axios from 'axios';

export default function Products() {
    const [products, setProducts] = useState([])
    const [query, setQuery] = useState('')
    const getProducts = async () => {
        try {
            const { data } = await axios.get('/api/products');
            console.log(data)
            setProducts(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="products">
            <Head>
                <title>Products | Outline Jutes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <input type="search" placeholder="search products here . . ." onChange={e => setQuery(e.target.value)} />
            <div className="card-container">
                {products.filter(product => {
                    return product.name.toLowerCase().includes(query.toLowerCase()) || !query;
                }).map((product, id) => (
                    <div className="card" key={id}>
                        <img src={product.link} alt={product.name} />
                        {/* <h4>{product.name}</h4> */}
                    </div>
                ))}
            </div>
        </div>
    )
}
Products.Layout = Layout;
