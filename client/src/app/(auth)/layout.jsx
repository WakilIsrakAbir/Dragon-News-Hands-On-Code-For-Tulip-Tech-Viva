import Navbar from "@/components/shared/Navbar";
import React, { Suspense } from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Suspense fallback={null}>
        <Navbar></Navbar>
      </Suspense>
      {children}
    </div>
  );
};

export default AuthLayout;
