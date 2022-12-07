import React from "react";
import "./control-panel.css";

function ControlPanel(props) {
  const {
    gameStarted,
    selectedLevel,
    onGameStart,
    onLevelChange,
    timer,
    open,
    points,
  } = props;
  const gameStartedClass = gameStarted ? " gameStarted" : "";

  return (
    <section id="panel-control">
      <h3 className="sr-only">Escolha do Nível</h3>
      <form className="form">
        <fieldset className="form-group">
          <label htmlFor="btLevel">Nível:</label>
          <select
            id="btLevel"
            defaultValue="0"
            onChange={onLevelChange}
            disabled={gameStarted}
          >
            <option value="0">Seleccione...</option>
            <option value="1">Básico</option>
            <option value="2">Intermédio</option>
            <option value="3">Avançado</option>
          </select>
        </fieldset>
        <button type="button" id="btEditWords" onClick={open} disabled={selectedLevel !== "0"} style={{ background: selectedLevel !== "0" ? "gray" : "" }}>
          Alterar Palavras
        </button>
        <button
          type="button"
          id="btPlay"
          style={{ background: gameStarted ? "red" : "green" }}
          disabled={selectedLevel === "0"}
          onClick={onGameStart}
        >
          {gameStarted ? "Parar jogo" : "Iniciar Jogo"}
        </button>
      </form>
      <div className="form-metadata">
        <p id="message" role="alert" className="hide">
          Clique em Iniciar o Jogo!
        </p>
        <dl className={`list-item left${gameStartedClass}`}>
          <dt>Tempo de Jogo:</dt>
          <dd id="gameTime">{timer}</dd>
        </dl>
        <dl className={`list-item right${gameStartedClass}`}>
          <dt>Pontuação:</dt>
          <dd id="points">{points}</dd>
        </dl>
      </div>
    </section>
  );
}

export default ControlPanel;
