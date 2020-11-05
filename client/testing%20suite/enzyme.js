import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import Login from "../components/Login.jsx";
import User from "../components/User.jsx";
import UserCard from "../components/UserCard.jsx";

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe("React unit tests", () => {
  describe("UserCard", () => {
    let wrapper;
    con;
  });
});
