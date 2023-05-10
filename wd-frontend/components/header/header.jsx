import Link from "next/link";
import {Flex} from "@mantine/core";
import {IconUserCircle} from "@tabler/icons";
import {useSelector} from "react-redux";

export const Header = () => {
    const isAuthorized = useSelector(state => state.saved.user.isAuthorized)

    return (
        <Flex justify='space-between'>
            <Link href='/'><img src="logo.png" alt='logo' height='32px' />
            </Link>
            {isAuthorized
                ? <Link href='/dashboard'><IconUserCircle size={'32px'} /></Link>
                : <Link href='/auth'>Sign in</Link>
            }
        </Flex>
    )
}
