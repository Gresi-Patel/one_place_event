import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role"); 
    navigate("/login"); 
  };

  return (
    <button
      onClick={handleLogout}
      className="btn btn-danger mt-auto"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
