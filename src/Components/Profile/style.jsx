import styled from 'styled-components';

export const ProfilePage = styled.main`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  justify-content: center;
  background-image: linear-gradient(to bottom right, #70e1f5, #ffd194);
  z-index: -1;
  .user-info {
    > h3 {
      font-size: 5em;
      letter-spacing: .08em;
      font-family: 'Quicksand', sans-serif;
      color: rgb(20, 139, 159);
      animation: fadeIn 1.5s;
    }
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