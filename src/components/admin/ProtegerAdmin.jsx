import { Navigate, Outlet } from "react-router-dom";

const ProtegerAdmin = () => {
  const token = localStorage.getItem('token');

  if (!token) {
   return <Navigate to="/admin/login" replace />;
  }

  return (
    
      <Outlet />
   
  );
};

export default ProtegerAdmin;
