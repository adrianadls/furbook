import React from "react";
import "./css/descriptions.css";

function Descriptions() {
  return (
    <div className="container-fluid Descriptions">
      <div className="row">
        <div className="col">
          <h5 className="title-text">Real Cats</h5>
          <p className="sub-text">
            I like dogs. Dogs are cute. Dogs are loving and playful.
             Dogs usually dont bite. And more often than not you won't see them fight.
          </p>
        </div>
        <div className="col">
          <h5 className="title-text">Real Dogs</h5>
          <p className="sub-text">
            Dogs are your friend. Dogs aren't mean. I love dogs and dogs love me.
          </p>
        </div>
        <div className="col">
          <h5 className="title-text">Real Friends</h5>
          <p className="sub-text">
            s Who says cats and dogs can't get along? Here at Furbook, we
            believe all pets can be best friends. Our furbook users believe it
            doesn't matter if you are a cat, dog, rabbit, or ferret; underneath
            that fur we are all cute, wonderful pets.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Descriptions;
