import { ListNode } from "./types/list.node";

/**
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by 
splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
 */

function print(list: ListNode, txt?: any) {
  let a = [];
  list = list ? list.next : null;
  while (list) {
    a.push(list.val);
    list = list.next;
  }
  console.log(txt || '', a);
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const listHead1 = list1;
  const listHead2 = list2;
  while (true) {
    if (!list1.next || !list2.next) break;
    print(list1, 1);
    print(list2, 2);
    const a = list1.next;
    const b = list2.next;
    if (a.val >= b.val) {
      list2.next = b.next;
      list1.next = b;
      b.next = a;
      list2 = list2.next;
    } else {
      list1 = list1.next;
    }
  }
  return list1;
}

function driver() {
  const list1 = new ListNode();
  const list2 = new ListNode();

  list1.next = new ListNode(1);
  list1.next.next = new ListNode(2);
  list1.next.next.next = new ListNode(4);

  list2.next = new ListNode(1);
  list2.next.next = new ListNode(3);
  list2.next.next.next = new ListNode(4);

  print(mergeTwoLists(list1, list2), 'result');
}

driver();
