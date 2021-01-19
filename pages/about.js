import Head from "next/head";
import Layout from "../components/Layouts/Layout"

export default function About() {
    return (
        <div style={{ margin: '60px', padding: "20px", background: "white" }}>
            <Head>
                <title>About | Outline Jutes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>About Outline Jutes</h1>
            <blockquote>Outline Jutes provides with various high quality jute products manufactured in Bangladesh. All these products are completely natural and bio degradable.</blockquote>
        </div>
    )
}
About.Layout = Layout;