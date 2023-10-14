import React from 'react'

type Props = {}

const DashboardPage = (props: Props) => {
  return (
    <>
        <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
        <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-700">Welcome to your dashboard!</p>
        </div>
    </>
  )
}

export default DashboardPage