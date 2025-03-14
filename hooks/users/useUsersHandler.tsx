import { globalLoading } from "@/redux/auth/authSlice";
import { AppDispatch } from "@/redux/store/store";
import { fetchUsers, isUserDelete, userStatus } from "@/redux/users/usersSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export const useUsersHandler = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleFetchUsers = ({
    payload,
    page,
    pageSize,
  }: FETCH_USERS_HOOK_PROPS) => {
    handleLoading(true);
    dispatch(
      fetchUsers({
        payload,
        page,
        pageSize,
        onComplete: () => {
          handleLoading(false);
        },
      })
    );
  };

  const deleteUser = ({ userId }: { userId: number }) => {
    handleLoading(true);
    const response = dispatch(
      isUserDelete({
        userId,
        onSuccess: (res) => {
          handleLoading(false);
          toast.success(res);
        },
        onError: (res) => {
          handleLoading(false);
          toast.error(res);
        },
      })
    );
    return response.unwrap();
  };

  const handleUserStatus = ({ payload }: USER_STATUS_HOOK_PROPS) => {
    handleLoading(true);
    const response = dispatch(
      userStatus({
        payload,
        onSuccess: (res) => {
          handleLoading(false);
          toast.success(res);
        },
        onError: (res) => {
          handleLoading(false);
          toast.error(res);
        },
      })
    );
    return response.unwrap();
  };

  const handleLoading = (value: boolean) => {
    dispatch(
      globalLoading({
        payload: value,
      })
    );
  };

  return { handleFetchUsers, handleUserStatus, deleteUser };
};
