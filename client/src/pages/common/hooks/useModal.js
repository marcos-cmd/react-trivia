import React from 'react';

const useModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
        console.log('This worked.', open);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return {
        open,
    }
};

export default useModal;