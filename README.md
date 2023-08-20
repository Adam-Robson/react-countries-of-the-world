# Countries of the World

## Features

The API uses the 2 character ISO code to identify countries, which are saved in the `iso2` column of the database, to display every country's flag in the world, in a searchable format.

## Identify State

The fetchCountries function in the services folder gets the list of countries from Supabase.

A loading state has been added to the project.

I used the network tab to examine (and debug) the requests being sent to a server and the response received from a server.

The async/await pattern was used to get the list of countries & query that data using the Supabase Javascript client.

I used `useEffect` to display the data (the list of countries). The useEffect uses try/catch block to display an error when the API call fails. The useEffect hook has a dependency array which retrieves data when a component first mounts. On load, the useEffect displays a list of countries.

Users see a list of all the countries of the world with their flag. 

Allows users to query by country name, allows users to sort by name, filter by continent.

Uses the flagpedia API to load each country's flag.

Uses useState to manage component state.

I moved useEffect & useState to the useCountries hook component.

## Acknowledgements

Note: if two siblings need the same state you need a callback

We appreciate backlink to <https://flagpedia.net>

This project was bootstrapped with [Create React App] (<https://github.com/facebook/create-react-app>).
