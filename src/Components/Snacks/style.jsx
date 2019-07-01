import styled from 'styled-components';

export const Page = styled.div`
  position: absolute;
  z-index: -5;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150vh;
  justify-content: flex-start;
  padding-top: 4em;
  background-image: linear-gradient(to bottom right, #70e1f5, #ffd194);
`

export const MunchBox = styled.div`
  width: calc(100% - 10em);
  h2 {
    font-size: 2.5em;
    letter-spacing: .05em;
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
  span {
    font-size: 1.3em;
    letter-spacing: .05em;
    font-family: 'Quicksand', sans-serif;
    color: rgb(20, 139, 159);
  }
  h5 {
    font-size: 1.1em;
    letter-spacing: .05em;
    font-family: 'Catamaran', sans-serif;
    color: #fff;
  }
  p {
    font-size: 1.1em;
    font-weight: 600;
    letter-spacing: .02em;
    font-family: 'Catamaran', sans-serif;
    color: #fff;
  }
  .paper > p {
    color: #c0acaf
  }
  .paper {
    background-color: #f6f2f1;
    padding: 1em;
    position: relative;
    height: 28em;
    width: calc(100% - 40em);
    margin: 1em auto;
    animation: fadeInUp 1.8s;
  }
  .paper, .paper::before, .paper::after {
    box-shadow: 1px 1px 1px rgba(0,0,0,0.25);
    border: 1px solid #bbb;
  }
  .paper::before, .paper::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #f6f2f1;
  }
  .paper::before {
    right: 2em;
    top: 0;
    transform: rotate(-2deg);
    z-index: -1;
  }
  .paper::after {
    right: -2em;
    top: 1em;
    transform: rotate(2deg);
    z-index: -2;
  }
  textarea {
    border: none;
    background-color: #f6f2f1;
    color: #000;
    overflow-y: scroll;
    padding: 1em;
    font-size: 1em;
  }
  .entry {
    display: flex;
    flex-direction: column;
    margin: 1.5em 0;
  }
  .entry > p {
    color: #13b660;
  }
  .entry-btn {
    border: 3px solid white;
    color: white;
    font-size: 1.2em;
    width: calc(100% - 10em);
    margin: 0 auto;
  }
  .entry-btn:hover {
    color: rgb(20, 139, 159);
    border: 3px solid rgb(20, 139, 159);
  }
  .x {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .cancel-btn {
    border: none;
    font-size: 1.5em;
    width: 2em;
  }
  button {
    background-color: transparent;
    font-family: 'Catamaran', sans-serif;
    font-weight: 600;
    border-radius: 5px;
    transition: 0.8s;
    color: #c0acaf;
    border: 2px solid #c0acaf;
    font-size: 1em;
    margin-top: .5em;
    width: 100%;
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
`
