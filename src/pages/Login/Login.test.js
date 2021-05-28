import React from 'react';
import { fireEvent, screen, render, act } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import Login from './Login';

jest.mock('react-redux');
jest.mock('../../redux/store');

describe('로그인 페이지 테스트', () => {
  it('테스트', async () => {
    const dispatch = jest.fn();

    useSelector.mockImplementation((selector) =>
      selector({
        api: {
          owner: 'JAYON',
        },
      })
    );
    useAppDispatch.mockImplementation(() => dispatch);

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText('이메일을 입력해주세요.');

    fireEvent.change(emailInput, {
      target: {
        value: '0307kwon@naver.com',
      },
    });

    const passwordInput = screen.getByPlaceholderText('비밀번호를 입력해주세요.');

    fireEvent.change(passwordInput, {
      target: {
        value: '123456',
      },
    });

    const loginButton = screen.getByRole('button', {
      name: '로그인',
    });

    fireEvent.click(loginButton);

    expect(dispatch).toBeCalled();
  });
});
