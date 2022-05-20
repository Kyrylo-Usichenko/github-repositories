const SET_REPOS = 'SET_REPOS';
const initialState = {
    items:[],
    isFetching: true,
}

export default function (state = initialState, action){
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items
            }
        default:
            return state
    }
}

export const setRepos = (repos) => ({type: SET_REPOS, payload: repos})

