import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../services/supabaseClient";

export default function AboutMeSettings() {
  const [data, setData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [text, setText] = useState(" ");
  const formRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const getAboutMeData = async () => {
      const { data, error } = await supabase
        .from("aboutMe")
        .select("id, verticalText")
        .order("id", { ascending: true });
      if (error) {
        console.log(error);
      }
      if (data) {
        setData(data);
      }
    };
    getAboutMeData();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const getData = async () => {
      const { data, error } = await supabase
        .from("aboutMe")
        .select("*")
        .eq("id", e.target.id)
        .single();
      if (error) {
        console.log(error);
      }
      if (data) {
        setEditData(data);
        formRef.current[0].value = data.verticalText;
        formRef.current[1].value = data.title;
        formRef.current[2].value = data.description;
      }
    };
    getData();
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updateData = async () => {
      const { error } = await supabase
        .from("aboutMe")
        .update({
          verticalText: formRef.current[0].value,
          title: formRef.current[1].value,
          description: formRef.current[2].value,
        })
        .eq("id", editData.id);
      if (!error) {
        setText("Changes saved! Please refresh page.");
      }
    };
    updateData();
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <>
      {data && (
        <div className="settings-content">
          <p>about me</p>
          {data.map((d) => {
            return (
              <button
                className="dashboard-button"
                onClick={handleClick}
                key={d.id}
                id={d.id}
              >
                {d.verticalText}
              </button>
            );
          })}
        </div>
      )}
      {editData && (
        <form ref={formRef} className="settings-content2">
          <div style={{ display: "grid" }}>
            <label className="settings-label">vertical text</label>
            <input className="settings-input" type="text" />
          </div>
          <div style={{ display: "grid" }}>
            <label className="settings-label">title</label>
            <input className="settings-input" />
          </div>
          <div style={{ display: "grid" }}>
            <label className="settings-label">text</label>
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
      <button
        className="dashboard-button"
        style={{ position: "absolute", top: "2em", left: "2em" }}
        onClick={handleBack}
      >
        go back to dashboard
      </button>
    </>
  );
}
