import React from "react";

export default function Alert(props) {
  const capCase = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.typ} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capCase(props.alert.typ) + " : " + props.alert.msg}</strong>
      </div>
    )
  );
}
