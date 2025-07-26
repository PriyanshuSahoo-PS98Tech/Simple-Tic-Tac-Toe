# 🎮 Simple Tic Tac Toe Game

A modern, interactive Tic Tac Toe game built with pure HTML, CSS, and JavaScript. This sleek, dark-themed game features smooth animations, visual feedback, and an intuitive user interface that brings the classic game to life in your browser.

<div align="center"> <img src="https://github.com/PriyanshuSahoo-PS98Tech/Simple-Tic-Tac-Toe/blob/main/output.png" alt="Tic Tac Toe Game Preview" width="250"> </div>

## 📋 Table of Contents

- [Features](#-features)
- [Live Demo](#-live-demo)
- [Technologies Used](#️-technologies-used)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Game Rules](#-game-rules)
- [Technical Implementation](#️-technical-implementation)
  - [Game Logic](#game-logic)
  - [Win Detection Algorithm](#win-detection-algorithm)
  - [Animation System](#animation-system)
- [Customization Guide](#-customization-guide)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)
- [Acknowledgments](#-acknowledgments)

## ✨ Features

### **Core Gameplay**
- **🎯 Two-Player Mode**: Classic X vs O gameplay with alternating turns
- **🏆 Win Detection**: Automatic detection of winning combinations (rows, columns, diagonals)
- **🤝 Draw Detection**: Identifies draw conditions when the board is full
- **🔄 Reset Function**: Start a new game instantly with the reset button
- **⚡ Real-Time Updates**: Dynamic game status updates showing current player and results

### **Visual Design**
- **🌌 Modern Dark Theme**: Elegant gradient background with professional styling
- **💫 Animated Title**: Pulsing title effect with color transitions
- **🎨 Color-Coded Players**: 
  - **🔴 Red X**: Player X moves in vibrant red
  - **🟢 Green O**: Player O moves in bright green
- **✨ Smooth Animations**: Pop-in effects when placing moves and hover transitions
- **📱 Responsive Grid**: Perfect 3x3 grid layout using CSS Grid

### **User Experience**
- **🖱️ Intuitive Controls**: Simple click-to-play interface
- **👆 Hover Effects**: Visual feedback on cell hover with scaling and color changes
- **🚫 Smart Prevention**: Prevents moves on occupied cells or after game end
- **📢 Clear Status Messages**: Real-time game status and winner announcements

## 🚀 Live Demo

Play the game now: **[https://simple-tic-tac-toe-ps98tech-021284-ps.netlify.app/](https://simple-tic-tac-toe-ps98tech-021284-ps.netlify.app/)**

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and game board layout
- **CSS3**: Modern styling with Grid layout, animations, and responsive design
- **JavaScript (ES6)**: Game logic, event handling, and DOM manipulation
- **CSS Grid**: Perfect grid-based board layout
- **CSS Animations**: Smooth transitions and visual effects

## 📁 Project Structure

```
Simple-Tic-Tac-Toe/
├── index.html             # Main HTML structure and game board
├── style.css              # Complete styling and animations
├── script.js              # Game logic and interactive functionality
├── output.png             # Game preview screenshot
├── LICENSE                # MIT License
└── README.md              # Project documentation
```

## 🔧 Installation & Setup

### **Quick Start**
```bash
# Clone the repository
git clone https://github.com/PriyanshuSahoo-PS98Tech/Simple-Tic-Tac-Toe.git

# Navigate to project directory
cd Simple-Tic-Tac-Toe

# Open the game in your browser
open index.html
```

### **For Development**
```bash
# Using Live Server (VS Code extension)
# Right-click index.html → "Open with Live Server"

# Or using Python
python -m http.server 8000
# Visit http://localhost:8000

# Or using Node.js
npx http-server
```

## 📖 Game Rules

### **How to Play**
1. **🎯 Objective**: Get three of your marks (X or O) in a row, column, or diagonal
2. **👥 Players**: Two players take turns placing their marks
3. **🔄 Turns**: Player X always goes first, then players alternate
4. **🏆 Winning**: First player to get three in a row wins
5. **🤝 Draw**: If all 9 spaces are filled with no winner, it's a draw

### **Game Controls**
- **Click any empty cell** to place your mark
- **Reset Button**: Start a new game at any time
- **Status Display**: Shows whose turn it is and game results

## 🏗️ Technical Implementation

### **Game Logic**
The game uses a clean, modular approach with efficient state management:

```javascript
// Game state variables
let currentPlayer = 'X';           // Track current player
let gameActive = true;             // Control game status
let boardState = Array(9).fill(''); // Track board positions

// Handle player moves with validation
function handleClick(e) {
    const index = e.target.dataset.index;
    // Prevent invalid moves
    if (boardState[index] !== '' || !gameActive) return;
    
    // Update game state and UI
    boardState[index] = currentPlayer;
    e.target.textContent = currentPlayer;
    e.target.classList.add(currentPlayer.toLowerCase());
}
```

### **Win Detection Algorithm**
Efficient winning combination checking using predefined patterns:

```javascript
// All possible winning combinations
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Check for winning condition
function checkWin() {
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return boardState[a] && 
               boardState[a] === boardState[b] && 
               boardState[a] === boardState[c];
    });
}
```

### **Animation System**
CSS-powered animations for enhanced user experience:

```css
/* Pulse animation for title */
@keyframes pulse {
    0%, 100% { transform: scale(1); color: #00ffcc; }
    50% { transform: scale(1.1); color: #00ffff; }
}

/* Pop animation for move placement */
@keyframes pop {
    0% { transform: scale(0); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
}
```

## 🎨 Customization Guide

### **Changing Player Colors**
Modify player mark colors in `style.css`:

```css
.cell.x {
    color: #your-x-color;     /* Default: #ff4e4e (red) */
}

.cell.o {
    color: #your-o-color;     /* Default: #4eff4e (green) */
}
```

### **Board Styling**
Customize the game board appearance:

```css
.board {
    grid-template-columns: repeat(3, 120px); /* Adjust cell size */
    gap: 15px;                               /* Change spacing */
}

.cell {
    background-color: rgba(255, 255, 255, 0.1); /* Cell background */
    border: 3px solid #your-border-color;        /* Border style */
}
```

### **Background Theme**
Change the background gradient:

```css
body {
    background: linear-gradient(135deg, #your-color1, #your-color2);
}
```

### **Animation Speed**
Adjust animation timing:

```css
.title {
    animation: pulse 3s infinite ease-in-out; /* Slower pulse */
}

.cell {
    transition: transform 0.3s ease; /* Slower hover effect */
}
```

### **Adding Sound Effects**
Enhance the game with audio feedback:

```javascript
// Add to handleClick function
const clickSound = new Audio('click.mp3');
clickSound.play();

// Add win sound
const winSound = new Audio('win.mp3');
if (checkWin()) {
    winSound.play();
}
```

## 🌐 Browser Support

- **Chrome**: 60+ ✅
- **Firefox**: 55+ ✅
- **Safari**: 12+ ✅
- **Edge**: 79+ ✅
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+ ✅

## 🤝 Contributing

Contributions are welcome! Here are some enhancement ideas:

### **Feature Suggestions**
- **🤖 AI Player**: Single-player mode against computer
- **📊 Score Tracking**: Keep track of wins/losses
- **🎵 Sound Effects**: Audio feedback for moves and wins
- **🏆 Tournament Mode**: Best of 3/5 games
- **🎨 Multiple Themes**: Different color schemes
- **📱 Mobile Optimization**: Enhanced touch experience

### **How to Contribute**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Priyanshu Sahoo**
- GitHub: [@PriyanshuSahoo-PS98Tech](https://github.com/PriyanshuSahoo-PS98Tech)
- Live Demo: [Simple Tic Tac Toe](https://simple-tic-tac-toe-ps98tech-021284-ps.netlify.app/)
- Portfolio: Creating engaging web games with modern technologies

## 🙏 Acknowledgments

- **Classic Game Design**: Inspired by the timeless Tic Tac Toe game
- **Modern Web Technologies**: Built with vanilla JavaScript for optimal performance
- **User Experience**: Focused on smooth interactions and visual feedback
- **Open Source**: Contributing to the web development learning community

<div align="center"> <b>⭐ Star this repository if you enjoyed the game!</b> <br><br> <b>🎮 Play, customize, and share the fun! 🎮</b> <br><br> <b>#PS98Tech #JavaScript #WebGame #TicTacToe #HTML #CSS</b> </div>

> **🎯 Game Design Philosophy**: This Tic Tac Toe implementation demonstrates how classic games can be modernized with contemporary web technologies while maintaining their essential simplicity. The focus on clean code, smooth animations, and intuitive user experience makes it both enjoyable to play and valuable as a learning resource for web development fundamentals.
