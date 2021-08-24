import React from 'react';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
  displayHeader?: boolean;
  displayFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, displayHeader = true, displayFooter = true } = props;

  const renderHeader = () => {
    return !displayHeader ? null : <Header />;
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
      <main id="main-content">{children ? children : null}</main>
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
