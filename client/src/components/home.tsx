import { Table } from "semantic-ui-react";
import { useState, useEffect } from "react";
import api from "../utils/api";
import TableItem from "./item";
import FormCompoment from "./form";

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [item, setItem] = useState("");

  useEffect(() => {
    api()
      .get("/")
      .then((res) => {
        setApiData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  const onDelete = (id: number) => {
    api()
      .delete(`/${id}`)
      .then((res) => {
        setApiData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const onUpdate = (id: number) => {
    item &&
      api()
        .put(`/${id}`, { item })
        .then((res) => {
          setApiData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log({ err });
        });
  };

  return (
    <>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map(({ id, name }) => {
            return <TableItem key={id} id={id} name={name} onDelete={onDelete} onUpdate={onUpdate} setItem={setItem} />;
          })}
        </Table.Body>
      </Table>
      <FormCompoment item={item} setItem={setItem} setApiData={setApiData} />
    </>
  );
};

export default Home;
