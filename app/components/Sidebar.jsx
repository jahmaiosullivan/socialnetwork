import React from 'react';
import styles from 'css/components/sidebar.less';
import classNames from 'classnames/bind';
var cx = classNames.bind(styles);


var SideBar = React.createClass({
    render: function () {
        return (
            <div className={styles['page-sidebar']}>
                This is the sidebar
            </div>
        );
    }
});

export default SideBar;