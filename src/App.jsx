import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/TransactionPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transaction",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
  );
};

export default App;
