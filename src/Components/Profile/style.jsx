import styled from 'styled-components';

export const ProfilePage = styled.main`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  justify-content: space-evenly;
  background-image: linear-gradient(to bottom right, #70e1f5, #ffd194);
  z-index: -1;
  .user-info {
    animation: fadeIn 1.5s;
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    > h3 {
      font-size: 5em;
      margin: 0 0 .2em;
    }
    > h5 {
      font-size: 2em;
      margin: 0 0 .5em;
    }
    > h3, h5 {
      letter-spacing: .08em;
      font-family: 'Quicksand', sans-serif;
      color: rgb(20, 139, 159);
    }
    > button {
      font-family: 'Catamaran', sans-serif;
      font-size: 1.2em;
      font-weight: 600;
      border-radius: 5px;
      border: 3px solid white;
      background-color: transparent;
      color: white;
      width: calc(100% - 3em);
      transition: 0.8s;
      margin: 0 auto;
    }
    > button:hover {
      color: rgb(20, 139, 159);
      border: 3px solid rgb(20, 139, 159);
    }
  }
  .cal {
    display: flex;
    flex-direction: column;
    align-items: center;
    > h4 {
      letter-spacing: .08em;
      font-family: 'Quicksand', sans-serif;
      color: rgb(20, 139, 159);
      font-size: 1.3em;
      margin-top: 1em;
    }
  }
  .journal {
    align-self: flex-start;
    margin: 5em 0 0;
    max-height: 43em;
    > h4 {
      letter-spacing: .08em;
      font-family: 'Quicksand', sans-serif;
      color: rgb(20, 139, 159);
      font-size: 3em;
    }
    > ul {
      margin: 1.5em 0;
    }
    > ul > li {
      list-style: none;
    }
    > ul > li > button {
      font-size: 1.4em;
      font-family: 'Catamaran', sans-serif;
      color: #fff;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid white;
      transition: 0.6s;
      width: 100%100ms;
      padding: .5em;
    }
    > ul > li > button:hover {
      border: 2px solid rgb(20, 139, 159);
      color: rgb(20, 139, 159);
      span {
        color: #fff;
      }
    }
  }
  span {
    color: rgb(20, 139, 159);
    margin-left: 1.5em;
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