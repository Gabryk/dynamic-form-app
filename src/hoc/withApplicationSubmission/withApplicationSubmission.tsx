import { ComponentType, ReactElement, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadUserApplication,
  UserApplication,
} from "store/userApplicationSlice";
import { AppDispatch, RootState } from "store";

type WithApplicationSubmissionProps = {
  loading?: boolean;
  error?: string;
  onSubmit: (data: UserApplication["data"]) => void;
};

const withApplicationSubmission = (
  WrappedComponent: ComponentType<WithApplicationSubmissionProps>
) => {
  const WithApplicationSubmission = (): ReactElement => {
    const dispatch = useDispatch<AppDispatch>();
    const abort = useRef(() => {});

    const { loading, error } = useSelector(
      (state: RootState) => state.userApplication
    );

    const doSubmit = (data: UserApplication["data"]) => {
      if (!data) return;

      abort.current = dispatch(uploadUserApplication(data)).abort;
    };

    useEffect(() => () => abort.current(), []);

    return (
      <WrappedComponent loading={loading} error={error} onSubmit={doSubmit} />
    );
  };

  WithApplicationSubmission.displayName = `withLogger(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return WithApplicationSubmission;
};

export default withApplicationSubmission;
