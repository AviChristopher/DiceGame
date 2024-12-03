

# Roll Dice Game (JavaScript)

## Description
The **Roll Dice Game** is a simple web-based game built with HTML, CSS, and JavaScript. In this game, two dice are rolled, and the player with the higher number wins. If both dice show the same value, it's a draw. The images of the dice are dynamically updated to show the results of the roll. The game provides an interactive way for users to test their luck by rolling the dice and determining the winner.

## Features
- Randomly generates two dice rolls each time the game is played.
- Displays the result of each dice roll as an image.
- Compares the dice rolls and announces the winner.
- If the rolls are the same, the game announces a draw.
- Easy-to-use interface for a fun dice rolling experience.
- **Refresh the page** to play the game again.

## How It Works
1. When the user loads the page, the `rollDice()` function is called.
2. The function generates two random dice rolls using `Math.random()`.
3. The images corresponding to the dice values are updated dynamically.
4. The result is displayed, announcing the winner or if there is a draw.
5. **To play again**, simply refresh the browser window (or press the refresh button) to roll the dice again.

## Technologies Used
- **HTML**: Provides the structure and layout for the dice images and the result display.
- **CSS**: Styles the page and the elements, including the dice and text.
- **JavaScript**: Contains the logic for generating random dice rolls, updating the images, and determining the winner.

## How to Use
1. Open the project in your web browser.
2. The dice will roll automatically and display the outcome.
3. The page will show the result, indicating whether Player 1 or Player 2 won or if there was a draw.
4. **To play again**, simply refresh the page.

## Example
When you open the page:
- Dice 1: shows "images/dice1.png"
- Dice 2: shows "images/dice3.png"
- The page might show "Player 2 wins 🚩 !" if the second die is higher than the first.

## Files
- **index.html**: Contains the HTML structure for displaying the dice and the result.
- **style.css**: The styles for the dice images and text.
- **script.js**: The JavaScript file that handles the logic for rolling the dice and determining the winner.
