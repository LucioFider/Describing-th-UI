import React from "react";

export default function DescribingTheUi() {
  return (
    <section>
      <h1>Amzing Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Kath" />;
}
