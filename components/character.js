import React,{useState} from "react";

const character = () => {
    const [videoIndex, setVideoIndex] = useState(0);

    const nextVideoIndex = () => {
        setVideoIndex((prev) => (prev +1) % 4);
    }
    const prevVideoIndex = () => {
        setVideoIndex((prev) => (prev -1 + 4) % 4);
    }
    return (
    <>
    <div className="container__character">
    <div className="bannerVideo" id="slideShow">
        <video className={videoIndex == 0 ? "character__video active__video" : "character__video"} src="https://assets.mixkit.co/videos/preview/mixkit-very-close-shot-of-the-leaves-of-a-tree-wet-18310-large.mp4" autoPlay muted loop></video>
        <video className={videoIndex == 1 ? "character__video active__video" : "character__video"}  src="https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4" autoPlay muted loop></video>
        <video className={videoIndex == 2 ? "character__video active__video" : "character__video"}  src="https://assets.mixkit.co/videos/preview/mixkit-street-with-people-walking-at-dusk-3428-large.mp4" autoPlay muted loop></video>
        <video className={videoIndex == 3 ? "character__video active__video" : "character__video"} src="https://assets.mixkit.co/videos/preview/mixkit-fireworks-illuminating-the-beach-sky-4157-large.mp4" autoPlay muted loop></video>
    </div>
      <div className="character__content">
        <div className="character__bannerText">
          <div className={videoIndex == 0 ? "active__slide" : ""}>
            <h2>Iron Man</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit enim dolore, tempore, quisquam et dolor, vel ipsam
              voluptatibus doloribus iste rerum. Fuga earum voluptates facilis
              maxime aut tenetur similique vel.
            </p>
          </div>
          <div className={videoIndex == 1 ? "active__slide" : ""}>
            <h2>Captain America</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit enim dolore, tempore, quisquam et dolor, vel ipsam
              voluptatibus doloribus iste rerum. Fuga earum voluptates facilis
              maxime aut tenetur similique vel.
            </p>
          </div>
          <div className={videoIndex == 2 ? "active__slide" : ""}>
            <h2>Thor</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit enim dolore, tempore, quisquam et dolor, vel ipsam
              voluptatibus doloribus iste rerum. Fuga earum voluptates facilis
              maxime aut tenetur similique vel.
            </p>
          </div>
          <div className={videoIndex == 3 ? "active__slide" : ""}>
            <h2>SpiderMan</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit enim dolore, tempore, quisquam et dolor, vel ipsam
              voluptatibus doloribus iste rerum. Fuga earum voluptates facilis
              maxime aut tenetur similique vel.
            </p>
          </div>
        <ul className="controls">
            <li onClick={nextVideoIndex}><i className="uil uil-arrow-left"></i></li>
            <li onClick={prevVideoIndex}><i className="uil uil-arrow-right"></i></li>
        </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default character;
