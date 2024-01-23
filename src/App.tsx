import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Feed />,
      },
      {
        path: "/video/:id",
        element: <VideoDetail />,
      },
      {
        path: "/channel/:id",
        element: <ChannelDetail />,
      },
      {
        path: "/search/:searchTerm",
        element: <SearchFeed />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
