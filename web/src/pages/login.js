export default function Login() {
    return (
      <div className="flex justify-center items-center h-screen">
        <form className="bg-white p-6 rounded shadow-md w-80">
          <h2 className="text-2xl mb-4 text-center">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
        </form>
      </div>
    );
  }
  