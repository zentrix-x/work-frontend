import { Link } from "react-router-dom";

// Register page
export default function Register() {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Register</h1>
      <div className="flex flex-col gap-2 mt-4">
        <input type="email" placeholder="Email" className="p-2 border" />
        <input type="password" placeholder="Password" className="p-2 border" />
        <Link to="/login" className="p-2 text-center text-white bg-green-600 rounded">
          Register
        </Link>
      </div>
    </div>
  );
}