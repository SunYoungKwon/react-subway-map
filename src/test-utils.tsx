import React, { FC } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import PropsType from 'prop-types';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const AllTheProviders: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>);
    </BrowserRouter>
  );
};

AllTheProviders.propTypes = {
  children: PropsType.node,
};

const customRender = (ui: React.ReactElement, options: RenderOptions): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
