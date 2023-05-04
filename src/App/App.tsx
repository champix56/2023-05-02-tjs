import React, { Component } from "react";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import WFirstGrow from "./components/layout/WFirstGrow/WFirstGrow";
import MemeForm from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import { MemeSVGViewer, emptyMeme, MemeInterface, ImageInterface } from "orsys-tjs-meme";
import store from "./store/store";
import { addImages } from "./store/ressources";
import StoredMemeForm from "./components/MemeForm/StoredMemeForm";
import StoredMemeSVGViewer from "./components/ui/storedMemeSVGViewer/storedMemeSVGViewer";

interface iAppState {
  // meme: MemeInterface;
  // images: Array<ImageInterface>;
}
interface IAppProps { }

export default class App extends React.Component<IAppProps, iAppState> {
  render() {
    return (
      <div className="App" data-testid="App">
        <Header />
        <Navbar />
        <WFirstGrow>
          <StoredMemeSVGViewer basePath="" />
          <StoredMemeForm />
        </WFirstGrow>
        <Footer />
      </div>
    );
  }
}
