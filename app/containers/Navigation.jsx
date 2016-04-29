import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';
import styles from 'css/components/navigation';


const Navigation = ({user, dispatch}) => {
	const logout = () => dispatch(logOut());

    return (
      <nav className={styles.navigation} role="navigation">
        <Link to="/"
          className={styles.item}
          activeClassName={styles.active}>Ninja Ocean</Link>
          { user.authenticated ? (
            <Link onClick={logout}
              className={styles.item} to="/">Logout</Link>
          ) : (
            <Link className={styles.item} to="/login">Log in</Link>
          )}
          <Link className={styles.item} to="/dashboard">Dashboard</Link>
          <Link to="/about" className={styles.item} activeClassName={styles.active}>About</Link>
      </nav>
    );
};

Navigation.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Navigation);
