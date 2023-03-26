import { Stack } from '@mantine/core'
import { IconLink } from '@tabler/icons'
import { NavLink } from '@/components'

const Home = () => {
  return (
    <Stack>
      <h2>Editor</h2>
      <NavLink link="/exercises" icon={<IconLink />} text="Exercises" />
    </Stack>
  )
}

// noinspection JSUnusedGlobalSymbols
export default Home
