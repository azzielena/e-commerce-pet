import { Message } from "../types/typeApp";

const postMessage = async (mex: Message) => {

    const fetchApi = await fetch('/generateMessage',{
        method: 'POST',
        body: JSON.stringify(mex),
        headers:{
            'Content-type': 'application/json'
        }
    })

    return fetchApi;
}

export default postMessage;