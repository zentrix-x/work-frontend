// Login page
export default function Login() {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Login</h1>
      <form className="flex flex-col gap-2 mt-4">
        <input type="email" placeholder="Email" className="border p-2" />
        <input type="password" placeholder="Password" className="border p-2" />
        <button className="bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}