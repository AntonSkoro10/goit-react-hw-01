import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem"
import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
    return (
        <table>
            <thead className={css.thead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody className={css.tlist}>
                {items.map((item) => {
                    return <TransactionHistoryItem key={item.id} transaction={item} />
                })}
            </tbody>
        </table>
    )
}