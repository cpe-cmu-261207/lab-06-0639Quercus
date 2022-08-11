import { IconChevronDown, IconChevronUp } from "@tabler/icons";
import React from "react";
import { useState } from "react";
import UserCardDetail from "./UserCardDetail";

export default function UserCard(props) {
  const [detailToggle, toggleDetail] = useState(false);

  const onClickCallBack = () => toggleDetail(!detailToggle);
  return (
    <div className="border-bottom">
      {/* main section */}
      <div
        onClick={() => onClickCallBack()}
        className="d-flex align-items-center p-3"
      >
        <img src={props.ImgSrc} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.Name}</span>
        {!detailToggle && <IconChevronDown />}
        {detailToggle && <IconChevronUp />}
      </div>

      {/* UserCardDetail*/}
      {detailToggle && (
        <UserCardDetail Email={props.Email} Address={props.Address} />
      )}
    </div>
  );
}
