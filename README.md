# MVC-tech-blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)
## Description

To manage blogposts about different topics, and allow users to comment and create users on the site. dating the posts and comments. This helped me bring together a basic tech stack with some packages added. Auth is required to post blogposts and comments. View some of our topics on the site when you have time! 

## Table of Contents 

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## User Story
AS A developer who writes about tech  
I WANT a CMS-style blog site  
SO THAT I can publish articles, blog posts, and my thoughts and opinions  

## Acceptance Acriteria  
GIVEN a CMS-style blog site  
WHEN I visit the site for the first time  
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in  
WHEN I click on the homepage option  
THEN I am taken to the homepage  
WHEN I click on any other links in the navigation  
THEN I am prompted to either sign up or sign in  
WHEN I choose to sign up  
THEN I am prompted to create a username and password  
WHEN I click on the sign-up button   
THEN my user credentials are saved and I am logged into the site  
WHEN I revisit the site at a later time and choose to sign in  
THEN I am prompted to enter my username and password  
WHEN I am signed in to the site  
THEN I see navigation links for the homepage, the dashboard, and the option to log out  
WHEN I click on the homepage option in the navigation  
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created  
WHEN I click on an existing blog post  
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment  
WHEN I enter a comment and click on the submit button while signed in  
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created  
WHEN I click on the dashboard option in the navigation  
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post  
WHEN I click on the button to add a new blog post  
THEN I am prompted to enter both a title and contents for my blog post  
WHEN I click on the button to create a new blog post  
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post  
WHEN I click on one of my existing posts in the dashboard  
THEN I am able to delete or update my post and taken back to an updated dashboard  
WHEN I click on the logout option in the navigation  
THEN I am signed out of the site  
WHEN I am idle on the site for more than a set time  
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts  


## Installation

MySQL - MAC --  
  brew install mysql  
  The server is set up without a default root password. You can connect to it using the following command:  
  mysql -u root  
  Important: You should change the root password after you install MySQL Server. You can do this with the following command:  
  mysql_secure_installation  
    
MySQL - PC --
  MySQL https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/   
  PC users: if you get the error “command not found” please refer to the SQL documentation on customizing the PATH   
  https://dev.mysql.com/doc/mysql-windows-excerpt/5.7/en/mysql-installation-windows-path.html  
  Install MySQL Shell
  https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-getting-started.html
  
  
Node.js - Verison 16.18.0
  [DownloadLinks](https://nodejs.org/download/release/v16.18.0/)
  Install Node.js
  
Clone Repo - git clone git@github.com:KevinRhode/MVC-tech-blog.git

In Git Terminal - navigate to the file location of server.js  
  run : npm install
  Now Rename .env.EXAMPLE to .env after inputing required info

## Usage

To run the application use: npm start  

after which your localhost should now have it running on PORT 3001

[Deployed Application](https://mvc-tech-blog-kevinrhode.herokuapp.com/)  
[Application Repo](https://github.com/KevinRhode/MVC-tech-blog)

## Credits

https://developer.mozilla.org/en-US/docs/Web/JavaScript

https://sequelize.org/

[Erin Keller](https://github.com/erin-m-keller)  
 Help me Fix Issue with Sequelize Table Association on Inculding User on Comments

## License

MIT License

Copyright (c) 2023 Kevin Rhode