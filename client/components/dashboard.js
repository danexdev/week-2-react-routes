import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Dashboard" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title"> Dashboard </div>
          <Link to="/dashboard/profile/cddecdd3-7a43-480a-a9d7-118968c97894">Go To Profile</Link>
          <div>
            <Link to="/dashboard/main">Go To Main</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
