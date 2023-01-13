import React from "react";
import LeftNav from "../components/nav/LeftNav";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import AboutMeSettings from "../components/settings/AboutMeSettings";
import PortfolioSettings from "../components/settings/PortfolioSettings";
import ContactSettings from "../components/settings/ContactSettings";
import { useEffect } from "react";
import supabase from "../services/supabaseClient";

export default function Dashboard() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const isUserLogged = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.log(error);
      }
      if (!user) {
        navigate("/login");
      }
      if (user) {
        setIsLogged(true);
      }
    };

    isUserLogged();
  }, []);

  const handleClickAboutMe = (e) => {
    e.preventDefault();
    navigate("aboutmeset");
  };

  const handlePortfolio = (e) => {
    e.preventDefault();
    navigate("portfolioset");
  };

  const handleContact = (e) => {
    e.preventDefault();
    navigate("contactset");
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleLogOut = (e) => {
    e.preventDefault();

    const logOut = async () => {
      let { error } = await supabase.auth.signOut();

      if (error) {
        console.log(error);
      }
      navigate("/login");
      setIsLogged(false);
      window.location.reload(false);
    };
    logOut();
  };

  return (
    <>
      {isLogged && (
        <div className="dashboard">
          {pathname === "/dashboard" ? (
            <>
              <button
                className="dashboard-button"
                onClick={handleNavigate}
                style={{
                  position: "absolute",
                  left: "4em",
                  top: "2em",
                  width: 200,
                }}
              >
                back to login
              </button>
              <button
                className="dashboard-button"
                onClick={handleLogOut}
                style={{
                  position: "absolute",
                  left: "4em",
                  top: "6em",
                  width: 200,
                }}
              >
                log out
              </button>
              <div className="dashboard-content">
                <h3>settings</h3>
                <button
                  className="dashboard-button"
                  onClick={handleClickAboutMe}
                >
                  about me
                </button>
                <button className="dashboard-button" onClick={handlePortfolio}>
                  portfolio
                </button>
                <button className="dashboard-button" onClick={handleContact}>
                  contact
                </button>
              </div>
            </>
          ) : null}
          {pathname.includes("aboutmeset") ? <AboutMeSettings /> : null}
          {pathname.includes("portfolioset") ? <PortfolioSettings /> : null}
          {pathname.includes("contactset") ? <ContactSettings /> : null}
        </div>
      )}
    </>
  );
}
