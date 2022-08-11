import { IconMailForward, IconMapPins } from "@tabler/icons";
import React from "react";

export default function UserCardDetail(props) {
  return (
    <div className="text-center">
      <p>
        <IconMailForward /> {props.Email}
      </p>
      <p>
        <IconMapPins /> {props.Address}
      </p>
    </div>
  );
}
