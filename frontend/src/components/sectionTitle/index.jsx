const { default: styled } = require("styled-components");

export const SectionTitle = styled.h1`
  font-size: 2.3em;
  font-weight: 500;
  color: #000;

  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;
