import "./loader.scss";

export default function Loader(props) {
  const { style } = props;

  const defaultStyle = {
    width: "40px",
    height: "40px",
    border: "4px solid #f3f3f3",
    borderTop: "4px solid orange",
    borderRadius: "50%",
  };

  return (
    <div className="loader--spinner" style={{ ...defaultStyle, ...style }} />
  );
}
