import styled from 'styled-components';

const Container = styled.div`
    overflow:hidden;
`;

const Wrapper = styled.div`
    
    width:1920px;
    background:var(--myYellow);
    margin-left: auto;
    margin-right: auto;
    padding:20px 0;
    @media only screen and (max-width:1920px){
        width:100%;    
    }
`;

const ButtonContainer = styled.div`
    width:100%;
    text-align:center;
`;

const ButtonEl = styled.button`
    width:80%;
    background:var(--myRed);
    border:2px solid white;
    border-radius:1rem;
    color:white;
    padding:1.5rem;
    font-size:1.5rem;
    font-weight:600;
    text-shadow: 2px 2px 2px #333;
    cursor:pointer;
    &:focus{
        outline:none;
    }
    box-shadow: #ffffff50 0px 5px 15px;
`;


const ApplyButton = (props) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <ButtonContainer>
                        <ButtonEl type='button' onClick={()=>props.homeMainEventControl().handleEventModal().open()}>웹에서 이벤트 참여하기</ButtonEl>
                    </ButtonContainer>
                </Wrapper>
            </Container>
        </>
    );
}

export default ApplyButton;