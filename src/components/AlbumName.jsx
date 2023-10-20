export const AlbumName = ({name, external_urls}) => {
  return (
    <div className="album-title">
      <a href={external_urls.spotify}>{name}</a>
    </div>
  )
}
