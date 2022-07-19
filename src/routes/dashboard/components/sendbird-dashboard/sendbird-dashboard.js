import { App as SendBirdApp } from "sendbird-uikit";
import { Transition } from "react-transition-group";

export default function SendbirdDashboard(props) {
  const { appID, userID, accessToken, onFilePicked, bucketUrl, isReady } =
    props;

  const defaultStyle = {
    transition: `all 700ms ease`,
    opacity: 0,
    transform: "scale(0.8)",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1, transform: "scale(1)" },
    entered: { opacity: 1, transform: "scale(1)" },
  };

  return (
    <Transition in={isReady}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <SendBirdApp
            appId={appID}
            userId={userID}
            accessToken={accessToken}
            onFilePicked={onFilePicked}
            externalBucketUrl={bucketUrl}
          />
        </div>
      )}
    </Transition>
  );
}
