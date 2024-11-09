import React from 'react';
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Image
} from 'semantic-ui-react';
import PeopleModal from './PeopleModal';

const PeopleCard = (prop) => {
    return (
        <Card className="w-60 h-[500px] flex flex-col justify-between shadow-lg">
            <Image src={prop.imagePath} ui={false} className="h-96 w-full object-cover" />
            <CardContent className="flex-grow">
                <CardHeader>{prop.name}</CardHeader>
                <CardMeta>
                    <span className='date'>{prop.title}</span>
                </CardMeta>
                <CardDescription>
                    {prop.tagline}
                </CardDescription>
            </CardContent>
            <Card.Content extra>
                <PeopleModal person={prop} />
            </Card.Content>
        </Card>
    )
}

export default PeopleCard;
