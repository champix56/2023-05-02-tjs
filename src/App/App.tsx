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
  meme: MemeInterface;
  images: Array<ImageInterface>;
}
interface IAppProps { }

export default class App extends React.Component<IAppProps, iAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { meme: emptyMeme, images: [] };
  }
  componentDidMount(): void {
    fetch('http://localhost:5679/images', {
      headers: {
        Origin: 'https://localhost:5679'
      }
    })
      .then(r => r.json())
      .then(arr => {
        this.setState({ images: arr });
        store.dispatch(addImages(arr));
      });
  }

  render() {
    return (
      <div className="App" data-testid="App">
        <Header />
        <Navbar />
        <WFirstGrow>
          <StoredMemeSVGViewer basePath="" />
          <StoredMemeForm
            //images={this.state.images}
            //meme={this.state.meme}
            //onMemeChange={(meme: MemeInterface) => {
             // this.setState({ meme: meme });
            //}}
          />
        </WFirstGrow>
        <Footer />
      </div>
    );
  }
}
