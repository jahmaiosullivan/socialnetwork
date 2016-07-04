import React, { PropTypes } from 'react';
import Navigation from 'containers/Navigation';
import FixedNav from 'containers/FixedNav';
import Post from 'components/Post';
import SideBar from 'components/Sidebar';
import PageContent from 'components/PageContent';
import Message from 'containers/Message';
import styles from 'css/main.less';


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
const Main = ({children}) => {
    return (
        <div className={styles.app}>
            {children}
        </div>
    );
};

Main.propTypes = {
    children: PropTypes.object
};

export default Main;
