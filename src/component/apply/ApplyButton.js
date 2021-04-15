import styled from 'styled-components';

const Container = styled.div`
    overflow:hidden;
`;

const Wrapper = styled.div`
    
    width:1920px;
    background:var(--myPink);
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
    /* background-image: linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%); */
    /* background-image: linear-gradient(to right, var(--myYellow) 0%, #ffffff 51%, var(--myRed) 100%); */
    /* background-size: 200% auto; */

    /* border:2px solid white; */
    /* border:2px solid var(--myYellow); */
    border:none;
    border-radius:1rem;
    /* color:var(--myYellow); */
    color:white;
    padding:1.5rem;
    font-size:1.5rem;
    font-weight:900;
    text-shadow: 2px 2px 2px #333;
    cursor:pointer;
    box-shadow: #ffffff50 0px 5px 15px;

    transition: 0.5s;
    &:focus{
        outline:none;
    }

    &:hover{
        /* background-position: right center; */
        color: var(--myYellow);
        text-decoration: none;
    }
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


// .btn-grad {background-image: linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%)}
// .btn-grad {
//    margin: 10px;
//    padding: 15px 45px;
//    text-align: center;
//    text-transform: uppercase;
//    transition: 0.5s;
//    background-size: 200% auto;
//    color: white;            
//    box-shadow: 0 0 20px #eee;
//    border-radius: 10px;
//    display: block;
//  }

//  .btn-grad:hover {
//    background-position: right center; /* change the direction of the change here */
//    color: #fff;
//    text-decoration: none;
//  }

export default ApplyButton;