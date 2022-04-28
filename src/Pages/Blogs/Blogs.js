import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2>Difference between authorization and authentication ?</h2>
      <p>
        Authentication: Authentication is the process of verifying your log in
        username and password.
        <br />
        Authorization is the process of verifying that you can access to
        something.
      </p>

      <h2>
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h2>
      <p>
        Crete Application without backend server <br />
        No need extra money spent for backend server <br />
        Sync real time data in the application. <br />
        Quick display data in the application <br />
        Faster then and backend web services <br />
        No SQL database so it is more faster <br />
        You can provide any social networking login wight very few lines code{" "}
        <br />
        Alternatives to Firebase Authentication Auth0, MongoDB, Passport, Okta,
        and Firebase are the most popular alternatives and competitors to
        Firebase Authentication.
      </p>

      <h2>
        What other services does firebase provide other than authentication ?
      </h2>
      <p>
        Cloud Firestore
        <br />
        Cloud Functions
        <br />
        Authentication
        <br />
        Hosting
        <br />
        Cloud Storage
        <br />
        Google Analytics
        <br />
        Predictions
        <br />
        Cloud Messaging
        <br />
        Dynamic Links
        <br />
        Remote Config
      </p>
    </div>
  );
};

export default Blogs;
