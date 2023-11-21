import { ListNode } from './types/list.node';

/* 
Given the head of a singly linked list, return the middle node 
of the linked list.
If there are two middle nodes, return the second middle node.

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, 
we return the second one.
*/

function print(h: ListNode) {
  let a = [];
  while (h) {
    a.push(h.val);
    h = h.next;
  }
  console.log(a);
}

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head?.next?.next;
  let size = head && head.next && !head.next.next? 2 : 0;
  while (fast) {
    slow = slow.next;
    if (fast.next?.next) size += 2;
    else size += 1;
    fast = fast?.next?.next;
  }
  return size != 0 && size % 2 === 0 ? slow.next : slow;
}

let list1 = new ListNode(1);
print(middleNode(list1));
list1.next = new ListNode(2);
print(middleNode(list1));
list1.next.next = new ListNode(3);
print(middleNode(list1));
list1.next.next.next = new ListNode(4);
print(middleNode(list1));
// list1.next.next.next.next = new ListNode(5);
// print(middleNode(list1));
// list1.next.next.next.next.next = new ListNode(6);
// print(middleNode(list1));
