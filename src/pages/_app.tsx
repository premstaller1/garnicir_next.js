import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import HeaderAction from '../components/header'; // Adjust the path as needed


export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const links = [
    {
      link: '/',
      label: 'Home',
      links: [ // Provide an array of sub-links within the 'links' property
        { link: '/subpage1', label: 'Subpage 1' },
        { link: '/subpage2', label: 'Subpage 2' },
      ],
    },
    // Add more top-level links as needed
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
    </>
  );
}
