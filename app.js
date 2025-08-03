import React from "react";
import ReactDOM from "react-dom/client";
/* <div id="parent">
      <div id="child">
         <h1>I am H1</h1>
         <h2> I am H2</h2>

         </div>
         </div>
         */
        const heading = React.createElement
        ("div",
            {id:"parent"},
         React.createElement("div",{id:"child"},
           [ React.createElement("h1", { key: "h1" }, "I am H1 tag"),
            React.createElement("h2", { key: "h2" }, "I am H2 tag")] )
         );

        const root=ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);

