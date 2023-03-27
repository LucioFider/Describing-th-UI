import React from "react";

export default function DescribingTheUi() {
  return (
    <section>
      <h1>Amzing Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <Ui />
    </section>
  );
}

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Kath" />;
}

function Ui() {
  return (
    <article>
      <h1>My Component</h1>
      <ol>
        <li>Components: UI Building Blocks</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
      </ol>
      <section>
        <h1>Amazing scientists</h1>
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
      </section>
    </article>
  );
}
