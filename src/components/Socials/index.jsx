import {SOCIALS} from '../../Module/General';
import './style.css';

export default function Media() {
  return (
    <div className="media">
      <p>Follow us on social media for updates</p>
      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
          <i className="fab fa-3x fa-instagram"></i>
        </a>
      </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.eventwb}>
          <i class="fas fa-3x fa-globe"></i>
        </a>
      </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.email}>
          <i class="far fa-3x fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}
