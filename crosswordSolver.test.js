// // Import the functions from crosswordSolver.js
// const {
//     parsePuzzle,
//     findWordPositions,
//     validateWordCount,
//     canPlaceWord,
//     placeWord,
//     removeWord,
//     crosswordSolver,
//     gridToString
//   } = require('./');
  
//   describe('Crossword Solver Tests', () => {
//     // Test parsePuzzle
//     test('parsePuzzle should return null for non-string input', () => {
//       expect(parsePuzzle(123)).toBeNull();
//       expect(parsePuzzle({})).toBeNull();
//     });
  
//     test('parsePuzzle should return null for empty string', () => {
//       expect(parsePuzzle('')).toBeNull();
//     });
  
//     test('parsePuzzle should parse a valid puzzle string into a grid', () => {
//       const puzzle = '...\n100\n0.0';
//       const expected = [['.', '.', '.'], ['1', '0', '0'], ['0', '.', '0']];
//       expect(parsePuzzle(puzzle)).toEqual(expected);
//     });
  
//     // Test findWordPositions
//     test('findWordPositions should return correct positions for a puzzle grid', () => {
//       const grid = [['.', '.', '.'], ['1', '0', '0'], ['0', '.', '0']];
//       const expectedPositions = [{ row: 1, col: 0, count: 1 }];
//       expect(findWordPositions(grid)).toEqual(expectedPositions);
//     });
  
//     // Test validateWordCount
//     test('validateWordCount should return true when word count matches positions', () => {
//       const grid = [['.', '.', '.'], ['1', '0', '0'], ['0', '.', '0']];
//       const words = ['cat'];
//       expect(validateWordCount(grid, words)).toBe(true);
//     });
  
//     test('validateWordCount should return false when word count does not match positions', () => {
//       const grid = [['.', '.', '.'], ['1', '0', '0'], ['0', '.', '0']];
//       const words = ['cat', 'dog'];
//       expect(validateWordCount(grid, words)).toBe(false);
//     });
  
//     // Test canPlaceWord
//     test('canPlaceWord should return true for a valid horizontal placement', () => {
//       const grid = [['.', '.', '.'], ['1', '0', '0'], ['0', '.', '0']];
//       expect(canPlaceWord(grid, 'cat', 1, 1, 'horizontal')).toBe(true);
//     });
  
//     test('canPlaceWord should return true for a valid vertical placement', () => {
//       const grid = [['.', '.', '.'], ['1', '0', '0'], ['0', '.', '0']];
//       expect(canPlaceWord(grid, 'cat', 0, 1, 'vertical')).toBe(true);
//     });
  
//     test('canPlaceWord should return false for an invalid placement', () => {
//       const grid = [['.', '.', '.'], ['1', '0', '0'], ['0', '.', '0']];
//       expect(canPlaceWord(grid, 'cat', 1, 1, 'diagonal')).toBe(false);
//     });
  
//     // Test placeWord
//     test('placeWord should place a word horizontally', () => {
//       const grid = [['.', '.', '.'], ['1', '0', '0'], ['0', '.', '0']];
//       const expectedGrid = [['.', '.', '.'], ['1cat', '0', '0'], ['0', '.', '0']];
//       placeWord(grid, 'cat', 1, 1, 'horizontal');
//       expect(grid).toEqual(expectedGrid);
//     });
  
//     test('placeWord should place a word vertically', () => {
//       const grid = [['.', '.', '.'], ['1', '0', '0'], ['0', '.', '0']];
//       const expectedGrid = [['.', 'c', '.'], ['1', 'a', '0'], ['0', 't', '0']];
//       placeWord(grid, 'cat', 0, 1, 'vertical');
//       expect(grid).toEqual(expectedGrid);
//     });
  
//     test('placeWord should not place a word if invalid', () => {
//       const grid = [['.', '.', '.'], ['1', '0', '0'], ['0', '.', '0']];
//       const originalGrid = JSON.parse(JSON.stringify(grid)); // Clone the grid
//       expect(placeWord(grid, 'cat', 1, 1, 'diagonal')).toBe(false);
//       expect(grid).toEqual(originalGrid); // Grid should remain unchanged
//     });
  
//     // Test removeWord
//     test('removeWord should remove a word placed horizontally', () => {
//       const grid = [['.', '.', '.'], ['1cat', '0', '0'], ['0', '.', '0']];
//       const expectedGrid = [['.', '.', '.'], ['1', '0', '0'], ['0', '.', '0']];
//       removeWord(grid, 'cat', 1, 1, 'horizontal');
//       expect(grid).toEqual(expectedGrid);
//     });
  
//     test('removeWord should remove a word placed vertically', () => {
//       const grid = [['.', 'c', '.'], ['1', 'a', '0'], ['0', 't', '0']];
//       const expectedGrid = [['.', '.', '.'], ['1', '0', '0'], ['0', '.', '0']];
//       removeWord(grid, 'cat', 0, 1, 'vertical');
//       expect(grid).toEqual(expectedGrid);
//     });
  
//     // Test crosswordSolver
//     test('crosswordSolver should solve a valid crossword puzzle', () => {
//       const puzzle = '...\n100\n0.0';
//       const words = ['cat'];
//       expect(crosswordSolver(puzzle, words)).not.toBe('Error');
//     });
  
//     test('crosswordSolver should return Error for an invalid puzzle', () => {
//       const puzzle = '2001\n0..0\n1000\n0..0';
//       const words = ['casa', 'casa', 'ciao', 'anta'];
//       expect(crosswordSolver(puzzle, words)).toBe('Error');
//     });
  
//     // Test gridToString
//     test('gridToString should return a correctly formatted string from the grid', () => {
//       const grid = [['.', '.', '.'], ['1cat', '0', '0'], ['0', '.', '0']];
//       const expectedString = '...\n1cat\n0.0';
//       expect(gridToString(grid)).toBe(expectedString);
//     });
//   });
const {
    parsePuzzle,
    findWordPositions,
    validateWordCount,
    canPlaceWord,
    placeWord,
    removeWord,
    crosswordSolver,
    gridToString
  } = require('./crosswordSolver'); // Assuming all functions are exported from this file
  
  describe('Crossword Solver', () => {
    describe('parsePuzzle', () => {
      it('should parse a valid puzzle string', () => {
        const puzzle = '2001\n0..0\n1000\n0..0';
        const expected = [
          ['2', '0', '0', '1'],
          ['0', '.', '.', '0'],
          ['1', '0', '0', '0'],
          ['0', '.', '.', '0']
        ];
        expect(parsePuzzle(puzzle)).toEqual(expected);
      });
  
      it('should return null for an empty string', () => {
        expect(parsePuzzle('')).toBeNull();
      });
  
      it('should return null for non-string input', () => {
        expect(parsePuzzle(123)).toBeNull();
      });
    });
  
    describe('findWordPositions', () => {
      it('should find correct word positions', () => {
        const grid = [
          ['2', '0', '0', '1'],
          ['0', '.', '.', '0'],
          ['1', '0', '0', '0'],
          ['0', '.', '.', '0']
        ];
        const expected = [
          { row: 0, col: 0, count: 2 },
          { row: 0, col: 3, count: 1 },
          { row: 2, col: 0, count: 1 }
        ];
        expect(findWordPositions(grid)).toEqual(expected);
      });
    });
  
    describe('validateWordCount', () => {
      it('should validate correct word count', () => {
        const grid = [
          ['2', '0', '0', '1'],
          ['0', '.', '.', '0'],
          ['1', '0', '0', '0'],
          ['0', '.', '.', '0']
        ];
        const words = ['casa', 'alan', 'ciao', 'anta'];
        expect(validateWordCount(grid, words)).toBeTruthy();
      });
  
      it('should invalidate incorrect word count', () => {
        const grid = [
          ['2', '0', '0', '1'],
          ['0', '.', '.', '0'],
          ['1', '0', '0', '0'],
          ['0', '.', '.', '0']
        ];
        const words = ['casa', 'alan', 'ciao'];
        expect(validateWordCount(grid, words)).toBeFalsy();
      });
  
      it('should invalidate duplicate words', () => {
        const grid = [
          ['2', '0', '0', '1'],
          ['0', '.', '.', '0'],
          ['1', '0', '0', '0'],
          ['0', '.', '.', '0']
        ];
        const words = ['casa', 'casa', 'ciao', 'anta'];
        expect(validateWordCount(grid, words)).toBeFalsy();
      });
    });
  
    describe('canPlaceWord', () => {
      const grid = [
        ['2', '0', '0', '1'],
        ['0', '.', '.', '0'],
        ['1', '0', '0', '0'],
        ['0', '.', '.', '0']
      ];
  
      it('should allow placing a word horizontally', () => {
        expect(canPlaceWord(grid, 'casa', 0, 0, 'horizontal')).toBeTruthy();
      });
  
      it('should allow placing a word vertically', () => {
        expect(canPlaceWord(grid, 'ciao', 0, 0, 'vertical')).toBeTruthy();
      });
  
      it('should not allow placing a word out of bounds', () => {
        expect(canPlaceWord(grid, 'toolong', 0, 0, 'horizontal')).toBeFalsy();
      });
  
      it('should not allow placing a word over non-matching letters', () => {
        grid[0][1] = 'x';
        expect(canPlaceWord(grid, 'casa', 0, 0, 'horizontal')).toBeFalsy();
      });
    });
  
    describe('placeWord and removeWord', () => {
      let grid;
  
      beforeEach(() => {
        grid = [
          ['2', '0', '0', '1'],
          ['0', '.', '.', '0'],
          ['1', '0', '0', '0'],
          ['0', '.', '.', '0']
        ];
      });
  
      it('should place and remove a word horizontally', () => {
        expect(placeWord(grid, 'casa', 0, 0, 'horizontal')).toBeTruthy();
        expect(grid[0]).toEqual(['c', 'a', 's', 'a']);
        removeWord(grid, 'casa', 0, 0, 'horizontal');
        expect(grid[0]).toEqual(['0', '0', '0', '0']);
      });
  
      it('should place and remove a word vertically', () => {
        expect(placeWord(grid, 'ciao', 0, 0, 'vertical')).toBeTruthy();
        expect(grid.map(row => row[0])).toEqual(['c', 'i', 'a', 'o']);
        removeWord(grid, 'ciao', 0, 0, 'vertical');
        expect(grid.map(row => row[0])).toEqual(['0', '0', '0', '0']);
      });
    });
  
    describe('crosswordSolver', () => {
      it('should solve a simple crossword puzzle', () => {
        const puzzle = '2001\n0..0\n1000\n0..0';
        const words = ['casa', 'alan', 'ciao', 'anta'];
        const solution = crosswordSolver(puzzle, words);
        expect(solution).not.toBe('Error');
        // You might want to add more specific checks here
      });
  
      it('should return "Error" for invalid input', () => {
        expect(crosswordSolver('', [])).toBe('Error');
        expect(crosswordSolver('2001\n0..0\n1000\n0..0', ['too', 'few'])).toBe('Error');
      });
    });
  
    describe('gridToString', () => {
      it('should convert grid to string', () => {
        const grid = [
          ['c', 'a', 's', 'a'],
          ['i', '.', '.', 'l'],
          ['a', 'n', 't', 'a'],
          ['o', '.', '.', 'n']
        ];
        const expected = 'casa\ni..l\nanta\no..n';
        expect(gridToString(grid)).toBe(expected);
      });
    });
  });