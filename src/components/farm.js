import React { Component } from "react";
import { connect } from "react-redux";
import { setFarm, unsetFarm} from '../actions/farms'

class FarmPage extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.setFarm(id)
    }
}