import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../services/supabaseClient";

export default function ContactSettings() {
  const [text, setText] = useState(null);
  const [id, setId] = useState(null);
  const titleRef = useRef();
  const descRef = useRef();
  const phoneRef = useRef();
  const mailRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase
        .from("contact")
        .select("*")
        .single();
      if (error) {
        console.log(error);
      }
      if (data) {
        titleRef.current.value = data.title;
        descRef.current.value = data.description;
        phoneRef.current.value = data.phone;
        mailRef.current.value = data.email;
        setId(data.id);
      }
    };
    getData();
  }, []);

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updateData = async () => {
      const { error } = await supabase
        .from("contact")
        .update({
          title: titleRef.current.value,
          description: descRef.current.value,
          phone: phoneRef.current.value,
          email: mailRef.current.value,
        })
        .eq("id", id);
      if (!error) {
        setText("Changes saved! Please refresh page.");
      }
    };
    updateData();
  };

  return (
    <>
      <button
        className="dashboard-button"
        style={{ position: "absolute", top: "2em", left: "2em" }}
        onClick={handleBack}
      >
        back to dashboard
      </button>
      {
        <form className="settings-content2">
          <div style={{ display: "grid" }}>
            <label className="settings-label">title</label>
            <input className="settings-input" ref={titleRef} />
          </div>
          <div style={{ display: "grid" }}>
            <label className="settings-label">description</label>
            <textarea className="settings-textarea" ref={descRef} />
          </div>
          <div style={{ display: "grid" }}>
            <label className="settings-label">phone</label>
            <input className="settings-input" ref={phoneRef} />
          </div>
          <div style={{ display: "grid" }}>
            <label className="settings-label">email</label>
            <input className="settings-input" ref={mailRef} />
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
      }
    </>
  );
}
