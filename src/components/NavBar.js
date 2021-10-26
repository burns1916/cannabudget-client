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
                    <span>  
                        Home
                    </span>
                </Link>
                </div>
                <div>
                <Link to="/farms" className={classes.navLink}>
                    <span>
                        Farms
                    </span>
                </Link>
                </div>
                <div className={classes.logoutBtn}>
                <span>
                <Logout />
                </span>
                </div>
            </div>
            </>
            :
            <div className={classes.navBar}>
                <Link to="/">
                    <span className={classes.navLink}>
                        Home
                    </span>
                </Link>
                <Link to="/signup">
                    <span className={classes.navLink}>
                        Sign Up
                    </span>
                </Link>
                <Link to="/login">
                    <span className={classes.navLink}>
                        Login
                    </span>
                </Link>
            </div>
            }
        </nav>
    )
}

const mapStateToProps = state => {
    return ({
        loggedIn: !!state.currentUser,
    })
}

export default connect(mapStateToProps)(NavBar)