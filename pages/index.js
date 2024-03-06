import React, { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const predefinedCredentials = [
    { userId: "user1", password: "password1" },
    { userId: "user2", password: "password2" },
    { userId: "user3", password: "password3" },
    { userId: "user4", password: "password4" },
  ];

  const handleLogin = async () => {
    setLoading(true);

    try {
      const isValidCredentials = predefinedCredentials.some(
        (cred) => cred.userId === userId && cred.password === password
      );

      if (isValidCredentials) {
        setLoginStatus("Success! Redirecting...");

        // Use the Next.js router for navigation
        await router.push("/dashboard");
      } else {
        setLoginStatus("Incorrect credentials. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-light">
      <div className="p-8 max-w-md w-full bg-light rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-800">Login</h2>

        <div className="mb-4">
          <label
            htmlFor="userId"
            className="block text-sm font-medium text-gray-600"
          >
            User ID
          </label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500 bg-light"
            placeholder="Enter your user ID"
            aria-label="User ID"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500 bg-light"
            placeholder="Enter your password"
            aria-label="Password"
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className={`bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
        >
          {loading ? "Logging In..." : "Login"}
        </button>

        {loginStatus && (
          <p className={`mt-4 ${loading ? "text-gray-600" : "text-red-600"}`}>
            {loginStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
