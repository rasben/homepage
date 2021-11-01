import React from "react"
import Helmet from "react-helmet"
import "../scss/bundle.scss";

export default function Home() {
  return (
    <main>
        <Helmet>
          <title>rasben - Benjamin Rasmussen</title>
        </Helmet>
        <div class="profile-pic">
            <img src="images/profile-pic.jpeg" alt="Me." />
        </div>

        <h1>
            Benjamin Rasmussen
        </h1>

        <p>Developer. Drupal, Web,<br/> Frontend, Design & UX.</p>


        <ul class="socials">
            <li>
                <a href="https://linkedin.com/in/rasben"
                   target="_blank" rel="noreferrer" title="LinkedIN">
                  /in/rasben
                </a>
            </li>
            <li>
              <a href="https://medium.com/@rasben"
                 target="_blank" rel="noreferrer" title="Medium">
                  @rasben
              </a>
            </li>
            <li>
                <a href="https://github.com/rasben"
                   target="_blank" rel="noreferrer" title="GitHub">
                  /rasben
                </a>
            </li>
          <li>
            <a href="https://hashnode.com/@rasben"
               target="_blank" rel="noreferrer" title="HashNode">
              @rasben
            </a>
          </li>
            <li>
                <a href="https://drupal.org/u/ras-ben"
                   target="_blank" rel="noreferrer" title="Drupal.org">
                  /u/ras-ben
                </a>
            </li>
            <li>
                <a href="https://twitter.com/@rasben_"
                   target="_blank" rel="noreferrer" title="Twitter">
                    @rasben_
                </a>
            </li>
        </ul>
    </main>
  )
}
