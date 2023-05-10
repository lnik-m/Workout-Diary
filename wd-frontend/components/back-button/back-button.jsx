import Link from "next/link";
import {IconArrowLeft} from "@tabler/icons";
import {Group} from "@mantine/core";

export const BackButton = ({title, link}) => {
    return (
        <Group align='center' position='center'>
            <Link href={link} style={{height:'24px'}}>
                <IconArrowLeft />
            </Link>
            <h2>{title}</h2>
        </Group>
    )
}
