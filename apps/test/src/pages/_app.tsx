import { useRouter } from "next/router";

const Layout = ({ children }: any) => {
  const router = useRouter();

  return <div>{children}</div>;
};

const MyApp = ({ Component, pageProps: { ...pageProps } }: any) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
