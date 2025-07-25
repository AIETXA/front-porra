import { Navigate, Outlet } from "react-router-dom";

const ProtegerAdmin = () => {
  const token = localStorage.getItem('token');

  if (!token) {
   return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h2>Panel de Administración</h2>
      <Outlet />
    </div>
  );
};

export default ProtegerAdmin;
