import axios from "axios";
// const KEY='AIzaSyAjZ8cuZSCIKKVNC-Ygfsq0fc7Q14CC0SQ';
// const KEY='AIzaSyBWbte8RCoVP73zo0sFgXSuphtZmLLBbq4'
// const KEY='AIzaSyCwyt1FcKwW_IwVouO38gRCoFhIiqy7Pq8';
const KEY='AIzaSyDme7jfUBKicAWjeQKPQJWtbSpfnqvRcqg';

export const youtube=(maxResults, related=null)=> axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:  "snippet",
        key: KEY,
        maxResults: maxResults,
        relatedToVideoId: related
    }
});

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "lvC2nyDzSUh_NFQamo2WkOlcFQ8",
//     "nextPageToken": "CAEQAA",
//     "regionCode": "AZ",
//     "pageInfo": {
//         "totalResults": 1000000,
//         "resultsPerPage": 1
//     },
//     "items": [
//         {
//             "kind": "youtube#searchResult",
//             "etag": "j-tRZChk7IqFpwWEm0giwzwPsYw",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "RFw7xtzSc0U"
//             },
//             "snippet": {
//                 "publishedAt": "2021-08-24T09:04:53Z",
//                 "channelId": "UCxKFA50yKLcqo1gK4VDxKmQ",
//                 "title": "Sura İskəndərli - Yok ( Ee daha daha nasılsınız? ) Lyric Video",
//                 "description": "Dijital Mağaza Linkleri: http://musicwe.co/suraiskenderliyok Sura İskenderli'nin yeni tekli çalışması “YOK” Yayında! Sura İskenderli ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/RFw7xtzSc0U/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/RFw7xtzSc0U/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/RFw7xtzSc0U/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "suramusic",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2021-08-24T09:04:53Z"
//             }
//         }
//     ]
// }