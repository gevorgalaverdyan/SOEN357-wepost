import { useState } from "react";

function useContactHook() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
    description: "",
  });

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return { formData, onChange, setFormData };
}

export default useContactHook;
