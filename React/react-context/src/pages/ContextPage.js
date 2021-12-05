import React, { Component } from "react";
import { Context, UserContext } from "../context";
import ContextTypePage from "./ContextTypePage";
import UseContextPage from "./UseContextPage";
import ConsumerPage from "./ConsumerPage";

export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: { themeColor: "red" },
      user: { name: "xiaoming" },
    };
  }

  render() {
    const { theme, user } = this.state;
    return (
      <div>
        <h3>ContextPage</h3>
        <Context.Provider value={theme}>
          <UserContext.Provider value={user}>
            <ContextTypePage />
            <UseContextPage />
            <ConsumerPage />
          </UserContext.Provider>
        </Context.Provider>
      </div>
    );
  }
}
