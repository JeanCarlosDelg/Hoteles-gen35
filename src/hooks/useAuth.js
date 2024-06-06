import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import getConfigToken from "../services/getConfigToken";

const useAuth = () => {
  const navigate = useNavigate();

  // Register
  const registerUser = (data) => {
    const url = "https://jeancda-booking-app.onrender.com/users";
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

  // Login
  const loginUser = (data) => {
    const url = "https://jeancda-booking-app.onrender.com/users/login";
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
    
    // Delete
    const remove = (id) => {
      const url = `https://jeancda-booking-app.onrender.com/users/${id}`;
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
      const url = `https://jeancda-booking-app.onrender.com/users/verify/${code}`;
    axios
    .get(url)
    .then((res) => {
      console.log('Verified correctly');
    })
    .catch((err) => console.log(err));
  };

  // Reset Password
  const resetPass = (data) => {
    const url = `https://jeancda-booking-app.onrender.com/users/reset_password`
    axios.post(url, data)
    .then((res) => {
      localStorage.setItem('code', res.data.code)
      const toastId = toast.loading('loading...')
      setTimeout(() => {
        toast.success('Check your email', {
          id: toastId
        })
      }, 1000)
      setTimeout(() => {
        navigate('/')
      }, 2000)
    })
    .catch((err) => {
      const toastId = toast.loading('loading...')
      setTimeout(() => {
        toast.error(err.response?.data.message, {
          id: toastId
        })
      }, 1000)
    })
  };
  
  // Reset Password Code
  const resetPassCode = (code, data) => {
    const url = `https://jeancda-booking-app.onrender.com/users/reset_password/${code}`
    axios.post(url, data)
    .then((res) => {
      localStorage.removeItem("code");
      const toastId = toast.loading('loading...')
      setTimeout(() => {
        toast.success('Your password was changed successfully', {
          id: toastId
        })
      }, 1000)
    })
    .catch((err) => {
      console.log('Your request was not completed, please try again')
    })
  };

  return { registerUser, loginUser, remove, verify, resetPass, resetPassCode };
};

export default useAuth;
