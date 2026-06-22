import React from 'react'

function DashboardCard(props) {
    return (
        <div className="card">
            <div className="card-body text-center">
                <h5>{props.heading}</h5>
                <h5>{props.count}</h5>
            </div>
        </div>
    )
}

export default DashboardCard