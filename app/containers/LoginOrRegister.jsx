import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {manualLogin, signUp, toggleLoginMode} from 'actions/users';
import styles from 'css/components/login.less';
import classNames from 'classnames/bind';
var cx = classNames.bind(styles);
import hourGlassSvg from 'images/hourglass.svg';


class LoginOrRegister extends Component {
    /*
     * This replaces getInitialState. Likewise getDefaultProps and propTypes are just
     * properties on the constructor
     * Read more here: https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes
     */
    constructor(props) {
        super(props);
        this.toggleMode = this.toggleMode.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(event) {
        event.preventDefault();

        const {dispatch, user: {isLogin}} = this.props;
        const email = ReactDOM.findDOMNode(this.refs.email).value;
        const password = ReactDOM.findDOMNode(this.refs.password).value;

        if (isLogin) {
            dispatch(manualLogin({
                email,
                password
            }));
        } else {
            dispatch(signUp({
                email,
                password
            }));
        }
    }

    toggleMode() {
        this.props.dispatch(toggleLoginMode());
    }

    renderHeader() {
        const {isLogin} = this.props.user;
        if (isLogin) {
            return (
                <div className={styles.header}>
                    <h1 className={styles.heading}>Login with Email</h1>
                    <div className={styles.alternative}>
                        Not what you want?
                        <a className={styles.alternativeLink}
                           onClick={this.toggleMode}> Register now for an Account</a>
                    </div>
                </div>
            );
        }

        return (
            <div className={styles.header}>
                <h1 className={styles.heading}>Register with Email</h1>
                <div className={styles.alternative}>
                    Already have an account?
                    <a className={styles.alternative-link}
                       onClick={this.toggleMode}> Login</a>
                </div>
            </div>
        );
    }

    render() {
        const {isWaiting, message, isLogin} = this.props.user;

        return (
            <div className={styles.login}>
                <div className={styles.container}>
                    { this.renderHeader() }
                    <img className={styles.loading} src={hourGlassSvg}/>
                    <div className={cx('email-container')}>
                        <form onSubmit={this.handleOnSubmit}>
                            <input className={styles.input}
                                   type="email"
                                   ref="email"
                                   placeholder="email"/>
                            <input className={styles.input}
                                   type="password"
                                   ref="password"
                                   placeholder="password"/>
                            <div className={styles.hint}>
                                <div>Hint</div>
                                <div>email: example@ninja.com password: ninja</div>
                            </div>
                            <p className={styles.message}>{message}</p>
                            <input className={styles.button}
                                   type="submit"
                                   value={isLogin ? 'Login' : 'Register'}/>
                        </form>
                    </div>
                    <div className={cx('google-container')}>
                        <h1 className={styles.heading}>Google Login Demo</h1>
                        <a className={styles.button}
                           href="/auth/google">Login with Google</a>
                    </div>
                </div>
            </div>
        );
    }
}

LoginOrRegister.propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func
};

// Function passed in to `connect` to subscribe to Redux store updates.
// Any time it updates, mapStateToProps is called.
function mapStateToProps(state) {
    return {
        user: state.user
    };
}

// Connects React component to the redux store
// It does not modify the component class passed to it
// Instead, it returns a new, connected component class, for you to use.
export default connect(mapStateToProps)(LoginOrRegister);
