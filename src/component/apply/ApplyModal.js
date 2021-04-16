import React from 'react';
import styled from 'styled-components';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const __MY_RED = '#eb1c24';
const __MY_YELLOW = '#ffe431';
const __MY_PINK = '#f8a59d';

const DialogContainer = styled.div`
    position:relative;
    & .MyDialogTitle{
        background:${__MY_PINK};
        text-align:center;
        color:white;
        padding:3rem;
    }

    & .MyDialogTitle .MuiTypography-root{
        font-size:2rem;
        font-weight:700;
    }
`;

const TitleContainer = styled.div`
    background:${__MY_PINK};
    color:#333;
`;

const TitleWrapper = styled.div`
    text-align:center;
    padding:0 2.5rem 2.5rem 2.5rem;
`;
const MainTitleEl = styled.div`
    font-size:1.8rem;
    font-weight:700;
    padding:.5rem;
    @media only screen and (max-width:340px){
        font-size:1.2rem;
    }
`;

const SubTitleEl = styled.div`
    font-size:2rem;
    font-weight:800;
    padding:.5rem;
    @media only screen and (max-width:340px){
        font-size:1.7rem;
    }
`;
const CloseBtnBox = styled.div`
    overflow:hidden;
`;
const CloseBtn = styled.button`
    background:none;
    border:none;
    padding:15px;
    float:right;
    margin-right:10px;
    margin-top:10px;
    cursor: pointer;
    &:focus{
        outline:none;
    }
`;

const CloseBtnImageEl = styled.img`
    width:25px;
`;

const ContentExplainBox = styled.div`
    text-align:center;
    font-size:1.8rem;
    @media only screen and (max-width:1100px){
        font-size:1.2rem;
    }
    @media only screen and (max-width:340px){
        font-size:1rem;
    }
`;

const ContentExplainTopEl = styled.div`
    padding: .3rem 0;
    font-weight:700;
`;

const ContentExplainSubEl = styled.div`
    padding: .3rem 0;
    font-weight:800;
`;
const InputContainer = styled.div`
    /* width:100%; */
    /* overflow:hidden; */
    padding:15px 0;
`;

const InputEl = styled.input`
    width:100%;
    box-sizing : border-box;
    padding:1.5rem 1rem;
    margin:3px 0;
    border:2px solid #aaa;
    border-radius:1rem;
    font-size:1.5rem;
    transition:0.3s;
    &:focus{
        /* outline-color:${__MY_YELLOW}; */
        outline:none;
        border:2px solid ${__MY_YELLOW};
    }

    @media only screen and (max-width:1100px){
        font-size:1.2rem;
        padding:1.3rem 1rem;
    }
    @media only screen and (max-width:340px){
        font-size:1rem;
        /* padding:1.5rem 1rem; */
        padding:1.1rem 1rem;
    }
`;

const InputLabel = styled.div`
    font-size:1.5rem;
    font-weight: 700;
    padding:5px;
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

const ButtonBox = styled.div`
    padding: 15px;
    margin: 15px;
    text-align:center;
`;

const CancelBtnEl = styled.button`
    background:#ccc;
    border:none;
    padding:30px;
    margin:0 10px;
    border-radius:15px;
    font-size:2rem;
    font-weight:700;
    color:white;
    cursor:pointer;
    &:focus{
        outline:none;
    }

    @media only screen and (max-width:1100px){
        padding:20px;
        font-size:1.2rem;
    }
    @media only screen and (max-width:340px){
        padding:15px;
        font-size:1.2rem;
    }
`;

const RegBtnEl = styled.button`
    background:${__MY_PINK};
    border:none;
    padding:30px;
    margin:0 10px;
    border-radius:15px;
    font-size:2rem;
    font-weight:700;
    color:#333;
    cursor:pointer;
    &:focus{
        outline:none;
    }

    @media only screen and (max-width:1100px){
        padding:20px;
        font-size:1.2rem;
    }
    @media only screen and (max-width:340px){
        padding:15px;
        font-size:1.2rem;
    }
`;

const CheckBoxLabel = styled.label`
    font-size:1.2rem;
    font-weight: 700;
    /* padding:5px; */
    vertical-align:middle;
    @media only screen and (max-width:1100px){
        font-size:1.2rem;
    }
    @media only screen and (max-width:576px){
        font-size:10px;
    }
    /* @media only screen and (max-width:340px){
        font-size:0.7rem;
    } */
`;
const ApplyModal = (props) => {
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
    return (
        <>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                scroll={'body'}
                open={props.open}
                onClose={() => props.homeMainEventControl().handleEventModal().close()}
                aria-labelledby="form-dialog-title"
                PaperProps={{
                    style: { borderRadius: 15 }
                }}
            >

                <DialogContainer>

                    <TitleContainer>
                        <CloseBtnBox>
                            <CloseBtn type='button' onClick={() => props.homeMainEventControl().handleEventModal().close()}><CloseBtnImageEl src={'/image/icon/close.png'}></CloseBtnImageEl></CloseBtn>
                        </CloseBtnBox>
                        <TitleWrapper>
                            <MainTitleEl>락토핏 가정의달 이벤트</MainTitleEl>
                            <SubTitleEl>이벤트 신청</SubTitleEl>
                        </TitleWrapper>
                    </TitleContainer>
                    <DialogContent>
                        <ContentExplainBox>
                            <ContentExplainTopEl>
                                락토핏 가정의달 이벤트 참여를 위해
                            </ContentExplainTopEl>
                            <ContentExplainSubEl>
                                아래의 정보들을 입력해 주세요.
                            </ContentExplainSubEl>
                        </ContentExplainBox>
                        {/* <DialogContentText>
                            이벤트 참여를 위해 아래의 정보들을 입력해 주세요.
                        </DialogContentText> */}
                        <InputContainer>
                            <InputLabel>이름</InputLabel>
                            <InputEl type='text' name='name' placeholder='ex) 홍길동' value={props.myData.name} onChange={(e) => props.homeMainEventControl().handleInputValueChange(e)}></InputEl>
                            <InputSmallEl>* 이벤트 신청인 이름을 입력해주세요.</InputSmallEl>
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>휴대전화번호</InputLabel>
                            <InputEl type='text' name='phone' placeholder='ex) 01012341234' value={props.myData.phone} onChange={(e) => props.homeMainEventControl().handleInputValueChange(e)}></InputEl>
                            <InputSmallEl>* 당첨시 연락받으실 전화번호를 '-' 를 제외한 숫자만 입력해주세요.</InputSmallEl>
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>사진 (권장 비율 1:1)</InputLabel>
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
                        <InputContainer>
                            <div>
                                <Checkbox color="default" name='agreePrivacy' checked={props.myData.agreePrivacy} onChange={(e) => props.homeMainEventControl().handleInputValueChange(e)}/>
                                <CheckBoxLabel><a href='/' target='_blank'><u>개인정보 수집 및 이용</u></a>에 동의합니다.(필수)</CheckBoxLabel>
                            </div>
                            <div>
                                <Checkbox color="default" name='agreeConsignment' checked={props.myData.agreeConsignment} onChange={(e) => props.homeMainEventControl().handleInputValueChange(e)}/>
                                <CheckBoxLabel><a href='/' target='_blank'><u>개인정보 위탁</u></a>에 동의합니다.(필수)</CheckBoxLabel>
                            </div>
                            <div>
                                <Checkbox color="default" name='agreeNotice' checked={props.myData.agreeNotice} onChange={(e) => props.homeMainEventControl().handleInputValueChange(e)}/>
                                <CheckBoxLabel>이벤트 유의사항을 모두 확인했으며, 이에 동의합니다.(필수)</CheckBoxLabel>
                            </div>
                        </InputContainer>
                    </DialogContent>
                    <ButtonBox>
                        <CancelBtnEl type='button' onClick={() => props.homeMainEventControl().handleEventModal().close()}>
                            취소
                        </CancelBtnEl>
                        <RegBtnEl type='button' onClick={() => props.homeMainEventControl().handleOnSubmit()}>
                            등록
                        </RegBtnEl>
                    </ButtonBox>
                </DialogContainer>
            </Dialog>
        </>
    );
}

export default ApplyModal;