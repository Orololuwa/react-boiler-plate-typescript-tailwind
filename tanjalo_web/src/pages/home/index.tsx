import { useAppDispatch, useAppSelector } from "store/hooks";
import { login, logOut } from "store/auth/action-creators";
import { decrement, increment } from "store/reducers/counter";

const Home = (): JSX.Element => {
  const { x, count } = useAppSelector((state) => ({
    x: state.auth.isLoggedIn,
    count: state.counter.value
  }));

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
      <div className="mt-6">
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span className="bg-primary p-4 m-2 text-white">{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
