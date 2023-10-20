import { signOut } from "firebase/auth";
import { auth } from "../utills/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, addUser } from "../utills/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { logo } from "../utills/constants";

const Header = () => {
  const dispatch = useDispatch();
  const selectorUser = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser);
        //navigate("/");
        //setIsSignin(true);
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className=" p-5 bg-black bg-gradient-to-b from-black bg-opacity-20 flex justify-between">
      <img className="w-80" src={logo} alt="Logo" />
      {selectorUser && (
        <div className="flex p-3 m-3">
          <img
            className="w-16 h-16  m-4 rounded-full"
            alt="UserImage"
            src={selectorUser?.photoURL}
          />
          <button
            onClick={handleSignout}
            className="font-bold bg-green-400 px-3 py-0 h-10 mt-8  rounded-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
