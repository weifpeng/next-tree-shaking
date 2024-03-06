
import { Button, Code, Card } from "@repo/ui";

const MyApp = ({ Component, pageProps: { ...pageProps } }: any) => {
  return (
    <div>
      <Component {...pageProps} />
      <Button appName="docs">Click me!</Button>;
    </div>
  );
};

export default MyApp;
