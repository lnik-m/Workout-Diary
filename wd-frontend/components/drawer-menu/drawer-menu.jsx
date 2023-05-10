import { useDisclosure } from '@mantine/hooks';
import {Divider, Drawer, Group, Stack} from '@mantine/core';
import styles from './drawer-menu.module.scss'
import {UnstyledButton} from "@mantine/core";
import {IconLink, IconMenu} from "@tabler/icons";
import {NavLink} from "@/components";

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
                    <NavLink link="/dashboard" icon={<IconLink />} text="Dashboard"/>

                    <NavLink link="/exercises" icon={<IconLink />} text="Exercises" />
                    <NavLink link="/workouts" icon={<IconLink />} text="Workouts" />

                    <NavLink link="/settings" icon={<IconLink />} text="Settings"/>
                    <NavLink link="/" icon={<IconLink />} text="Home"/>
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
