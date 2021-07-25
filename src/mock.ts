import { rest, setupWorker } from 'msw';

export const worker = setupWorker(
  rest.get('https://jsonplaceholder.typicode.com/posts/', (_, res, ctx) => {
    return res(
      ctx.delay(3000), // 3秒後にレスポンスを返す
      ctx.status(202, 'Mocked status'),
      ctx.json([
        {
          'userId': 1,
          'id': 1,
          'title': 'mock response1',
          'completed': false,
        },
        {
          'userId': 2,
          'id': 2,
          'title': 'mock response2',
          'completed': false,
        },
        {
          'userId': 3,
          'id': 3,
          'title': 'mock response3',
          'completed': false,
        },
      ])
    );
  })
);
