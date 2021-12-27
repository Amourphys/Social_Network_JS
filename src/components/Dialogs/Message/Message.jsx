import d from './../Dialogs.module.css';

const Message = (props) => {
    return <div className={d.dialog}>{props.message}</div>
}

export default Message;