import React from 'react';
import styles from 'css/main';
import classNames from 'classnames/bind';
var cx = classNames.bind(styles);


var PageContent = React.createClass({
    render: function () {
        return (
            <div className={styles['page-content']}>
                {this.props.children}
            </div>
        );
    }
});

export default PageContent;