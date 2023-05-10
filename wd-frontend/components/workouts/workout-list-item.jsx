import {Card, Group, Badge} from '@mantine/core'
import Link from "next/link";

export const WorkoutListItem = ({workout}) => {
    return (
          <Link href={`/workouts/${workout.id}`} style={{width: '100%'}}>
            <Card
                bg='#E9D5CA'
                c='#363062'
                shadow="sm"
            >
                <h3 style={{
                    marginBottom: '20px'
                }}>
                    {workout.name}
                </h3>
                <Group>
                    <>
                    {workout?.tags.map(tag => (
                        <Badge key={`${tag}-${workout.id}`} color="violet" variant="outline">
                            <>{tag}</>
                        </Badge>
                    ))}
                    </>
                </Group>
            </Card>
        </Link>

    )
}
