import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const ButtonPrimary = styled(Button)`
  color: var(--chakra-colors-white);
  font-size: 14px;
  font-weight: normal;
  padding: 24px 42px;
  background: var(--chakra-colors-blue-primary);
`;

export const ButtonSecondary = styled(Button)`
  color: var(--chakra-colors-blue-primary);
  font-size: 14px;
  font-weight: normal;
  padding: 24px 42px;
  background: transparent;
  border: 1px solid var(--chakra-colors-blue-primary);
`;

export const ButtonTertiary = styled(Button)`
  color: var(--chakra-colors-blue-primary);
  font-size: 14px;
  font-weight: normal;
  padding: 12px 30px;
  background: rgba(33, 123, 244, 0.1);
`;