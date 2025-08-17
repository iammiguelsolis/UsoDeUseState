import { Cards } from "./Cards";

const users = [
    { name: "Brenda", username: "brenda", avatar: "https://i.pravatar.cc/150?u=brenda", isFollowing: true },
    { name: "Fernando", username: "fernando", avatar: "https://i.pravatar.cc/150?u=fernando", isFollowing: false },
    { name: "Pedro", username: "pedro", avatar: "https://i.pravatar.cc/150?u=pedro", isFollowing: true },
    { name: "Maria", username: "maria", avatar: "https://i.pravatar.cc/150?u=maria", isFollowing: true },
    { name: "Gustavo", username: "gustavo", avatar: "https://i.pravatar.cc/150?u=gustavo", isFollowing: false },
    { name: "Sofia", username: "sofia", avatar: "https://i.pravatar.cc/150?u=sofia", isFollowing: true },
    { name: "Luis", username: "luis", avatar: "https://i.pravatar.cc/150?u=luis", isFollowing: false }
]

export const App = () => {
    return (
        <main>
            {
                users.map(
                    (user) => (
                        <Cards
                            key={user.username}
                            name={user.name}
                            username={user.username}
                            avatar={user.avatar}
                            isFollowing={user.isFollowing}
                        />
                    )
                )
            }
        </main>
    )
}