import { useState } from "react";
import UserCard from "../components/UserCard";
import axios from "axios";

export default function Home() {
  const [GenAmount, setGenAmount] = useState(1);
  const [users, generateUser] = useState([]);

  const genUsers = async () => {
    if (GenAmount < 1) {
      alert("Invalid number of user");
      return;
    }

    const resp = await axios.get(
      `https://randomuser.me/api/?results=${GenAmount}`
    );

    const tempUsers = resp.data.results.map((user) => {
      return {
        Name: `${user.name.first} ${user.name.last}`,
        Email: user.email,
        Address: `${user.location.city} ${user.location.state} ${user.location.country} ${user.location.postcode}`,
        ImgSrc: user.picture.large,
      };
    });

    generateUser(tempUsers);
    //users.forEach((Element) => console.log(Element));
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => {
            setGenAmount(event.target.value);
          }}
          value={GenAmount}
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      {users.map((user) => (
        <UserCard
          Name={user.Name}
          Email={user.Email}
          Address={user.Address}
          ImgSrc={user.ImgSrc}
        />
      ))}

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Thanapat Somsit 640610639
      </p>
    </div>
  );
}
