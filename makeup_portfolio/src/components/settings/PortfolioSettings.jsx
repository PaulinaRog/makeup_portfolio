import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../services/supabaseClient";

export default function PortfolioSettings() {
  const [data, setData] = useState(null);
  const [src, setSrc] = useState(null);
  const [editData, setEditData] = useState(null);
  const formRef = useRef();
  const [text, setText] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const portfolio = async () => {
      const { data, error } = await supabase
        .from("portfolio")
        .select("id, title")
        .order("id", { ascending: true });

      if (error) {
        console.log(error);
      }
      if (data) {
        setData(data);
      }
    };
    portfolio();
  }, []);

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleClick = (e) => {
    e.preventDefault();
    const getData = async () => {
      const { data, error } = await supabase
        .from("portfolio")
        .select("*")
        .eq("id", e.target.id)
        .single();
      if (error) {
        console.log(error);
      }
      if (data) {
        setEditData(data);
        formRef.current[0].value = data.title;
        formRef.current[1].value = data.description;
      }
    };
    getData();

    const signedUrl = async () => {
      const { data, error } = await supabase.storage
        .from("portfolio")
        .createSignedUrls([`portfolio/${e.target.id}`], 60);

      if (error) {
        console.log(error);
      }
      if (data) {
        setSrc(data[0].signedUrl);
      }
    };
    signedUrl();
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatePortfolio = async () => {
      const { error } = await supabase
        .from("portfolio")
        .update({
          title: formRef.current[0].value,
          description: formRef.current[1].value,
        })
        .eq("id", editData.id);
      if (!error) {
        setText("Changes saved! Please refresh page.");
      }
    };
    updatePortfolio();
  };

  //   console.log(editData.id);

  return (
    <>
      <button
        className="dashboard-button"
        style={{ position: "absolute", top: "2em", left: "2em" }}
        onClick={handleBack}
      >
        back to dashboard
      </button>
      <div className="settings-content">
        <p>portfolio</p>
        {data &&
          data.map((d) => {
            return (
              <button
                className="dashboard-button"
                key={d.id}
                id={d.id}
                onClick={handleClick}
              >
                {d.title}
              </button>
            );
          })}
      </div>
      {editData && (
        <form className="settings-content2" ref={formRef}>
          <img src={src && src} style={{ width: "30%" }} />
          <div style={{ display: "grid" }}>
            <label className="settings-label">title</label>
            <input className="settings-input" />
          </div>
          <div style={{ display: "grid" }}>
            <label className="settings-label">description</label>
            <textarea className="settings-textarea" />
          </div>
          {text ? <p className="text-ok">{text}</p> : null}
          <button
            className="dashboard-button"
            style={{ width: 150, alignSelf: "flex-end" }}
            type="submit"
            onClick={handleSave}
          >
            save
          </button>
        </form>
      )}
    </>
  );
}
