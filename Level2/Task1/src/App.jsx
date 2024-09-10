import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import Job from "./pages/Job";
import MyJobs from "./pages/MyJobs";
import PostJob from "./pages/PostJob";
import SavedJobs from "./pages/SavedJobs";
import { ThemeProvider } from "./components/theme-provider";

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path: "/",
        element:<LandingPage/>
      },
      {
        path: "/onboarding",
        element:<Onboarding/>
      },
      {
        path: "/job/:id",
        element:<Job/>
      },
      {
        path: "/jobs",
        element:<MyJobs/>
      },
      {
        path: "/post-job",
        element:<PostJob/>
      },
      {
        path: "/saved-job",
        element:<SavedJobs/>
      },
      {
        path: "/my-jobs",
        element:<MyJobs/>
      }
    ]
  }
])
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
