## Requirements
 
i. Build your own API which calls the API at https://bpdts-test-app.herokuapp.com/. 

ii. The API should return:

    a) people who are listed as either living in London; or
    b) whose current coordinates are within 50 miles of London. 


##########################################################################################################################################################################################

## Brief Explanation

This is an additional project to demonstrate my frontend skills to achieve ii-a) and ii-b) in a different way. In this additioanl project, I built a backend-frontend application.
For the backend, I used Ruby on Rails. For the frontend, I used JavaScript.
With this project, the frontend handles all the process to return ii-a) and ii-b). My backend just stores the data available
at https://bpdts-test-app.herokuapp.com/ and hence my API for this project is just a "pass-through" API calling the API at https://bpdts-test-app.herokuapp.com/.

My frontend: https://github.com/Tak2009/frontend_9

My backend: https://github.com/Tak2009/backend_9

1 - How to use my backend API and frontend:

    a. $ rails s to launch the web server (https://github.com/Tak2009/backend_9).
    b. once the server has launched, open http://localhost:3000/london_users and http://localhost:3000/users
       to check if the API is running properly.
    c. $ open index.html in my frontend (https://github.com/Tak2009/frontend_9).

2 - You can find the logic for ii-a) and ii-b) in index.js. Once index.html has been opened, you will see the results for both ii-a) and b) combined in one default list.
You can then select from the drop-down menu 2 further options: those living in London and those living within 50 mi of London. In total, therefore, there are three options to select from. With this frontend, fetch requests happen only at the initial render.
This means that re-rendering the data triggered by option changes is handled by the DOM manipulation.

3 - For testing purposes, I used dummy data (3 records in seed.rd. They are all commented out) to check the accuracy against Google Maps. 
Currently the database includes only the data available at https://bpdts-test-app.herokuapp.com/. If you would like to use the dummy data,
please drop the databases and schema.rb and run the following commands: 

    a. $ rails db:migrate
    b. $ rails db:seed.
