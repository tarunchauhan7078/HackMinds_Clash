import React, { useState } from "react";
import Modal from "./Modal"; // Assuming you have a Modal component
import "./JudgesDashboard.css"; // Import CSS for MyComponent
import img from "./JudgesDashboard.png";
import Timer from "./Timer";

const JudgesDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  // Generate cards data (assuming you have some card data)
  const totalCards = 10;
  const cards = Array.from({ length: totalCards }, (_, index) => index + 1);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        <div
          className="left"
        >
          <div style={{ marginTop: "2px" ,alignItems:'center'}}>
            {currentCards.map((card) => (
              <div
                key={card}
                className="cards"
                onClick={() => handleCardClick(card)}
                // style={{display:"flex", justifyContent:"center", alignItems:"center"}}
              >
                <p style={{fontFamily:"DM Serif Text", fontSize:"30px"}}>Idea Title</p>
                <br/>
                <p style={{fontFamily:"Inter", fontSize:"15px", }}>Team {card}</p>
              </div>
            ))}
            <div className="pagination">
              {/* Pagination buttons */}
              {currentPage > 1 && (
                <button className="btn" onClick={handlePrevPage}>
                  Previous
                </button>
              )}
              {currentPage < Math.ceil(totalCards / cardsPerPage) && (
                <button className="btn" onClick={handleNextPage}>
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="right" style={{ flex: 2 }}>
          <div>
            <Timer />
          </div>
          <div>
            <img
              src={img}
              alt="Description"
              style={{ height: "42.5vh", display: "flex",margin: "20px 90px" }}
            />
          </div>
        </div>
      </div>
      {showModal && (
        <Modal onClose={handleModalClose}>
          {/* Render modal content here */}
          <div>Modal Content for Card {selectedCard}</div>
        </Modal>
      )}
    </div>
  );
};

export default JudgesDashboard;
