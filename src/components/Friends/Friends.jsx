import css from "./Friends.module.css"
import FriendsListItem from "../FriendsListItem/FriendsListItem"

export default function FriendList({ friends }) {
    return (
        <ul className={css.list}>
            {friends.map((friend) => (
                <li key={friend.id}>
                    <FriendsListItem friend={friend}/>
                </li>
            ))}
        </ul>
    )
}