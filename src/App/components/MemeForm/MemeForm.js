import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";

const memeFormInitialState = {};
const MemeForm = (props) => {
  const [state, setstate] = useState(memeFormInitialState);
  useEffect(() => {
    return () => {};
  }, [state]);
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form>
        <label for="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input name="titre" id="titre" value="React is easy" />
        <hr />
        <label for="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image">
          <option value="1">futurama1.jpg</option>
        </select>
        <hr />
        <label for="text">
          <h2>texte</h2>
        </label>
        <br />
        <input name="text" id="text" type="text" value="Le js m'a tué" />
        <br />
        <label for="x">
          <h2 style={{ display: "inline" }}>x :</h2>
        </label>
        <input
          class="MemeEditor_smallNumber__2ESzk"
          name="x"
          id="x"
          type="number"
          value="121"
        />
        <label for="y">
          <h2 style={{ display: "inline" }}>y :</h2>
        </label>
        <input
          class="MemeEditor_smallNumber__2ESzk"
          name="y"
          id="y"
          type="number"
          value="65"
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label for="color">
          <h2 style={{ display: "inline" }}>color :</h2>
        </label>
        <input name="color" id="color" type="color" value="#FFFFFF" />
        <br />
        <label for="fontSize">
          <h2 style={{ display: "inline" }}>font-size :</h2>
        </label>
        <input
          class="MemeEditor_smallNumber__2ESzk"
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value="73"
        />
        px
        <br />
        <label for="fontWeight">
          <h2 style={{ display: "inline" }}>font-weight :</h2>
        </label>
        <input
          class="MemeEditor_smallNumber__2ESzk"
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value="900"
        />
        <br />
        <input name="underline" id="underline" type="checkbox" />
        &nbsp;
        <label for="underline">
          <h2 style={{ display: "inline" }}>underline</h2>
        </label>
        &nbsp;
        <h2 style={{ display: "inline" }}>/</h2>&nbsp;
        <label for="italic">
          <h2 style={{ display: "inline" }}>italic</h2>
        </label>
        &nbsp;
        <input name="italic" id="italic" type="checkbox" />
        <hr />
        <br />
        <label for="frameSizeX">
          <h2 style={{ display: "inline" }}>frame size X :</h2>
        </label>
        <input
          class="MemeEditor_smallNumber__2ESzk"
          name="frameSizeX"
          id="frameSizeX"
          type="number"
          min="0"
          value="0"
        />
        px
        <label for="frameSizeY">
          <h2 style={{ display: "inline" }}>frame size y :</h2>
        </label>
        <input
          class="MemeEditor_smallNumber__2ESzk"
          name="frameSizeY"
          id="frameSizeY"
          type="number"
          min="0"
          value="0"
        />
        px
        <br />
        <button type="reset">reset</button>
        <button type="submit">save</button>
      </form>
    </div>
  );
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
