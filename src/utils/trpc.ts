import {createTRPCProxyClient, httpBatchLink} from '@trpc/react-query';
import {ApiRoute} from '../../../mixo-backend/src/app';

//@ts-ignore
export const trpc = createTRPCProxyClient<ApiRoute>({
  links: [
    httpBatchLink({
      url: 'http://10.5.48.88:8080/api',
    }),
  ],
});
