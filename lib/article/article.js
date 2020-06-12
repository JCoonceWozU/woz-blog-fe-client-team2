import React, {Component} from "react";
import Layout from "../../components/layout";

const API_URL = 'localhost:8080/api/'

async function fetchAPI () {

}

// authorization if statement goes here

const res = await fetch(API_URL, {
    // method : 'GET'
})

// error statement here


export function getArticle(id) {
    const data = await fetchAPI(

    {
        variables: {id},
    }
    )
    return {
        params: {
        }
    }
}

export function getAllArticleIds() {

    return {


    }
}


// homepage articles function, article snippet, + sort by date
export function getArticlesForHome() {

    return {

    }
}

// export default class extends Component {
//     static async getInitialProps() {
//         const res = await fetch('http://localhost:5432/photos')
//         const images = await res.json()
//         return { images }
//     }
//     componentWillMount() {
//         this.setState({
//             images: this.props.images
//         })
//     }
//     render() {
//         return (
//             <Layout>
//                 {
//
//                 }
//             </Layout>
//         )
//     }
// }


// use stringify instead of articleType file?
