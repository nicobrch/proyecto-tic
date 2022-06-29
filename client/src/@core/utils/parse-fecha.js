export const parseFecha = (data, num) => {
  if (data === undefined){
    return ('99:99')
  }
  let splt = data[num]['fecha'].split(":");
  let largo = splt[0].length;

  return (splt[0][largo-2] + splt[0][largo-1] + ':' + splt[1][0] + splt[1][1])
}

export const parseWeek = (data, num) => {
  if (data === undefined){
    return ('99-99')
  }
  let splt = data[num]['fecha'].split("-");

  return (splt[1][0] + splt[1][1] + '-' + splt[2][0] + splt[2][1])
}
