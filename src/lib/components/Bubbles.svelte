<ul class="bubbles -z-50">
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
  <li />
</ul>

<style>
  .bubbles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .bubbles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: hsl(var(--foreground));
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  .bubbles li:nth-child(1) {
    left: 25%;
    width: 5px;
    height: 5px;
    animation-delay: 0s;
  }

  .bubbles li:nth-child(2) {
    left: 10%;
    width: 8px;
    height: 8px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .bubbles li:nth-child(3) {
    left: 70%;
    width: 8px;
    height: 8px;
    animation-delay: 4s;
  }

  .bubbles li:nth-child(4) {
    left: 40%;
    width: 8px;
    height: 8px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .bubbles li:nth-child(5) {
    left: 65%;
    width: 5px;
    height: 5px;
    animation-delay: 0s;
  }

  .bubbles li:nth-child(6) {
    left: 75%;
    width: 8px;
    height: 8px;
    animation-delay: 3s;
  }

  .bubbles li:nth-child(7) {
    left: 35%;
    width: 5px;
    height: 5px;
    animation-delay: 7s;
  }

  .bubbles li:nth-child(8) {
    left: 50%;
    width: 8px;
    height: 8px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .bubbles li:nth-child(9) {
    left: 20%;
    width: 5px;
    height: 5px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .bubbles li:nth-child(10) {
    left: 85%;
    width: 5px;
    height: 5px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
    }
  }
</style>
