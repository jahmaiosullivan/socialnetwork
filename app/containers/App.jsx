import React, { PropTypes } from 'react';
import Navigation from 'containers/Navigation';
import FixedNav from 'containers/FixedNav';
import Post from 'components/Post';
import SideBar from 'components/Sidebar';
import PageContent from 'components/PageContent';
import Message from 'containers/Message';
import styles from 'css/main';


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
const App = ({children}) => {
  return (
    <div className={styles.app}>
        <SideBar />
        <PageContent>
          <Post />
          <Navigation />
          <Message />
          {children}
        </PageContent>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
