import React from "react";
import "./Card.css";
import svg from "../../assets/select.svg"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
  return (
    <div className="card_main">
      <div className="grid_container">
        <div className="card_body_1">
          <img src={svg} alt="" />
          <h2>You are looking for </h2>
          <p>Select the subsidy you want to choose</p>
        </div>
        <div className="card_body text-justify">
          <h5>e-Kisan Upaj Nidhi</h5><hr/>
          <p>e-Kisan Upaj Nidhi <br />
            1 Scheme(s) Available <br />
            • Use your electronic- Negotiable Warehouse Receipts (e-NWR) to apply for secured credit from banks. <br />
            e-NWRs can be issued only by WDRA registered warehouses. <br />
            • Financing for agricultural commodities against e-NWRs available from Banks / Financial Institutions.</p>
          <a href=""><Button className="btn btn-primary ">apply now</Button></a>
        </div>
        <div className="card_body text-justify">
          <h5>Agri Loan - Kisan Credit Card</h5><hr/>
          <p>2 Scheme(s) Available <br />
            • KCC Crop Loan and KCC Fisheries <br />
            • Aims to provide farmers with timely and adequate credit to meet their credit needs. <br />
            • To meet the short term credit requirements.
            • Post harvest expenses.</p>
          <a href=""><Button className="btn btn-primary">check eligibilty</Button></a>
        </div>
        <div className="card_body text-justify">
          <h5>Renewable Energy</h5><hr/>
          <p>1 Scheme(s) Available <br />
            • Install your own Solar power system. <br />
            • Reduce high electricity tariffs by installing Roof Top Solar Systems in your house. <br />
            • Registration at National Portal for PM - Surya Ghar (pmsuryaghar.gov.in) is mandatory to avail the loan facility.</p>
          <a href=""><Button className="btn btn-primary">apply now</Button></a>
        </div>
        <div className="card_body text-justify">
          <h5>Agri Infrastructure Loan</h5><hr/>
          <p>
            3 Scheme(s) Available <br />
            • Mobilizations of finance for post harvest management and agricultural consulting <br />
            • Loans for development of agricultural infrastructure, clinics and business centers.</p>
          <a href=""><Button className="btn btn-primary">check eligibilty</Button></a>
        </div>
        <div className="card_body text-justify">
          <h5>Business Activity Loan</h5><hr/>
          <p>6 Scheme(s) Available <br />
            • Loans for setting up new business or expanding an existing business <br />
            • Scheme wise benefits based on gender, social category and type of business</p>
          <a href=""><Button className="btn btn-primary">check eligibilty</Button></a>
        </div>
        <div className="card_body text-justify">
          <h5>Livelihood Loan</h5><hr/>
          <p>1 Scheme(s) Available <br />
            • Loan for Individuals and Self Help Groups (SHGs) <br />
            • Promotes livelihood opportunities for the rural poor.</p>
          <a href=""><Button className="btn btn-primary">check eligibilty </Button></a>
        </div>
        <div className="card_body text-justify">
          <h5>Education Loan</h5><hr/>
          <p>1 Scheme(s) Available
            • For pursuing studies in India <br />
            • Eligible courses ranging from graduation to PhD <br />
            • Focus on students from economically weaker sections</p>
          <a href=""><Button className="btn btn-primary">check eligibilty</Button></a>
        </div>
      </div>
    </div>
  );
};

export default Card;