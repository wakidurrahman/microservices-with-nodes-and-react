import React, { ImgHTMLAttributes } from 'react';

export type BaseComponentProps = {
  id?: string;
  className?: string;
};

type ImageProps = BaseComponentProps &
  Pick<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
    spSrc?: string;
  };
/**
 * Step 2: Define the function
 * Pitfall: React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!
 */
const Image: React.FC<ImageProps> = ({
  src,
  spSrc,
  alt = '',
  className,
  ...props
}) => {
  const spMaxWidth = 768;

  /**
   *  Step 3: Add markup
   *  
   * Pitfall: Without parentheses, any code on the lines after return will be ignored!
   */
  return (
    <div className="a-image">
      {spSrc ? (
        <source srcSet={src} media={`(min-width: ${spMaxWidth + 0.05}px)`} />
      ) : null}
      <img className="a-image__img" src={spSrc || src} alt={alt} {...props} />
    </div>
  );
};


/**
 * Step 1: Export the component
 * 
 * The export default prefix is a standard JavaScript syntax (not specific to React).
 * It lets you mark the main function in a file so that you can later import it from other files.
 */

export default Image;
