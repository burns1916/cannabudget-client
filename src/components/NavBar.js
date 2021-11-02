import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import classes from './NavBar.module.css'

const NavBar = props => {

    return(
        <nav>
            {props.loggedIn ?
            <>
            <div className={classes.navBar}>
                <div>
                <Link to="/" className={classes.navLink}>
                    <div className={classes.linkContainer}>
                        <div className={classes.tree}>
                            <i className="fa fa-tree" aria-hidden="true"></i>
                        </div>
                        Home
                    </div>
                </Link>
                </div>
                <div>
                <Link to="/farms" className={classes.navLink}>
                <div className={classes.linkContainer}>
                    <div className={classes.tree}>  
                    <i className="fa fa-tree" aria-hidden="true"></i>
                    </div>
                        Farms
                    </div>
                </Link>
                </div>
                <div className={classes.logoutBtnContainer}>
                <Logout />
                </div>
            </div>
            </>
            :
            <div className={classes.navBar}>
                <Link to="/" className={classes.navLink}>
                <div className={classes.linkContainer}>
                <div className={classes.tree}>  
                    <i className="fa fa-tree" aria-hidden="true"></i>
                    </div>
                        Home
                    </div>
                </Link>
                <Link to="/signup" className={classes.navLink}>
                <div className={classes.linkContainer}>
                <div className={classes.tree}>  
                    <i className="fa fa-tree" aria-hidden="true"></i>
                    </div>
                        Sign Up
                    </div>
                </Link>
                <Link to="/login" className={classes.navLink}>
                <div className={classes.linkContainer}>
                <div className={classes.tree}>  
                    <i className="fa fa-tree" aria-hidden="true"></i>
                    </div>
                        Login
                    </div>
                </Link>
            </div>
            }
            <br/>
        </nav>
    )
}

const mapStateToProps = state => {
    return ({
        loggedIn: !!state.currentUser,
    })
}

export default connect(mapStateToProps)(NavBar)