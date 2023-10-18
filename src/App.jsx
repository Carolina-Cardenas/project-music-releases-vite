import data from "./data.json";
import { Header } from "./components/Header"
import { Album } from "./components/Album";

export const App = () => {
  const albums = data.albums.items
  const renderAlbums = () => {
    return albums.map(
      ({ id, artists, name, images }) => {
        return(
          <Album key={id} artists={artists} name={name} images={images} />
        )
      }
    );
  }
  const renderContent = renderAlbums()
  return <div>
    <Header/>
    <section>{renderContent}</section>
  </div>;
};
