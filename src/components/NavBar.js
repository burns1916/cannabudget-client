import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import classes from './NavBar.module.css'

const NavBar = props => {

    return(
        <nav>
            {props.loggedIn ?
            <>
            <div>
                <Link to="/">
                    <span className={classes.navlink}>
                        Home
                    </span>
                </Link>
                <Link to="/farms">
                    <span className={classes.navlink}>
                        Farms
                    </span>
                </Link>
            </div>
            <div>
                <Logout />
            </div>
            </>
            :
            <div>
                <Link to="/">
                    <span className={classes.navlink}>
                        Home
                    </span>
                </Link>
                <Link to="/signup">
                    <span className={classes.navlink}>
                        Sign Up
                    </span>
                </Link>
                <Link to="/login">
                    <span className={classes.navlink}>
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