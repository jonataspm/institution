import styled from 'styled-components'

export const ProfileVolunteer = styled.div`
  margin: 16px;
  .TitleProfile {
    display: flex;
    align-items: center;
    cursor: pointer;
    .BackPointer {
      font-size: 32px;
      margin-right: 10px;
    }
  }

  .TitleProfileDisplay {
    margin-top: 1%;
    width: 100%;
    height: 80vh;
    border-radius: 11px;
    background: var(--Bcolor);
    box-shadow: 0 1px 5px 0px gray;
  }

  .Part1 {
    width: 30%;
    height: 93%;
    background: #514eff;

    border-radius: 0px 0px 0px 11px;

    .profilePart {
      padding: 10px;
      width: 100%;
      height: 40%;
      background: var(--Scolor);
      border-radius: 0px 0px 0px 11px;
      text-align: center;

      img {
        border-radius: 50%;
        max-width: 100%;
        max-height: 100%;
      }

      color: white;

      p {
        max-width: 100%;
        max-height: 100%;
        font-size: small;
      }

      .sit {
        color: yellow;
      }
    }
  }

  .Part2 {
    width: 70%;
    border-radius: 0px 0px 0px 11px;
  }
`
