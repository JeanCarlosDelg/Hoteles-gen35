import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import getConfigToken from "../services/getConfigToken";

const useAuth = () => {
  const navigate = useNavigate();

  // Register
  const registerUser = (data) => {
    const url = "http://localhost:8080/users";
    axios
      .post(url, data)
      .then((res) => {
        localStorage.setItem("userData", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
        toast.error("User create fail");
      });
  };

  // login
  const loginUser = (data) => {
    const url = "http://localhost:8080/users/login";
    axios
      .post(url, data)
      .then((res) => {
        console.log('Login correctly');
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success("Login successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response?.data.message);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.error(err.response?.data.message);
      });
  };

  //delete
  const remove = (id) => {
    const url = `http://localhost:8080/users/${id}`;
    axios
      .delete(url, getConfigToken())
      .then((res) => {
        console.log('Delete correctly');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Verification
  const verify = (code) => {
    const url = `http://localhost:8080/users/verify/${code}`;
    axios
      .get(url)
      .then((res) => {
        console.log('Verified correctly');
      })
      .catch((err) => console.log(err));
  };

  return { registerUser, loginUser, remove, verify };
};

export default useAuth;
