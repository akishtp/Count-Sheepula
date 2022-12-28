import React from "react";

interface KeyProps {
  value: String;
}

const Key: React.FC<KeyProps> = ({ value }) => {
  return <button className="key">{value}</button>;
};

export default Key;
