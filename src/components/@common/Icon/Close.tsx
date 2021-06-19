import PropTypes from 'prop-types';
import React, { FC } from 'react';
import PALETTE from '../../../constants/palette';

interface Props {
  width?: string;
  color?: string;
}

const Close: FC<Props> = ({ width = '24px', color = PALETTE.GRAY[400] }) => {
  return (
    <svg width={width} stroke={color} strokeLinecap="round" strokeWidth={4} viewBox="0 0 40 40">
      <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
    </svg>
  );
};

Close.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
};

export default Close;
