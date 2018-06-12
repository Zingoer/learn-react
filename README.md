# Learn react in docker container!
With this project, you don't need to install npm or any other dependencies in your computer. The only thing you need to install is DOCKER!

This project only best support Linux/Mac OS.

# Start
1. Clone the project in local. 
2. Using helper script action 4 to interact with node container and go back to learn-react directory
3. Using create-react-app to generate the default react app
    https://github.com/facebook/create-react-app
4. Change the Dockerfile to the new created app folder
5. Using helper script action 1 to create the new image
6. Running the new created image and hit localhost:3000
7. Now you can start on your dev new journey!

>BTW, I usually add unused project in .dockerignore to reduce the amount of data sending to docker image