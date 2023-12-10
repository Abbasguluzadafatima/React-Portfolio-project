import { createBrowserRouter} from 'react-router-dom';

import { About, Contact, Education, Experience, Feedback, Home, Inner, NotFound, Portfolio, Skill } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/inner',
    element: <Inner />,
    children:[
      {
        path:'/inner/about',
        element: <About/>,
      },
      {
        path:'/inner/contact',
        element: <Contact/>,
      },
      {
        path:'/inner/education',
        element: <Education/>,
      },
      {
        path:'/inner/experience',
        element: <Experience/>,
      },
      {
        path:'/inner/skill',
        element: <Skill/>,
      },
      {
        path:'/inner/feedback',
        element: <Feedback/>,
      },
      {
        path:'/inner/portfolio',
        element: <Portfolio/>,
      },
    ]
  },
  {
    path: '/*',
    element: <NotFound />,
  },
  
]);