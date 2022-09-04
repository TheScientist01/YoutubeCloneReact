import axios from "axios";
const KEY='AIzaSyAjZ8cuZSCIKKVNC-Ygfsq0fc7Q14CC0SQ';

export const youtube=(maxResults)=> axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: "snippet",
        key: KEY,
        maxResults: maxResults
    }
});