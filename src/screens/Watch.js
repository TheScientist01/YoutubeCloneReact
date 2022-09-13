import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const Watch = () => {

    let params = (new URL(document.location)).searchParams;
    const video = {
        "kind": "youtube#searchResult",
        "etag": "BGaZhCYJGXNrPoZVu9A6DSaoGPc",
        "id": {
            "kind": "youtube#video",
            "videoId": "rf6rNdKhx3E"
        },
        "snippet": {
            "publishedAt": "2022-12-18T20:45:11Z",
            "channelId": "UCv9wwJfPt-_fstKCbyATr5w",
            "title": "Sadakatsiz 60. Bölüm Fragmanı (Final)",
            "description": "Sadakatsiz yeni bölümüyle 25 Mayıs Çarşamba KanalD'de! #Sadakatsiz son bölümüyle #KanalD'de! Sadakatsiz ailesine ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/rf6rNdKhx3E/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/rf6rNdKhx3E/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/rf6rNdKhx3E/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Sadakatsiz",
            "liveBroadcastContent": "none",
            "publishTime": "2022-12-18T20:45:11Z"
        }
    };

    // return(
    //     <div className="container">
    //     <div className="ratio ratio-16x9">
    //         <iframe className="col-12 mx-auto"  src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowFullScreen></iframe>
    //     </div>
    //     </div>
    // )

    const monthNames = ["", "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const image = useSelector(state => state.auth.pp);

    return (
        <div>
            <Header />
            <div className="row no-gutters ml-5 mr-4 mt-4">
                <div class="mx-auto mx-0 col-12 col-lg-8">
                    <div className=" embed-responsive embed-responsive-16by9">
                        <iframe

                            id="embed"
                            src={`https://www.youtube.com/embed/${params.get('v')}?&autoplay=0&mute=1&rel=0&modestbranding=1&autohide=1`}
                            frameBorder="0"
                            allowFullScreen>

                        </iframe>

                    </div>
                    <h4 className="mt-2">{video.snippet.title}</h4>
                    <div className="col-12 p-0 row no-gutters">
                        <div className="col-11 col-lg-6" style={{ fontSize: "15px" }}>
                            <div className="text-2">10.234 views {video.snippet.publishedAt.substring(8, 10)} {monthNames[video.snippet.publishedAt.substring(5, 7)].substring(0, 3).toLowerCase()} {video.snippet.publishedAt.substring(0, 4)} <span className="text-muted" >{video.snippet.description}</span></div>
                            <div className="row channel mt-2 ml-0 py-2">

                                <div className="pp m-0 row">
                                    <img src={image}></img>
                                    <h6 className="ml-2">{video.snippet.channelTitle}</h6>
                                </div>

                                <div className="ml-auto col-4">
                                    <button className="btn col-12 mr-0">Subscribe</button>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-lg-5 offset-lg-1 mx-auto">
                            <div className="row justify-content-around like">
                                <div className="row">
                                    <button className="btn"><i className="fa-regular fa-thumbs-up"></i></button>
                                    <p className="my-auto">35k</p>
                                </div>
                                <div className="row">
                                    <button className="btn"><i className="fa-regular fa-thumbs-down"></i></button>
                                    <p className="my-auto">Dislike</p>
                                </div>
                                <div className="row">
                                    <button className="btn"><i className="fa-solid fa-share"></i></button>
                                    <p className="my-auto">Share</p>
                                </div>

                                <button className="btn"><i className="fa-solid fa-ellipsis"></i></button>
                            </div>
                            <div className="row channel mt-3 mr-auto p-2">

                                <div className="pp m-0 row">
                                    <img src={image}></img>
                                    <h6 className="ml-2">{video.snippet.channelTitle}</h6>
                                </div>

                                <div className="ml-auto col-4">
                                    <button className="btn col-12">Subscribe</button>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>

                <div className="col-12 col-lg-4 mx-lg-0 row">
                    <div className="col-12 mx-auto mx-auto mb-1 row">
                        <div className="p-0 mb-2">
                            <img width={"168px"} height={"94px"} src={video.snippet.thumbnails.medium.url}></img>

                        </div>
                        <div className="details ml-2">
                            <h6 style={{ fontSize: "16px", fontWeight: "bold", maxWidth: "250px" }}>{video.snippet.title}</h6>
                            <p className="text-muted my-0" style={{ fontSize: "14px" }}>{video.snippet.channelTitle}</p>
                            <p className="text-muted" style={{ fontSize: "13px", fontWeight: "bold" }}>14k watch &middot; 2 days ago</p>
                        </div>
                    </div>
                    <div className="col-12 mx-auto mx-auto mb-1 row">
                        <div className="p-0 mb-2"><img width={"168px"} height={"94px"} src={video.snippet.thumbnails.medium.url}></img></div>
                        <div className="details ml-2">
                            <h6 style={{ fontSize: "16px", fontWeight: "bold", maxWidth: "250px" }}>{video.snippet.title}</h6>
                            <p className="text-muted my-0" style={{ fontSize: "14px" }}>{video.snippet.channelTitle}</p>
                            <p className="text-muted" style={{ fontSize: "13px", fontWeight: "bold" }}>14k watch &middot; 2 days ago</p>
                        </div>
                    </div>
                    <div className="col-12 mx-auto mx-auto mb-1 row">
                        <div className="p-0 mb-2"><img width={"168px"} height={"94px"} src={video.snippet.thumbnails.medium.url}></img></div>
                        <div className="details ml-2">
                            <h6 style={{ fontSize: "16px", fontWeight: "bold", maxWidth: "250px" }}>{video.snippet.title}</h6>
                            <p className="text-muted my-0" style={{ fontSize: "14px" }}>{video.snippet.channelTitle}</p>
                            <p className="text-muted" style={{ fontSize: "13px", fontWeight: "bold" }}>14k watch &middot; 2 days ago</p>
                        </div>
                    </div>
                    <div className="col-12 mx-auto mx-auto mb-1 row">
                        <div className="p-0 mb-2"><img width={"168px"} height={"94px"} src={video.snippet.thumbnails.medium.url}></img></div>
                        <div className="details ml-2">
                            <h6 style={{ fontSize: "16px", fontWeight: "bold", maxWidth: "250px" }}>{video.snippet.title}</h6>
                            <p className="text-muted my-0" style={{ fontSize: "14px" }}>{video.snippet.channelTitle}</p>
                            <p className="text-muted" style={{ fontSize: "13px", fontWeight: "bold" }}>14k watch &middot; 2 days ago</p>
                        </div>
                    </div>
                    <div className="col-12 mx-auto mx-auto mb-1 row">
                        <div className="p-0 mb-2"><img width={"168px"} height={"94px"} src={video.snippet.thumbnails.medium.url}></img></div>
                        <div className="details ml-2">
                            <h6 style={{ fontSize: "16px", fontWeight: "bold", maxWidth: "250px" }}>{video.snippet.title}</h6>
                            <p className="text-muted my-0" style={{ fontSize: "14px" }}>{video.snippet.channelTitle}</p>
                            <p className="text-muted" style={{ fontSize: "13px", fontWeight: "bold" }}>14k watch &middot; 2 days ago</p>
                        </div>
                    </div>
                    <div className="col-12 mx-auto mx-auto mb-1 row">
                        <div className="p-0 mb-2"><img width={"168px"} height={"94px"} src={video.snippet.thumbnails.medium.url}></img></div>
                        <div className="details ml-2">
                            <h6 style={{ fontSize: "16px", fontWeight: "bold", maxWidth: "250px" }}>{video.snippet.title}</h6>
                            <p className="text-muted my-0" style={{ fontSize: "14px" }}>{video.snippet.channelTitle}</p>
                            <p className="text-muted" style={{ fontSize: "13px", fontWeight: "bold" }}>14k watch &middot; 2 days ago</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Watch;