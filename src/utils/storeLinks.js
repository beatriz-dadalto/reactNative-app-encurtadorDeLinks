import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getLinksSaved(key) {
  const myLinks = await AsyncStorage.getItem(key);
  let linkSaves = JSON.parse(myLinks) || [];
  return linkSaves;
}

export async function saveLink(key, newLink) {
  let linksStored = await getLinksSaved(key);

  // if there is any link with this ID or DUPLICATED ignore it.
  const hasLink = linksStored.some( link => link.id === newLink.id);

  if (hasLink) {
    console.log('Esse link já existe!');
    return;
  }

  linksStored.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(linksStored));
}

export async function deleteLink(links, id) {
  let myLinks = links.filter((item) => {
    return (item.id !== id);
  });

  await AsyncStorage.setItem('BLinks', JSON.stringify(myLinks));

  return myLinks;
}