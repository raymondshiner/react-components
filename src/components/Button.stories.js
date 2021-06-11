import React from "react";
import Button from "./Button";

export default {
  title: "JS/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "I'm A Button",
};
