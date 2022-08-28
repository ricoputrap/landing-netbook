import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

const ButtonResponsive = styled(Button)`
  font-size: 14px;
  font-weight: normal;
  padding: 24px 42px;

  @media only screen and (max-width: 424px) {
    padding: 16px 24px;
  }

  @media only screen and (max-width: 320px) {
    padding: 12px 16px;
  }
`;

export const ButtonPrimary = styled(ButtonResponsive)`
  color: var(--chakra-colors-white);
  font-size: 14px;
  font-weight: normal;
  padding: 24px 42px;
  background: var(--chakra-colors-blue-primary);
`;

export const ButtonSecondary = styled(ButtonResponsive)`
  color: var(--chakra-colors-blue-primary);
  font-size: 14px;
  font-weight: normal;
  padding: 24px 42px;
  background: transparent;
  border: 1px solid var(--chakra-colors-blue-primary);
`;

export const ButtonTertiary = styled(ButtonResponsive)`
  color: var(--chakra-colors-blue-primary);
  font-size: 14px;
  font-weight: normal;
  padding: 12px 30px;
  background: rgba(33, 123, 244, 0.1);
`;