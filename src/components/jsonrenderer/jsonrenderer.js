import RequestRemmitance from "./request-remmitance";

export default function JsonRenderer(props) {
  console.log(props);
  if (isRequestRemmitance(props)) {
    return <RequestRemmitance {...props} />
  }
}

function isRequestRemmitance(props) {
  const { type } = props;
  const requestType = "remittance_request";

  if (!type) {
    return false;
  }

  return type === requestType;
}
