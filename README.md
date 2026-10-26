Clinic Appointment & Patient Management System

Project Overview

The Clinic Appointment & Patient Management System is a web-based application designed to help patients book and manage clinic appointments. It provides a simple interface for accessing appointment information and managing bookings.

Problem Statement

Managing clinic appointments manually can be time-consuming and may lead to scheduling errors, missed records, and difficulties tracking appointments.

Proposed Solution

This project provides a user-friendly website that allows patients to book appointments and enables appointment information to be retrieved, displayed, updated, and deleted through API operations.

Project Objectives

* Provide a clear and user-friendly clinic website.
* Allow users to book appointments.
* Display saved appointment information.
* Support creating, reading, updating, and deleting appointment records.
* Validate appointment dates to prevent selecting past dates.
* Integrate JavaScript with an API and JSON Server.
* Use automated tests to improve code reliability.

Technologies Used

* HTML5
* CSS3
* JavaScript (ES Modules)
* JSON Server
* Vitest
* V8 test coverage
* Git and GitHub

Features

* Multi-page clinic website.
* Appointment booking form.
* Appointment date validation.
* Appointment listing and empty-state message.
* Appointment deletion.
* API integration and error handling.
* Automated JavaScript tests.

Installation and Setup

1. Clone this repository.
2. Open the project folder in your terminal.
3. Install the project dependencies:

npm install

4. Start JSON Server using the command configured in package.json.
5. Open the website using your development server or the setup documented in the project.

API Endpoints

The following REST operations are intended for the appointments resource. Confirm the resource path and port against your actual JSON Server configuration.

Method	Purpose
GET	Retrieve appointments
POST	Create an appointment
PUT	Replace an existing appointment
PATCH	Update selected appointment fields
DELETE	Delete an appointment

Testing

Run the automated tests:

npm test

Run tests with coverage:

npx vitest run --coverage

Latest verified results:

* 9 tests passed across 2 test files.
* 74.75% statement coverage.
* 62.96% branch coverage.
* 100% function coverage.

Deployment

Deployment URL:    

"https://ridhwan-dev.github.io/Clinic-Appointment-System/"

Project Management

Development is tracked using Git and GitHub, including feature branches, pull requests, commits, and a GitHub Project Board.

Future Improvements

* Improve appointment editing workflows.
* Add authentication and appropriate access controls.
* Improve appointment scheduling and feedback.
* Integrate a secure production backend if the application is developed for real clinical use.
License

This project is distributed under the MIT License. See the LICENSE file for details.


Figma wireframe link 
"https://www.figma.com/design/F5cupmNqwU6UKEeQFv6SAZ/Untitled?node-id=3-1362&t=E5uo0lhBFZjBfR6i-1"