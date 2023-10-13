import React from 'react';
import Image from '../../atoms/image';

type GalleryProps = {
  src?: string;
  alt?: string;
  title: string;
};

const Gallery: React.FunctionComponent<GalleryProps> = ({ src, alt, title }) => (
  <section>
    <h1>{title}</h1>
    <Image src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    <Image src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    <Image src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    <Image src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </section>
);

export default Gallery;
