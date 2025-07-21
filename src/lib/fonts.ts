import localFont from 'next/font/local'

export const clash = localFont({
  src: [
    { path: '../../assets/fonts/ClashDisplay-Extralight.woff2', weight: '200' },
    { path: '../../assets/fonts/ClashDisplay-Light.woff2', weight: '300' },
    { path: '../../assets/fonts/ClashDisplay-Regular.woff2', weight: '400' },
    { path: '../../assets/fonts/ClashDisplay-Medium.woff2', weight: '500' },
    { path: '../../assets/fonts/ClashDisplay-Semibold.woff2', weight: '600' },
    { path: '../../assets/fonts/ClashDisplay-Bold.woff2', weight: '700' },
  ],
  variable: '--font-clash'
})