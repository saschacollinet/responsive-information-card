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
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Description>
          <Link href="#">Read More</Link>
        </Content>
        <Image src={nathan} alt="Nathan Drake" />
      </Card>
      <Card>
        <Content>
          <Name>Sam Drake</Name>
          <Description>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Description>
          <Link href="#">Read More</Link>
        </Content>
        <Image src={sam} alt="Sam Drake" />
      </Card>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  width: 50%;
  left: 20%;
  padding: 20px 20px 20px 40px;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 400px;
  transition: 0.5s;
`;

const Card = styled.div`
  position: relative;
  width: 600px;
  height: 350px;
  margin: 20px;
  display: flex;
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
