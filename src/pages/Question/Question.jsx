import React from "react";
import * as S from "./Question.style";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../../assets/data/question";

const Question = () => {
  return (
    <S.Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={80}
        style={{ marginTop: "20px" }}
      />
      <S.Title>{QuestionData[0].title}</S.Title>
      <S.ButtonWrapper>
        <Button
          style={{
            width: "40%",
            fontSize: "20px",
            minHeight: "200px",
            marginRight: "20px",
          }}
        >
          {QuestionData[0].answera}
        </Button>
        <Button style={{ width: "40%", fontSize: "20px", minHeight: "200px" }}>
          {QuestionData[0].answerb}
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default Question;
