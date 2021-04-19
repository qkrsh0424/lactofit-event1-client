import styled from 'styled-components';

const __MY_RED = '#eb1c24';
const __MY_YELLOW = '#ffe431';
const __MY_PINK = '#f8a59d';

const Container = styled.div`
    overflow:hidden;
`;

const Wrapper = styled.div`
    
    width:1920px;
    background:#fffa2c;
    margin-left: auto;
    margin-right: auto;
    padding:20px 0;
    @media only screen and (max-width:1920px){
        width:100%;    
    }
`;

const ExplainContaner = styled.div`
    padding: 20px 20px;
    text-align:center;
    font-size:1.5rem;
    font-weight:800;
    line-height:1.7;
    @media only screen and (max-width:1100px){
        padding: 8px 20px 20px 20px;
        font-size:1.5rem;
    }

    @media only screen and (max-width:576px){
        padding: 8px 20px 20px 20px;
        font-size:1rem;
    }
`;
const ButtonContainer = styled.div`
    width:100%;
    text-align:center;
`;

const ButtonEl = styled.button`
    width:80%;
    background:${__MY_RED};
    /* background-image: linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%); */
    /* background-image: linear-gradient(to right, __MY_YELLOW 0%, #ffffff 51%, __MY_Red 100%); */
    /* background-size: 200% auto; */

    /* border:2px solid white; */
    /* border:2px solid ${__MY_YELLOW}; */
    border:none;
    border-radius:1rem;
    /* color:${__MY_YELLOW}; */
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
        color: ${__MY_YELLOW};
        text-decoration: none;
    }
`;


const ApplyButton = (props) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <ExplainContaner>
                        잠깐! 인스타그램 계정이 없으신가요 ?
                        <br/>
                        지금 페이지에 인증샷 업로드하면 참여 완료!
                    </ExplainContaner>

                    <ButtonContainer>
                        <ButtonEl type='button' onClick={() => props.homeMainEventControl().handleEventModal().open()}>웹에서 이벤트 참여하기</ButtonEl>
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