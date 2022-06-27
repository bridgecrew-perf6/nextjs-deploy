import Link from "next/link"
import Image from "next/image"
import Layout from "../../components/Layout"

export default function primerPost({ data }) {
    return (
        <Layout title="Primer Post" description="Primer Post description">
            <h1>{data.id} | {data.title}</h1>
            <p>{data.body}</p>
        </Layout>
    )
}

export async function getStaticPaths() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        const paths = data.map(({ id }) => ({ params: { id: `${id}` } }))
        // console.log(paths)
        return {
            paths, fallback: false
        }
    } catch (error) {
        console.log(error)
    }
}
export async function getStaticProps({ params }) {
    // console.log(params)
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id)
        const data = await res.json();
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.log(error)
    }
}