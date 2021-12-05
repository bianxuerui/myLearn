import React, { Component } from "react";
import { Context, UserContext } from "../context";

export default class ConsumerPage extends Component {
  render() {
    return (
      <div>
        <h3>ContextPage</h3>
        <Context.Consumer>
          {(theme, user) => {
            return (
              <div className={theme.themeColor}>
                <UserContext.Consumer>
                  {(user) => {
                    return <div>{user.name}</div>;
                  }}
                </UserContext.Consumer>
              </div>
            );
          }}
        </Context.Consumer>
      </div>
    );
  }
}
