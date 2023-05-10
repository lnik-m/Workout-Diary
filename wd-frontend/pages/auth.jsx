import { Stack } from '@mantine/core'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './auth.module.scss'

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // needs to be added
    };
    return (
      <Stack>
        <header className={styles.header}>
            <img src="logo.png"/>
        </header>
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
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <input
            className={styles.authInput}
            placeholder='Password'
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className={styles.button}>Sign in</button>
      </form>
      <p>
        Not registered yet?{' '}
        <Link  className={styles.link} href="/register">
          Sign up here
        </Link>
      </p>
      </div>


      </Stack>
    )
  }

export default Auth