import { globalLoading, loginUser, logoutUser } from "@/redux/auth/authSlice";
import { AppDispatch } from "@/redux/store/store";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export const useAuthHandler = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = ({ values, setSubmitting }: LOGIN_USER_HOOK_PROPS) => {
    handleLoading(true);
    dispatch(
      loginUser({
        payload: values,
        onSuccess: () => {
          handleLoading(false);
          toast.success("Login successful");
          setSubmitting(false);
          router.push("/");
        },
        onError: (err: string) => {
          handleLoading(false);
          toast.error(err);
          setSubmitting(false);
        },
      })
    );
  };

  const handleLogout = () => {
    handleLoading(true);
    dispatch(
      logoutUser({
        onSuccess: () => {
          handleLoading(false);
          toast.success("Logout successful");
          router.push("/auth");
        },
        onError: (err: string) => {
          handleLoading(false);
          toast.error(err);
        },
      })
    );
  };

  const handleLoading = (value: boolean) => {
    dispatch(
      globalLoading({
        payload: value,
      })
    );
  };

  return { handleLogin, handleLogout, handleLoading };
};
