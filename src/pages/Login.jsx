// Login page
export default function Login() {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Login</h1>
      <div className="flex flex-col gap-2 mt-4">
        <input type="email" placeholder="Email" className="p-2 border" />
        <input type="password" placeholder="Password" className="p-2 border" />
        <a href="/" className="p-2 text-center text-white bg-blue-600 rounded">Login</a>
      </div>
    </div>
  );
}