import { toast } from 'react-toastify';

export function handleError(error: any) {
  const message =
    error?.response?.data?.message ??
    'Sorry, something went wrong. Try again later';

  if (error?.response?.status === 404) {
    return toast.error('No results were found.');
  }

  return toast.error(message);
}
