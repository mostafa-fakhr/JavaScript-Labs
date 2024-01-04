      //part one to make login browser
      username = prompt("Enter your username");
      password = prompt("Enter your password");
      if (username === "admin" && password === "421$$") {
        alert("Welcome login success");
      } else if (username !== "admin" && password === "421$$") {
        alert("Username incorrect!");
      } else if (password !== "421$$" && username === "admin") {
        alert("Password incorrect!");
      } else {
        alert("Both username and password are incorrect!");
      }