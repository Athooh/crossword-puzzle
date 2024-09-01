// Function to parse the puzzle string into a 2D grid
function parsePuzzle(puzzle) {
    if (typeof puzzle !== 'string' || puzzle.trim() === '') {
        return null;
    }
    const rows = puzzle.trim().split('\n');
    const grid = rows.map(row => row.split(''));
    return grid;
}

// Function to find positions where words can be placed in the grid
function findWordPositions(grid) {
    const positions = [];
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            const cell = grid[row][col];
            if (!isNaN(cell) && cell > '0' && cell <= '2') {
                const count = parseInt(cell, 10);
                positions.push({ row, col, count });
            }
        }
    }
    return positions;
}

// Function to validate if the number of words matches the puzzle requirements
function validateWordCount(grid, words) {
    let expectedWordCount = 0;
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            const cell = grid[row][col];
            if (!isNaN(cell) && cell > '0' && cell <= '2') {
                expectedWordCount += parseInt(cell, 10);
            }
        }
    }
    
    // Check if the number of words matches the expected count and all words are unique
    return expectedWordCount === words.length && new Set(words).size === words.length;
}

// Function to check if a word can be placed at a specific position and direction
function canPlaceWord(grid, word, row, col, direction) {
    const wordLength = word.length;
    
    if (direction === 'horizontal') {
        if (col + wordLength > grid[row].length) return false;
        for (let i = 0; i < wordLength; i++) {
            const cell = grid[row][col + i];
            if (cell !== '0' && cell !== word[i] && (cell === '.' || isNaN(cell))) return false;
        }
    } else if (direction === 'vertical') {
        if (row + wordLength > grid.length) return false;
        for (let i = 0; i < wordLength; i++) {
            const cell = grid[row + i][col];
            if (cell !== '0' && cell !== word[i] && (cell === '.' || isNaN(cell))) return false;
        }
    }
    return true;
}

// Function to place a word in the grid
function placeWord(grid, word, row, col, direction) {
    if (!canPlaceWord(grid, word, row, col, direction)) return false;

    const wordLength = word.length;

    if (direction === 'horizontal') {
        for (let i = 0; i < wordLength; i++) {
            grid[row][col + i] = word[i];
        }
    } else if (direction === 'vertical') {
        for (let i = 0; i < wordLength; i++) {
            grid[row + i][col] = word[i];
        }
    }

    return true;
}

// Function to remove a word from the grid
function removeWord(grid, word, row, col, direction) {
    const wordLength = word.length;
    if (direction === 'horizontal') {
        for (let i = 0; i < wordLength; i++) {
            grid[row][col + i] = '0';
        }
    } else if (direction === 'vertical') {
        for (let i = 0; i < wordLength; i++) {
            grid[row + i][col] = '0';
        }
    }
}

// Main function to solve the crossword puzzle
function crosswordSolver(puzzle, words) {
    const grid = parsePuzzle(puzzle);
    if (!grid || !Array.isArray(words) || words.length === 0) return 'Error';
    
    // Sort words by length in descending order for better efficiency
    words.sort((a, b) => b.length - a.length);
    if (words.length < 3) return "Error"
    
    const positions = findWordPositions(grid);
    if (!validateWordCount(grid, words)) return 'Error';

    let solutionsFound = 0;

    // Recursive backtracking function to solve the puzzle
    const backtrack = (index) => {
        if (index === words.length) {
            solutionsFound++;
            return solutionsFound === 1;
        }
        const word = words[index];
        for (const { row, col, count } of positions) {
            if (count > 0) {
                // Try placing the word horizontally
                if (placeWord(grid, word, row, col, 'horizontal')) {
                    if (backtrack(index + 1)) return true;
                    removeWord(grid, word, row, col, 'horizontal');
                }
                // Try placing the word vertically
                if (placeWord(grid, word, row, col, 'vertical')) {
                    if (backtrack(index + 1)) return true;
                    removeWord(grid, word, row, col, 'vertical');
                }
            }
        }
        return false;
    };

    const hasSolution = backtrack(0);
    if (!hasSolution || solutionsFound > 1) return 'Error';

    return gridToString(grid);
}

// Function to convert the grid back to a string representation
function gridToString(grid) {
    return grid.map(row => row.join('')).join('\n');
}

// Example usage
const puzzle = '2001\n0..0\n2000\n0..0'
const words = ['casa', 'alan', 'ciao', 'anta']

console.log(crosswordSolver(puzzle, words))