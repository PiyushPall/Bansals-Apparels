/**
 * @typedef {'home' | 'women' | 'men' | 'kids' | 'cosmetics' | 'contact'} PageId
 */

/**
 * @typedef {Object} ProductItem
 * @property {string} id
 * @property {string} title
 * @property {'women' | 'men' | 'kids' | 'cosmetics'} category
 * @property {string} subCategory
 * @property {'0-2' | 'toddler' | 'pre-teen'} [ageGroup]
 * @property {string[]} tags
 * @property {string} image
 * @property {string} [secondaryImage]
 * @property {string[]} [gallery]
 * @property {string} altText
 * @property {string} description
 * @property {boolean} [isFreshArrival]
 * @property {string} [featuredBadge]
 * @property {string[]} [colors]
 * @property {string[]} [sizes]
 * @property {string} [fabric]
 * @property {string} [alterationNotes]
 */

/**
 * @typedef {Object} ReviewItem
 * @property {string} id
 * @property {string} author
 * @property {number} rating
 * @property {string} date
 * @property {string} review
 * @property {string} location
 * @property {boolean} verified
 * @property {string} avatarColor
 */

/**
 * @typedef {Object} HeroSlide
 * @property {number} id
 * @property {string} title
 * @property {string} hinglishSubtitle
 * @property {string} description
 * @property {string} tag
 * @property {string} ctaText
 * @property {PageId} ctaPage
 * @property {string} image
 * @property {string} altText
 */

/**
 * @typedef {Object} StoreInfo
 * @property {string} name
 * @property {string} address
 * @property {string} phone
 * @property {string} phoneRaw
 * @property {string} whatsappNumber
 * @property {number} rating
 * @property {number} reviewCount
 * @property {{ days: string, timings: string, note?: string }[]} hours
 * @property {{ title: string, description: string }[]} landmarks
 */

export const PAGE_IDS = ['home', 'women', 'men', 'kids', 'cosmetics', 'contact'];
