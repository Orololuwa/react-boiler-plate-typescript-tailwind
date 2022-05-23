import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyles from "styles/global";
import { useRoutes } from "react-router-dom";
import routes from "routes";
import { Suspense } from "react";
import Loading from "components/loading";

const App = (): JSX.Element => {
  const routesHere = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Suspense fallback={<Loading />}>{routesHere}</Suspense>
    </ThemeProvider>
  );
};

export default App;
