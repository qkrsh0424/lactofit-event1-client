import styled from 'styled-components';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
    overflow:hidden;
    & .slick-slider{
        line-height:0;
    }
`;
const ImageBox = styled.div`
    position: relative;
    padding-bottom: 100%;
    /* @media only screen and (max-width:768px){
        padding-bottom: 75%;
    } */
`;
const ImageEl = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: .5s;
`;

const SliderBody = () => {
    var SlickSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 1500,
        pauseOnHover: false,
        // fade: true,
    };
    const banners = [
        {
            imageUrl: '/image/sample/test1.png'
        },
        {
            imageUrl: '/image/sample/test2.png'
        },
        {
            imageUrl: '/image/sample/test3.png'
        },
        {
            imageUrl: '/image/sample/test1.png'
        },
        {
            imageUrl: '/image/sample/test2.png'
        },
        {
            imageUrl: '/image/sample/test3.png'
        }
    ]
    return (
        <>
            <Container>
                <SlickSlider
                    {...SlickSliderSettings}
                >
                    {
                        banners.length > 0 && banners.map((r) => {
                            return (
                                <div key={r.id} style={{ position: 'relative' }}>
                                    <ImageBox>
                                        <ImageEl src={r.imageUrl}></ImageEl>
                                    </ImageBox>
                                </div>
                            )
                        })
                    }
                </SlickSlider>
            </Container>
        </>
    );
}

export default SliderBody;