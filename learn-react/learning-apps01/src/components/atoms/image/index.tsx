import React, { ImgHTMLAttributes } from 'react';

export type BaseComponentProps = {
  id?: string;
  className?: string;
};

type ImageProps = BaseComponentProps &
  Pick<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
    spSrc?: string;
  };

const Image: React.FC<ImageProps> = ({
  src,
  spSrc,
  alt = '',
  className,
  ...props
}) => {
  const spMaxWidth = 768;
  return (
    <div className="a-image">
      {spSrc ? (
        <source srcSet={src} media={`(min-width: ${spMaxWidth + 0.05}px)`} />
      ) : null}
      <img className="a-image__img" src={spSrc || src} alt={alt} {...props} />
    </div>
  );
};

export default Image;
