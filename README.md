#Introduction

Today we are going to be building a queue app similar to the one we use during class. Instead of a Firebase backend though, we will be using Parse. 

Parse is good because it encourages us to create a RESTful API. We will learn how to make the 4 HTTP requests with AgularJS:

<ul>
	<li>GET - retrieve data</li>
	<li>POST - create data</li>
	<li>PUT - edit data</li>
	<li>DELETE - delete data</li>
</ul>

#Step 1 - Set Up Application

The first thing we need to do is create and link all of our files. ** The AngularJS CDN is already loaded into the app, no need to look for outside code. **

<ul>
	<li>Create MainController.js in the *controllers* folder and link it in the index</li>
	<li>Create parseService.js in the *services* folder and link it in the index</li>
	<li>Link the main.css file in the index</li>
	<li>Link the app.js file in the index</li>
</ul>

We next want to ensure angular is working correctly.

#Step 2 - Creating Questions

We will begin by making it possible to create questions, primarily because this is the most important feature of our queue. 

Let's start with just the view and controller. We want to ensure our users can make questions before we worry about writing them to the database. 

<ul>
	<li></li>
	<li>Create an input field in the index</li>
</ul>

