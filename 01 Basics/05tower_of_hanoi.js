function toh(n, from_bar, to_bar, aux_bar) {
  if (n === 1) {
    console.log(`Move disk 1 from bar ${from_bar} to bar ${to_bar}`);
    return;
  }
  toh(n - 1, from_bar, aux_bar, to_bar);
  console.log(`Move disk ${n} from bar ${from_bar} to bar ${to_bar}`);
  toh(n - 1, aux_bar, to_bar, from_bar);
}

const n = 3;

toh(n, "A", "B", "C");