/**
 * PeopleCard component renders a card with information about a person.
 *
 * @param {Object} prop - The properties object.
 * @param {string} prop.imagePath - The path to the image of the person.
 * @param {string} prop.name - The name of the person.
 * @param {string} prop.title - The title or position of the person.
 * @param {string} prop.tagline - A short description or tagline for the person.
 * @returns {JSX.Element} The rendered PeopleCard component.
 */

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
