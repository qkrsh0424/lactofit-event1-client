import {useEffect, useState} from 'react';
import styled from 'styled-components';

import HomeBody from './HomeBody';
import ApplyButton from '../apply/ApplyButton';
import ApplyModal from '../apply/ApplyModal';
const HomeMain = () =>{
    const [eventModalOpen, setEventModalOpen] = useState(false);

    const homeMainEventControl = () =>{
        return{
            handleEventModal: function(){
                return{
                    open: function(){
                        setEventModalOpen(true);
                    },
                    close: function(){
                        setEventModalOpen(false);
                    }
                }
                
            }
        }
    }
    return(
        <>
            {/* <ImageEl src="https://s3.ap-northeast-2.amazonaws.com/image.piaar.co.kr/main.jpeg"></ImageEl> */}
            {/* <ImageEl src="http://image.piaar.co.kr/main.jpeg"></ImageEl> */}
            {/* <HomeBody></HomeBody> */}
            {/* == Apply Button Part START == */}
            <ApplyButton
                homeMainEventControl={homeMainEventControl}
            ></ApplyButton>
            {/* == Apply Button Part END == */}

            {/* == Apply Modal Part START == */}
            <ApplyModal
                open={eventModalOpen}

                homeMainEventControl={homeMainEventControl}
            ></ApplyModal>
            {/* == Apply Modal Part END == */}
        </>
    );
}

export default HomeMain;