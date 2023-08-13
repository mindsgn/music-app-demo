import {createTRPCProxyClient, httpBatchLink} from '@trpc/react-query';
import {ApiRoute} from '../../../mixo-backend/src/app';

//@ts-ignore
export const trpc = createTRPCProxyClient<ApiRoute>({
  links: [
    httpBatchLink({
      url: 'https://plankton-app-5voay.ondigitalocean.app/api',
    }),
  ],
});
