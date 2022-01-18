import PropTypes, { InferProps } from "prop-types";
import { Button, Form } from "semantic-ui-react";
import api from "../utils/api";
import InputBox from "./input_box";

const FormComponentPropTypes = {
  item: PropTypes.string.isRequired,
  setItem: PropTypes.func.isRequired,
  setApiData: PropTypes.func.isRequired,
};

type FormComponentTypes = InferProps<typeof FormComponentPropTypes>;

const FormComponent = ({ item, setItem, setApiData }: FormComponentTypes) => {
  const postData = () => {
    item &&
      api()
        .post("/", { item })
        .then((res) => {
          setApiData(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log({ err });
        });
  };

  return (
    <Form className="create-form">
      <InputBox setItem={setItem} />
      <Button className="create-button green" onClick={postData} type="submit">
        Create new item
      </Button>
    </Form>
  );
};

FormComponent.propTypes = FormComponentPropTypes;

export default FormComponent;
