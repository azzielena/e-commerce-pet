import { News } from "../types/typeApp";

const postNews = async (news: News) => {
    console.log("siamo nel post use stampa:"+ news.name+" "+news.surname+" "+news.email);
    const fetchApi = await fetch('/generateNews',{
        method: 'POST',
        body: JSON.stringify(news),
        headers:{
            'Content-type': 'application/json'
        }
    })

    return fetchApi;
}

export default postNews;