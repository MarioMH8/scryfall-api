export interface ImageUris {
	/**
	 *Size varies by card.
	 */
	art: string;
	/**
	 * @deprecated Use `art` instead. Removed on 2027-01-01.
	 * @see https://scryfall.com/blog/new-webp-images-jpeg-deprecations-237
	 */
	art_crop: string;
	/**
	 * @deprecated Use `crop` instead. Removed on 2027-01-01.
	 * @see https://scryfall.com/blog/new-webp-images-jpeg-deprecations-237
	 */
	border_crop: string;
	/**
	 *480 × 680.
	 */
	crop: string;
	/**
	 *672 × 936.
	 */
	display: string;
	/**
	 *488 × 680.
	 */
	grid: string;
	/**
	 *The only remaining JPEG size (488 × 680).
	 */
	jpeg: string;
	/**
	 * @deprecated Use `display` instead. Removed on 2027-01-01.
	 * @see https://scryfall.com/blog/new-webp-images-jpeg-deprecations-237
	 */
	large: string;
	/**
	 * @deprecated Use `grid` for WebP or `jpeg` for JPEG.
	 * @see https://scryfall.com/blog/new-webp-images-jpeg-deprecations-237
	 */
	normal: string;
	/**
	 *Still available, but hotlinking is not allowed after 2027-01-01.
	 */
	png: string;
	/**
	 * @deprecated Use `thumb` instead. Removed on 2027-01-01.
	 * @see https://scryfall.com/blog/new-webp-images-jpeg-deprecations-237
	 */
	small: string;
	/**
	 *146 × 204.
	 */
	thumb: string;
}
