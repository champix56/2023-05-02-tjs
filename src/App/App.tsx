import React, { Component } from "react";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import WFirstGrow from "./components/layout/WFirstGrow/WFirstGrow";
import MemeForm from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import { MemeSVGViewer, emptyMeme, MemeInterface } from "orsys-tjs-meme";
import { ReduxModal } from "./components/Modal/Modal";
import store from "./store/store";
import { showModal } from "./store/modal";

interface iAppState {
  meme: MemeInterface;
}
interface IAppProps { }

export default class App extends React.Component<IAppProps, iAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { meme: emptyMeme };
  }

  render() {
    return (
      <>
        <button onClick={function () { store.dispatch(showModal('titleMess', 'COUCOCU')) }}>message</button>
        <button onClick={function () {

          store.dispatch(showModal('titl', 'COUCOCU', () => { console.log('ok') }, () => { }))

        }}>dialog</button>
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
        <ReduxModal /></>
    );
  }
}
