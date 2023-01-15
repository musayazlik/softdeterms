import { getSession } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard

export const getServerSideProps = async (context: any) => {
  const { req, res } = context

  const session = await getSession({ req })

  if (!session) {
    res.writeHead(302, {
      Location: '/sign-in',
    })
    res.end()
    return {
      props: {},
    }
  }

  return {
    props: {
      session,
    },
  }
}
