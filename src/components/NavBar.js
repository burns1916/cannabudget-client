import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const NavBar = props => {

    return(
        <nav>
            {props.loggedIn ?
            <>
            <div>
                <Link to="/">
                    <span>
                        Home
                    </span>
                </Link>
                <Link to="/farms">
                    <span>
                        Farms
                    </span>
                </Link>
                <Link to="/myprofile">
                    <span>
                        Profile
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
                    <span>
                        Home
                    </span>
                </Link>
                <Link to="/signup">
                    <span>
                        Sign Up
                    </span>
                </Link>
                <Link to="/login">
                    <span>
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