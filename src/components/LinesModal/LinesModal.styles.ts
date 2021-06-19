import styled from 'styled-components';
import PALETTE from '../../constants/palette';
import FlexContainer from '../@common/FlexContainer/FlexContainer';

export const LineForm = styled.form`
  & > * {
    margin: 2rem 1rem;
  }
`;

export const LineColorContainer = styled(FlexContainer)`
  padding: 1rem;
  border: 1px solid ${PALETTE.GRAY[500]};
  border-radius: 3px;
`;

export const LineModalButtonContainer = styled(FlexContainer)`
  & > * {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;
