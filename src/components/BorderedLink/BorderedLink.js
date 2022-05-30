import styled from "styled-components/macro";

export const BorderedLink = styled.a`
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;
