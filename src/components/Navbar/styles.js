import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.gray400};
  top: 0;
  height: 4rem; /* Altura da navbar */
  width: 100%; /* Ocupa toda a largura */
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1000;

  @media (max-width: 400px) {
    height: 10rem;
    padding: 1rem;

    flex-direction: column;
  }
`;
