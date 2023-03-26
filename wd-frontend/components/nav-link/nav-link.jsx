import Link from 'next/link'
import { Group } from '@mantine/core'

export const NavLink = ({ link, icon, text }) => {
  return (
    <Link href={link} style={{ width: 'max-content' }}>
      <Group align="center">
        {icon}
        {text}
      </Group>
    </Link>
  )
}
