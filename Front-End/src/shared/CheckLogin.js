import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const checkLogin = () => {
    const data = sessionStorage.getItem("JWT");
    if (data !== null) return true;
    else return false
}

const CheckLogin = (props) => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        const is_login = checkLogin();
        if (is_login) {
            dispatch(userActions.setUser());
        }
    });

    return (<></>);
}

export default CheckLogin;