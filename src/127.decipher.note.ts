/*
Companies: Atlassian
You are running a classroom and suspect that some of your students are
passing around the answer to a multiple-choice question in 2D grids of 
letters. The word may start anywhere in the grid, and consecutive letters 
can be either immediately below or immediately to the right of the previous
letter.

Example 1:
words = ['baby','list','cat','dada']
note1='ctay'
find(words,note1) -> cat
note2='iddlisdst'
find(words,note2) -> list
note3='dadda'
find(words,note3) -> dada
note3='ball'
find(words,note3) -> -
*/

function find(words: string[], note1: string) {
  let m: { [key: string]: number } = {};
  for (let i = 0; i < note1.length; i++) {
    m[note1[i]] = m[note1[i]] ? m[note1[i]]+1 : 1;
  }
  for (let w of words) {
    let size = 0;
    const t = { ...m };console.log(t,m)
    for (let i = 0; i < w.length; i++) {
      if (!t[w[i]]) break;
      else {
        t[w[i]]--;
        size++;
      }
    }
    if (w.length === size) return w;
  }
  return '-';
}

let words = ['baby', 'list', 'cat', 'dada'];
let note1 = 'ctay';
console.log(find(words, note1));
note1 = 'iddlisdst';
console.log(find(words, note1));
note1 = 'dadda';
console.log(find(words, note1));

