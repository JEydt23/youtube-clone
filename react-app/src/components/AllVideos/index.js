import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../../store/video";
import ReactPlayer from 'react-player'
import './AllVideos.css'

const ShowAllVideos = () => {
    const videoState = useSelector(state => state.video.viewAllVideos);
    const dispatch = useDispatch();
    const [hoveredVid, setHoveredVid] = useState(null);

    useEffect(() => {
        dispatch(getAllVideos());
    }, [dispatch]);

    return (
        <div className="videos-main-div">
            {Object.values(videoState).map(video => (
                <div
                    key={video.id}
                    onMouseEnter={() => setHoveredVid(video.id)}
                    onMouseLeave={() => setHoveredVid(null)}
                >
                    <ReactPlayer
                        url={video.video_url}
                        width="100%"
                        height="100%"
                        playing={hoveredVid === video.id}
                        controls={false}
                        muted={true}
                    />
                </div>
            ))}
        </div>
    );
};

export default ShowAllVideos;
