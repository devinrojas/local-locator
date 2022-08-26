# Local Locator

Welcome! Local Locator is an app i created to help users find and create venues that are hosting video game competitions arouind their area. 

#### https://locallocator.herokuapp.com/
<br/>
Not only is Local Locator my first solo project, but it's also a passion project I've had in mind for years. I love playing games like Street Fighter and Mortal Kombat in my spare time. Traving around the world and meeting others with the same interest as me brings me so much joy in life. Sadly, unless you are in private social media groups, know someone in the know, outdated spreadsheets, or go through countless threads trying to find a event in your area, it's pretty hard to do. That's why Local Locator exists. To be a one-stop and very easy way for others to find local events near you!
<br/>
Other than Rails, React JS, and Foundation CSS, Local Locator uses the Google Maps API to help users see the exact location of the venue being hosted. In the future, I plan to use the Google Autofill API, and a Twitch API for users to get more information about a game.

### Getting Started

* Clone the repository to your machine in your terminal with the following:
      
       `$ git clone "**repository link goes here**"`
      
* Run these command lines in your terminal after you have cloned the repo:

      `$ bundle install`      
      `$ yarn install`

* Create a database and run the migrations:

      `$ rails db:create`  
      `$ rails db:migrate`
      
* Start the rails server and webpack server with the following:

      `$ rails s`   
      `$ yarn start`

* In your web browser, go to `localhost:3000` and enjoy!

### Frameworks, libraries, gems, and API

* [Devise](https://github.com/plataformatec/devise) - User authentication
* [Foundation](https://foundation.zurb.com/) - CSS Framework
* [FontAwesome](https://fontawesome.com/) - Icons
* [MakeItSo](https://github.com/LaunchAcademy/make_it_so) - Ruby gem for quick project set-up
* [Moment.js](https://momentjs.com/) - Parse, manipulate and display times in JavaScript
* [GoogleMaps API](https://mapsplatform.google.com/) - React Library for rendering Google Charts

### In the future
* Giving every venue a comments section for users to interact. replies to those comments and a upvote/downvote feature on every comment will be a must as well!
* Adding friends and having the ability to private message the user.
* Autofill and Twitch API intergration
* A page to help newcomers find resources, guides, and videos to get into the Fighting Game Community and their local scene.
* ...and much more! This is a project I plan on working on throughout my whole coding career

