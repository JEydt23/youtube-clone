import ReactPlayer from "react-player";

const SingleVideo = ({ videoDetails }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div className="react-player-div" style={{ }}>
                <ReactPlayer url={'https://www.youtube.com/watch?v=Ye-frzA7N0E'} height='920px' width='1080px' controls={true} />
            </div>
            <div className='video-artist' style={{alignItems:'flex-start'}}>
                Artist Name
            </div>
            <div>
                Song Name
            </div>
        </div>
    )
}

export default SingleVideo;
