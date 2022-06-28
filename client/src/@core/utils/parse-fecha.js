export const parseFecha = (data, num) => {
  let splt = data[num]['fecha'].split(":");
  let largo = splt[0].length;

  return (splt[0][largo-2] + splt[0][largo-1] + ':' + splt[1][1] + splt[1][0])
}
