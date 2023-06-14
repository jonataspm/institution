import styled from 'styled-components'

export const VolunteeDiv = styled.div`
  margin-top: 1%;
  width: 40%;
  height: 80vh;
  border-radius: 11px;
  background: var(--Bcolor);
  box-shadow: 0 1px 5px 0px gray;
`

export const VolunteeDiv2 = styled.div`
  margin-top: 1%;
  margin-left: 3%;
  width: 55%;
  height: 80vh;
  border-radius: 11px;
  background: var(--Bcolor);
  box-shadow: 0 1px 5px 0px gray;
`

export const VolunteerList = styled.div`
  display: flex;
`

export const BarCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7%;
  padding: 9px;
  border-bottom: 1px solid #dbdbdb;

  .filterSide {
    display: flex;
    align-items: center;

    .icon2 {
      color: #989b9f;
      margin-left: 20px;
    }
  }
`

export const InputSearchBar = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 5px;

  input {
    border: none;
    border-style: none;
    outline: none;
  }
  .icon {
    color: #989b9f;
  }
`

export const ProfileCard = styled.a`
  width: 100%;
  height: 80px;
  padding: 10px;
  display: flex;
  align-items: center;

  cursor: pointer;
  img {
    border-radius: 50%;
    max-width: 100%;
    max-height: 100%;
  }

  .ProfileTexts {
    margin-left: 10px;
  }

  .ArrowIcon {
    margin-left: auto;
  }

  &:hover {
    background-color: var(--SubColor);
  }
`
