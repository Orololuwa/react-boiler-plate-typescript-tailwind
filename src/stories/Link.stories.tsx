import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link from "components/link";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/link",
  component: Link
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <BrowserRouter>
    <Link {...args} />
  </BrowserRouter>
);

export const Primary = Template.bind({});

Primary.args = {
  to: "/link",
  children: "Link"
};
