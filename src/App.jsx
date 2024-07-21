import {Route,createBrowserRouter,createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayouts from './layouts/MainLayouts';
import JobPages from './pages/JobPages';
import NotFoundPage from './pages/NotFoundPage';
import JobPage,{jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


const App = () => {
 // add a job
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

  // delete a job

  const deleteJob =async (id) =>{
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      });
      return;
  }
 
  // Edit job
  const editJob =async (job) =>{
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
}

  const router1= createBrowserRouter(
    createRoutesFromElements(
    < Route path="/" element={< MainLayouts/>} >
    < Route index element={<HomePage/>}  />
    < Route path="/jobs" element={<JobPages/>}  />
    < Route path="/add-job" element={<AddJobPage  addJobSubmit={addJob} />}  />
    < Route path="/edit-job/:id" element={< EditJobPage ediJob={editJob} />}  loader={jobLoader} />
    < Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
    < Route path="*" element={<NotFoundPage/>}  />
    </Route>
    ) );
   return (
    <RouterProvider router={router1} />
   
  )
}

export default App