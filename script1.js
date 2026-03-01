body {
  background: #fff;
  font-family: 'Arial', sans-serif;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 6px 32px rgba(0,0,0,0.12);
  padding: 32px 24px;
  margin-top: 32px;
  text-align: center;
  width: 340px;
  min-height: 320px;
  max-width: 97vw;
}

h2 {
  color: #F56CA4;
  font-size: 1.5em;
  margin-bottom: 16px;
}

.memory-photo {
  width: 90%;
  border-radius: 16px;
  margin-bottom: 8px;
  box-shadow: 0 4px 12px rgba(245,108,164,0.08);
}

button {
  background: #F56CA4;
  color: white;
  font-size: 1em;
  padding: 12px 32px;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  margin-top: 16px;
}

#pin-input {
  margin-top: 16px;
  margin-bottom: 8px;
  width: 120px;
  max-width: 80vw;
  letter-spacing: 12px;
  font-size: 2em;
  text-align: center;
  border-radius: 12px;
  border: 1px solid #eee;
  display: block;
  background: #f8f8fb;
  box-sizing: border-box;
}

.pin-buttons {
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 13px;
  max-width: 230px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
}

.pin-btn {
  width: 56px;
  height: 56px;
  background: #fff;
  border: 2px solid #eee;
  border-radius: 50%;
  font-size: 1.24em;
  color: #F56CA4;
  cursor: pointer;
  transition: background 0.2s;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pin-btn:active, .pin-btn.selected {
  background: #B4DAF8;
}

#gameArea {
  position: relative;
  height: 220px;
  overflow: hidden;
}

@keyframes shake {
  0% {transform: translateX(0);}
  25% {transform: translateX(-8px);}
  50% {transform: translateX(8px);}
  75% {transform: translateX(-8px);}
  100% {transform: translateX(0);}
}

/* Responsive design for mobile */
@media (max-width: 500px) {
  .card {
    width: 99vw;
    font-size: 1em;
    padding: 16px 2vw;
  }
  h2 {
    font-size: 1.15em;
  }
  #pin-input {
    width: 70vw;
    font-size: 1.3em;
  }
  .pin-btn {
    width: 17vw;
    height: 17vw;
    font-size: 1.2em;
    margin: 2vw;
  }
  .pin-buttons {
    max-width: 95vw;
    gap: 6vw;
  }
}