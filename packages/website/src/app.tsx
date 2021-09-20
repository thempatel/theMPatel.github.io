import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Box } from '@primer/components';

import { ThemeProvider } from 'styled-components';
import { Home } from './home';
import { Locations } from './locations';
import { theme } from './theme';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BaseApp />
    </ThemeProvider>
  );
};

const BaseApp: React.FC = () => {
  return (
    <Box minHeight={'100vh'} bg="black">
      <HashRouter basename="/">
        <Box>
          <Switch>
            <Route path={Locations.HOME} component={Home} />
            <Redirect to={Locations.HOME} />
          </Switch>
        </Box>
      </HashRouter>
    </Box>
  );
};
