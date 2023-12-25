import React, { useState } from "react";
import Welcome from "./components/Welcome";
import ListCast from "./components/ListCast";

function App() {
  const name = "StarGazers";
  let [memberInfo, setMemberInfo] = useState(null);
  return (
    <div className="container">
      <hgroup>
        <img src="images/group.svg" alt="StarGazers Group" />
        <Welcome name="StarGazers" />
        <p>
          Members of an <b>intergalactic alliance</b>
          <br />
          paving the way for peace and benevolence among all species. They are
          known for their enthusiasm for science, for their love of fun, and
          their dedication to education.
        </p>
        <ListCast onChoice={(info)=>{setMemberInfo(info)}}/>
        {memberInfo && (
          <article>
            <hgroup>
              <div style={
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1rem",
                }
              }>
                <img style={{width: "200px"}} src={`images/${memberInfo.slug}.svg`} alt={memberInfo.name} />
                <hgroup>

                <h1>
                  {memberInfo.name}
                </h1>
                <p>{memberInfo.bio}</p>
                </hgroup>
              </div>
            </hgroup>
          </article>
        )}
      </hgroup>
    </div>
  );
}
export default App;
