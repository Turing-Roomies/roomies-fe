# Roomies

### Table of Contents
- [Roomies](#roomies)
    - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
      - [Home Page / Login](#home-page--login)
      - [Dashboard](#dashboard)
      - [Request Contact](#request-contact)
      - [Connections](#connections)
      - [Logout](#logout)
  - [Learning Goals](#learning-goals)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Setup Instructions](#setup-instructions)
      - [For viewing the application:](#for-viewing-the-application)
      - [For testing the application:](#for-testing-the-application)
  - [Future Iterations](#future-iterations)
  - [Credits](#credits)
      - [Authors](#authors)
      - [Project Managers](#project-managers)
        - [2021/07/21](#20210721)

## Overview
#### Home Page / Login
Users can log in to their account, which will reveal more navigation links.    
![](https://media.giphy.com/media/lhpw1UqL9P27SKD5rw/giphy.gif)

#### Dashboard
When a user is logged in, their dashboard view will display other users and the various stages of contact with the logged in user.  
![](https://media.giphy.com/media/myRMMGMw6P3e64VInL/giphy.gif)

#### Request Contact
A logged in user can request contact with a roomie.  When that roomie next logs in, they will be able to accept or decline that request.  If they accept, the roomie's email address will appear for the original user so they may now contact that roomie directly.  
![](https://media.giphy.com/media/koh9nnbxqh57qvoShm/giphy.gif)

#### Connections
The Connections view only displays roomies that the current user is in the process of connecting with.  
![](https://media.giphy.com/media/ScNTDZ57uz3AltR9N1/giphy.gif)

#### Logout
Users have the ability to log out, which will route them back to the sign in page.  Users still have the availabity to see roomies on the dashboard view, but will not be able to request contact with anyone.  
![](https://media.giphy.com/media/A8qGN2zdFxhVnUWIN8/giphy.gif)


- Deployed [LINK](https://turing-roomies.herokuapp.com/)
- Project Spec [LINK](https://mod4.turing.edu/projects/capstone/)

## Learning Goals
- Use an agile process to turn well defined requirements into deployed and production ready software
- Practice an advanced, professional git workflow using Git Rebase
- Gain experience using continuous integration tools to build and automate the deployment of features
- Build applications that execute in development, test, CI, and production environments
- Focus on communication between front-end and back-end teams in order to complete and deploy features


## Features


## Technologies Used
* ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)

* ![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

* ![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

* ![Cypress](https://img.shields.io/badge/cypress-04C38E.svg?&style=for-the-badge&logo=cypress&logoColor=white)

* ![TravisCI](https://img.shields.io/badge/-Travis_CI-D9D192?logo=travis-ci&logoColor=C63148&style=for-the-badge)

## Setup Instructions
#### For viewing the application:
1. Open your terminal and access the directory you want to place this project in
2. Run `$git clone git@github.com:Turing-Roomies/roomies-fe.git` to clone the repo
3. `cd` into the root directory of the project
4. Run `$npm i` to install dependencies
5. Run `$npm start` to start the web server
6. If a browser window does not automatically open, open your web browser and navigate to `http://localhost:3000` to access the application

#### For testing the application:
After completing the steps above to clone the repo:  
1. Run `$npm run cypress` to open the Cypress testing GUI
2. Click on an integration test and allow the test to run

## Future Iterations
- Add a messenger platform so potentials roomies can message each other through the app
- Add a profile view to display additional information when a roomie's card is clicked
- Gather more information about each roomies, like hobbies, budget, job, and more
- Allow new users to create an account
- Add filter feature so users can filter roomies by certain criteria
- Allow users to add profile picture
- Allow users to customize profile with background photo

## Credits
#### Authors
<table>
  <tr>
    <td>Andrew Carlin <a href="https://github.com/AndieDrew">GH <a href="https://www.linkedin.com/in/andrewrcarlin/"><img src="https://img.shields.io/badge/-0e76a8?style=flat-square&logo=Linkedin&logoColor=white"></a></td>
    <td>Michann Stoner <a href="https://github.com/michannstoner">GH <a href="https://www.linkedin.com/in/michann-stoner/"><img src="https://img.shields.io/badge/-0e76a8?style=flat-square&logo=Linkedin&logoColor=white"></a></td>
    <td>Sarah Lane <a href="https://github.com/sarahlane8">GH <a href="https://www.linkedin.com/in/sarahlane8/"><img src="https://img.shields.io/badge/-0e76a8?style=flat-square&logo=Linkedin&logoColor=white"></a></td>
  </tr>
  <td>
     <img src="https://avatars.githubusercontent.com/u/27929330?v=4" alt="Andrew's' GH img"
     width="150" height="auto" />
  </td>  
  <td>
    <img src="https://avatars.githubusercontent.com/u/76269802?v=4" alt="Michann"
    width="150" height="auto" />
  </td>
  <td>
    <img width="150" height="auto" src="https://user-images.githubusercontent.com/70901622/120944450-cafe1800-c6f1-11eb-96f2-5e18fdb2a96e.png" alt="Sarah's GH img">
  </td>
</table>
<table>
  <tr>
    <td>Dustin Harbaugh <a href="https://github.com/Thee-Dust">GH <a href="https://www.linkedin.com/in/dustin-harbaugh/"><img src="https://img.shields.io/badge/-0e76a8?style=flat-square&logo=Linkedin&logoColor=white"></a></td>
    <td>Wyatt Wicks <a href="https://github.com/Wyattwicks">GH <a href="https://www.linkedin.com/in/wyattwicks/"><img src="https://img.shields.io/badge/-0e76a8?style=flat-square&logo=Linkedin&logoColor=white"></a></td>
    <td>Harrison Blake <a href="https://github.com/harrison-blake">GH <a href="https://www.linkedin.com/in/harrison-blake-802094200/"><img src="https://img.shields.io/badge/-0e76a8?style=flat-square&logo=Linkedin&logoColor=white"></a></td>
  </tr>
  <td>
     <img src="https://avatars.githubusercontent.com/u/75390410?v=4" alt="Dustin's GH img"
  width="150" height="auto" />
  </td>  
  <td>
    <img src="https://avatars.githubusercontent.com/u/74991865?v=4" alt="Wyatt's GH img"
    width="150" height="auto" />
  </td>
  <td>
    <img width="150" height="auto" src="https://avatars.githubusercontent.com/u/72946334?v=4" alt="Harrison's GH img">
  </td>
</table>

#### Project Managers
<table>
  <tr>
    <td> Travis <a href="https://github.com/Kalikoze">GH</td>
    <td> Dione <a href="https://github.com/dionew1r">GH</td>
  </tr>
  <td>
    <img src="https://avatars.githubusercontent.com/u/25714149?v=4" alt="Travis's GH img"
 width="150" height="auto" />
 </td>
  <td>
    <img src="https://avatars.githubusercontent.com/u/22304676?v=4" alt="Dione's GH img"
 width="150" height="auto" />
 </td>
</table>

**************************************************************************
This project was created for [Turing School of Software and Design](https://turing.io/)
##### 2021/07/21
**[Back to top](#table-of-contents)**
