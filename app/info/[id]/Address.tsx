'use client'
import React, {useState} from 'react';
import Link from "next/link";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";


const Address = ({address, lat, lon}: { address: string, lon: string, lat: string }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <p className='text-sky-400 hover:text-sky-500 underline cursor-pointer' onClick={handleClickOpen}>{address}</p>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Перейти на другую страницу?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Вы действительно хотите перейти на другую страницу?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Остаться</Button>
                    <Button onClick={handleClose} autoFocus>
                        <Link
                            rel="noopener noreferrer" target="_blank"

                            href={`https://yandex.ru/maps/?whatshere[point]=${lon},${lat}&whatshere[zoom]=17`}>
                            Перейти
                        </Link>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Address;