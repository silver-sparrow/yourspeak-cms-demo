import { globalLoading } from "@/redux/auth/authSlice";
import { fetchReports } from "@/redux/reports/reportsSlice";
import { AppDispatch } from "@/redux/store/store";
import { useDispatch } from "react-redux";

export const useReportsHandler = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleFetchReports = ({ page, pageSize }: FETCH_HOOK_REPORTS_PROPS) => {
    handleLoading(true);
    dispatch(
      fetchReports({
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

  return { handleFetchReports };
};
