import styles from './counter.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { add, subtract, clear } from '@/slices/countSlice'

export const Counter = () => {
  const count = useSelector(state => state.count.count)
  const dispatch = useDispatch()

  const [heartColor, setHeartColor] = useState(true)

  return (
    <div className={styles.counterContainer}>
      <div>Current count: {count}</div>
      <div className={styles.counterButtons}>
        <button
          className={styles.counterButton}
          onClick={() => dispatch(add())}
        >
          +
        </button>
        <button
          className={styles.counterButton}
          onClick={() => dispatch(subtract())}
        >
          -
        </button>
      </div>
      <button
        className={styles.counterButton}
        onClick={() => dispatch(clear())}
      >
        Clear
      </button>
      Usage icons example:
      <FontAwesomeIcon
        onClick={() => setHeartColor(!heartColor)}
        cursor="pointer"
        icon={faHeart}
        color={heartColor ? 'rgb(255 192 203)' : 'rgb(0 0 0)'}
      />
    </div>
  )
}
