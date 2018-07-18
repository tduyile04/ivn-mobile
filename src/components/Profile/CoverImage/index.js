import React from 'react';

import { Image } from 'react-native';

const CoverImage = () => {
  return (
    <Image
      style={styles.coverImage}
      source={{uri: 'http://www.signalng.com/wp-content/uploads/president-buhari-meets-president-francoise-hollande-at-elysee-1.jpg'}}
    />
  );
}

export default CoverImage;

const styles = {
  coverImage: {
    width: 375,
    height: 76,
  },
}
