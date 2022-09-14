import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { youtubeVideo } from "../api/youtubeAPI";

class Watch extends React.Component{
    
    video = {
        "kind": "youtube#searchResult",
        "etag": "BGaZhCYJGXNrPoZVu9A6DSaoGPc",
        "id": {
            "kind": "youtube#this.video",
            "this.videoId": "rf6rNdKhx3E"
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
    // document.title=this.video.snippet.title;
    monthNames = ["", "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    
    state={snippet:{},contentDetails:{},statistics:{},date:''};
    params = (new URL(document.location)).searchParams;
    componentDidMount(){
        document.title=this.video.snippet.title;
        
        
        // const image = useSelector(state => state.auth.pp);
        const getDetails = async ( part ) => {
            const response = await youtubeVideo(part).get('/videos', {
                params: {
                    id: this.params.get('v')
                }
            }); 
            const data=response.data.items[0];
            // console.log(data);
            this.setState({snippet:data.snippet,statistics:data.statistics, contentDetails:data.contentDetails, date: this.video.snippet.publishedAt.substring(8, 10)+" "+this.monthNames[this.video.snippet.publishedAt.substring(5, 7)].substring(0, 3).toLowerCase()+" "+this.video.snippet.publishedAt.substring(0, 4)});
            document.title=data.snippet.title;
            // console.log();
            
            // {this.video.snippet.publishedAt.substring(8, 10)} {this.monthNames[this.video.snippet.publishedAt.substring(5, 7)].substring(0, 3).toLowerCase()} {this.video.snippet.publishedAt.substring(0, 4)}
        };
        getDetails('snippet,statistics,contentDetails');
    }
    
    render(){
        return (
            <div>
                <Header />
                <div style={{marginTop:"85px"}} className="col-12 col-xl-11 mx-auto row no-gutters">
                    <div class="mx-auto mx-0 col-12 col-xl-8">
                        <div className="col-12 mx-auto embed-responsive embed-responsive-16by9">
                            <iframe
    
                                id="embed"
                                src={`https://www.youtube.com/embed/${this.params.get('v')}?&autoplay=0&mute=1&rel=0&modestbranding=1&autohide=1`}
                                frameBorder="0"
                                allowFullScreen>
    
                            </iframe>
    
                        </div>
                        <h1 style={{fontSize:"22px"}} className="mt-2">{this.state.snippet.title}</h1>
                        <div className="col-12 p-0 row no-gutters">
                            <div className="col-12 col-md-6" style={{ fontSize: "15px" }}>
                                <div className="text-2">{this.state.statistics.viewCount} views {this.state.date} <span className="text-muted" >{this.video.snippet.description}</span></div>
                            </div>
                            <div className="col-12 col-md-5 offset-lg-1 ml-auto">
                                <div className="row no-gutters justify-content-between like">
                                    <div className="row">
                                             <button className="btn circle"><i className="fa-regular fa-thumbs-up"></i><span className="my-auto mx-2">{this.state.statistics.likeCount}</span></button>
                                        
                                    </div>
                                    <div className="row">
                                        <button className="btn circle"><i className="fa-regular fa-thumbs-down"></i><span className="my-auto mx-2">Dislike</span></button>
                                        
                                    </div>
                                    <div className="row">
                                        <button className="btn circle"><i className="fa-solid fa-share"></i><span className="my-auto mx-2">Share</span></button>
                                        
                                    </div>
    
                                    <button className="btn"><i className="fa-solid fa-ellipsis"></i></button>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 row channel mt-2 ml-0 py-2">
    
                                    <div className="pp m-0 row">
                                        <img src={this.image}></img>
                                        <h6 className="ml-2">{this.video.snippet.channelTitle}</h6>
                                    </div>
    
                                    <div className="ml-auto col-4">
                                        <button className="btn col-12 mr-0">Subscribe</button>
                                    </div>
    
                                </div>
                                
                                <div className="col-12 col-md-6 row channel my-2 mt-lg-2 mb-md-0 ml-0 ml-md-3 py-2">
    
                                    <div className="pp m-0 row">
                                        <img src={this.image}></img>
                                        <h6 className="ml-2">{this.video.snippet.channelTitle}</h6>
                                    </div>
    
                                    <div className="ml-auto col-4">
                                        <button className="btn col-12">Subscribe</button>
                                    </div>
    
                                </div>
                            
    
                        </div>
    
                    </div>
    
                    <div style={{fontFamily:"Roboto"}} className="col-12 col-xl-4 mx-lg-0 row">
                        <div style={{display:"flex", }} className="col-12 mx-auto mx-auto mb-1">
                            <div className="p-0 mb-2">
                                <img width={"168px"} height={"94px"} src={this.video.snippet.thumbnails.medium.url}></img>
    
                            </div>
                            <div className="details ml-2" >
                                <div style={{ fontSize: "14px", fontWeight: "bold"}} className="text-2">{this.video.snippet.title}</div>
                                <p className="text-muted my-0" style={{ fontSize: "13px" }}>{this.video.snippet.channelTitle}</p>
                                <p className="text-muted" style={{ fontSize: "13px"}}>14k watch &middot; 2 days ago</p>
                            </div>
                        </div>
                        <div style={{display:"flex", }} className="col-12 mx-auto mx-auto mb-1">
                            <div className="p-0 mb-2">
                                <img width={"168px"} height={"94px"} src={this.video.snippet.thumbnails.medium.url}></img>
    
                            </div>
                            <div className="details ml-2" >
                                <div style={{ fontSize: "14px", fontWeight: "bold"}} className="text-2">{this.video.snippet.title}</div>
                                <p className="text-muted my-0" style={{ fontSize: "13px" }}>{this.video.snippet.channelTitle}</p>
                                <p className="text-muted" style={{ fontSize: "13px"}}>14k watch &middot; 2 days ago</p>
                            </div>
                        </div>
                        <div style={{display:"flex", }} className="col-12 mx-auto mx-auto mb-1">
                            <div className="p-0 mb-2">
                                <img width={"168px"} height={"94px"} src={this.video.snippet.thumbnails.medium.url}></img>
    
                            </div>
                            <div className="details ml-2" >
                                <div style={{ fontSize: "14px", fontWeight: "bold"}} className="text-2">{this.video.snippet.title}</div>
                                <p className="text-muted my-0" style={{ fontSize: "13px" }}>{this.video.snippet.channelTitle}</p>
                                <p className="text-muted" style={{ fontSize: "13px"}}>14k watch &middot; 2 days ago</p>
                            </div>
                        </div>
                        <div style={{display:"flex", }} className="col-12 mx-auto mx-auto mb-1">
                            <div className="p-0 mb-2">
                                <img width={"168px"} height={"94px"} src={this.video.snippet.thumbnails.medium.url}></img>
    
                            </div>
                            <div className="details ml-2" >
                                <div style={{ fontSize: "14px", fontWeight: "bold"}} className="text-2">{this.video.snippet.title}</div>
                                <p className="text-muted my-0" style={{ fontSize: "13px" }}>{this.video.snippet.channelTitle}</p>
                                <p className="text-muted" style={{ fontSize: "13px"}}>14k watch &middot; 2 days ago</p>
                            </div>
                        </div>
                        <div style={{display:"flex", }} className="col-12 mx-auto mx-auto mb-1">
                            <div className="p-0 mb-2">
                                <img width={"168px"} height={"94px"} src={this.video.snippet.thumbnails.medium.url}></img>
    
                            </div>
                            <div className="details ml-2" >
                                <div style={{ fontSize: "14px", fontWeight: "bold"}} className="text-2">{this.video.snippet.title}</div>
                                <p className="text-muted my-0" style={{ fontSize: "13px" }}>{this.video.snippet.channelTitle}</p>
                                <p className="text-muted" style={{ fontSize: "13px"}}>14k watch &middot; 2 days ago</p>
                            </div>
                        </div>
                        <div style={{display:"flex", }} className="col-12 mx-auto mx-auto mb-1">
                            <div className="p-0 mb-2">
                                <img width={"168px"} height={"94px"} src={this.video.snippet.thumbnails.medium.url}></img>
    
                            </div>
                            <div className="details ml-2" >
                                <div style={{ fontSize: "14px", fontWeight: "bold"}} className="text-2">{this.video.snippet.title}</div>
                                <p className="text-muted my-0" style={{ fontSize: "13px" }}>{this.video.snippet.channelTitle}</p>
                                <p className="text-muted" style={{ fontSize: "13px"}}>14k watch &middot; 2 days ago</p>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        )
    }
}

export default Watch;