import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is React Tutorial </p>
      <User name={"Function Raushan Jha "} location={"Bengaluru"} />
      <UserClass name={"Class Raushan Jha"} location={"Bengaluru"} />
    </div>
  );
};
export default About;
