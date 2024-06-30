import clsx from "clsx";
import css from "../FriendsListItem/FriendsListItem.module.css"

export default function FriendsListItem({ friend: { avatar, name, isOnline } }) {
    const networkStatus = clsx(css.status, isOnline ? css.online : css.offline)
    return (
        <div className={css.container}>
            <img src={avatar} alt="User avatar" height="130" width="130" />
            <ul className={css.list}>
                <li className={css.name}>{name}</li>
                <li className={networkStatus}>
                    {isOnline === true ? "Online" : "Offline"}
                </li>
            </ul>
    </div>
    )
}