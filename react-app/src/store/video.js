const LOAD_ALL_VIDEOS = '/videos/LOAD_ALL_VIDEOS'

// ACTION CREATORS

const allVideos = videos => {
    return {
        type: LOAD_ALL_VIDEOS,
        videos
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


//  REDUCER

export default function reducer(state = { viewAllVideos: {} }, action) {
    switch (action.type) {
        case LOAD_ALL_VIDEOS: {
            const newState = { viewAllVideos: {} }

            action.videos.Videos.forEach(e => {
                // console.log('e === ', e)
                newState.viewAllVideos[e.id] = e
            })
            return newState
        }
        default:
            return state
    }
}
