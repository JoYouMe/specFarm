import React from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({
  setStudyList,
  setStudyMemberList,
  component: Component,
  ...rest
}) => {
  const isLogin = () => {
    !!sessionStorage.getItem("ACCESS_TOKEN") || alert("로그인이 필요합니다.");
    return !!sessionStorage.getItem("ACCESS_TOKEN");
  };
  return isLogin() ? (
    <Component
      {...rest}
      setStudyList={setStudyList}
      setStudyMemberList={setStudyMemberList}
    />
  ) : (
    <Navigate replace to="/login" />
  );
};

export default PrivateRoute;
