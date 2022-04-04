import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyles from "styles/global";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>;
    </ThemeProvider>
  );
};

export default App;
