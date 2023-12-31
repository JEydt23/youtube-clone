import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
                <div className="singleVid"
                    key={video.id}
                    onMouseEnter={() => setHoveredVid(video.id)}
                    onMouseLeave={() => setHoveredVid(null)}
                >
                    <div className="navlink-div" style={{ border: 'yellow 1px solid' }}>
                        <NavLink to={`/videos/${video.id}`} style={{ textDecoration: "none" }} >
                            <ReactPlayer
                                className="test"
                                style={{ border: "10px red solid" }}
                                url={video.video_url}
                                playing={hoveredVid === video.id}
                                controls={false}
                                muted={true}
                                height="100%"
                                width="100%"
                            />
                        </NavLink>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShowAllVideos;
