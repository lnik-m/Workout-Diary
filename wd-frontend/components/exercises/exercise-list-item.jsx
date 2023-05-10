import {Card, Group, Badge} from '@mantine/core'
import Link from "next/link";

export const ExerciseListItem = ({exercise}) => {
    return (
          <Link href={`/exercises/${exercise.id}`} style={{width: '100%'}}>
            <Card
                bg='#E9D5CA'
                c='#363062'
                shadow="sm"
            >
                <h3 style={{
                    marginBottom: '20px'
                }}>
                    {exercise.name}
                </h3>
                <Group>
                    <>
                    {exercise?.tags.map(tag => (
                        <Badge key={`${tag}-${exercise.id}`} color="violet" variant="outline">
                            <>{tag}</>
                        </Badge>
                    ))}
                    </>
                </Group>
            </Card>
        </Link>

    )
}
