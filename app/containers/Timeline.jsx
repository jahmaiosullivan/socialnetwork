import React, { Component, PropTypes } from 'react';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
class Timeline extends Component {
    render() {
        return (
            <div>Welcome to the TimeLine again. Stay tuned...</div>
        );
    }
}

export default Timeline;
