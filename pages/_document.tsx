import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link href='/public/cover.jpg' rel='shortcut icon' />
          <link href='/public/cover.jpg' rel='manifest' />
          <link
            href='/public/cover.jpg'
            rel='apple-touch-icon'
            sizes='180x180'
          />
          <link
            href='/public/cover.jpg'
            rel='icon'
            sizes='32x32'
            type='image/png'
          />
          <link
            href='/public/cover.jpg'
            rel='icon'
            sizes='16x16'
            type='image/png'
          />
          <link color='#4a9885' href='//public/cover.jpg' rel='mask-icon' />
          <meta content='/public/cover.jpg' name='msapplication-config' />
          <meta
            name='theme-color'
            content='#ffffff'
            media='(prefers-color-scheme: light)'
          />
          <meta
            name='theme-color'
            content='#171717'
            media='(prefers-color-scheme: dark)'
          />
        </Head>
        <body className='bg-white dark:bg-gray-900'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
