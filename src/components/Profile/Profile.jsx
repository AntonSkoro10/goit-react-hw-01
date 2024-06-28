import css from "./Profile.module.css"

export default function Profile({ username, name, tag, location, avatar, stats }) {
    return (
        <div className={css.container}>
  <div className={css.profile}>
    <img className={css.image}
      src={avatar}
      alt={name}
    />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.statsItem}>
      <span className={css.statsText}>Followers</span>
      <span className={css.statsValue}>{stats.followers}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.statsText}>Views</span>
      <span className={css.statsValue}>{stats.views}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.statsText}>Likes</span>
      <span className={css.statsValue}>{stats.likes}</span>
    </li>
  </ul>
</div>

    )
}

