import {useCreateMyUser} from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect ,useRef} from "react";

const AuthCallBackPage =()=> {
    
    const navigate=useNavigate();
    const {user}=useAuth0();
    const {createUser}=useCreateMyUser();
    
    const hasCreateduser=useRef(false);
    useEffect(()=>
    {
        if(user?.sub && user?.email && !hasCreateduser.current)
        {
         createUser({auth0Id:user.sub, email:user.email});
         console.log(" reached createUser Successfully");
         hasCreateduser.current=true;

        }
        navigate("/");

    },[createUser,navigate,user]);

    return <>Loading ....</>;
    
};

export default AuthCallBackPage;