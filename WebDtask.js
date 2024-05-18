const APIurl = 'https://coding-week-2024-api.onrender.com'
async function fetchPosts(){
    try{
    const response = await fetch(`${APIurl}/api/data`);

    if(!response.ok){
        throw new Error(`Failed to fetch post: ${response.status}`)
    }

    return await response.json()
} catch(e){
    console.log(e);
}

}

function listposts(postContainerElementId){
    const postContainerElement = document.getElementById(postContainerElementId)
    if(!postContainerElement){
        return;
    }
    
    fetchPosts().then(posts => {
        if(!posts){
            postContainerElement.innerHTML = 'No Posts';
            return;
        }

    }).catch(e=>{
        console.log(e);
    })
}
function postElement(post){
    const anchorElement= document.createElement('a');
    anchorElement.setAttribute('href',`${APIurl}/api/data/${data.id}`)
    anchorElement.setAttribute('target','_blank')
    anchorElement.innerHTML=post.img;


    const postTitleElement = document.createElement('h3')
    postTitleElement.appendChild(anchorElement);

    return postTitleElement;
}