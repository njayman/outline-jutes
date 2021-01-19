import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layouts/Layout";

export default function Contact() {
    const initialData = {
        name: "",
        email: "",
        message: "",
    }
    const [formData, setFormData] = useState(initialData)
    const handleSubmit = e => {
        e.preventDefault();
        // let formData = {
        //     name,
        //     email,
        //     message
        // }
        console.log(formData)
    }

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Head>
                <title>Contact us | Outline Jutes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <form onSubmit={handleSubmit} className="contactform">
                <label htmlFor="name">Full name</label>
                <input value={formData.name} name="name" onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input value={formData.email} name="email" onChange={handleChange} />
                <label htmlFor="message">Your Message</label>
                <textarea value={formData.message} name="message" onChange={handleChange} rows={4} />
                <button type="reset" onClick={() => setFormData(initialData)}>Clear</button>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

Contact.Layout = Layout;