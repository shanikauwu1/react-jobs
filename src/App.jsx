import {Route,createBrowserRouter,createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage';
import MainLayouts from './layouts/MainLayouts';
import JobPages from './pages/JobPages';
import NotFoundPage from './pages/NotFoundPage';
import JobPage,{jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';


const App = () => {

  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  const router1= createBrowserRouter(
    createRoutesFromElements(
    < Route path="/" element={< MainLayouts/>} >
    < Route index element={<HomePage/>}  />
    < Route path="/jobs" element={<JobPages/>}  />
    < Route path="/add-job" element={<AddJobPage  addJobSubmit={addJob} />}  />
    < Route path="/jobs/:id" element={<JobPage/>} loader={jobLoader} />
    < Route path="*" element={<NotFoundPage/>}  />
    </Route>
    ) );
   return (
    <RouterProvider router={router1} />
   
  )
}

export default App