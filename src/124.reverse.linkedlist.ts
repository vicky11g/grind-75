import { ListNode } from './types/list.node';

/* 
Given the head of a singly linked list, reverse the list, and return 
the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []
*/

function print(h: ListNode) {
  let a = [];
  while (h) {
    a.push(h.val);
    h = h.next;
  }
  console.log(a);
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;
  let next = null;
  print(head);
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
}

let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

print(reverseList(list1));
