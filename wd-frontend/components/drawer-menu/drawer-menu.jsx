import { useDisclosure } from '@mantine/hooks';
import {Drawer, Group, Stack} from '@mantine/core';
import styles from './drawer-menu.module.scss'
import {UnstyledButton} from "@mantine/core";
import {IconClipboard, IconMenu, IconHome2, IconSettings, IconStretching, IconJumpRope} from "@tabler/icons";
import {NavLink} from "@/components";
import { Fragment } from 'react';

export const DrawerMenu = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Drawer
                opened={opened} onClose={close}
                    position="bottom" size="40%"
                    overlayProps={{ opacity: 0.5, blur: 4 }}
            >
                <Stack align="center" justify="center">
                    <NavLink link="/dashboard" icon={<IconClipboard />} text="Dashboard"/>

                    <NavLink link="/exercises" icon={<IconStretching />} text="Exercises" />
                    <NavLink link="/workouts" icon={<IconJumpRope />} text="Workouts" />

                    <NavLink link="/settings" icon={<IconSettings />} text="Settings"/>
                    <NavLink link="/" icon={<IconHome2 />} text="Home"/>
                </Stack>
            </Drawer>

            {!opened &&
                <UnstyledButton onClick={open}>
                <Group position="center" align="center" className={styles.drawerButton}>
                    <IconMenu size={60} color='white' />
                </Group>
                </UnstyledButton>
            }
        </>
    )
}
