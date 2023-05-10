import {Notification, Stack} from '@mantine/core'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './auth.module.scss'
import {Header} from "@/components";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {signIn} from "@/slices/userSlice";
import {IconX} from "@tabler/icons";


export const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false)

    const dispatch = useDispatch()
    const router = useRouter()

    const isAuthorized = useSelector(state => state.saved.user.isAuthorized)

  
    const handleSubmit = (event) => {
      event.preventDefault();
      // needs to be added
      dispatch(signIn({email, password}))

      isAuthorized ? router.replace('/dashboard') : setError(true)
    };
    return (
      <Stack>
        <Header />
          {
              error &&
              <Notification icon={<IconX size="1.1rem"/>} color="red"
                            sx={{ position: 'absolute', top: '20px', right: '30px'}}
                            onClose={() => setError(false)}>
                  Data is incorrect
              </Notification>
          }
        <h2 className={styles.h2}>Sign in</h2>
        <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <input
            className={styles.authInput}
            placeholder='Email'
            type="text"
            id="username"
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
        <button type="submit" className={styles.button}
            disabled={!email || !password}
        >Sign in</button>
      </form>
      <p>
        Not registered yet?{' '}
        <Link href="/register">
          Sign up here
        </Link>
      </p>
      </div>
      </Stack>
    )
  }

