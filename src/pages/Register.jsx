// Register page
export default function Register() {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Register</h1>
      <form className="flex flex-col gap-2 mt-4">
        <input type="email" placeholder="Email" className="border p-2" />
        <input type="password" placeholder="Password" className="border p-2" />
        <button className="bg-green-600 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}