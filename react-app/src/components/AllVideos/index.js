import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../../store/videos"
import AllVideos from './AllVideos';

const ShowAllVideos = () => {
    const videoState = useSelector(state => state.video.viewAllVideos);
    const dispatch = useDispatch();
    console.log('videostate ==== ', videoState)

    useEffect(() => {
        dispatch(getAllVideos());

    }, [dispatch, videoState])

    // if (!videoState === null) return <div>Loading...</div>;

    // if (Object.keys(videoState).length === 0) {
    //     // Handle the case where there are no videos
    //     return <div>No videos available.</div>;
    // }
    return (
        <div className="videos-list" style={{ border: 'red' }}>
            {Object.values(videoState).map(video => {
                <AllVideos key={video.id} video={video} />
            })}
        </div>

    )



}

export default ShowAllVideos;
