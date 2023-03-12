import './style.scss';

function TrackHeading(props) {
  return (
    <div className="TrackHeading">
      <h1>{props.type}</h1>
    </div>
  );
}

function Tracks(props) {
  return (
    <div className="Track">
      {props.icon}
      <h2>{props.type}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export {Tracks, TrackHeading};