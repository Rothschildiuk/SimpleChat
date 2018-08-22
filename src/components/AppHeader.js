import React, {Component} from 'react';
import '../index.css';
import PropTypes from 'prop-types';

class AppHeader extends Component {

    static propTypes = { //Перевіряє що об'єкт отримує
        user: PropTypes.object,
        logInAction: PropTypes.func,
        logOutAction: PropTypes.func
    };


    render() {
        return (
            <ul className="AppHeader">

                {this.props.user ?
                    <div>
                        <li><a className="active" href="/">Chat</a></li>
                        <li><a href="https://github.com/OBloM-ua">My Git</a></li>
                        <li><a href="/Contact">Contact</a></li>
                        <li className="rightOut" onClick={this.props.logOutAction}><a>LogOut</a></li>
                        <li className="rightOut">
                            <div className="PhotoURL" style={{ background: 'url(%1) no-repeat'.replace('%1', this.props.user.photoURL),
                                backgroundSize: 'contain'
                            }}>

                            </div>
                        </li>
                    </div>
                    :
                    <li className="rightIn" onClick={this.props.logInAction}><a>LogIn</a></li>
                }

            </ul>
        );
    }
}

export default AppHeader;
