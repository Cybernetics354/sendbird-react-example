import { Transition } from "react-transition-group";
import Loader from "../loader";

export default function LoadingOverlay(props) {
  const { showOverlay } = props;

  const defaultStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    transition: `opacity 400ms ease`,
    backgroundColor: 'orange',
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0, zIndex: -999 },
  };

  return (
    <Transition in={showOverlay}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <Loader style={{
            width: 30,
            height: 30,
          }} />
        </div>
      )}
    </Transition>
  );
}
