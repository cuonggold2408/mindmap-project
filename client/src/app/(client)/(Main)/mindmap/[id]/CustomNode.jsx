import { useState } from "react";
import { Handle } from "reactflow";

export default function CustomNode({ data, id, selected, updateLabel }) {
  const [label, setLabel] = useState(data.label);
  const [isEditing, setIsEditing] = useState(false);
  const [pick, setPick] = useState(false);

  const handleDoubleClick = () => {
    if (selected) {
      setIsEditing(true);
    }
  };

  const handleClick = () => {
    setPick(!pick);
  };

  const handleChange = (e) => {
    setLabel(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    updateLabel(id, label);
  };
  return (
    <div
      style={{ minHeight: "42px" }}
      onDoubleClick={handleDoubleClick}
      onClick={handleClick}
    >
      {isEditing ? (
        <input
          defaultValue={label}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <p>{label}</p>
      )}
      <Handle type="source" position="bottom" />
      <Handle type="target" position="top" />
    </div>
  );
}
