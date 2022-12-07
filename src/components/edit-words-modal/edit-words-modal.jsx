import React from "react";
import ReactDOM from "react-dom";
import "./edit-words-modal.css";
import { useState } from "react";

export default function EditWordsModal(props) {
  const { isShowing, hide, changeWords, palavras } =
    props;

  const [pal, setPal] = useState(palavras);
  const [newPal, setNewPal] = useState();

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {pal.map((palavra, index) => (
                  <input
                    defaultValue={palavra}
                    onChange={(e) => {
                      let newPalavras = pal;
                      newPalavras[index] = e.target.value;
                      setPal(newPalavras);
                    }}
                  ></input>
                ))}
              </div>
              <div className="modal-body">
                <input
                  value={newPal}
                  onChange={(e) => {
                    console.log(e);
                    setNewPal(e.target.value.toUpperCase());
                  }}
                ></input>
                <button
                  type="button"
                  className="button-add"
                  onClick={() => {
                    console.log("aqui + " + newPal);
                    if (newPal !== undefined) {
                      let newPalavras = pal;
                      newPalavras.push(newPal);
                      setPal(newPalavras);
                      setNewPal("");
                    }
                  }}
                >
                  Adicionar
                </button>
              </div>
              <p>&nbsp;</p>
              <button
                type="button"
                className="button-change"
                onClick={() => changeWords(pal)}
              >
                Alterar
              </button>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
}

//https://www.digitalocean.com/community/tutorials/react-modal-component
