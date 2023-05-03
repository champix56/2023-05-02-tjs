import React, { Component } from "react";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import WFirstGrow from "./components/layout/WFirstGrow/WFirstGrow";
import MemeForm from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import { MemeSVGViewer, emptyMeme, MemeInterface } from "orsys-tjs-meme";

interface iAppState {
  meme: MemeInterface;
}
interface IAppProps {}

export default class App extends React.Component<IAppProps, iAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { meme: emptyMeme };
  }

  render() {
    return (
      <div className="App" data-testid="App">
        <Header />
        <Navbar />
        {JSON.stringify(this.state)}
        <WFirstGrow>
          <MemeSVGViewer meme={this.state.meme} image={undefined} />
          <MemeForm
            meme={this.state.meme}
            onMemeChange={(meme: MemeInterface) => {
              this.setState({ meme: meme });
            }}
          />
        </WFirstGrow>
        <Footer />
      </div>
    );
  }
}
