import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleVideo } from "../../store/video";

import ReactPlayer from "react-player";



const SingleVideo = () => {

    const singleVideoState = useSelector(state => state.video.viewSingleVideo)
    // const allVideosState = useSelector(state => state.video.viewAllVideos)
    const { videoId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (videoId) {
            dispatch(getSingleVideo(videoId))
        }
    }, [videoId, dispatch])

    // console.log("all video state ==== ", allVideosState)

    if (!singleVideoState) return null;

    console.log("single video state ==== ", singleVideoState)


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div className="react-player-div" style={{}}>
                <ReactPlayer url={singleVideoState.video_url} height='920px' width='1080px' controls={true} />
            </div>
            <div className='video-artist' style={{ alignItems: 'flex-start' }}>
                {singleVideoState.title}
            </div>
            <div>{singleVideoState.description}</div>
            <div>
                {/* {singleVideoState.user_info.first_name} {singleVideoState.user_info.last_name} */}
            </div>
        </div>
    )
}

export default SingleVideo;
