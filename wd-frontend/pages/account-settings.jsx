import { Stack } from '@mantine/core';
import { NavLink } from '@/components'
import { IconLink } from '@tabler/icons'
import styles from './profile.module.scss'

const SettingsPage = () => {
    return (
      <>
        <Stack>
          <h2>Account</h2>
          <NavLink link="/measurements" icon={<IconLink />} text="Measurements" />
          <NavLink link="/profile" icon={<IconLink />} text="Profile"/>
        </Stack>
        <button className={styles.buttonOut} type="submit">Log out</button>
    </>
      )
  }
  
  export default SettingsPage