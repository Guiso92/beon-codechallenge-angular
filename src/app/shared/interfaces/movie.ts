export interface Movie {
  id: number;
  cast?: Array<object>;
  description_full: string;
  genres: Array<string>;
  large_cover_image: string;
  medium_cover_image: string;
  medium_screenshot_image1?: string;
  medium_screenshot_image2?: string;
  medium_screenshot_image3?: string;
  rating: number;
  runtime: number;
  title: string;
  year: number;
}
