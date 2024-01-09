import "./StockCard.css";

import { MdCompareArrows, MdOutlineFavoriteBorder } from "react-icons/md";
import Button from "react-bootstrap/Button"; 
import Card from "react-bootstrap/card";

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
            <MdCompareArrows />
            Convert
          </Button>
          <Button
            variant="primary"
            id="btn-save"
            className="ms-2 rounded-circle"
          >
            <MdOutlineFavoriteBorder />
          </Button>
        </div>
      </div>
      <div>
        <img src="http://placehold.it/700x100" alt="Stock graphic" />
      </div>
    </Card>
  );
}

export { StockCard}
