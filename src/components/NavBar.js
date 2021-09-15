import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const NavBar = props => {

    return(
        <nav>
            {props.loggedIn ?
            <>
            <div>
                <NavLink to="/">
                    <span>
                        Home
                    </span>
                </NavLink>
                <NavLink to="/farms">
                    <span>
                        Farms
                    </span>
                </NavLink>
                <NavLink to="/myprofile">
                    <span>
                        Profile
                    </span>
                </NavLink>
            </div>
            <div>
                <Logout />
            </div>
            </>
            :
            <div>
                <NavLink to="/">
                    <span>
                        Home
                    </span>
                </NavLink>
                <NavLink to="/signup">
                    <span>
                        Sign Up
                    </span>
                </NavLink>
                <NavLink to="/login">
                    <span>
                        Login
                    </span>
                </NavLink>
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