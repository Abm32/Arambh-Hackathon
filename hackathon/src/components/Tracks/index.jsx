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
    <div className="Tracks">
    <div className="Track">
      <div className='Tra'>
        
      </div>
      <div className='Tra2'>
        {props.icon}
        <h2>{props.type}</h2>
        <p>{props.content}</p>
      </div>
    </div>
    </div>
  );
}

export {Tracks, TrackHeading};