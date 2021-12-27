const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 14}
      ],
      newPostText: 'it-kamasutra'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return { // shallow copy
                ...state,
                posts: [...state.posts, newPost], // пушинг нового элемента в конец массива
                newPostText: ''
            }; 
        }
        case UPDATE_NEW_POST_TEXT: {
            return { // shallow copy
                ...state,
                newPostText: action.newText
            }; 
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;