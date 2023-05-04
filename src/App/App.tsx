import React, { Component } from "react";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import WFirstGrow from "./components/layout/WFirstGrow/WFirstGrow";
import MemeForm, { StoreMemeForm } from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import { MemeSVGViewer, emptyMeme, MemeInterface } from "orsys-tjs-meme";
import { ReduxModal } from "./components/Modal/Modal";
import store from "./store/store";
import { showModal } from "./store/modal";
import StoreMemeSVGViewer from "./components/ui/MemeSVGViewer/MemeSVGViewer";
import { fetchImages } from "./store/list.slice";

interface iAppState {

}
interface IAppProps { }

export default class App extends React.Component<IAppProps, iAppState> {

componentDidMount(): void {
 store.dispatch(fetchImages());
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
          <WFirstGrow>
            <StoreMemeSVGViewer />
            <StoreMemeForm />
          </WFirstGrow>
          <Footer />
        </div>
        <ReduxModal /></>
    );
  }
}
