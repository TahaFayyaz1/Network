
<h1>Network</h1>
Project 4 for CS50’s Web Programming with Python and JavaScript.
<h2>Overview</h2>
A Twitter-like social network website for making posts and following users.
<h2>Specification</h2>
The project completes the following requirements:
<ul>
  <li><strong>New Post: </strong>Users who are signed in should be able to write a new text-based post by filling in text into a text area and then clicking a button to submit the post.</li></li>
     <li><strong>All Posts: </strong>
     The “All Posts” link in the navigation bar should take the user to a page where they can see all posts from all users, with the most recent posts first.<ul><li>Each post should include the username of the poster, the post content itself, the date and time at which the post was made, and the number of “likes” the post has (this will be 0 for all posts until you implement the ability to “like” a post later).</li></ul></li>
     <li><strong>Profile Page: </strong>
     Clicking on a username should load that user’s profile page. This page should:<ul><li>Display the number of followers the user has, as well as the number of people that the user follows.</li><li>Display all of the posts for that user, in reverse chronological order.</li><li>For any other user who is signed in, this page should also display a “Follow” or “Unfollow” button that will let the current user toggle whether or not they are following this user’s posts. Note that this only applies to any “other” user: a user should not be able to follow themselves.</li></ul></li>
     <li><strong>Following: </strong>
     The “Following” link in the navigation bar should take the user to a page where they see all posts made by users that the current user follows.
     <ul>
       <li>This page should behave just as the “All Posts” page does, just with a more limited set of posts.</li>
       <li>This page should only be available to users who are signed in.</li>
     </ul>
     </li>
  <li><strong>Pagination: </strong>
     On any page that displays posts, posts should only be displayed 10 on a page. If there are more than ten posts, a “Next” button should appear to take the user to the next page of posts (which should be older than the current page of posts). If not on the first page, a “Previous” button should appear to take the user to the previous page of posts as well.</li>
  <li><strong>Edit Post: </strong>Users should be able to click an “Edit” button or link on any of their own posts to edit that post.</li>
  <ul>
    <li>When a user clicks “Edit” for one of their own posts, the content of their post should be replaced with a textarea where the user can edit the content of their post.</li>
    <li>The user should then be able to “Save” the edited post. Using JavaScript, you should be able to achieve this without requiring a reload of the entire page.</li>
    <li>For security, ensure that your application is designed such that it is not possible for a user, via any route, to edit another user’s posts.</li>
  </ul>
  <li><strong>"Like" and "Unlike": </strong></li>
  Users should be able to click a button or link on any post to toggle whether or not they “like” that post.<ul>
    <li>Using JavaScript, you should asynchronously let the server know to update the like count (as via a call to fetch) and then update the post’s like count displayed on the page, without requiring a reload of the entire page.</li>
  </ul>
</ul>
<h2>Setup</h2>
To set up this project on your computer:

<ol>
  <li>Download this project:<br><code>git clone https://github.com/TahaFayyaz1/Mail.git </code></li>
  <li>Install all necessary dependencies <br><code>pip install -r requirements.txt</code></li>
  <li>Make migrations <br><code>python manage.py makemigrations network</code></li>
  <li>Migrate <br><code>python manage.py migrate</code></li>
</ol>

<h2>Preview</h2>
A demonstration of my project's functionality has be recorded and uploaded on Youtube:
<a href="https://www.youtube.com/watch?v=q8nd69IeiZM">Project Demonstration</a>
