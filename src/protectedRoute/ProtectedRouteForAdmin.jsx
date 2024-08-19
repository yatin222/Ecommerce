import { Children } from "react";
import { Navigate } from "react-router";
export const ProtectedRouteForAdmin = ({children}) => {
    const user = JSON.parse(localStorage.getItem('users'));
    if(user?.role === 'admin'){
        return children;
        // matlab user valle pages dikhaye
    }
    else{
        return <Navigate to={'/login'}/>
    }
}
