import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-600">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center items-center p-6 bg-gray-100 min-h-screen">
      {data.map((listData) => (
        <div
          key={listData.id}
          className="flex flex-col text-center w-64 h-80 m-4 rounded-lg bg-white shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <h1 className="text-xl font-bold text-gray-800 mb-2">
            {listData.userId}: {listData.title}
          </h1>
          <p className="text-gray-600">{listData.body}</p>
        </div>
      ))}
    </div>
  );
}
