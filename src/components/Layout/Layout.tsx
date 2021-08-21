import React from 'react';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';

import { Banner } from '@components/index';

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
  displayHeader?: boolean;
  displayFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, displayHeader = true, displayFooter = true } = props;

  const renderHeader = () => {
    return !displayHeader ? null : (
      <>
        <Header />
        <Banner />
      </>
    );
  };

  const renderFooter = () => {
    return !displayFooter ? null : <Footer />;
  };

  return (
    <React.Fragment>
      {/**
       *
       * Rendering the following components
       *
       * <Header>
       *   <Navigation />
       *   <Navigation />
       *
       */}
      {renderHeader()}
      <main data-testid="layout-main-content" id="main-content">
        {children ? children : null}
      </main>
      {/**
       *
       * Rendering the following components
       *
       * <Footer>
       *   <Navigation>
       *
       */}
      {renderFooter()}
    </React.Fragment>
  );
};

export default Layout;
