import React from "react";
import LogIn from "./LogIn";
import Browse from "./Browse";
import { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import ProtectedRoute from "../utils/ProtectedRoute.jsx";

const Body = () => {
  const [loading, setLoading] = React.useState(true);

  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LogIn />,
    },
    {
      path: "/browse",
      element: (
        <ProtectedRoute>
          <Browse />
        </ProtectedRoute>
      ),
    },
  ]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-20 text-2xl font-bold">Loading...</div>
    );
  }

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
