import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { About, Cocktail, Contact, Error, HomeLayout, Landing, SinglePageError } from './pages/index'

import { QueryClient, QueryClientProvider } from 'react-query'
import { loader as cocktailLoader } from './pages/Cocktail'
import { action as contactAction } from './pages/Contact'
import { loader as landingLoader } from './pages/Landing'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10
    }
  }
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: '/cocktail/:id',
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: cocktailLoader(queryClient),

      },
      {
        path: 'contact',
        element: <Contact />,
        action: contactAction
      }
    ]
  }

])
function App() {

  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
}

export default App
