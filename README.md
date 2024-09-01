# Crossword Puzzle Solver

## Overview

The Crossword Puzzle Solver is a web application designed to solve crossword puzzles by placing words on a grid based on given clues. The application allows users to input a puzzle grid and a list of words, then solves the puzzle by placing the words appropriately. The project is developed using Node.js and follows a modular architecture to handle various aspects of crossword solving.

## Features

- **Parse Puzzle Grid**: Convert a puzzle string into a grid format.
- **Find Word Positions**: Identify potential positions for placing words in the grid.
- **Validate Word Count**: Ensure the number of words matches the expected count for solving.
- **Place and Remove Words**: Add and remove words from the grid as needed.
- **Crossword Solver**: Solve the crossword puzzle based on the provided grid and words.
- **Grid to String Conversion**: Convert the grid back to a string format for display or output.

## Installation

To get started with the Crossword Puzzle Solver, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://learn.zone01kisumu.ke/git/najwang/crossword.git
   cd crossword
   ```

2. **Install Dependencies**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:

   ```bash
   npm install
   ```

3. **Run the Application**

   Start the application with:

   ```bash
   npm start
   ```

4. **Run Tests**

   To ensure everything is working correctly, run the tests using:

   ```bash
   npm test
   ```

## Usage

1. **Input Puzzle Grid**

   Provide the puzzle grid as a string, with rows separated by newline characters. For example:

   ```
   2001
   0..0
   1000
   0..0
   ```

2. **Input Words**

   Provide a list of words to be placed in the puzzle.
   i.e.
   ```
   const emptyPuzzle = `2001
   0..0
   1000
   0..0`
   const words = ['casa', 'alan', 'ciao', 'anta']
   ```

3. **Solve Puzzle**

   Use the `crosswordSolver` function to solve the puzzle. The function will return the solved grid or an error message if the puzzle cannot be solved.

## API Functions

### `parsePuzzle(puzzleString)`

Parses a puzzle string into a grid format.

**Parameters:**

- `puzzleString` (string): The puzzle grid as a string.

**Returns:**

- (array): A 2D array representing the grid.

### `findWordPositions(grid)`

Finds potential positions for placing words in the grid.

**Parameters:**

- `grid` (array): The grid as a 2D array.

**Returns:**

- (array): An array of possible word positions.

### `validateWordCount(grid, words)`

Validates if the number of words matches the expected count.

**Parameters:**

- `grid` (array): The grid as a 2D array.
- `words` (array): The list of words to be placed.

**Returns:**

- (boolean): True if the word count matches, false otherwise.

### `canPlaceWord(grid, word, row, col, direction)`

Checks if a word can be placed in the grid at the specified position.

**Parameters:**

- `grid` (array): The grid as a 2D array.
- `word` (string): The word to be placed.
- `row` (number): The row index.
- `col` (number): The column index.
- `direction` (string): The direction of placement ('horizontal' or 'vertical').

**Returns:**

- (boolean): True if the word can be placed, false otherwise.

### `placeWord(grid, word, row, col, direction)`

Places a word in the grid at the specified position.

**Parameters:**

- `grid` (array): The grid as a 2D array.
- `word` (string): The word to be placed.
- `row` (number): The row index.
- `col` (number): The column index.
- `direction` (string): The direction of placement ('horizontal' or 'vertical').

**Returns:**

- (boolean): True if the word was placed, false otherwise.

### `removeWord(grid, word, row, col, direction)`

Removes a word from the grid at the specified position.

**Parameters:**

- `grid` (array): The grid as a 2D array.
- `word` (string): The word to be removed.
- `row` (number): The row index.
- `col` (number): The column index.
- `direction` (string): The direction of placement ('horizontal' or 'vertical').

**Returns:**

- (boolean): True if the word was removed, false otherwise.

### `crosswordSolver(puzzleString, words)`

Solves the crossword puzzle based on the provided grid and words.

**Parameters:**

- `puzzleString` (string): The puzzle grid as a string.
- `words` (array): The list of words to be placed.

**Returns:**

- (string): The solved grid as a string or an error message.

### `gridToString(grid)`

Converts the grid back to a string format.

**Parameters:**

- `grid` (array): The grid as a 2D array.

**Returns:**

- (string): The grid as a string.

## Contributing

We welcome contributions to the Crossword Puzzle Solver project. If you have suggestions or improvements, please feel free to submit a pull request or open an issue.

## Collaborators

- **Seth Athooh** - Software Developer
- **Nicholas Ajwang** - Software Developer

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to modify any section according to your project specifics.