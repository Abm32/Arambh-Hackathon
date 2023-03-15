import './style.scss';

function RuleHeading(props) {
  return (
    <div className="RuleHeading">
      <h1>{props.type}</h1>
    </div>
  );
}

function Rules(props) {
  return (
    <div className="Rules">
      {props.icon}
      <p>{props.content}</p>
    </div>
  );
}

export {Rules, RuleHeading};
