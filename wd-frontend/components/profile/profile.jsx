import { Stack } from '@mantine/core';
import {Fragment, useState} from 'react';
import styles from './profile.module.scss'
import {BackButton} from "@/components";
import {useDispatch, useSelector} from "react-redux";
import {updateData} from "@/slices/userSlice";


export const Profile = () => {
    const user = useSelector(state => state.saved.user)
    const dispatch = useDispatch()

    const [username, setName] = useState(user.username ?? '');
    const [bio, setBio] = useState(user.bio ?? '');
    const [goal, setGoal] = useState(user.goal ?? '');

    const [selectedChoice, setSelectedChoice] = useState(user.sex ?? '');

    const sex = ['woman', 'man', 'nevermind']

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateData({username, bio, goal, sex: selectedChoice}))
    }

    return (
        <>
        <BackButton title='Profile' link='/settings' />
        <Stack>
            <form onSubmit={handleSubmit} className={styles.profileForm} >
                <input
                    className={styles.formInput}
                    placeholder="name"
                    type="text"
                    id="name"
                    name="name"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    className={styles.formInput}
                    placeholder="bio"
                    type="text"
                    id="bio"
                    name="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />

                <div className={styles.checkbox}>
                    {sex.map(sex => (
                        <Fragment key={sex}>
                        <input
                            type="radio"
                            value={sex}
                            checked={selectedChoice === sex}
                            onChange={e => setSelectedChoice(e.target.value)}
                        />
                        <label>
                            {sex}
                        </label>
                        </Fragment>
                        )
                    )}
                    </div>

                <input
                    className={styles.formInput}
                    placeholder="goal"
                    type="text"
                    id="goal"
                    name="goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                />
                <button className={styles.button} type="submit">Update profile</button>
                </form>
        </Stack>
        </>
    )
}
