import React from "react";
import Widget from "./Widget";

function Content() {
  return (
    <div className="row mx-auto">
      <div className="grid grid-cols-2 gap-4 px-2 py-8 max-w-7xl md:grid-cols-5 sm:px-6 lg:px-8">
        <Widget />
        <Widget />
        <Widget />
        <Widget />
        <Widget />
      </div>
    </div>
  );
}

export default Content;
