import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ApplyModal = (props) => {
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
    return (
        <>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={props.open}
                onClose={() => props.homeMainEventControl().handleEventModal().close()}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">이벤트 참여하기</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        이벤트 참여를 위해 아래의 정보들을 입력해 주세요.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="이름"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="전화번호"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="주소"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.homeMainEventControl().handleEventModal().close()} color="secondary">
                        취소
                    </Button>
                    <Button onClick={() => props.homeMainEventControl().handleEventModal().close()} color="primary">
                        참여하기
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ApplyModal;