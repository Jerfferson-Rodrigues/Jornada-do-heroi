import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin: 30px;
  margin-top: 160px;
`;

export const Cards = styled.div`
  border-radius: 8px;

  img {
    width: auto;
    height: auto;
  }

  @media screen and (max-width: 767px) {
    width: 140px;
  }
`;
