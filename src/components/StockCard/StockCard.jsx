import "./StockCard.css";

import Button from "react-bootstrap/Button"; 
import Card from "react-bootstrap/card";
import { MdCompareArrows, MdOutlineFavoriteBorder } from "react-icons/md";

import { Chart } from "../Chart/Chart";

function StockCard() {
  return (
    <Card className="card border-light shadow-sm">
      <div className="head">
        <div className="head--title">
          <span>USD → COP</span>
          <span>0.00026</span>
        </div>
        <div>
          <Button variant="light" id="btn-convert">
            <MdCompareArrows size={24} className="me-2"/>
            Convert
          </Button>
          <Button
            variant="primary"
            id="btn-save"
            className="ms-2 p-2"
          >
            <MdOutlineFavoriteBorder size={24} />
          </Button>
        </div>
      </div>
      <div className="body">
        <Chart/>
      </div>
    </Card>
  );
}

export { StockCard}
