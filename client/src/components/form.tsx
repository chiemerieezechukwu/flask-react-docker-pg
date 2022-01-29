import { Button, Form } from "semantic-ui-react";
import api from "../utils/api";
import InputBox from "./input_box";

type propsType = { item: string; setItem: any; setApiData: any };
const FormCompoment = ({ item, setItem, setApiData }: propsType) => {
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

export default FormCompoment;
