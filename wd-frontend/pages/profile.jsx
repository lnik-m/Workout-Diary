import Link from "next/link";
import { Stack } from '@mantine/core';
import Image from 'next/image'
import { useState } from 'react';
import styles from './profile.module.scss'
import {BackButton} from "@/components";


const Profile = ({user}) => {
    const [name, setName] = useState(user);
    const [bio, setEmail] = useState(user);
    const [goal, setGoal] = useState(user);

    const [selectedChoice, setSelectedChoice] = useState('');

    const handleChoiceChange = (event) => {
      setSelectedChoice(event.target.value);
    };

    return (
        <>
        
        <BackButton title='Profile' link='/account-settings' />
        <Stack>
            <form className={styles.profileForm}>
                <input
                    className={styles.formInput}
                    placeholder="name"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    className={styles.formInput}
                    placeholder="bio"
                    type="text"
                    id="bio"
                    name="bio"
                    value={bio}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className={styles.checkbox}>
                    
                    <input 
                    className={styles.checkboxInput}
                    type="radio" 
                    value="woman" 
                    checked={selectedChoice === "woman"}
                    onChange={handleChoiceChange}
                    />
                    <label>
                        woman
                    </label>
                    
                        <input 
                        className={styles.checkboxInput}
                        type="radio" 
                        value="man" 
                        checked={selectedChoice === "man"}
                        onChange={handleChoiceChange}
                        />
                    <label>
                        man
                    </label>
                    
                        <input 
                        className={styles.checkboxInput}
                        type="radio" 
                        value="nevermind" 
                        checked={selectedChoice === "nevermind"}
                        onChange={handleChoiceChange}
                        />
                    <label>
                        nevermind
                    </label>
                    </div>


                <input
                    className={styles.formInput}
                    placeholder="goal"
                    type="text"
                    id="goal"
                    name="goal"
                    value={goal}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button className={styles.button} type="submit">Update profile</button>
                </form>

        </Stack>
        
        </>
    )
    
}

export default Profile