import { actionErrors } from "constants/messages";

export const fakeApplication = <T>(data: T): [Promise<T>, () => void] => {
  let timeID: NodeJS.Timeout;
  const willSuccess = Math.random() < 0.5;

  const promise = new Promise<T>((resolve, reject) => {
    timeID = setTimeout(() => {
      willSuccess
        ? resolve({ ...data })
        : reject(new Error(actionErrors.networkFail));
    }, 3000);
  });

  const abort = () => {
    clearTimeout(timeID);
  };

  return [promise, abort];
};

export default fakeApplication;
