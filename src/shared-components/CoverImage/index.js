import React from 'react';

import { Image } from 'react-native';

const CoverImage = ({sourceUri, coverImageStyle}) => {
  return (
    <Image
      style={coverImageStyle}
      source={{uri: sourceUri}}
    />
  );
}

export default CoverImage;
