import { useNavigate } from 'react-router';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-9xl font-extrabold text-gray-300">404</h1>
      <p className="mt-4 text-2xl font-semibold text-gray-700 md:text-3xl">
        Oops! Page not found.
      </p>
      <p className="mt-2 max-w-md text-center text-gray-500">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 rounded-lg bg-[#372aac] px-6 py-3 font-semibold text-white shadow transition hover:bg-blue-700"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default Error;
