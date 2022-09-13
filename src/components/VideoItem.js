import React from "react";
import { useSelector } from "react-redux";
import { youtube } from "../api/youtubeAPI";


const VideoItem=({video,type})=>{
    const image=useSelector(state=>state.auth.pp);
    const width=video.snippet.thumbnails.medium.width;
    
    if(type===1){
        return (
            <div onClick={e=>window.open(`/watch?v=${video.id.videoId}`)} className="video-item col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-5 p-2 user-select-none"  style={{cursor:"pointer"}}>
                <div /*onClick={(e)=>{e.preventDefault();window.location.href=`watch?v=${video.id.videoId}`}}*/ className="thumbnail">
                    <img src={video.snippet.thumbnails.medium.url} className="col-12 mr-auto p-0"></img>
                    <div className="timer">13:23</div>
                </div>
                <div style={{maxWidth:`${width} px`, height: "94px"}} className="row">
                    <div  className="col-2">
                        <img className="mt-2" style={{width: "41px", borderRadius: "50%"}} src={image}></img>
                    </div>
                    <div className="col-9 pl-2">
                    <div className="video-title my-2 text-2" style={{fontSize:"15px", fontWeight: "600"}}>{video.snippet.title}</div>
                    <div className="channel-name text-muted text-1" style={{fontSize:"14px"}}>{video.snippet.channelTitle}</div>
                    <div className="video-stats text-muted text-1">1.5k views &middot; 3 days ago</div></div>
                </div>
            </div>);
    }
    
}

export default VideoItem;

// 6217380776


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