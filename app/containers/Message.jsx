import React from 'react';
import {connect} from 'react-redux';
import styles from 'css/components/message';

const Message = ({message, type}) => {
  return (
      /*, {
       show: message && message.length > 0,
       success: type === 'SUCCESS'
       })}*/


      <div className={styles.message}>{message}</div>
  );
};

function mapStateToProps(state) {
  return {...state.message};
}

export default connect(mapStateToProps)(Message);
