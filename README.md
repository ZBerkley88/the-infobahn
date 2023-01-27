# the-infobahn

GIVEN a social network API

WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
<!-- set up server.js to connect to mongodb -->
<!-- build models: User, Thought, Reaction -->

WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
<!-- set up relations between different models -->
<!-- user has many thoughts and reactions, etc. -->

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
<!-- write CRUD routes -->
<!-- home routes, user routes, thoughts routes, reaction routes, friends routes-->

WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
<!-- write CRUD routes -->
<!-- routes to delete reactions and thoughts and add/remove friends -->