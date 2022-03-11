import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import "../styles/audio.css";

function Audio({ played, setPlayed, audioStatus, setAudioStatus, sound }) {
  const handlerAudioBtn = () => {
    setAudioStatus(!audioStatus);

    if (played === "play") {
      console.log(played, "play");
      setPlayed("pause");
      sound.pause();
      console.log(sound);
    }
    if (played !== "play") {
      setPlayed("play");
      sound.play();
    } else {
    }
  };

  return (
    <div
      className={audioStatus ? "audio active" : "audio"}
      onClick={handlerAudioBtn}
    >
      <p>
        Audio
        <FontAwesomeIcon className="audio__icon" icon={faSoundcloud} />
      </p>
    </div>
  );
}

export default Audio;
