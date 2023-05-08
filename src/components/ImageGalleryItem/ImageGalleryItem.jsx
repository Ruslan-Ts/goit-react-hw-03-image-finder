import PropTypes from 'prop-types';
import { ImageItem, Image } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ id, webformatURL, tags, onclose }) => {
    return (
        <ImageItem key={id} onCImageItemck={onClose}>
            <Image src={webformatURL} alt={tags} />
        </ImageItem>
    );
};

ImageGalleryItem.PropTypes = {
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    tags: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImageGalleryItem;