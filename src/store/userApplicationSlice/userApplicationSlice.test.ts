import reducer, { UserApplication, setUserDataAction } from "./index";

test("should return the initial state", () => {
  expect(reducer({ loading: false }, { type: undefined })).toEqual({
    loading: false,
  });
});

test("should set the user data", () => {
  const previousState: UserApplication = {};
  const expectedUser = { name: "Mary", lastName: "T. Hager" };

  expect(
    reducer(previousState, setUserDataAction({ ...expectedUser }))
  ).toEqual({ loading: false, data: { ...expectedUser } });
});
