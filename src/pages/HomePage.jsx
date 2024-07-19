import React from 'react'
import Hero from '../Components/Hero'
import HomeCards from '../Components/HomeCards'
import JobListings from '../Components/JobListings'
import ViewJobs from '../Components/ViewJobs'

function HomePage() {
  return (
    <>
    <Hero title="Become a react develoer" subtitle="Find a react job with your skills "/>
    <HomeCards />
    <JobListings isHome={true}/>
    <ViewJobs />

    </>
  
  )
}

export default HomePage