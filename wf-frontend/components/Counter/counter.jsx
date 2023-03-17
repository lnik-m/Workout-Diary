import styles from './counter.module.scss'

import {useDispatch, useSelector} from "react-redux";
import {add, subtract, clear} from "@/slices/countSlice";

export const Counter = () => {
    const count = useSelector(state => state.count.count)
    const dispatch = useDispatch()

    return (
        <div className={styles.counterContainer}>
            <div>Current count: {count}</div>
            <div className={styles.counterButtons}>
                <button className={styles.counterButton} onClick={() => dispatch(add())}>+</button>
                <button className={styles.counterButton} onClick={() => dispatch(subtract())}>-</button>
            </div>
            <button className={styles.counterButton} onClick={() => dispatch(clear())}>Clear</button>
        </div>
    )
}
