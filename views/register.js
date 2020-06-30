<div class="wrapper">
  <div class="container">
    <a href="" class="fb-login social-login">
      Register with Facebook
    </a>

    <p class="seperator">-OR-</p>
    <form autocomplete="off" action="/users/register" method="POST">
      <div class="group">
        <label for="name">Your Name</label>
        <input type="text" id="name" value="<%= typeof name != undefined ? name : ''%>" name="name"></input>
      </div>
      <div class="group">
        <label for="email">Email:</label>
        <input type="email" id="email" value="<%= typeof email != undefined ? name : ''%>" name="email"></input>
      </div>
      <div class="group">
        <label for="password">Password:</label>
        <input id="password" value="<%= typeof password != undefined ? name : ''%>" type="password" name="password"></input>
      </div>
      <div class="group">
        <label for="cpassword">Confirm Password:</label>
        <input id="cpassword" value="<%= typeof cpassword != undefined ? name : ''%>" type="password" name="cpassword"></input>
      </div>
      <a href="/users/login" class="forget-link">
        Login
      </a>
      <input type="submit" value="Register" id="submit"></input>
    </form>
  </div>
</div>;