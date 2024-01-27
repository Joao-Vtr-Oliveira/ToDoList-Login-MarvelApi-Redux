import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginType } from "../store/reducer/LoginType";

const SessionCheckHOC = (WrappedComponent: React.ComponentType, delay: number = 0) => {
  return (props: React.ComponentProps<typeof WrappedComponent>) => {
    const navigate = useNavigate();
    const sessionToken = useSelector((state: LoginType) => state.login.data?.sessionToken);
    useEffect(() => {
      const checkSession = () => {
        if (!sessionToken) {
          console.log("Nenhum token de sessão encontrado, redirecionando...");
          setTimeout(() => {
            navigate("//");
          }, delay);
        } else {
          console.log("Token de sessão encontrado:",sessionToken);
        }
      };
      checkSession();
    }, [props, navigate]);
    return <WrappedComponent {...props} />;
  };
};

export default SessionCheckHOC;