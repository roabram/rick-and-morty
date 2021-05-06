// export async function getCharacters(name) {
//   return fetch(
//     `https://rickandmortyapi.com/api/character?name=${name}`
//   ).then((response) => response.json().then((response) => response.results));
// }

export async function getCharacters(name) {
  const promise = fetch(
    `https://rickandmortyapi.com/api/character?name=${name}`
  );
  const response = await promise;
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  return data.results;
}

export async function getCharacter(charID) {
  const promise = fetch(`https://rickandmortyapi.com/api/character/${charID}`);
  const response = await promise;
  if (response.status === 404) {
    return {};
  }
  const data = await response.json();
  console.log(data);
  return data;
}
//
