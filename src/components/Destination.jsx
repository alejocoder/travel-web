import React from "react";
import './DestinationStyle.css'

export const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the chance to know the place in a short time</p>

      <div className="first-des">
        <div className="des-text">
          <h2>Taal Volcano, Batangas</h2>
          <p>
            Taal volcano with its lake-filled 15x20 km wide Talisay (Taal)
            caldera is a beautiful caldera volcano, but also one of the most
            active and dangerous volcanoes of the Philippines. Taal has had some
            of the country's largest and deadliest eruptions: At least 6
            eruptions during the recorded history of Taal since 1572 claimed
            fatalities, mostly from powerful pyroclastic flows, as well as
            tsunamis produced in the crater lake. The Taal caldera is largely
            filled by Lake Taal, whose 267 sq km surface lies only 3 m above sea
            level. The maximum depth of the lake is 160 m, and contains several
            eruptive centers submerged beneath the lake. All historic eruptions
            took place from the 5-km-wide volcanic island in the
            northern-central part of the lake.
          </p>
        </div>

        <div className="image">
            <img 
                alt="image" 
                src="https://images.unsplash.com/photo-1581888517319-570283943d82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                ></img>
                <img 
                alt="image" 
                src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                ></img>
        </div>
      </div>
    </div>
  );
};
