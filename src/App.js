import { RouterProvider } from "react-router-dom";
import './App.css';
import { Toaster } from 'react-hot-toast';
import { router } from "./Commponts/Route/Route";
function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <Toaster />
      </RouterProvider>
      
    </div>
  );
}

export default App;
