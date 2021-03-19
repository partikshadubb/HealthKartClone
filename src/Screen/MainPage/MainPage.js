import React, {Component} from "react"
import {Text} from "react-native"
import Routes from "../../Navigation/MainStack"
export default class HomePage extends Component {
    constructor(){
        super()
        this.state = {
            abc: "abc"
        }
    }

    render(){
        return(
            <Routes />
        )
    }

} 