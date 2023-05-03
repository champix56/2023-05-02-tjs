import React, { Component } from "react";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import WFirstGrow from "./components/ui/WFirstGrow/WFirstGrow";
import MemeForm from "./components/ui/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import { MemeSVGViewer,emptyMeme } from "orsys-tjs-meme";


type Props = {};

type State = {};

export default class App extends Component<Props, State> {
  state = {meme:emptyMeme};

  render() {
    return (
      <div className="App" data-testid="App">
        <Header />
        <Navbar />
        <WFirstGrow>
          <MemeSVGViewer meme={this.state.meme} image={undefined} />
          <MemeForm />
        </WFirstGrow>
        <Footer />
      </div>
    );
  }
}
