function countApplesAndOranges(s, t, a, b, apples, oranges) {
  var countApples = 0;
  var countOranges = 0;
  for (let appleDistance of apples) {
    if (a + appleDistance >= s && a + appleDistance <= t) {
      countApples++;
    }
  }
  for (let orangeDistance of oranges) {
    if (b + orangeDistance >= s && b + orangeDistance <= t) {
      countOranges++;
    }
  }
  console.log(countApples);
  console.log(countOranges);
}
