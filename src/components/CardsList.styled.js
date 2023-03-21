import styled from "styled-components";

export const CardsListStyled = styled.ul`
  display: grid;
  justify-content: center;
  margin-top: 32px;
  /* max-width: 100vw; */
  grid-template-columns: repeat(auto-fill, minmax(min(380px), 0));
  grid-gap: 20px;
  padding: 0;
`;
