import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../../store/video";
import ReactPlayer from 'react-player'
import './AllVideos.css'

const ShowAllVideos = () => {
    const videoState = useSelector(state => state.video.viewAllVideos);
    const dispatch = useDispatch();
    console.log('videostate ==== ', Object.values(videoState))

    useEffect(() => {
        dispatch(getAllVideos());

    }, [dispatch, videoState.id])




    return (
        <div className="videos-div" style={{display: 'flex', flexWrap: 'wrap'}} >
           {Object.values(videoState).map(video => (
                <div className="each-vid">
                    <ReactPlayer url={video.video_url} controls='true' wrapper="div" style={{ margin: '5px' }} />

                </div>

            ))}


        </div>

    )



}

export default ShowAllVideos;

// if (!videoState === null) return <div>Loading...</div>;
// { console.log(video.video_url, 'video') }

                // <div>
                //     {/* {video.video_url} */}
                // <div>
                //     {/* {video.video_url} */}
                //     <div className="allVideos" style={{ border: 'red', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                //         <video src={video.video_url} />
                //     </div>

                // </div>

                // </div>

                // if (Object.keys(videoState).length === 0) {
    //     // Handle the case where there are no videos
    //     return <div>No videos available.</div>;
    // }
