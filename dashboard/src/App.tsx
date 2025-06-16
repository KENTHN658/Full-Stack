import CreateRouteForm from './component/CreateRouteForm';
import './index.css'
import "tailwindcss";
export default function App() {
  return (
    <div className="text-2xl text-pink-500 font-bold">
      Hello Tailwind!
      <CreateRouteForm />
      <div className="text-blue-500">This is a blue text.</div>
      <div className="bg-green-500 text-white p-4 rounded-lg">
        This is a green box with white text.  
      </div>
    </div>
  );
}