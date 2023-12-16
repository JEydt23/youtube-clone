import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../../store/video";
// import AllVideos from './AllVideos';
import ReactPlayer from 'react-player'

const ShowAllVideos = () => {
    const videoState = useSelector(state => state.video.viewAllVideos);
    const dispatch = useDispatch();
    console.log('videostate ==== ', Object.values(videoState))

    useEffect(() => {
        dispatch(getAllVideos());

    }, [dispatch, videoState.id])

    // if (!videoState === null) return <div>Loading...</div>;

    // if (Object.keys(videoState).length === 0) {
    //     // Handle the case where there are no videos
    //     return <div>No videos available.</div>;
    // }
    return (
        <div>
        {/* className="videos-list" style={{ border: 'red', display: 'flex' } */}
            {Object.values(videoState).map(video => {
                <div>hi</div>
                // { console.log(video.video_url, 'video') }

                // <div>
                //     {/* {video.video_url} */}
                // <div>
                //     {/* {video.video_url} */}
                //     <div className="allVideos" style={{ border: 'red', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                //         <ReactPlayer video={video.video_url} wrapper='div' width="320px" height="240px" controls={true} style={{ margin: '5px', border: 'blue' }} />
                //         <video src={video.video_url} />
                //     </div>

                // </div>

                // </div>
            })}

            hi
        </div>

    )



}

export default ShowAllVideos;
