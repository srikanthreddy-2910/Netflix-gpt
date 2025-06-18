import { useRef, useState, useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { validation } from "../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { BG_URL } from "../utils/constants";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

const LogIn = () => {
  const [signIn, setSignUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user); // ⬅️ Get current user

  const [validationError, setValidationError] = useState({
    emailError: null,
    passwordError: null,
    firebaseError: null,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/browse"); // ✅ redirect to browse if logged in
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleSignUp = () => {
    setSignUp((prev) => {
      return !prev;
    });
  };

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const result = validation(
      email.current?.value || "",
      password.current?.value || ""
    );

    setValidationError((prev) => ({ ...prev, firebaseError: null, ...result }));

    if (result.emailError || result.passwordError) return;

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: fullName.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;

              dispatch(addUser({ uid, email, displayName }));
              navigate("/browse");
            })
            .catch((error) => {
              setValidationError((prev) => ({
                ...prev,
                firebaseError: error.message,
              }));
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationError((prev) => ({
            ...prev,
            firebaseError: errorCode + " - " + errorMessage,
          }));
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationError((prev) => ({
            ...prev,
            firebaseError: errorCode + "-" + errorMessage,
          }));
        });
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <Header />
      <img
        className="object-cover w-full h-screen absolute top-0 left-0 -z-10"
        src={BG_URL}
        alt="background Screen"
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-[90%] mt-20 sm:w-3/5 md:w-2/5 lg:w-1/4 absolute p-6 sm:p-8 md:p-12 bg-black/80 rounded-md mx-auto top-20 sm:top-32 text-white right-0 left-0 z-10"
      >
        <h1 className=" text-4xl mb-4">{signIn ? "Sign In" : "Sign Up"}</h1>

        {!signIn && (
          <input
            ref={fullName}
            type="text"
            placeholder="enter your name"
            className="p-3 my-4  bg-gray-800  w-full rounded-md"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-3 text-sm sm:text-base my-4 bg-gray-800 w-full rounded-md"
        />
        {validationError && (
          <p className="pl-2 mt-[-12px] text-[12px] text-red-500">
            {validationError.emailError}
          </p>
        )}
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-3 my-4 rounded-md bg-gray-800   w-full"
        />
        {validationError && (
          <p className="pl-2 mt-[-12px] text-[12px] text-red-500">
            {validationError.passwordError}
          </p>
        )}
        {validationError.firebaseError && (
          <p className="pl-2 mt-[-12px] text-[12px] text-red-500">
            {validationError.firebaseError}
          </p>
        )}

        <button
          onClick={handleButtonClick}
          className="p-4 my-4 bg-red-600 w-full rounded-md  "
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm mt-2">
          {signIn ? "Are you new to Netflix?" : "Have an account?"}
          <a
            className="cursor-pointer text-red-500 ml-2"
            onClick={toggleSignUp}
          >
            {signIn ? "Sign up now" : "Sign In"}
          </a>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
