import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, loading }) => {
  const user = useSelector((state) => state.user);

  if (loading) {
    return (
      <div className="text-center mt-20 text-2xl font-bold">
        Checking session...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
