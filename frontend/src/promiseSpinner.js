import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { promiseTrackerHoc } from "react-promise-tracker";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

const PromiseSpinner = (props) =>
    props.promiseInProgress && (
        <Dialog disableBackdropClick disableEscapeKeyDown open={true} aria-labelledby="form-dialog-title">
            <DialogContent>
                <CircularProgress />
            </DialogContent>
        </Dialog>
    )

export default promiseTrackerHoc(PromiseSpinner);
