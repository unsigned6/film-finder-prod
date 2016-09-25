# film-finder-prod
Single Page Film Library using ReactJS and MongoDB
deployed on Heroku with mLab: https://films-finder.herokuapp.com/
## start instructions:
1. clone reposetory / download zip
2. install on your system gulp 
   npm install gulp
3. install needed node modules. in root onf project directory run:
   npm install
4. in roject root directory run gulp:
   gulp
4. using mLab Mongo database just run:
   npm start
5. open in your browser:
   http://localhost:7777/index.html
## local instance on MongoDB
By default app is connected to MongoDB deployed on https://mlab.com/.
If for some reason mLab db will not be accessable you can run local mongod.
1. For this cooment in /server/server.js 21 line containing
    mongoose.connect("mongodb://admin:s0_s3cr3t@ds023435.mlab.com:23435/film-finder");
   Uncomment 20 line containing:
    mongoose.connect("mongodb://localhost/filmfinder");
2. Run in project root directory:
    sudo mongod --dbpath server/data/ --nojournal
