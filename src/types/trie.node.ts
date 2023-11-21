export class TrieNode {
  children: TrieNode;
  value: string | number;

  constructor() {
    this.children = {} as any;
    this.value = ''; 
  }
}
