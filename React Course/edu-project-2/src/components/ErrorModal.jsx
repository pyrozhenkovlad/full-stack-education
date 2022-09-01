const ErrorModal = (props) => {
  const { title, message, clickHandler } = props;

  return (
    <div className="backdrop" onClick={clickHandler}>
      <div className="modal">
        <div className="header">
          <h2>{title}</h2>
        </div>
        <div className="content">{message}</div>
        <div className="actions">
          <button onClick={clickHandler}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
