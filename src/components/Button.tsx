import {
  Button as ButtonCK,
  ButtonProps as ButtonCKProps,
} from "@chakra-ui/react";

type ButtonProps = ButtonCKProps;

const Button = (props: ButtonProps) => {
  return <ButtonCK {...props} />;
};

export default Button;
