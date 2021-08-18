import React from 'react';

import Layout from '@components/Layout/Layout';

interface AppProps {
  children: React.ReactElement | React.ReactElement[];
}

class App extends React.Component<AppProps> {
  render(): React.ReactElement {
    const { children } = this.props;

    return (
      <div id={'app-container'} data-testid={'app-container'} className="app">
        <Layout>{children}</Layout>
      </div>
    );
  }
}

export default App;
