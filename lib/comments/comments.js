//this is an individual comment (gets passed to commentsList)
//this is where comments call the DB
import fs from "fs";
import path from "path";
import remark from "remark";
import html from "remark-html";

const API_URL = 'localhost:8080/api/'

export async function getAllCommentIds() {
    const res = await fetch(API_URL)

}

export function getCommentData(){

}



async function fetchAPI () {

}

// authorization if statement goes here

const res = await fetch(API_URL, {
    method : 'GET'
})

// error statement here


export async function getComment(id) {
    const data = await fetchAPI(
        `
        query getArticle ($id) {
            comment($)  {
                commentId
                body
            }
        }`,
        {
            variables: {id},
        }
    )
    return {
        params: {}
    }
}