import Backdrop from "components/backdrop";
import DrawerCtx from "./styled";

interface DrawerProps {
  isOpen: Boolean;
  onClose: () => void;
  placement: "up" | "down" | "left" | "right";
  className?: string;
  children?: React.ReactChildren | React.ReactChild;
}

const defaultProps: DrawerProps = {
  isOpen: false,
  onClose: () => {},
  placement: "left"
};

const Drawer = ({ isOpen, onClose, children, placement }: DrawerProps) => {
  return (
    isOpen && (
      <>
        <Backdrop onConfirm={onClose} />
        <DrawerCtx placement={placement}>{children}</DrawerCtx>
      </>
    )
  );
};

Drawer.defaultProps = defaultProps;

export default Drawer;
