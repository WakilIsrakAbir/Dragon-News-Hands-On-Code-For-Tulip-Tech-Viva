import BreakingNews from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import React, { Suspense } from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <BreakingNews></BreakingNews>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      {children}
    </div>
  );
};

export default MainLayout;
