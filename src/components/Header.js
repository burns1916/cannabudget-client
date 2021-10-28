import classes from './Header.module.css'
import leaves from '../imgs/leaves.jpeg'

const Header = () => {
    return (
        <div className={classes.header} style={{ backgroundImage: `url(${leaves})` }}>
                <h1>Farm Manager</h1>
        </div>
    )
}

export default Header
