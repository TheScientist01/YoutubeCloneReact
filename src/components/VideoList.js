import React from "react";
import { useSelector } from "react-redux";
import VideoItem from "./VideoItem";

const VideoList=({type})=>{
    const videos=[
        {
            "kind": "youtube#searchResult",
            "etag": "j-tRZChk7IqFpwWEm0giwzwPsYw",
            "id": {
                "kind": "youtube#video",
                "videoId": "RFw7xtzSc0U"
            },
            "snippet": {
                "publishedAt": "2021-08-24T09:04:53Z",
                "channelId": "UCxKFA50yKLcqo1gK4VDxKmQ",
                "title": "Sura İskəndərli - Yok ( Ee daha daha nasılsınız? ) Lyric Video",
                "description": "Dijital Mağaza Linkleri: http://musicwe.co/suraiskenderliyok Sura İskenderli'nin yeni tekli çalışması “YOK” Yayında! Sura İskenderli ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/RFw7xtzSc0U/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/RFw7xtzSc0U/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/RFw7xtzSc0U/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "suramusic",
                "liveBroadcastContent": "none",
                "publishTime": "2021-08-24T09:04:53Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "NZeWz0YY3fvDATxIN703lSHMMoM",
            "id": {
                "kind": "youtube#video",
                "videoId": "7AYL_3s-9KE"
            },
            "snippet": {
                "publishedAt": "2022-06-28T15:31:55Z",
                "channelId": "UC8Xb8o55uUPNnTitrTQcROA",
                "title": "СПОРИМ, что ты не знал этого #shorts #youtubeshorts #математика",
                "description": "Сегодня в нашем коротком уроке математики в формате #shorts мы поделимся интересным фактом — почему пчелы ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/7AYL_3s-9KE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/7AYL_3s-9KE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/7AYL_3s-9KE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "INTENSIVKURS - Учебный Центр для Школьников",
                "liveBroadcastContent": "none",
                "publishTime": "2022-06-28T15:31:55Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "TItR1lanxGCkXJEvSBBzHXJEcpY",
            "id": {
                "kind": "youtube#video",
                "videoId": "6zL262K4AgM"
            },
            "snippet": {
                "publishedAt": "2020-12-31T11:30:01Z",
                "channelId": "UCR5wZcXtOUka8jTA57flzMg",
                "title": "Mir Yusuf - Hayatım",
                "description": "Mir Yusuf'un, DMC etiketiyle yayınlanan \"Al Teyyare\" albümünde yer alan \"Hayatım\" isimli şarkısı, video klibiyle netd müzik'te.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/6zL262K4AgM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/6zL262K4AgM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/6zL262K4AgM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "netd müzik",
                "liveBroadcastContent": "none",
                "publishTime": "2020-12-31T11:30:01Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "BGaZhCYJGXNrPoZVu9A6DSaoGPc",
            "id": {
                "kind": "youtube#video",
                "videoId": "rf6rNdKhx3E"
            },
            "snippet": {
                "publishedAt": "2022-05-18T20:45:11Z",
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
                "publishTime": "2022-05-18T20:45:11Z"
            }
        },
        
            {
                "kind": "youtube#searchResult",
                "etag": "j-tRZChk7IqFpwWEm0giwzwPsYw",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "RFw7xtzSc0U"
                },
                "snippet": {
                    "publishedAt": "2021-08-24T09:04:53Z",
                    "channelId": "UCxKFA50yKLcqo1gK4VDxKmQ",
                    "title": "Sura İskəndərli - Yok ( Ee daha daha nasılsınız? ) Lyric Video",
                    "description": "Dijital Mağaza Linkleri: http://musicwe.co/suraiskenderliyok Sura İskenderli'nin yeni tekli çalışması “YOK” Yayında! Sura İskenderli ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/RFw7xtzSc0U/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/RFw7xtzSc0U/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/RFw7xtzSc0U/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "suramusic",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-08-24T09:04:53Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "NZeWz0YY3fvDATxIN703lSHMMoM",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "7AYL_3s-9KE"
                },
                "snippet": {
                    "publishedAt": "2022-06-28T15:31:55Z",
                    "channelId": "UC8Xb8o55uUPNnTitrTQcROA",
                    "title": "СПОРИМ, что ты не знал этого #shorts #youtubeshorts #математика",
                    "description": "Сегодня в нашем коротком уроке математики в формате #shorts мы поделимся интересным фактом — почему пчелы ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/7AYL_3s-9KE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/7AYL_3s-9KE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/7AYL_3s-9KE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "INTENSIVKURS - Учебный Центр для Школьников",
                    "liveBroadcastContent": "none",
                    "publishTime": "2022-06-28T15:31:55Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "TItR1lanxGCkXJEvSBBzHXJEcpY",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "6zL262K4AgM"
                },
                "snippet": {
                    "publishedAt": "2020-12-31T11:30:01Z",
                    "channelId": "UCR5wZcXtOUka8jTA57flzMg",
                    "title": "Mir Yusuf - Hayatım",
                    "description": "Mir Yusuf'un, DMC etiketiyle yayınlanan \"Al Teyyare\" albümünde yer alan \"Hayatım\" isimli şarkısı, video klibiyle netd müzik'te.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6zL262K4AgM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6zL262K4AgM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6zL262K4AgM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "netd müzik",
                    "liveBroadcastContent": "none",
                    "publishTime": "2020-12-31T11:30:01Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "BGaZhCYJGXNrPoZVu9A6DSaoGPc",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "rf6rNdKhx3E"
                },
                "snippet": {
                    "publishedAt": "2022-05-18T20:45:11Z",
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
                    "publishTime": "2022-05-18T20:45:11Z"
                }
            }
    ];

    // let a=useSelector(state=>state.videos.videoList);
    // console.log(a);
    const list=videos.map((video)=>{
        return <VideoItem video={video} type={type} />
    });
    // console.log(videos);
    return <div className="row m-4 no-gutters">{list}</div>;
}

export default VideoList;