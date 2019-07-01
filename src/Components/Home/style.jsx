import styled from 'styled-components';

export const HomePage = styled.div`
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
    animation: trackingInExpand 2s;
  }
  h4 {
    font-size: 3em;
    animation: trackingInExpand 2.5s;
  }
  h6 {
    font-size: 2.5em;
  }
  h2, h4, h6 {
    letter-spacing: .08em;
    font-family: 'Quicksand', sans-serif;
    color: rgb(20, 139, 159);
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
`
export const Grid = styled.ul`
  margin: 2em 0 0 0;
	padding: 0;
	list-style: none;
  position: relative;
  width: 100%;
  li {
    position: relative;
    font-size: 4.5em;
    font-family: 'Catamaran', sans-serif;
    line-height: 1.5;
    max-height: 290px;
    text-align: center;
    /* Fallback */
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: center;
    padding-left: .3em; 
  }
  a {
    text-decoration: none;
  }
  li span {
    display: inline-block;
    font-weight: 900;
    line-height: 1;
    position: relative;
    color: hsla(0, 0%, 0%, 0.6);
    transform-style: preserve-3d;
    perspective: 550px;
    z-index: 1;
    margin-left: .15em;
  }
  li span::before, li span::after {
    position: absolute;
    content: attr(data-letter);
    line-height: inherit;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    transition: all 0.3s;
  }
  li span::before {
    text-shadow: none;
    color: hsla(0, 0%, 0%, 0.12);
  }
    /* Left-Hinge */
  .letter-left span::before, .letter-left span::after {
    transform-origin: 0 50%;
  } 
  .letter-left span::before {
    transform: scale(1.08, 1) skew(0deg, 1deg); 
  }
  .letter-left span::after {
    text-shadow: -1px 0px 0px hsla(360, 100%, 100%, 0.1), 3px 0px 1px hsla(0, 0%, 0%, 0.4);
    transform: rotateY(-15deg);
  }
  .letter-left:hover span::before {
    transform: scale(0.85, 1) skew(0deg, 20deg);
  }
  .letter-left:hover span::after {
    transform: rotateY(-50deg);
  }
  /* Left-Color */
  .letter-left {
    background:  #5aadbb;
  }
  .letter-left span {
    text-shadow:
      1px 4px 6px #5aadbb,
      0 0 0 hsla(0 0% 0% 0.3),
      1px 4px 6px #5aadbb;
  }
  .letter-left span::after {
    color: #5aadbb;
  }
  .letter-left, .letter-left:hover span::after {
    color: #148b9f;
  }

    /*  Right-Hinge */
  .letter-right span::before, 
  .letter-right span::after {
    transform-origin: 100% 50%;
  } 
  .letter-right span::before {
    transform: scale(0.85, 1) skew(0deg, 1deg); 
  }
  .letter-right span::after {
    text-shadow: 1px 0px 0px hsla(360, 100%, 100%, 0.1), -3px 0px 1px hsla(0, 0%, 0%, 0.4);
    transform: rotateY(15deg);
  }
  .letter-right:hover span::before {
    transform: scale(0.85, 1) skew(0deg, -20deg);
  }
  .letter-right:hover span::after {
    transform: rotateY(50deg);
  }
  /* Right-Color */
  .letter-right {
    background: #148b9f;
  }
  .letter-right span {
    text-shadow:
      1px 4px 6px #148b9f,
      0 0 0 hsla(0 0% 0% 0.3),
      1px 4px 6px #148b9f;
  }
  .letter-right span::after{
    color: #148b9f;
  }
  .letter-right:hover span::after, .letter-right {
    color: #a1d0d8
  }
  .letter-one {
    animation: fadeInUp 1s ease-in
  }
  .letter-two {
    animation: fadeInUp 1.3s ease-in
  }
  .letter-three {
    animation: fadeInUp 1.6s ease-in
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