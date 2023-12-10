import styled, { } from 'styled-components';
import { Link } from 'react-router-dom';
import imageProfile from '../../assets/images/User avatar.svg';
import homeBackground from '../../assets/images/background.svg';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${homeBackground});
  background-size: cover;
  background-size: no-repeat;
  background-clip: content-box;
  gap: 18px;
`;

const Profile = styled.div`
  background-size: 150%;
  background-position: center;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  a > div > img {
    border-radius: 50%;
    width: 130px;
    height: 130px;
  }
`;

const H1 = styled.h1`
  font-size: 25px;
  font-weight: 800;
  color: #fff;
  letter-spacing: 4px;
`;

const H2 = styled.h2`
  font-size: 17px;
  font-weight: 400;
  color: #ece6e6;
  letter-spacing: 1px;
`;

const P = styled.p`
  max-width: 600px;
  font-size: 14px;
  font-weight: 300;
  color: #bcb5b5;
  text-align: center;
  line-height: 1.5;
`;

const Button = styled.button`
  width: 120px;
  max-height: 70px;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 400;
  color: #fff;
  font-family: "Barlow Condensed", sans-serif;
  background: rgba(34, 41, 53, 1);
  border: none;
  border-radius: 10px;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;

  &:hover {
    background: linear-gradient(90deg, rgb(200, 250, 230) 0%, rgb(60, 70, 80) 100%);
  }
`;

export const Home = () => {
  return (
    <Container>
      <Profile>
        <Link to="./inner">
          <div>
            <img src={imageProfile} alt="user" />
          </div>
        </Link>
      </Profile>
      <H1>John Doe</H1>
      <H2>Programmer. Creative. Innovator</H2>
      <P>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
      </P>
      <Button>
        <Link to="./inner">Know More</Link>
      </Button>
    </Container>
  );
};


