import { useState } from "react";
import { Button, Table, Form } from "semantic-ui-react";
import InputBox from "./input_box";

type apiDataElement = {
  id: number;
  name: string;
  onDelete: any;
  onUpdate: any;
  setItem: any;
};

const TableItem = ({ id, name, onDelete, onUpdate, setItem }: apiDataElement) => {
  const [updateState, setUpdateState] = useState(false);

  return (
    <>
      <Table.Row>
        <Table.Cell>{id}</Table.Cell>
        {updateState ? (
          <Table.Cell>
            <Form className="create-form">
              <InputBox setItem={setItem} />
            </Form>
          </Table.Cell>
        ) : (
          <Table.Cell>{name}</Table.Cell>
        )}
        <Table.Cell>
          {!updateState ? (
            <Button className="blue" onClick={() => setUpdateState(!updateState)}>
              Update
            </Button>
          ) : (
            <Button
              className="teal"
              onClick={() => {
                onUpdate(id);
                setUpdateState(!updateState);
              }}
            >
              Complete
            </Button>
          )}
        </Table.Cell>
        <Table.Cell>
          <Button className="red" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default TableItem;
