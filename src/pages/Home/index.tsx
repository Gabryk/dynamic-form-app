import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadUserApplication,
  UserApplication,
} from "store/userApplicationSlice";
import ApplicationForm from "components/ApplicationForm";
import Header from "components/Header";
import { AppDispatch, RootState } from "store";
import { ErrorMessage } from "./styled";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const abort = useRef(() => {});
  const { loading, error } = useSelector(
    (state: RootState) => state.userApplication
  );

  // const { submit, isLoading, response } = useSubmitApplication();

  const doSubmit = (data: UserApplication["data"]) => {
    if (!data) return;

    abort.current = dispatch(uploadUserApplication(data)).abort;
  };

  useEffect(() => () => abort.current(), []);

  return (
    <div>
      <Header title="Application Form" description="" />
      <ApplicationForm onSubmit={doSubmit} isLoading={loading} />
      {error && (
        <ErrorMessage>
          <p>😧 {error}</p>
        </ErrorMessage>
      )}
    </div>
  );
};

export default Home;
