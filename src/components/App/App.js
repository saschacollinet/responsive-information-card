import CardHover from "../CardHover/CardHover";
import styled from "styled-components/macro";

export default function App() {
  return (
    <Wrapper>
      <CardHover />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
