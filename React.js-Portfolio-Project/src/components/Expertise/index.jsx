/*eslint-disable */
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  margin-bottom: 50px;
`;
const LeftBox = styled.div`
  width: 20%;
`;
const Title = styled.h2`
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-color);
`;
const Date = styled.p`
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #667081;
  margin-top: 10px;
`;
const RightBox = styled.div`
  width: 75%;
`;
const Descrp = styled.p`
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-color);
  margin-top: 10px;

`;

export const Expertise = ({company, date, job, description}) => {
  return (
    <Container>
      <LeftBox>
        <Title>{company}</Title>
        <Date>{date}</Date>
      </LeftBox>
      <RightBox>
        <Title>{job}</Title>
        <Descrp>
            {description}
        </Descrp>
      </RightBox>
    </Container>
  );
};
