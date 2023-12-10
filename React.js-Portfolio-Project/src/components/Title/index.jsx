import styled from "styled-components";
import PropTypes from "prop-types";

const H1 = styled.h1`
  color: var(--main-color);
  font-family: Open Sans;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  margin: 40px 0 20px 0;
`;

export const Title = ({title }) => {
  return <H1>{title}</H1>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
