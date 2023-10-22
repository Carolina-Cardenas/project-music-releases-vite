export const CoverImage = ({ images }) => {
  const selectedImage = images.find((img) => img.width === 300);
  return (
    <div className="album">
      <img src={selectedImage.url} alt="Medium Image" className="album-cover" />
      <div className="container-buttons">
        <img className="favorite-button" src="/src/assets/icons/heart.svg" alt="Descripción del icono" />
        <img className="play-button" src="/src/assets/icons/play.svg" alt="Descripción del icono"  />
        <img className="ellipsis-button"src="/src/assets/icons/dots.svg"alt="Descripción del icono"  />
      </div>
    </div>
  );
};