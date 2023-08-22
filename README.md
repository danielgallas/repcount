## TO DO LIST:

- Investigate: why is calculatePoints not working (it calculate different values each time)

DONE:

- Find a way to load the last seven days data in the frontend
- Find a way to store only today's data in mongoDB (by looking up date from data that is coming in from the frontend)
- Frontend: in FINALSUBMIT, write a function that getsData with today's history and checks if such package exists
- If data does not exists, it creates one (post)
- If data exists, it updates (patch) the package
- Develop the right schema for mongoose (find the right date format)
- Start storing info in mongoDB
- Backend: create getOneData (post)
- Backend: update (patch) routes, components
