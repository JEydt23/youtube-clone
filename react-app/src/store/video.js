const LOAD_ALL_VIDEOS = '/videos/LOAD_ALL_VIDEOS'
const LOAD_SINGLE_VIDEO = '/videos/LOAD_SINGLE_VIDEO'

// ACTION CREATORS

const allVideos = videos => {
    return {
        type: LOAD_ALL_VIDEOS,
        videos
    }
}

const singleVideo = video => {
    return {
        type: LOAD_SINGLE_VIDEO,
        video
    }
}

// THUNKS

export const getAllVideos = () => async (dispatch) => {
    const response = await fetch(`/api/videos`);
    if (response.ok) {
        const videos = await response.json();

        dispatch(allVideos(videos))

    }
}

export const getSingleVideo = (videoId) => async (dispatch) => {
    const response = await fetch(`/api/videos/${videoId}`);
    if (response.ok){
        const video = await response.json();
        dispatch(singleVideo(video))
    }
}


//  REDUCER

export default function reducer(state = { viewAllVideos: {}, viewSingleVideo: {} }, action) {
    switch (action.type) {
        case LOAD_ALL_VIDEOS: {
            const newState = { viewAllVideos: {}, viewSingleVideo: {} }

            action.videos.Videos.forEach(e => {
                // console.log('e === ', e)
                newState.viewAllVideos[e.id] = e
            })
            return newState
        }

        case LOAD_SINGLE_VIDEO: {
            const newState = {viewAllVideos: {}, viewSingleVideo: {} }
            newState.viewSingleVideo = action.video
            return newState
        }
        default:
            return state
    }
}
