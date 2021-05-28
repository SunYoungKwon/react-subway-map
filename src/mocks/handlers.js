import { rest } from 'msw';

export const handlers = [
  rest.post('/login/token', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        accessToken: '12345',
      })
    );
  }),
];
