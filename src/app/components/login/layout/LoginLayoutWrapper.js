export default function LoginLayoutWrapper({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        {children}
      </div>
    </div>
  );
}
