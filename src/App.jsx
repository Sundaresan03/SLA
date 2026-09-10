import React from "react";
import "./App.css";
// 1.  Create a reusable ProfileCard component. Requirements: Pass name, age, and role using props. Pass the profile content using children. Render 3 different profile cards. Example usage:

<ProfileCard name="John" age={25} role="Developer">

  <p>Likes React and JavaScript.</p>

</ProfileCard>
function ProfileCard({ name, age, role, children }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>

      <div>{children}</div>
    </div>
  );
}

// 2.  Create a Button component that uses both props and children. Requirements:children should display the button text.Use a color prop to change the button background. Use a size prop: "small", "medium", or "large". Create at least 3 buttons.Example:

<Button color="blue" size="large">

  Submit

</Button>
function Button({ color, size, children }) {
  return (
    <button
      className={`btn ${size}`}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
}

function App() {
  return (
    <div>
      <h1>Profile Cards</h1>

      <ProfileCard name="John" age={25} role="Developer">
        <p>Likes React and JavaScript.</p>
      </ProfileCard>

      <ProfileCard name="Priya" age={23} role="Designer">
        <p>Likes UI/UX and creative designs.</p>
      </ProfileCard>

      <ProfileCard name="Rahul" age={27} role="Tester">
        <p>Likes software testing and automation.</p>
      </ProfileCard>

      <hr />

      <h1>Buttons</h1>

      <Button color="blue" size="large">
        Submit
      </Button>

      <Button color="green" size="medium">
        Save
      </Button>

      <Button color="red" size="small">
        Delete
      </Button>
    </div>
  );
}

export default App;