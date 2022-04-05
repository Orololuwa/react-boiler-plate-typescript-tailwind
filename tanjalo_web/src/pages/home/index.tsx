import { useAppDispatch, useAppSelector } from "store/hooks";
import { login, logOut } from "store/auth/action-creators";

const Home = (): JSX.Element => {
  const x = useAppSelector((state) => state.auth.isLoggedIn);

  const dispatch = useAppDispatch();

  const testDispatch = (): void => {
    if (x) {
      dispatch(logOut());
    } else {
      dispatch(login());
    }
  };

  return (
    <div>
      <p className="text-3xl font-bold underline">
        Hello world! {x && " logged In"}
      </p>
      <button onClick={testDispatch}>toggle auth state</button>
    </div>
  );
};

export default Home;
