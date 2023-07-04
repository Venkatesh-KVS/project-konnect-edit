import React, { useState } from "react";
import { testsData } from "./data/AllData";

const Filter = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div>
      <div className="container">
        {/* <Form>
          <InputGroup className="my-3">
            <Form.Control placeholder="Search Data" />
          </InputGroup>
        </Form> */}
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="search-input"
          placeholder="Search"
        />
        <table>
          <tbody>
            {testsData
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr>
                  <td>{item.title}</td>
                  <td>{item.inv}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Filter;
