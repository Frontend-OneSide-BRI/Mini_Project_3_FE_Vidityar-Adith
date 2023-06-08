import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Molecules/Navbar";

function Layout({ children, access }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    //tambahkan logic authorization hak akses ketika sudah login
  }, [access]);
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <div className="pt-[100px]">
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
