import React, { useState, useEffect } from "react";
import { Modal, Button, ProgressBar } from "react-bootstrap";
import "./ResultsModal.css";
export default function ResultsModal(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  function handleClose() {
    setShow(false);
    window.location.reload(false);
  }

  useEffect(() => {
    handleShow();
  }, []);
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <div className="modal-title">
          {props.result <= 35 ? (
            <h3>Better luck next time !</h3>
          ) : props.result > 35 && props.result < 70 ? (
            <h3>You can do better !</h3>
          ) : (
            <h3>Congratulations !</h3>
          )}
        </div>

        <p className="result-percentage">
          You answerd {props.result.toFixed(2)}%
        </p>

        <div className="progress-bar mt-3">
          {props.result <= 35 ? (
            <ProgressBar
              className="inner-bar"
              animated
              striped
              variant="danger"
              now={props.result}
            />
          ) : props.result > 35 && props.result < 70 ? (
            <ProgressBar
              className="inner-bar"
              animated
              striped
              variant="warning"
              now={props.result}
            />
          ) : (
            <ProgressBar
              className="inner-bar"
              animated
              striped
              variant="success"
              now={props.result}
            />
          )}
        </div>

        <Button variant="warning" onClick={handleClose} className="mt-3">
          Play again
        </Button>
      </Modal>
    </div>
  );
}
