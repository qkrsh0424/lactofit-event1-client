import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// data connect
import { fileUploadDataConnect } from '../../data_connect/upload/fileUploadDataConnect';

// component
import HomeBody from './HomeBody';
import ApplyButton from '../apply/ApplyButton';
import ApplyModal from '../apply/ApplyModal';
import CircularLoading from '../loading/CircularLoading';

const FILE_MAX_SIZE = 10000000 // 10MB 초과시 리턴

const ImageBox = styled.div`
    position: relative;
    padding-bottom: 42.86%; // 21:9 1920px x 823px
    @media only screen and (max-width:1100px){
        padding-bottom: 75%; // 4:3 1100px x 825px
    }
`;

const ImageEl = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: .5s;
`;

const HomeMain = () => {
    const [eventModalOpen, setEventModalOpen] = useState(false);
    const [imageLoadingOpen, setImageLoadingOpen] = useState(false);

    const [myData, setMyData] = useState({
        'nickname':'',
        'phone':'',
        'imageUrl':null,
        'imageName':null,
        'agreePrivacy':false,
        'agreeConsignment':false
    });

    const __homeMainDataConnect = () => {
        return {
            uploadFile: function () {
                return {
                    toS3: async function (fd) {
                        await fileUploadDataConnect().uploadImageToS3(fd)
                            .then(res => {
                                console.log(res);
                                if (res.status == 200) { return res.data } else { return null }
                            })
                            .then(data => {
                                if (data && data.message == 'success') {
                                    alert('업로드 성공');
                                    
                                    setMyData({...myData, ['imageUrl']:data.data.imageUrl, ['imageName']:data.data.imageName});
                                } else if(data && data.message == 'failure'){
                                    alert('업로드 실패');
                                }else{
                                    alert('undefined error, status 200');
                                }
                            })
                            .catch(err => {
                                if (err.code === 'ECONNABORTED'){
                                    alert('시간이 초과되었습니다. 다시 시도해주세요.');
                                    return;
                                }
                                let res = err.response;
                                console.log(res);
                                if(res && res.data && res.data.message=='extension_error'){
                                    alert('잘못된 접근 방식입니다.\nhint: extension error 400');
                                }else{
                                    alert('undefined error, status 500');
                                }
                            })
                    }
                }
            },
            insertEventApplication: async function(){

            }
        }
    }

    const homeMainEventControl = () => {
        return {
            handleEventModal: function () {
                return {
                    open: function () {
                        setEventModalOpen(true);
                    },
                    close: function () {
                        setEventModalOpen(false);
                    }
                }
            },
            handleUploader: function () {
                return {
                    open: function () {
                        document.getElementById('i_image_uploader').click();
                    },
                    submit: async function (e) {
                        let files = e.target.files;
                        homeMainEventControl().handleImageLoading().open();
                        if (files !== null && files.length > 0) {
                            if (files[0].size > FILE_MAX_SIZE) { // 10MB 초과시 리턴
                                alert('파일 사이즈가 너무 큽니다. 15MB 이하의 이미지를 업로드 해주세요.');
                            }else{
                                //FormData 생성
                                const fd = new FormData();
                                //FormData에 key, value 추가하기
                                fd.append('file', files[0]);
                                // axios 사용해서 백엔드에게 파일 보내기
                                await __homeMainDataConnect().uploadFile().toS3(fd);
                            }
                        }
                        document.getElementById('i_image_uploader').value = '';
                        homeMainEventControl().handleImageLoading().close();
                    }
                }
            },
            handleImageLoading: function(){
                return{
                    open:function(){
                        setImageLoadingOpen(true);
                    },
                    close: function(){
                        setImageLoadingOpen(false);
                    }
                }
            }
        }
    }
    return (
        <>
            {/* <ImageEl src="https://s3.ap-northeast-2.amazonaws.com/image.piaar.co.kr/main.jpeg"></ImageEl> */}
            {/* <ImageEl src="http://image.piaar.co.kr/main.jpeg"></ImageEl> */}
            {/* <img src="https://s3.ap-northeast-2.amazonaws.com/image.piaar.co.kr/upload/image/1618370694744-12342.jpeg"></img> */}
            {/* <HomeBody></HomeBody> */}
            <ImageBox>
                <ImageEl src='https://s3.ap-northeast-2.amazonaws.com/image.piaar.co.kr/main.jpeg'></ImageEl>
            </ImageBox>
            {/* == Apply Button Part START == */}
            <ApplyButton
                homeMainEventControl={homeMainEventControl}
            ></ApplyButton>
            {/* == Apply Button Part END == */}

            {/* == Apply Modal Part START == */}
            <ApplyModal
                open={eventModalOpen}
                myData={myData}

                homeMainEventControl={homeMainEventControl}
            ></ApplyModal>
            {/* == Apply Modal Part END == */}
            <input type='file' id='i_image_uploader' onChange={(e) => homeMainEventControl().handleUploader().submit(e)} accept="image/*" hidden></input>
            <CircularLoading
                open={imageLoadingOpen}

                homeMainEventControl={homeMainEventControl}
            ></CircularLoading>
        </>
    );
}

export default HomeMain;