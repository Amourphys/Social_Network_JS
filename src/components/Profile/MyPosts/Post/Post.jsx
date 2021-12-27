import p from './Post.module.css';

const Post = (props) => {
    return (
        <div className={p.item}>
            {props.message}
            <img src="https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75" alt="foto"/>
            <div className={p.likes}>
                <button>
                    like
                </button>
                <div className={p.likeStatus}>
                    {props.likesCount}
                </div>
            </div>
        </div>
    )
}

export default Post;