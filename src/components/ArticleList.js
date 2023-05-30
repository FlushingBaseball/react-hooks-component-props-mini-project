import Article from "../components/Article"








function ArticleList({post}){
    
    //    const articlesToPost = post.map((postOBJ) => { return (
        //         <Article key ={postOBJ.id} title = {postOBJ.title} date = {postOBJ.date} preview={postOBJ.preview} />
        
        //     ) })
        
        const makeThese = post.map((indPost) =>{
            return (<Article key = {indPost.id} title = {indPost.title} date ={indPost.date} preview={indPost.preview} />)
        })


    return(
        <main> {makeThese} </main>
    )
}

export default ArticleList