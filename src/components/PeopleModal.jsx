import React from 'react';
import {
    ModalHeader,
    ModalDescription,
    ModalContent,
    ModalActions,
    Modal,
    Header,
    Button,
    Image,
    Icon
} from 'semantic-ui-react';

const PeopleModal = ({ person }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Modal
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            trigger={<Button>{person.name}</Button>}
            size='medium'
        >
            <ModalHeader>{person.name}</ModalHeader>
            <ModalContent image>
                <Image size='small' src={person.imagePath} wrapped />
                <ModalDescription>
                    <Header>{person.title}</Header>
                    {person.tagline && <p>{person.tagline}</p>}
                    {person.interestArea && (
                        <p>
                            <strong>Interest Area:</strong> {person.interestArea}
                        </p>
                    )}
                    {person.office && (
                        <p>
                            <strong>Office:</strong> {person.office}
                        </p>
                    )}
                    {person.phone && (
                        <p>
                            <strong>Phone:</strong> {person.phone}
                        </p>
                    )}
                    {person.email && (
                        <p>
                            <strong>Email:</strong> {person.email}
                        </p>
                    )}
                </ModalDescription>
            </ModalContent>
            <ModalActions>
                {person.website && (
                    <Button
                        as="a"
                        href={person.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="blue"
                    >
                        Website
                    </Button>
                )}
                {person.twitter && (
                    <Button
                        as="a"
                        href={`https://twitter.com/${person.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="twitter"
                    >
                        <Icon name="twitter" /> Twitter
                    </Button>
                )}
                {person.facebook && (
                    <Button
                        as="a"
                        href={`https://facebook.com/${person.facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="facebook"
                    >
                        <Icon name="facebook" /> Facebook
                    </Button>
                )}
                {person.email && (
                    <Button
                        as="a"
                        href={`mailto:${person.email}`}
                        color="green"
                    >
                        <Icon name="mail" /> Email
                    </Button>
                )}
                <Button onClick={handleClose} color='black'>Close</Button>
            </ModalActions>
        </Modal>
    );
}

export default PeopleModal;
