import React, { Component } from "react";
import { ButtonBar } from "../buttonBar/index";
import { Logoutbutton, SideBarDiv } from "./style";

type SideBarProps = {
  selectedButtonType: string;
};

type SideBarState = {
  selectedButtonType: string;
};

export class SideBar extends Component<SideBarProps, SideBarState> {
  constructor(props: SideBarProps) {
    super(props);
    this.state = {
      selectedButtonType: "home",
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(buttonType: string) {
    this.setState({ selectedButtonType: buttonType });
  }

  render() {
    const buttonType = this.state.selectedButtonType;
    return (
      <SideBarDiv>
        <ButtonBar type={buttonType === "menu"    ? "b" : "l"} name="menu" onClick={() => this.handleButtonClick("menu")}/>
        <ButtonBar type={buttonType === "home"    ? "b" : "l"} name="home" onClick={() => this.handleButtonClick("home")}/>
        <ButtonBar type={buttonType === "people"  ? "b" : "l"} name="people" onClick={() => this.handleButtonClick("people")}/>
        <ButtonBar type={buttonType === "send"    ? "b" : "l"} name="send" onClick={() => this.handleButtonClick("send")}/>
        <ButtonBar type={buttonType === "setting" ? "b" : "l"} name="setting" onClick={() => this.handleButtonClick("setting")} />
        <Logoutbutton>
          <ButtonBar type={buttonType === "logout" ? "b" : "l"} name="logout"onClick={() => this.handleButtonClick("logout")}/>
        </Logoutbutton>
      </SideBarDiv>
    );
  }
}
