import { createContext, useState, useEffect } from "react";
import router from "next/router";
import http from "@/core/http";
import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";
import { usePubNub } from "pubnub-react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState({});
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const pubnub = usePubNub();

  var url = process.env.NEXT_PUBLIC_SITE_URL;

  useEffect(() => {
    checkLogin();
  }, []);

  function syncUser(user) {
    pubnub.setUUID(user?.id ?? "default");
    setUser(user);
    setError({});
  }

  async function checkLogin() {
    setIsLoading(true);
    const { data: res } = await http.get("/v1/users");
    setIsLoading(false);
    if (res.success === true) syncUser(res.result);
    else {
      // Reset Token
      await http.post("/removeToken");
      setUser(null);
    }
  }

  async function login({ email, password }) {
    setIsLoading(true);
    const { data: res } = await http.post("/v1/auth/login", {
      email,
      password,
    });
    setIsLoading(false);

    if (res.success === true) {
      syncUser(res.user);

      if (router.query?.from) {
        location.href = url + router.query.from;
        toast.success("Berhasil Login");
      } else {
        location.href = url + "/";
        toast.success("Berhasil Login");
      }
    } else {
      toast.error("Email atau Password salah!");
    }
  }

  async function loginOAuth(data, provider) {
    setIsLoading(true);
    const { data: res } = await http.post(`login/oauth/${provider}`, {
      token: data.accessToken,
    });
    setIsLoading(false);

    if (res.success === true) {
      syncUser(res.data.user);
      router.push("/");
    } else {
      setError({ ...error, email: "Bad credentials." });
    }
  }

  async function changeProfile(data, status) {
    setIsLoading(true);
    const { data: res } = await http.put("/v1/users", data);
    setIsLoading(false);

    if (res.success) {
      toast.success(res.message);
      if (status) {
        logout();
      }
      return;
    } else {
      setError(res.data);
      setIsLoading(false);
    }
  }

  async function register(formData) {
    setIsLoading(true);
    const { data: res } = await http.post("/v1/auth/register", formData);
    setIsLoading(false);

    if (res.success === true) {
      syncUser(res.user);
      router.push("/login");
      toast.success("Berhasil Registrasi");
    } else {
      setError(res.data);
    }
  }

  async function logout() {
    setIsLoading(true);
    const { data: res } = await http.post("/v1/auth/logout");
    setIsLoading(false);

    if (res.success) {
      router.push("/login");
      setUser(null);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        loginOAuth,
        checkLogin,
        changeProfile,
        register,
        isLoading,
        error,
        setUser,
        logout,
        keyword,
        setKeyword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
