import React from 'react'
import Tile from './Tile'

function Dashboard() {
    let data=[{
        color: 'primary',
        icon: 'fa-calander',
        title: 'Earnings (Annual)',
        value: '40,000', 
    },
    {
        color: 'success',
        icon: 'fa-dollar-sign',
        title: 'Earnings (Monthly)',
        value: '$215,000',
    },
    {
        color: 'info',
        icon: 'fa-clipboard-list',
        title: 'Tasks',
        value: '50',
        isProgress:true,
    },{

        color: 'warning',
        icon: 'fa-comments',
        title: 'Pending Requests',
        value: '18',
       
    }
]
  return (
    <div className="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div className="row">

                        {
                            data.map((e,i)=>{
                                return <Tile 
                                    color={e.color}
                                    icon={e.icon}
                                    value={e.value}
                                    title={e.title}
                                    isProgress={e.isProgress}
                                    key = {i}/>
                            })
                        }
                    </div>

                    </div>
  )
}

export default Dashboard