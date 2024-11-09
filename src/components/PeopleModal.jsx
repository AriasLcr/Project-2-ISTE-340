import React from 'react';
import {
    ModalHeader,
    ModalDescription,
    ModalContent,
    ModalActions,
    Modal,
    Header,
    Button,
    Image
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
                    <p>{person.tagline}</p>
                </ModalDescription>
            </ModalContent>
            <ModalActions>
                {person.website &&
                    <Button onClick={() => {window.open(person.website)}}>Website</Button>
                }
                <Button onClick={handleClose} color='black'>Close</Button>
            </ModalActions>
        </Modal>
    );
}

export default PeopleModal;