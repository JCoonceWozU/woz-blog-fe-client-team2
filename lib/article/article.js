import React, {Component} from "react";
import * as axios from "axios";


const API_URL = 'localhost:8080/api/'

const ArticleAPI = {
    get: (id) => (`${API_URL}/articles/${id}`),

}

async function fetchAPI() {

}

// authorization if statement goes here

const res = await fetch(API_URL, {
        method: 'GET',
        // headers,
        body: JSON.stringify({
            //     query,
            //     variables,
        )
    }
)
}
;

// error statement here


export function getArticle(id) {
    const data = await fetchAPI(
        {
            variables: {id},
        }
    )
    let title;
    return {
        params: {id, title, body}
    }
}

export function getAllArticleIds() {

    return {}
}


// homepage articles function, article snippet, + sorted by date
export function getArticlesForHome() {

    return {}
}
