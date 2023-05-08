import PropTypes from 'prop-types';
import { } from './ImageGallery.styled';

const ImageGallery = ({ images, onClose }) => {
  return (
      <ul>
         {images &&
        images.map(image => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            tags={image.tags}
            onClose={() => onClose(image.largeImageURL)}
          />
        ))}
    </ul>
  );
};

ImageGallery.propTypes = {
    
};

export default ImageGallery;