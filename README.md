# ** MEAN BOILERPLATE **
# MEAN (Mongodb, Express, Angular, Node)

# How to use

1. Download as zip file or clone it directly by running in the terminal => git clone https://github.com/azrin640/mean_boilerplate.git

2. cd into the extracted directory 

3. Install mongodb community edition into your pc or localhost according  to step listed on => https://docs.mongodb.com/manual/administration/install-community/

4. Run mongodb in the terminal with => sudo service mongod start

5. Run npm install to install dependencies => npm install

# Development 
1. For Development run the below listed

#   
    i. start express server on localhost port 7777 by running => nodemon start-dev

#
    ii. start angular development on localhost port 4200 by running => ng serve

2. API routes is located at server/routes/api

3. Angular is located at src/app

# Production
1. For production, run ng build to compile angular code from development to /dist folder, use => ng build

2. Start production server by running => node start


# ** Angular Readme below this line (can read if you want to) **

# Boilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
