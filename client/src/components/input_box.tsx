import { Form } from "semantic-ui-react";

type propsType = { setItem: any };

const InputBox = ({ setItem }: propsType) => {
  return (
    <Form.Field>
      <input placeholder="item" onChange={(e) => setItem(e.target.value)} />
    </Form.Field>
  );
};

export default InputBox;
