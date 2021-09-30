// 테스트 코드!  - 삭제 예정!

// import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
// import React from "react";
// import { Element } from "react-scroll";
// import HorizontalScroll from "react-scroll-horizontal";
// import styled, { css } from "styled-components";
// import { Card } from "../../components/card";
// import { Marginer } from "../../components/marginer";

// import User1Img from "../../assets/pictures/profile_picture_1.jpg";
// import { useMediaQuery } from "react-responsive";

// // 스크롤 기능 추가

// const IntroContainer = styled(Element)`
//     height: 500px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

// const IntroduceText = styled.h2`
//     font-size: 20px;
//     font-weight: 500;
//     line-height: 1.4;
//     margin: 0;
//     text-align: center;
// `;


// const StyledCarouselProvider = styled(CarouselProvider)`
//     width: 50%;

//     @media screen and (max-width: 480px) {
//         width: 100%;
//     }
// `;

// const StyledSlide = styled(Slide)`
//     .carousel__inner-slide {
//         display: flex;
//         justify-content: center;
//     }
// `;

// const StyledDotGroup = styled(DotGroup)`
//     margin: auto;
//     display: flex;
//     justify-content: center;
//     button {
//         width: 11px;
//         height: 11px;
//         border-radius: 50%;
//         background-color: #e4e4e4;
//         border: none;
//         outline: none;
//         &:not(:last-of-type) {
//         margin-right: 3px;
//         }
//     }

//     .carousel__dot--selected {
//         background-color: #c4c4c4;
//     }
// `;


// export function IntroPeoplePage(props) {

//     const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

//     return (
//     <IntroContainer>
//         <IntroduceText> 팀원 소개 예시</IntroduceText>

//         <StyledCarouselProvider 
//             naturalSlideWidth={100}
//             naturalSlideHeight={isMobile ? 250 : 205}
//             totalSlides={5}
//             visibleSlides={isMobile ? 1 : 2}
//             dragEnabled={false}>
            
//             <Slider>

//                 <StyledSlide index={0}>
//                     <Card
//                     reviewText=" 소개글이 들어갈 공간입니다. "
//                     username="고정현"
//                     userImgUrl={User1Img}
//                     />
//                 </StyledSlide>

//                 <StyledSlide index={1}>
//                     <Card
//                     reviewText=" 소개글이 들어갈 공간입니다. "
//                     username="김지훈"
//                     userImgUrl={User1Img}
//                     />
//                 </StyledSlide>

//                 <StyledSlide index={2}>
//                     <Card
//                     reviewText=" 소개글이 들어갈 공간입니다. "
//                     username="문성권"
//                     userImgUrl={User1Img}
//                     />
//                 </StyledSlide>

//                 <StyledSlide index={3}>
//                     <Card
//                     reviewText=" 소개글이 들어갈 공간입니다. "
//                     username="최유림"
//                     userImgUrl={User1Img}
//                     />
//                 </StyledSlide>

//                 <StyledSlide index={3}>
//                     <Card
//                     reviewText=" 소개글이 들어갈 공간입니다. "
//                     username="김진경"
//                     userImgUrl={User1Img}
//                     />
//                 </StyledSlide>

//             </Slider>
//             <StyledDotGroup />
//         </StyledCarouselProvider>

//     </IntroContainer>
    
//     );
// }