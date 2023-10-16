import React from 'react';
import Image from '../../atoms/image';

type GalleryProps = {
  src?: string;
  alt?: string;
  title: string;
};

const Gallery: React.FunctionComponent<GalleryProps> = ({
  src,
  alt,
  title,
}) => (
  // <section> is lowercase, so React knows we refer to an HTML tag.
  <section>
    <h1>{title}</h1>

    {/**
     * Using a component
     *
     * Now that you’ve defined your Image component, you can nest it inside other components.
     * For example, you can export a Gallery component that uses multiple Image components:
     */}

    {/* <Image /> starts with a capital P, so React knows that we want to use our component called Image. */}
    <Image
      spSrc="https://i.imgur.com/MK3eW3As.jpg"
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
    <Image src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    <Image src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    <Image src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </section>
);

export default Gallery;
