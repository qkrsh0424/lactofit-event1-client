import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const InputContainer = styled.div`
    /* width:100%; */
    /* overflow:hidden; */
    padding:8px 0;
`;

const InputEl = styled.input`
    width:100%;
    box-sizing : border-box;
    padding:0.6rem;
    margin:3px 0;
    border:1px solid #aaa;
    border-radius:.2rem;
    &:focus{
        outline-color:var(--myYellow);
    }
`;

const InputSmallEl = styled.small`
    color:#666;
    padding:0 5px;
`;

const ImageWrapper = styled.div`
    box-sizing:border-box;
    margin:3px 0;
    width:50%;
    height:auto;
    border:3px double #f1f1f1;
    cursor:pointer;
    @media only screen and (max-width:1100px){
        width:60%;
    }
    @media only screen and (max-width:768px){
        width:80%;
    }
    @media only screen and (max-width:576px){
        width:100%;
    }
`;

const ImageBox = styled.div`
    position: relative;
    padding-bottom: 100%;
`;

const ImageEl = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: .5s;
`;

const ImageUploadTextEl = styled.div`
    text-align:center;
    width:100%;
    font-size:1.7rem;
    color:#666;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
`;
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
                    <InputContainer>
                        <label>이벤트 닉네임</label>
                        <InputEl type='text' placeholder='ex) 락토핏짱'></InputEl>
                        <InputSmallEl>* 추첨시 사용하실 닉네임을 한글로 입력해주세요.</InputSmallEl>
                    </InputContainer>
                    <InputContainer>
                        <label>전화번호</label>
                        <InputEl type='text' placeholder='ex) 01012341234'></InputEl>
                        <InputSmallEl>* 당첨시 연락받으실 전화번호를 '-' 를 제외한 숫자만 입력해주세요.</InputSmallEl>
                    </InputContainer>
                    <InputContainer>
                        <label>사진 (권장 비율 1:1)</label>
                        <br />
                        <InputSmallEl>* 락토핏과 함께찍은 사진을 올려주세요.</InputSmallEl>
                        {props.myData.imageUrl ?
                            <ImageWrapper onClick={() => props.homeMainEventControl().handleUploader().open()}>
                                <ImageBox>
                                    <ImageEl src={props.myData.imageUrl}></ImageEl>
                                </ImageBox>
                            </ImageWrapper>
                            :
                            <ImageWrapper onClick={() => props.homeMainEventControl().handleUploader().open()}>
                                <ImageBox>
                                    <ImageUploadTextEl>사진 업로드</ImageUploadTextEl>
                                </ImageBox>
                            </ImageWrapper>
                        }
                    </InputContainer>
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