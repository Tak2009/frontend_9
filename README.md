## Requirements
 
i. build your own API which calls the API at https://bpdts-test-app.herokuapp.com/, 

ii. and returns:

    a) people who are listed as either living in London,
    b) or whose current coordinates are within 50 miles of London. 


##########################################################################################################################################################################################

## Brief Explanation

This is an addtional project to demopnstrate my frontend skills to achive the same objectives. In this project, I built a backend-frontend application.
For the backend, I used again Ruby on Rails. For the frontend, I used JavaScript.
In this additional project, the frontend handles all the process to return ii - a) and ii -b). My backend just stores the data available
at https://bpdts-test-app.herokuapp.com/ and hence my API for this project is just a "pass-through" API calling the API at https://bpdts-test-app.herokuapp.com/.

My frontend: https://github.com/Tak2009/frontend_9
My backend: https://github.com/Tak2009/backend_9

1 - How to use my bnackend API and frontend:

    a. $ rails s to launch the web server (https://github.com/Tak2009/backend_9) then,
    b. once the server has launched, open http://localhost:3000/london_users and http://localhost:3000/users to check if the API is running properly
    c. $ open index.html in my frontend (https://github.com/Tak2009/frontend_9)

2 - You can find the logic for ii-a) and ii-b) in index.js. Once index.html has been opened, you will see the result for both ii - a) and b).
You can choose 2 other options: Living in London and Living Within 50 mi of London. For example, if you would like to see only people living in London,
choose "Living in London" then click "Check" button. With this frontend, fetch requests happend only at the initial render.
This means that re-rendering the data triggered by option changes is handled by the DOM manipulation.

3 - For testing purposes, I used dummy data (3 records in seed.rd. They are all commented out) to check the accuracy against Google Maps. 
Currently the database includes only the data available at https://bpdts-test-app.herokuapp.com/. If you would like to use the dummy data,
please drop the databases and schema.rb then: 

    a. $ rails db:migrate then,
    b. $ rails db:seed.

