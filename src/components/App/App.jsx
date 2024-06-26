import userData from "../../userData.json"
import friends from "../../friends.json"
import transactions from "../../transactions.json"
import "modern-normalize"


import Profile from "../Profile/Profile"
import Friends from "../Friends/Friends"
import TransactionHistory from "../TransactionHistory/TransactionHistory"

export default function App() {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <Friends friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    )
}