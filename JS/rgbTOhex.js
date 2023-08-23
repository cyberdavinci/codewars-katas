const withinRange = (r, g, b) => {
  if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
    return true;
  }

  return false;
};

const rgb = (r, g, b) => {
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  const rHex = r.toString(16).padStart(2, "0");
  const gHex = g.toString(16).padStart(2, "0");
  const bHex = b.toString(16).padStart(2, "0");

  const hexColor = `#${rHex}${gHex}${bHex}`;
  return hexColor.toUpperCase();
};

console.log(rgb(85, 272, 255));
// Just other solutions to learn from, THEY ARE NOT MINE
// const rgb = (...arg) => arg
//   .map(it => Math.max(Math.min(it, 255), 0)
//     .toString(16)
//     .padStart(2, '0')
//     .toUpperCase()
//    ).join('');
//    function rgb(r, g, b){
//     return [r,g,b].map(function(x) {
//       return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
//     }).join('').toUpperCase();
