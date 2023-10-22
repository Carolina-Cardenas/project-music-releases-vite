import data from "./data.json";
import { Header } from "./components/Header"
import { Album } from "./components/Album";
export const App = () => {
  const albums = data.albums.items
  const renderAlbums = () => {
    return albums.map(
      ({ id, artists, name, images, external_urls }) => {
        return(
          <Album key={id} artists={artists} name={name} images={images} external_urls={external_urls}/>
        )
      }
    );
  }
  const renderContent = renderAlbums()
  return <div>
    <Header/>
    <div className="content">
    {renderContent}
  </div>;
  </div>;
};
