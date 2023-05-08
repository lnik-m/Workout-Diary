import { Stack } from '@mantine/core'
import { IconLink } from '@tabler/icons'
import { NavLink } from '@/components'

const Home = () => {
  return (
    <Stack>
      <h2>Editor</h2>
      <NavLink link="/exercises" icon={<IconLink />} text="Exercises" />
      <NavLink link="/account-settings" icon={<IconLink />} text="Settings"/>
      <NavLink link="/main" icon={<IconLink />} text="Main"/>
      <NavLink link="/auth" icon={<IconLink />} text="Auth"/>
    </Stack>
  )
}

// noinspection JSUnusedGlobalSymbols
export default Home
