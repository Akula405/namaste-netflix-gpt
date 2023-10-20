import "./header.css";
import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidate } from "../utills/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utills/userSlice";
import {
  signInWithEmailAndPassword,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utills/firebase";
import { userImage } from "../utills/constants";

const SignIn = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const [isSignin, setIsSignin] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignIn = () => {
    setIsSignin(!isSignin);
  };
  const handlesubmit = () => {
    let msg = checkValidate(email.current.value, password.current.value);
    setErrMsg(msg);
    if (msg) return;
    if (!isSignin) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: userImage,
          })
            .then(() => {
              // Profile updated!
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrMsg(error.message);
            });

          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " " + errorMessage);

          // ..
        });
    } else {
      //sign Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg("User is Not found");
        });
    }
  };
  return (
    <div className="header-bg ">
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 bg-black bg-opacity-80 w-3/12 my-24 mx-auto  text-white"
      >
        <h1 className="font-bold text-2xl my-8 ">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignin && (
          <div>
            <input
              ref={userName}
              type="text"
              placeholder="Enter your Full Name"
              className="my-3 w-full p-4 rounded-md bg-gray-900"
            />
          </div>
        )}
        <div>
          <input
            ref={email}
            type="text"
            placeholder="Enter your Email"
            className="my-3 w-full p-4 rounded-md bg-gray-900"
          />
        </div>
        <div>
          <input
            ref={password}
            type="password"
            placeholder="Enter your password"
            className="my-3 w-full p-4 rounded-md bg-gray-900"
          />
        </div>
        <p className="text-red-800">{errMsg}</p>
        <button
          className="p-4 my-7 w-full rounded-md bg-red-700 font-bold text-lg"
          onClick={handlesubmit}
        >
          {isSignin ? "Sign In" : "Sign Up"}
        </button>
        <p className="font-semibold cursor-pointer" onClick={toggleSignIn}>
          {isSignin
            ? "New to Netflix Sign Up now"
            : "Already user please Sign In"}
        </p>
      </form>
    </div>
  );
};

export default SignIn;
