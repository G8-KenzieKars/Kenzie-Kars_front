import { createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  iUserProviderProps,
  iUserLoginInformation,
  iUserRegisterInformation,
  iDefaultErrorResponse,
  iUserResponse,
} from "./types";
import { iChildren } from "../../interfaces/global";
import { useLocation, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
// import { AiOutlineConsoleSql } from "react-icons/ai";

export const UserContext = createContext({} as iUserProviderProps);

export const UserProvider = ({ children }: iChildren) => {
  const defaultValues = {
    name: "",
    email: "",
    cpf: "",
    phone: "",
    birthdate: "",
    description: "",
    address: {
      cep: "",
      state: "",
      city: "",
      street_name: "",
      street_number: "",
      complement: "",
      id: "",
      createdAt: "",
    },
    is_seller: false,
    id: "",
    createdAt: "",
  };

  const [user, setUser] = useState({} as iUserResponse);
  const [loadingProfileView, setLoadingProfileView] = useState<boolean>(false);
  const [spinner, setSpinner] = useState<boolean>(false);
  const [errorApi, setErrorApi] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("@KenzieKars:token");

    // setUser({ ...user, ...defaultValues });
    console.log("USER", user);


    const autologin = async () => {


      if (!token) {
        setLoadingProfileView(false);
        return;
      } else {
        try {
          const { data } = await api.get("users", {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          console.log(data);
          setUser(data);

          if (data.is_seller) {
            navigate("/profileview");
          } else {
            navigate("/");
          }
        } catch (error) {
          localStorage.clear();
          setUser(defaultValues);
          navigate("/");
          console.error(error);
        } finally {
          setLoadingProfileView(false);
        }
      }
    };

    autologin();
  }, []);

  console.log("User State", user);

  const signInUser = async (formData: iUserLoginInformation) => {
    try {
      setSpinner(true);
      const response = await api.post("login", formData);
      toast.success("Usuário logado com sucesso");
      window.localStorage.clear();
      window.localStorage.setItem("@KenzieKars:token", response.data.token);
      api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;

      const { data } = await api.get<iUserResponse>("/users");
      setUser(data);
      if (data.is_seller) {
        navigate("/profileview");
      } else {
        navigate("/");
      }

      // navigate("/");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      console.error(error);
      console.log("ERROR", currentError.message);
      toast.error(`Ops! Algo deu errado: ${currentError.response?.data.error}`);
    } finally {
      setSpinner(false);
    }
  };

  const registerUser = async (
    formData: iUserRegisterInformation,
    reset: () => void
  ) => {
    try {
      console.log("REGISTER DATA", formData);
      const response = await api.post("users", formData);
      response.statusText === "Created" &&
        toast.success("Conta criada com sucesso");
      navigate("/login");
      setSpinner(true);
      reset();
    } catch (error) {
      console.error(error);
      setErrorApi(true);
      toast.error(`Ops! Algo deu errado.`);
    } finally {
      setSpinner(false);
    }
  };
  const logoutUser = () => {
    window.localStorage.clear();
    setUser(defaultValues);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        signInUser,
        loadingProfileView,
        registerUser,
        logoutUser,
        spinner,
        setSpinner,
        errorApi,
        setErrorApi,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
