const API_URL = 'localhost:8080/api/'

async function fetchAPI () {

}

// authorization if statement goes here

const res = await fetch(API_URL, {
    method : 'GET'
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
