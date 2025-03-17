import { globalLoading } from "@/redux/auth/authSlice";
import { AppDispatch } from "@/redux/store/store";
import { fetchTags } from "@/redux/Tags/tagsSlice";
import { useDispatch } from "react-redux";

export const useTagsHandler = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleFetchTags = ({ page, pageSize }: FETCH_TAGS_HOOK_PROPS) => {
    handleLoading(true);
    dispatch(
      fetchTags({
        page,
        pageSize,
        onComplete: () => {
          handleLoading(false);
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

  return { handleFetchTags };
};
