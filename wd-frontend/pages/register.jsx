import { Stack } from '@mantine/core'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './auth.module.scss'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handleUsernameChange = (event) => {
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
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <input
            className={styles.authInput}
            placeholder='Email'
            type="text"
            id="email"
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
        <button type="submit" className={styles.button}>Sign up</button>
      </form>
      </div>


      </Stack>
    )
  }

export default Register