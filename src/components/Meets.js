import React from "react";
import Meet from "./Meet"

export default function Meets({meets}) {
  return (
    meets.map(meet => <Meet key={meet.id} meet={meet}/>)
  );
}
