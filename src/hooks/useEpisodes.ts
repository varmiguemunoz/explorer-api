export async function useEpisodes(containerId: any) {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character"); // funcion o metodo

    const data = await response.json();

    if (containerId) {
      data.results.map((item: any) => {
        containerId.innerHTML += `<img src=${item.image} alt="rick"/>`;
      });
    }

    return data;
  } catch (error) {
    throw error;
  }
}
