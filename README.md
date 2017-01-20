[ ![Codeship Status for ptlergo/musicem-app](https://app.codeship.com/projects/551fb7f0-90df-0134-b06b-5aeda33c2226/status?branch=master)](https://app.codeship.com/projects/185819)
# musicem-app(v1.0.0-alpha)
Music Curating App Built Using MEAN Stack. Firebase auth for facebook login. Deployed to google cloud server: [https://musicem-cd810.appspot.com](https://musicem-cd810.appspot.com)

#INSTALL
Install all node package dependencies
```
npm install
```

Install nodemon globally to continuously monitor the server
```
npm install -g nodemon
```

Install mocha globally to test the app
```
npm install -g mocha
```

Install gulp globally to run app tasks
```
npm install --global gulp-cli
```

##BOWER
Install bower globally
```
npm install -g bower
```

Install bower components for client side
```
bower install
```

##BROWSER SYNC
Install browser sync globally
```
npm install -g browser-sync
```

##GULP TASKS
Default gulp task to start server, watch sass, and run browsersync
```
gulp
```

run server using nodemon
```
gulp nodemon
```

compile sass files once
```
gulp sass
```

watch sass files
```
gulp watch
```

run browser-sync
```
gulp browser-sync
```

#UNIT TEST
Run mocha test for app.
```
npm test
```

#CONFIGURE
Configure .env file for database. Here are some acceptable sample environment variables
```
DB_NAME=DatabaseSample
DB_USER=user
DB_PASS=password
DB_HOST=localhost
DB_PORT=0000
```

#RUN
After running app. visit it from the default port at: [http://localhost:3000](http://localhost:3000)
```
npm start
```
or

```
npm monitor
```
