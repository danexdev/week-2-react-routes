import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Main" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title"> Main </div>
          <Link to="/dashboard/profile/cddecdd3-7a43-480a-a9d7-118968c97894">Go To Profile</Link>
          <div>
            <Link to="/dashboard">Go To Root</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
