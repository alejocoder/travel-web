import React from 'react'
import { TripData } from './TripData'
import './TripStyles.css'

export const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You Can Use Google Maps to Discover New Destinations</p>

        <div className='tripcard'>
            <TripData
                image='https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                heading='Trip In America'
                text='The United States of America (U.S.A. or USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America.'
            />
            <TripData
                image='https://images.unsplash.com/photo-1548263594-a71ea65a8598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
                heading='Trip In Malaysia'
                text='Malaysia is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions: Peninsular Malaysia and Borneo East Malaysia. '
            />
            <TripData
                image='https://images.unsplash.com/photo-1517751243320-0cc45ec82da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                heading='Trip In France'
                text='France, officially the French Republic, is a country located primarily in Western Europe. It also includes overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans.'
            />
        </div>
    </div>
  )
}
