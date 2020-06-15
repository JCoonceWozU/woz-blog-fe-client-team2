import React, {Component} from "react";

const API_URL = 'localhost:8080/api/'



async function fetchAPI() {

}

// authorization if statement goes here

const res = await fetch(API_URL, {
    method: 'GET',
    // headers,
    body: JSON.stringify({
        //     query,
        //     variables,
    )}
)};

// error statement here


export function getArticle(id) {
    const data = await fetchAPI(
        {
            variables: {id},
        }
    )
    return {
        params: { id, title, body}
    }
}

export function getAllArticleIds() {

    return {}
}


// homepage articles function, article snippet, + sorted by date
export function getArticlesForHome() {

    return {}
}
