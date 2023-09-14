import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import HeaderAction from '../components/header'; // Adjust the path as needed
import FooterLinks from '../components/footer'; // Adjust the path as needed

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const links = [
    {
      link: '/',
      label: 'Homepage',
      links: [
        { link: '/about', label: 'About' }
      ],
    },
    {
      link: '/docs',
      label: 'Lage',
      links: [] // Empty array for sub-links since 'Lage' doesn't have any sub-links.
    },
    {
      link: '/blog',
      label: 'Gallery',
      links: [] // Empty array for sub-links since 'Gallery' doesn't have any sub-links.
    },
    {
      link: '/docs',
      label: 'Zimmer',
      links: [] // Empty array for sub-links since 'Zimmer' doesn't have any sub-links.
    },
    {
      link: '/blog',
      label: 'Kontakt',
      links: [] // Empty array for sub-links since 'Kontakt' doesn't have any sub-links.
    }
  ];
  
  const data = [
    {
      title: 'Hello',
      links: [
        { link: '/about', label: 'About' },
        { link: '/about', label: 'About' },
        { link: '/about', label: 'About' }
      ],
    },
    {
      title: 'Zweites',
      links: [
        { link: '/about', label: 'About' },
        { link: '/about', label: 'About' },
        { link: '/about', label: 'About' }
      ],
    },
    {
      title: 'Drittes',
      links: [
        { link: '/about', label: 'About' },
        { link: '/about', label: 'About' },
        { link: '/about', label: 'About' }
      ],
    },
  ];
  
  
  return (
    <>
      <Head>
        <title>Page title</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div>
      <HeaderAction links={links} />
      {/* Rest of your page content */}
      </div>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
      <FooterLinks data={data} />
    </>
  );
}
