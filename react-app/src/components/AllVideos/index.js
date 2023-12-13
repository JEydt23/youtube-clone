// import {useEffect} from "react";
// import {useDispatch} from "react-redux";
// import getAllVideos from "../../store/videos"
import AllVideos from './AllVideos';

const ShowAllVideos = () => {


    return (
        <div className="videos-list">
            {videos.map(video => {
                <AllVideos key={video} video={video} />
            })}
        </div>
    )






}
