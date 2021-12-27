import styles from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg', followed: true, fullName: 'Dmitriy', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
                {id: 2, photoUrl: 'https://n1s1.starhit.ru/71/56/2a/71562ac2f7cb1423bdba96b371b166b1/368x460_0_c1e2e1310cc3d40ddad761ea3d206a6e@1080x1350_0xac120003_16269215231634570461.jpg', followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}}, 
                {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Andrew_WK.jpg/274px-Andrew_WK.jpg', followed: false, fullName: 'Andrew', status: 'I am a teacher', location: {city: 'Kiev', country: 'Ukraine'}},
                {id: 4, photoUrl: 'https://cs12.pikabu.ru/post_img/big/2021/04/09/4/1617944768196944867.jpg', followed: true, fullName: 'Bonifacyj', status: 'I am a fighter', location: {city: 'Los-Angeles', country: 'USA'}}
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} alt="photo"/>
                        </div>
                        <div>
                            { u.followed
                             ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button> 
                             : <button onClick={ () => {props.follow(u.id)} }>Follow</button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;