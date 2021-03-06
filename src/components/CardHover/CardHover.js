import nathan from "../../assets/images/nathan.png";
import sam from "../../assets/images/sam.png";
import styled from "styled-components/macro";

export default function CardHover() {
  return (
    <Container>
      <Card>
        <Content>
          <Name>Nathan Drake</Name>
          <Description>
            A renowned man of adventure – and mystery – Nathan Drake is a
            roguish explorer who’s perpetually lured by the irresistible promise
            of adventure, fortune and glory.
          </Description>
          <Link href="http://www.unchartedthegame.com/" target="_blank">
            Read More
          </Link>
        </Content>
        <Image src={nathan} alt="Nathan Drake" width="592" height="704" />
      </Card>
      <Card>
        <Content>
          <Name>Sam Drake</Name>
          <Description>
            Previously presumed dead, Sam Drake, Nathan's older brother, is a
            mysterious, hardened ex-con whose incarceration and isolation has
            given him a new mission in life: to seek adventure tirelessly.
          </Description>
          <Link href="http://www.unchartedthegame.com/" target="_blank">
            Read More
          </Link>
        </Content>
        <Image src={sam} alt="Sam Drake" width="592" height="704" />
      </Card>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  position: relative;
  width: 50%;
  left: 20%;
  padding: 20px 20px 20px 40px;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;

  @media only screen and (max-width: 991px) {
    width: 100%;
    left: 0;
    padding: 40px;
  }

  @media only screen and (max-width: 420px) {
    padding: 30px;
  }
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  height: 400px;
  transition: 0.5s;
`;

const Card = styled.div`
  position: relative;
  width: 600px;
  height: 350px;
  margin: 20px;
  display: flex;
  transition: 0.5s;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(45deg, #1a2f3f, #7094ce);

  &:hover ${Image} {
    left: 73%;
    height: 500px;
  }

  &:hover ${Content} {
    left: 0;
    opacity: 1;
    visibility: visible;
  }

  @media only screen and (max-width: 991px) {
    width: auto;
    max-width: 600px;
    align-items: flex-start;

    &:hover {
      height: 600px;
    }

    &:hover ${Image} {
      left: 50%;
      height: 350px;
    }
  }

  @media only screen and (max-width: 767px) {
    margin: 40px 20px;
  }

  @media only screen and (max-width: 420px) {
    &:hover ${Image} {
      height: 300px;
    }
  }
`;

const Name = styled.h2`
  color: #fff;
  text-transform: uppercase;
  font-size: 2.2em;
  line-height: 1em;
`;

const Description = styled.p`
  color: #fff;
`;

const Link = styled.a`
  position: relative;
  color: #111;
  background: #fff;
  display: inline-block;
  padding: 10px 20px;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 700;
`;
