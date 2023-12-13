import FamilyGuy from './Family Guy - Peter Sings Christmas songs.mp4';
import RichardGear from './Richard Gear.mp4';
import SandStorm from './Sandstorm (Radio Edit).mp4';
import ReactPlayer from 'react-player'

{/* <video src={FamilyGuy} controls width="320" height="240" style={{margin: '5px'}}></video>
<video src={RichardGear} controls width="320" height="240" style={{margin: '5px'}}></video>
<video src={SandStorm} controls width="320" height="240" style={{margin: '5px'}}></video> */}
const AllVideos = ({ video }) => {




    return (
        <div className="allVideos" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
            <ReactPlayer url={'https://www.youtube.com/watch?v=xffXTdXXwgY'} wrapper='div' width="320px" height="240px" controls={true} style={{margin: '5px'}}/>
            <ReactPlayer url={'https://www.youtube.com/watch?v=jRHwfxu9GVo'} wrapper='div' width="320px" height="240px" controls={true} style={{margin: '5px'}}/>
            <ReactPlayer url={'https://www.youtube.com/watch?v=2gqJNDTgMXk'} wrapper='div' width="320px" height="240px" controls={true} style={{margin: '5px'}}/>
            <ReactPlayer url={'https://www.youtube.com/watch?v=tAlPwnkQURg'} wrapper='div' width="320px" height="240px" controls={true} style={{margin: '5px'}}/>
            <ReactPlayer url={'https://www.youtube.com/watch?v=R9Yasi99n-o'} wrapper='div' width="320px" height="240px" controls={true} style={{margin: '5px'}}/>
            <ReactPlayer url={'https://www.youtube.com/watch?v=UkK0g4-l0Gg'} wrapper='div' width="320px" height="240px" controls={true} style={{margin: '5px'}}/>
            <ReactPlayer url={'https://www.youtube.com/watch?v=UkK0g4-l0Gg'} wrapper='div' width="320px" height="240px" controls={true} style={{margin: '5px'}}/>
            <ReactPlayer url={'https://www.youtube.com/watch?v=UkK0g4-l0Gg'} wrapper='div' width="320px" height="240px" controls={true} style={{margin: '5px'}}/>
            <ReactPlayer url={'https://www.youtube.com/watch?v=UkK0g4-l0Gg'} wrapper='div' width="320px" height="240px" controls={true} style={{margin: '5px'}}/>
            <ReactPlayer url={'https://www.youtube.com/watch?v=UkK0g4-l0Gg'} wrapper='div' width="320px" height="240px" controls={true} style={{margin: '5px'}}/>
            <ReactPlayer url={'https://www.youtube.com/watch?v=UkK0g4-l0Gg'} wrapper='div' width="320px" height="240px" controls={true} style={{margin: '5px'}}/>
            <ReactPlayer url={'https://www.youtube.com/watch?v=UkK0g4-l0Gg'} wrapper='div' width="320px" height="240px" controls={true} style={{margin: '5px'}}/>
        </div>
    )
}

export default AllVideos
