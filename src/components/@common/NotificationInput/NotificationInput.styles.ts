import styled from 'styled-components';
import PALETTE from '../../../constants/palette';
import FlexContainer from '../FlexContainer/FlexContainer';

interface NotificationTextProps {
  isError: boolean;
}

export const NotificationInputContainer = styled(FlexContainer)`
  height: 5rem;
`;

export const NotificationText = styled.p<NotificationTextProps>`
  margin-left: 0.75rem;
  color: ${({ isError }) => (isError ? PALETTE.RED[400] : PALETTE.GREEN[400])};

  &::before {
    content: ${({ isError }) => (isError ? '"🚫 "' : '"✅ "')};
  }
`;
