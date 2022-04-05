import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyles from "styles/global";
import { useRoutes } from "react-router-dom";
import routes from "routes";
import { Suspense } from "react";

const App = (): JSX.Element => {
  const routesHere = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Suspense fallback={<div>loading...</div>}>{routesHere}</Suspense>
    </ThemeProvider>
  );
};

export default App;
