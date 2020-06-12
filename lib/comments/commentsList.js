import CommentType from './CommentType';
import comments from './comments';

//this is the comments block that appears on the bottom of an article
//this calls comments.js and is passed to whatever builds article pages
//this should not need to directly call the DB

export async function getStaticProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}