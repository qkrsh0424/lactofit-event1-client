import styled from 'styled-components';

// component
import ApplyButton from '../apply/ApplyButton';

const BgBox = styled.div`
    width:1920px;
    margin-left: auto;
    margin-right: auto;
    line-height:0;
    @media only screen and (max-width:1920px){
        width:100%;    
    }
`;

const BgImageEl = styled.img`
    width:100%;
`;

const HomeBody = () =>{
    return(
        <>
            <BgBox>
                <BgImageEl src='/image/bg/lacto-bg1.png'></BgImageEl>
            </BgBox>
            <BgBox>
                <BgImageEl src='/image/bg/lacto-bg2.png'></BgImageEl>
            </BgBox>
            <ApplyButton></ApplyButton>
        </>
    );
}

export default HomeBody;