import React, { useEffect } from "react";
import "../styles/login.css";

export default function Login() {
    useEffect(()=>{
        google.accounts.id.initialize({
          client_id:"825271161570-p1v57c0n7051cp2bosp7a94kveobdd20.apps.googleusercontent.com",
          callback:handleCredentialLogin,
        });
        google.accounts.id.renderButton(
          document.getElementById("googleSignInDiv"),
          {theme:"outline",size:"large"}
        );
    },[]);

    const handleCredentialLogin = (response)=>{
      console.log("Response token", response);
      if(response?.credential){
        localStorage.setItem("user",JSON.stringify(
          {
            isLogin:true,
            token:response?.credential
          }
        ));
        window.location.href='/'
      }
      
    }


    return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Sign in to continue</p>
        <div className="google-btn-container">
          <div id="googleSignInDiv"></div>
        </div>
      </div>
    </div>
  );
}
