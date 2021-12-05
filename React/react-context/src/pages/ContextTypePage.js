import React, { Component } from "react";
import { Context } from "../context";

export default class ContextPage extends Component {
  static contextType = Context;

  render() {
    const { themeColor } = this.context;

    return (
      <div>
        <h3 className={themeColor}>ContextTypePage</h3>
      </div>
    );
  }
}
