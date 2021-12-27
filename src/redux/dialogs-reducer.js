const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Juriy'},
        {id: 5, name: 'Bonifacij'},
        {id: 6, name: 'Sasha'},
        {id: 7, name: 'Tolya'}
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Good by'},
        {id: 4, message: 'IT'},
        {id: 5, message: 'How are you'},
        {id: 6, message: 'What is your name?'},
        {id: 7, message: 'I am dont now'}
    ],
    newMessageBody: ''}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}] // пушинг элемента в новый массив
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;