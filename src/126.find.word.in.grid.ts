/*
Companies: Atlassian
Given a grid and a word, write a function that returns the location of the
 word in the grid as a list of coordinates. If there are multiple matches, 
 return any one.

grid1 = [
    ['b', 'b', 'b', 'a', 'l', 'l', 'o', 'o'],
    ['b', 'a', 'c', 'c', 'e', 's', 'c', 'n'],
    ['a', 'l', 't', 'e', 'w', 'c', 'e', 'w'],
    ['a', 'l', 'o', 's', 's', 'e', 'c', 'c'],
    ['w', 'o', 'o', 'w', 'a', 'c', 'a', 'w'],
    ['i', 'b', 'w', 'o', 'w', 'w', 'o', 'w']
]
word1_1 = "access"      # [(1, 1), (1, 2), (1, 3), (2, 3), (3, 3), (3, 4)]
word1_2 = "balloon"     # [(0, 2), (0, 3), (0, 4), (0, 5), (0, 6), (0, 7), (1, 7)]

word1_3 = "wow"         # [(4, 3), (5, 3), (5, 4)] OR 
                        # [(5, 2), (5, 3), (5, 4)] OR 
                        # [(5, 5), (5, 6), (5, 7)]
                          
word1_4 = "sec"         # [(3, 4), (3, 5), (3, 6)] OR 
                        # [(3, 4), (3, 5), (4, 5)]    

word1_5 = "bbaal"       # [(0, 0), (1, 0), (2, 0), (3, 0), (3, 1)]


grid2 = [
  ['a'],
]
word2_1 = "a"

grid3 = [
    ['c', 'a'],
    ['t', 't'],
    ['h', 'a'],
    ['a', 'c'],
    ['t', 'g']
]
word3_1 = "cat"
word3_2 = "hat"

grid4 = [
    ['c', 'c', 'x', 't', 'i', 'b'],
    ['c', 'a', 't', 'n', 'i', 'i'],
    ['a', 'x', 'n', 'x', 'p', 't'],
    ['t', 'x', 'i', 'x', 't', 't']
]
word4_1 = "catnip"      # [(1, 0), (1, 1), (1, 2), (1, 3), (1, 4), (2, 4)] OR
                        # [(0, 1), (1, 1), (1, 2), (1, 3), (1, 4), (2, 4)]


All test cases:

search(grid1, word1_1) => [(1, 1), (1, 2), (1, 3), (2, 3), (3, 3), (3, 4)]
search(grid1, word1_2) => [(0, 2), (0, 3), (0, 4), (0, 5), (0, 6), (0, 7), (1, 7)]
search(grid1, word1_3) => [(4, 3), (5, 3), (5, 4)] OR 
                          [(5, 2), (5, 3), (5, 4)] OR 
                          [(5, 5), (5, 6), (5, 7)]
search(grid1, word1_4) => [(3, 4), (3, 5), (3, 6)] OR
                          [(3, 4), (3, 5), (4, 5)]                           
search(grid1, word1_5) => [(0, 0), (1, 0), (2, 0), (3, 0), (3, 1)]

search(grid2, word2_1) => [(0, 0)]

search(grid3, word3_1) => [(0, 0), (0, 1), (1, 1)]
search(grid3, word3_2) => [(2, 0), (3, 0), (4, 0)]

search(grid4, word4_1) => [(1, 0), (1, 1), (1, 2), (1, 3), (1, 4), (2, 4)] OR
                          [(0, 1), (1, 1), (1, 2), (1, 3), (1, 4), (2, 4)]
*/

const grid1 = [
  ['b', 'b', 'b', 'a', 'l', 'l', 'o', 'o'],
  ['b', 'a', 'c', 'c', 'e', 's', 'c', 'n'],
  ['a', 'l', 't', 'e', 'w', 'c', 'e', 'w'],
  ['a', 'l', 'o', 's', 's', 'e', 'c', 'c'],
  ['w', 'o', 'o', 'w', 'a', 'c', 'a', 'w'],
  ['i', 'b', 'w', 'o', 'w', 'w', 'o', 'w'],
];
const word1_1 = 'access';
const word1_2 = 'balloon';
const word1_3 = 'wow';
const word1_4 = 'sec';
const word1_5 = 'bbaal';

const grid2 = [['a']];
const word2_1 = 'a';

const grid3 = [
  ['c', 'a'],
  ['t', 't'],
  ['h', 'a'],
  ['a', 'c'],
  ['t', 'g'],
];
const word3_1 = 'cat';
const word3_2 = 'hat';

const grid4 = [
  ['c', 'c', 'x', 't', 'i', 'b'],
  ['c', 'a', 't', 'n', 'i', 'i'],
  ['a', 'x', 'n', 'x', 'p', 't'],
  ['t', 'x', 'i', 'x', 't', 't'],
];
const word4_1 = 'catnip';

function dfs(grid, i, j, c, indices, tr, cr) {
  if(indices.length === c.length) return; 
  if (c[cr] !== grid[i][j] ) {
    return;
  }
  if(c[cr] === grid[i][j] && !tr[`${i}${j}`]) {
    tr[`${i}${j}`] = grid[i][j];
    indices.push(`(${i},${j})`);
    cr++;
    // console.log(indices)
  }
  if (i + 1 < grid.length) dfs(grid, i + 1, j, c, indices, tr, cr);
  if (j + 1 < grid[0].length) dfs(grid, i, j + 1, c, indices, tr, cr);
  if (i - 1 > -1) dfs(grid, i - 1, j, c, indices, tr, cr);
  if (j - 1 > -1) dfs(grid, i, j - 1, c, indices, tr, cr);
}

function search(gr, w) {
  // console.log(gr)
  // console.log(w)
  for (let i = 0; i < gr.length; i++) {
    for (let j = 0; j < gr[0].length; j++) {
      if ((gr[i][j] === w[0])) {
        let indices = [];
        let tr = {};
        // console.log(i,j,gr[i][j])
        dfs(gr, i, j, w, indices, tr, 0);
        if (indices.length === w.length) {
          // console.log(tr);
          return indices;}
      }
    }
  }
  return -1;
}

console.log(word1_1,search(grid1, word1_1));
console.log(word1_1,search(grid1, word1_2));
console.log(word1_1,search(grid1, word1_3));
