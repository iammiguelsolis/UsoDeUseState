import "./Cards.css"
import { useState } from 'react'

export function Cards({ name, username, avatar, isFollowing }) {
    const [isFollowingState, setIsFollowingState] = useState(isFollowing)

    const text = isFollowingState ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowingState
        ? "tw-follow-card-button is-following"
        : "tw-follow-card-button"


    const handleClick = () => {
        setIsFollowingState(!isFollowingState)
    }

    return (
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img
                    src={avatar}
                    alt={`${name} avatar`}
                    className="tw-follow-card-avatar"
                />

                <div className="tw-follow-card-info">
                    <strong className="tw-follow-card-fullname">{name}</strong>
                    <span className="tw-follow-card-username">@{username}</span>
                </div>
            </header>

            <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-follow-card-text">{text}</span>
                {isFollowingState && (
                    <span className="tw-follow-card-stopFollow">Dejar de seguir</span>
                )}
            </button>
        </article>
    )
}
