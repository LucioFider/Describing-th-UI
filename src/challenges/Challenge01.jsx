import React from "react";

export default function Challenge01() {
  return (
    <div>
      <img src="https://i.imgur.com/lICfvbD.jpg" alt="Aklilu Lemma" />;
      <Profile />
      <Profile2 />
      <Gallery />
      <Congratulations />
    </div>
  );
}

function Profile() {
  return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
}

function Profile2() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile2 />
      <Profile2 />
      <Profile2 />
    </section>
  );
}

function Congratulations() {
  return <h1>Good job!</h1>;
}
