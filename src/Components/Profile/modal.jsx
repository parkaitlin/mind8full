import React from 'react';
import styled from 'styled-components';

const ModalBox = styled.div`
  .hide-modal {
    display: none;
  }
  .show-modal {
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn .8s;
  }
  section {
    max-height: 95vh;
    max-width: 68em;
    padding: 2em;
    background-color: #dee4f5;
    scroll-behavior: smooth;
    overflow-y: auto;
  }
  .profile-modal {
    display: flex;
    flex-direction: column;
    > li {
      list-style: none;
      text-align: right;
      font-family: 'Catamaran', sans-serif;
      color: #3a566e;
      margin: 1.5em 0 1.5em;
    }
    > li > input {
     width: 20em;
     border-radius: 5px;
     border: none;
     margin: 0 auto;
     height: 3em;
     font-size: .8em;
     padding: 0 .5em;
     font-family: 'Catamaran', sans-serif;
    }
  }
  .entry-modal {
    > li {
      list-style: none;
      font-family: 'Catamaran', sans-serif;
      color: #535353;
      margin: .5em 0;
      > span {
        color: #3a566e;
        font-weight: 600;
      }
    }
  }
  .paper {
    background-color: #f6f2f1;
    padding: 1em;
    position: relative;
    z-index: 10;
    height: 13em;
    width: calc(100% - 3em);
    margin: 1em auto;
    animation: fadeInUp 1.8s;
    > div {
      width: 100%;
      height: 11em;
      overflow-wrap: normal;
      overflow-y: auto;
    }
    > span {
      color: #c0acaf;
      font-weight: 600;
    }
    > h4 {
      color: #535353;
    }
  }
  .paper, .paper::after {
    box-shadow: 1px 1px 1px rgba(0,0,0,0.25);
    border: 1px solid #bbb;
  }
  .paper::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #f6f2f1;
  }
  .paper::after {
    right: .5em;
    top: -.5em;
    z-index: -1;
  }
  button {
    font-family: 'Catamaran', sans-serif;
    font-size: 1.2em;
    font-weight: 600;
    border-radius: 5px;
    border: 3px solid white;
    background-color: transparent;
    color: white;
    width: 100%;
    transition: 0.8s;
    margin: 0 auto;
  }
  button:hover {
    color: #3a566e;
    border: 3px solid #3a566e;
  }
  @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`

const Modal = ({show, children, close, name})=>{
  const showOrHide = show ? "show-modal" : 'hide-modal'
  return(
    <ModalBox>
      <div className={showOrHide}>
        <section>
          <button name={name} onClick={close}>&times;</button>
          {children}
        </section>
      </div>
    </ModalBox>
  )
}

export default Modal;