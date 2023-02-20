import { News } from "../types/typeApp";

const postNews = async (news: News) => {
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