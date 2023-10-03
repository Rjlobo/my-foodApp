import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        Name: "Dummy",
        Location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/orderkare");
    const json = await data.json();
    //console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { login, html_url, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img style={{ height: 100, width: 100 }} src={avatar_url} />
        <h2>Login ID: {login}</h2>
        <h3>Html Url- {html_url}</h3>
        <h3>Phone: 9476842425</h3>
        <h3>LoggedIn User </h3>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-semibold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}
export default UserClass;
