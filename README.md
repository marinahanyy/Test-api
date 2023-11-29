# Test-api
Introduction This project focuses on automating tests for the My Store website using NightwatchJS for UI testing and supertest for API testing. The tests cover the Contact Us page, homepage search, and API routes from the mock-user-auth module.

Prerequisites Node.js and npm installed. NightwatchJS, supertest, and other dependencies installed. You can install them using npm install. Web browser installed (for UI testing). Project Structure tests/ : Contains NightwatchJS UI tests. contactUs.js : Tests for the Contact Us page. homepageSearch.js : Tests for the homepage search functionality. api_testing/ : Contains supertest API tests. test.spec.js : Tests for the mock-user-auth module.

Instructions

1.Clone the Repository: git clone <repository_url> cd <project_directory>

2.Install Dependencies: npm install

Documentation There is a folder in each part of the project that contains documentation which includes

HTML report
Bug report
Test cases report
I want to add something here that if we commented the delete api for user and users the ci/cd will pass as if we put them all together they are delelting and creating user at the same time so if fails. I test each one individually and the test pass also i tested them on postman.
CircleCI badge
[![CircleCI](https://circleci.com/gh/marinahanyy/Test-api.svg?style=svg)](https://circleci.com/gh/marinahanyy/Test-api)
