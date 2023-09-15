import { Carousel } from '@mantine/carousel';
import { Autocomplete } from '@mantine/core';

export function CarouselAbout() {
    return (
        <div style={{ height: 600, display: 'flex' }}>
          <Carousel withIndicators height="100%" sx={{ flex: 1 }}>
            <Carousel.Slide>1</Carousel.Slide>
            <Carousel.Slide>2</Carousel.Slide>
            <Carousel.Slide>3</Carousel.Slide>
          </Carousel>
        </div>
  );
}

export default CarouselAbout;