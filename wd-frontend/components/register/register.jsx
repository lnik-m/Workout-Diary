import { Stack } from '@mantine/core'
import React, { useState } from 'react';
import styles from './register.module.scss'
import {Header} from "@/components";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {signUp} from "@/slices/userSlice";

export const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const dispatch = useDispatch()
    const router = useRouter()

    const handleSubmit = (event) => {
      event.preventDefault();
      // needs to be added
        dispatch(signUp({username, password, email}))
        router.replace('/dashboard')
    };

    return (
      <Stack>
        <Header />
        <h2 className={styles.h2}>Sign up</h2>
        <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <input
            className={styles.authInput}
            placeholder='Username'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            className={styles.authInput}
            placeholder='Email'
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className={styles.authInput}
            placeholder='Password'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.button}>Sign up</button>
      </form>
      </div>
      </Stack>
    )
  }

