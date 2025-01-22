import localFont from 'next/font/local';

const adventor = localFont({
  src: [
    {
      path: 'adventor-regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'adventor-bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-adventor',
  display: 'swap',
});

const proxima = localFont({
  src: [
    {
      path: 'proxima-regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'proxima-bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-proxima',
  display: 'swap',
});

export { adventor, proxima };
