import {
  BaseButton,
  GoogleSigninButton,
  MenuButton,
} from '../styles/button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-signin',
  menu: 'menu',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSigninButton,
    [BUTTON_TYPE_CLASSES.menu]: MenuButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
