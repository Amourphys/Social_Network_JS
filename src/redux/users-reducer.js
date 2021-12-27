const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        /* {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg', followed: true, fullName: 'Dmitriy', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photoUrl: 'https://n1s1.starhit.ru/71/56/2a/71562ac2f7cb1423bdba96b371b166b1/368x460_0_c1e2e1310cc3d40ddad761ea3d206a6e@1080x1350_0xac120003_16269215231634570461.jpg', followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}}, 
        {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Andrew_WK.jpg/274px-Andrew_WK.jpg', followed: false, fullName: 'Andrew', status: 'I am a teacher', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 4, photoUrl: 'https://cs12.pikabu.ru/post_img/big/2021/04/09/4/1617944768196944867.jpg', followed: true, fullName: 'Bonifacyj', status: 'I am a fighter', location: {city: 'Los-Angeles', country: 'USA'}} */
    ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: [...state, users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                //users: [...state, users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default: 
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;