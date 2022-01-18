import PropTypes, { InferProps } from "prop-types";
import { Form } from "semantic-ui-react";

const InputBoxPropTypes = {
  setItem: PropTypes.func.isRequired,
};

type InputBoxTypes = InferProps<typeof InputBoxPropTypes>;

const InputBox = ({ setItem }: InputBoxTypes) => {
  return (
    <Form.Field>
      <input placeholder="item" onChange={(e) => setItem(e.target.value)} />
    </Form.Field>
  );
};

InputBox.propTypes = InputBoxPropTypes;

export default InputBox;
