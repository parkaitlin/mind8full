import styled from 'styled-components';

export const Quote = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  background-image: linear-gradient(to bottom right, #70e1f5, #ffd194);
  h2 {
    font-size: 5em;
    letter-spacing: .08em;
    font-family: 'Quicksand', sans-serif;
    color: rgb(20, 139, 159);
    margin: 0 0 .5em;
    animation: trackingInExpand 3s;
  }
  h2::after {
    background-color: #fff;
    content: "";
    display: block;
    height: 2px;
    margin: .2em 0 .2em;
    width: 100%
  }
  .quote-container {
    width: calc(100% - 30em);
    margin: 0 auto;
    text-align: center;
    color: white;
    font-family: 'Catamaran', sans-serif;
    letter-spacing: .1em;
    max-height: 30em;
    animation: focusIn 5s;
  }
  h4 {
    font-size: 1.7em;
  }
  h5 {
    font-size: 1.2em;
  }
  @keyframes trackingInExpand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes focusIn {
    0% {
      -webkit-filter: blur(12px);
              filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
              filter: blur(0px);
      opacity: 1;
    }
  }
`