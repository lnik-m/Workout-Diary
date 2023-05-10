import { Stack } from '@mantine/core'
import styles from './home.module.scss'
import Link from 'next/link';
import {Header} from "@/components";
import React from "react";



export const Home = () => {
    return (
      <Stack>
        <Header />
        <h2>Description</h2>
        <div className={styles.cardsContainer}>
            <div className={styles.card}>
            This app is designed to help individuals track their physical activity and monitor their progress towards their fitness goals.
            Users can create their own training plans and track their progress by inputting data about their physical activity throughout the day.
            </div>
            <h3  className={styles.h3}>Make your personal training plan</h3>
            <div className={styles.card}>
            <span> This app is designed to help individuals track their physical activity and monitor their progress towards their fitness goals.
            Users can create their own training plans and track their progress by inputting data about their physical activity throughout the day.</span>
            <Link href="/auth">
                <button className={styles.button}>Start workout</button>
            </Link>
            </div>
        </div>
      </Stack>
    )
  }
