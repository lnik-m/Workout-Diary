import { Stack } from '@mantine/core';
import {DrawerMenu, NavLink} from '@/components'
import { IconUserCircle } from '@tabler/icons'
import styles from './settings.module.scss'
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {logOut} from "@/slices/userSlice";

export const Settings = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    return (
        <Stack align="center">
            <h2>Settings</h2>
            <NavLink link="/profile" icon={<IconUserCircle />} text="Profile"/>

            <button className={styles.buttonOut}
                    onClick={() => {
                        dispatch(logOut())
                        router.replace('/')
                    }}
            >Log out</button>
            <DrawerMenu />
        </Stack>
      )
  }
