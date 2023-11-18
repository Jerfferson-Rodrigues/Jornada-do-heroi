import { darken } from "polished";

import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(195px, auto));
  gap: 1.75rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  card {
    position: relative;
    background: ${({ theme }) => theme.colors.black};

    border-radius: 8%;

    p {
      color: ${({ theme }) => theme.colors.white};
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 14.5rem;
      border-radius: 4px;
      margin-bottom: 0.375rem;
    }
  }
`;
