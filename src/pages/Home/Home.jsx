import React from "react";
import * as S from "./Home.style";
import Sand from "../../assets/sand1.png";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <S.Wrapper>
        <S.Header>예비 주인님 찾기</S.Header>
        <S.Contents>
          <S.Title>나에게 맞는 주인님은?</S.Title>
          <S.LogoImage>
            <img
              src={Sand}
              className="rounded-circle"
              width={350}
              height={350}
            />
          </S.LogoImage>
          <S.Desc>MBTI를 기반으로 하는 내 주인님 찾기!</S.Desc>
          <Button>주인님 찾기</Button>
        </S.Contents>
      </S.Wrapper>
    </>
  );
};

export default Home;
