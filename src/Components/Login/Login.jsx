import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import app from '../../Firebase/firebase.init'
import { Helmet } from "react-helmet-async";

import { useState } from "react";
import { Result } from "postcss";
// import { Result } from "postcss";

const Login = () => {
    const [user, setUser]= useState(null ); 


    const GoogleProvider = new GoogleAuthProvider();
    // const tweeterProvider = new TwitterAuthProvider();
    const auth = getAuth(app);

    const HandleGoogleSignIn = () => {
        console.log(" Google LogIn button clicked ");
        signInWithPopup(auth, GoogleProvider)
        .then(Result=> {
            const LoggedInUser = Result.user;
            
            setUser(LoggedInUser);
            console.log(LoggedInUser);
            })
        .catch(error =>{
            console.log("error: "+ error.message)
        })
    }

   




    return (
        <div>
            <Helmet>
                <title>Firebase Authorization | login</title>
            </Helmet>

            <div className="flex justify-center items-center">
                <button className="bg-red-700 py-2 px-6 rounded-lg font-semibold text-white " onClick={HandleGoogleSignIn} > Google Login </button>

            </div>

            <div>
               <h2>User: {user.displayName}</h2>

            </div>

        </div>
    );
};

export default Login;