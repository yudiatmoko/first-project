import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-black">
      <h1 className="font-bold text-3xl text-cyan-300 text-center">Oops!</h1>
      <p className="my-6 text-xl text-center text-white">
        Sory, an unexpected error has occurred
      </p>
      <p className="text-lg text-center text-white">
        <i>{err.statusText || err.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
