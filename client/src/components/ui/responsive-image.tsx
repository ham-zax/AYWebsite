import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  fallbackSrc?: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  sizes = "100vw",
  fallbackSrc = "/placeholder-image.jpg",
  className,
  containerClassName,
  priority = false,
  ...props
}: ResponsiveImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setError(false);
  }, [src]);

  const handleError = () => {
    setError(true);
    if (fallbackSrc && fallbackSrc !== src) {
      setImgSrc(fallbackSrc);
    }
  };

  const aspectRatio = width && height ? { aspectRatio: `${width} / ${height}` } : {};

  return (
    <div
      className={cn(
        "overflow-hidden bg-muted/30",
        isLoaded ? "" : "animate-pulse",
        containerClassName
      )}
      style={aspectRatio}
    >
      <img
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          error && "grayscale contrast-50",
          className
        )}
        {...props}
      />
    </div>
  );
}
