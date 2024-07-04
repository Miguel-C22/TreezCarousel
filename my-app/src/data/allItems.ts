import { Product, BaseModel, ProductStatus} from '../schema/products';

const products: Product[] = [
    {
        id: '1',
        price: 50.00,
        name: 'WYLD Huckleberry 250 mg Gummies - 10 Count',
        status: ProductStatus.Discontinued,
        productCategory: 'Gummies',
        productSubCategory: 'Relaxed',
        description: `We cultivated these flavors over the years, carefully honing our recipes to create edible delights that enhance every moment with real fruit and THC-free hemp. Perfect for preparing for life's adventures. It's a little like surfing the clouds on a surfboard made of pure energy. Ingredients: Sugar, Tapioca Syrup, Water, Huckleberry Juice Concentrate, Pectin (Pectin, Sodium Citrate), Coconut Oil, Broad Spectrum Hemp Extract, Natural Flavoring, Citric Acid, Malic Acid, Sunflower Lecithin. Contains: Coconut`,
        brandId: 'WYLD',
        brand: 'WYLD',
        images: ['/images/gummies/WYLD Huckleberry 250 mg Gummies - 10 Count.avif']
    },
    {
        id: '2',
        price: 20.12,
        name: 'WYLD Pear 1000 mg CBD+CBG Gummies - 40 Count',
        status: ProductStatus.LowStock,
        productCategory: 'Gummies',
        productSubCategory: 'Relaxed',
        description: `We cultivated these flavors over the years, carefully honing our recipes to create edible delights that enhance every moment with real fruit and THC-free hemp. Perfect for preparing for life's adventures. It's a little like surfing the clouds on a surfboard made of pure energy. Sugar, Tapioca Syrup, Water, Pear Juice Concentrate, Gelatin, Coconut Oil, Natural Flavoring, Citric Acid, Malic Acid, Pectin (Pectin, Sodium Citrate), *Hemp Extract, Sunflower Lecithin Contains: Coconut`,
        brandId: 'WYLD',
        brand: 'WYLD',
        images: ['/images/gummies/WYLD Pear 1000 mg CBD+CBG Gummies - 40 Count.avif']
    },
    {
        id: '3',
        price: 30.88,
        name: 'WYLD Elderberry 250 mg Gummies - 10 Count',
        status: ProductStatus.OutOfStock,
        productCategory: 'Gummies',
        productSubCategory: 'Relaxed',
        description: `We cultivated these flavors over the years, carefully honing our recipes to create edible delights that enhance every moment with real fruit and THC-free hemp. Perfect for preparing for life's adventures. It's a little like surfing the clouds on a surfboard made of pure energy. Ingredients: Sugar, Tapioca Syrup, Water, Elderberry Juice Concentrate, Pectin (Pectin, Sodium Citrate), Coconut Oil, Broad Spectrum Hemp Extract, Natural Flavoring, Citric Acid, Malic Acid, Sunflower Lecithin. Contains: Coconut`,
        brandId: 'WYLD',
        brand: 'WYLD',
        images: ['/images/gummies/WYLD Elderberry 250 mg Gummies - 10 Count.avif']
    },
    {
        id: '4',
        price: 25.00,
        name: 'WYLD Lemon 250 mg Gummies - 10 Count',
        status: ProductStatus.Sale,
        productCategory: 'Gummies',
        productSubCategory: 'Relaxed',
        description: `We cultivated these flavors over the years, carefully honing our recipes to create edible delights that enhance every moment with real fruit and THC-free hemp. Perfect for preparing for life's adventures. It's a little like surfing the clouds on a surfboard made of pure energy. Ingredients: Sugar, Tapioca Syrup, Water, Lemon Juice Concentrate, Pectin (Pectin, Sodium Citrate), Coconut Oil, Broad Spectrum Hemp Extract, Natural Flavoring, Sunflower Lecithin. Contains: Coconut`,
        brandId: 'WYLD',
        brand: 'WYLD',
        images: ['/images/gummies/WYLD Lemon 250 mg Gummies - 10 Count.avif']
    },
    {
        id: '5',
        price: 55.65,
        name: 'WYLD Blackberry 250 mg Gummies - 10 Count',
        status: ProductStatus.OutOfStock,
        productCategory: 'Gummies',
        productSubCategory: 'Relaxed',
        description: `We cultivated these flavors over the years, carefully honing our recipes to create edible delights that enhance every moment with real fruit and THC-free hemp. Perfect for preparing for life's adventures. It's a little like surfing the clouds on a surfboard made of pure energy. Ingredients: Sugar, Tapioca Syrup, Water, Blackberry Juice Concentrate, Pectin (Pectin, Sodium Citrate), Coconut Oil, Broad Spectrum Hemp Extract, Natural Flavoring, Citric Acid, Sunflower Lecithin. Contains: Coconut`,
        brandId: 'WYLD',
        brand: 'WYLD',
        images: ['/images/gummies/WYLD Blackberry 250 mg Gummies - 10 Count.avif']
    },
    {
        id: '6',
        price: 35.00,
        name: 'WYLD Raspberry 1000 mg Gummies - 40 Count',
        status: ProductStatus.Sale,
        productCategory: 'Gummies',
        productSubCategory: 'Relaxed',
        description: `We cultivated these flavors over the years, carefully honing our recipes to create edible delights that enhance every moment with real fruit and THC-free hemp. Perfect for preparing for life's adventures. It's a little like surfing the clouds on a surfboard made of pure energy. Ingredients: Sugar, Tapioca Syrup, Water, Raspberry Juice Concentrate, Pectin (Pectin, Sodium Citrate), Coconut Oil, Broad Spectrum Hemp Extract, Natural Flavoring, Citric Acid, Sunflower Lecithin. Contains: Coconut`,
        brandId: 'WYLD',
        brand: 'WYLD',
        images: ['/images/gummies/WYLD Raspberry 1000 mg Gummies - 40 Count.avif']
    },
    {
        id: '7',
        price: 42.00,
        name: 'WYLD Peach 250 mg Gummies - 10 Count',
        status: ProductStatus.PreOrder,
        productCategory: 'Gummies',
        productSubCategory: 'Relaxed',
        description: `We cultivated these flavors over the years, carefully honing our recipes to create edible delights that enhance every moment with real fruit and THC-free hemp. -- Formulated to contain 20mg CBD + 10mg CBC per gummy. -- Perfect for carefree adventures. It's a little like a hot air balloon for your mood.`,
        brandId: 'WYLD',
        brand: 'WYLD',
        images: ['/images/gummies/WYLD Peach 250 mg Gummies - 10 Count.avif']
    },
    {
        id: '8',
        price: 48.56,
        name: 'Vireo | 10mg Milk Chocolate Chews | 10ct',
        status: ProductStatus.Sale,
        productCategory: 'Chocolates',
        productSubCategory: 'Chocolates',
        description: `Vireo's Milk Chocolates are carefully crafted with a single-origin, milk couverture chocolate from Madagascar. Infused with extra cocoa butter, our chocolates are tempered to perfection - providing a luxurious, glossy finish. -- Vireo's chocolates are high-quality medical cannabis edibles. Hand-made by Minnesotans for Minnesotans, right here in Otsego. You can count on our chocolates to be consistently-dosed, seed-to-sale, and have high-quality ingredients. -- Contains: - Couverture Chocolate (Sugar, Cocoa butter, Whole milk powder, Madagascar cocoa beans, Dried skimmed milk, Natural vanilla extract, Emulsifier (Sunflower lecithin), Natural vanilla flavor), Coconut Oil, Cannabis Extract. -- 100mg/THC per bag. 10mg/THC per piece.`,
        brandId: 'Vireo',
        brand: 'Vireo',
        images: ['/images/chocolates/Vireo 10mg Milk Chocolate Chews.avif']
    },
    {
        id: '9',
        price: 21.00,
        name: 'VIOLET TINCTURE - 25 mL BOTTLE',
        status: ProductStatus.PreOrder,
        productCategory: 'Tincture',
        productSubCategory: 'Tincture',
        description: `Vireo Violet is our CBD-based products. Unlike other synthetic products widely advertised online, our Violet products are extracted from plants grown right here in Minnesota and lab-tested for safety and potency. Contains MCT oil (coconut-derived), Ethanol, 100% pure cannabis oil, Minnesota-grown hemp-derived CBD distillate. The primary active ingredient in this medication is cannabidiol (CBD). THC: Trace CBD: 2500 mg/bottle`,
        brandId: 'Vireo',
        brand: 'Vireo',
        images: ['/images/tincture/VIOLET TINCTURE - 25 mL BOTTLE.avif']
    },
    {
        id: '10',
        price: 26.43,
        name: 'GREEN TINCTURE - 25 mL BOTTLE',
        status: ProductStatus.NewArrival,
        productCategory: 'Tincture',
        productSubCategory: 'Tincture',
        description: `Vireo Green products are balanced, with equal amounts of THC and CBD. Contains MCT oil (coconut-derived), Ethanol, 100% pure cannabis oil, Minnesota-grown hemp-derived CBD distillate. The primary active ingredients in this medication are delta-9-tetrahydrocannabinol (THC) and cannabidiol (CBD). THC: 625 mg CBD: 625 mg`,
        brandId: 'Vireo',
        brand: 'Vireo',
        images: ['/images/tincture/GREEN TINCTURE - 25 mL BOTTLE.avif']
    },
    {
        id: '11',
        price:34.19,
        name: 'RED EXTRA STRENGTH TINCTURE - 25 mL BOTTLE',
        status: ProductStatus.NewArrival,
        productCategory: 'Tincture',
        productSubCategory: 'Tincture',
        description: `Vireo Red products are predominantly THC, with a small component of CBD. With all Vireo products, a baseline level of CBD is present, since some studies suggest that CBD can reduce the unpleasant side effects of THC. Contains MCT oil (coconut-derived), Ethanol, 100% pure cannabis oil, Minnesota-grown hemp-derived CBD isolate. The primary active ingredients in this medication are delta-9-tetrahydrocannabinol (THC) and cannabidiol (CBD). THC: 1250 mg/bottle CBD: Trace`,
        brandId: 'Vireo',
        brand: 'Vireo',
        images: ['/images/tincture/RED EXTRA STRENGTH TINCTURE - 25 mL BOTTLE.avif']
    },
    {
        id: '12',
        price: 32.34,
        name: 'YELLOW TINCTURE - 25 mL BOTTLE',
        status: ProductStatus.Discontinued,
        productCategory: 'Tincture',
        productSubCategory: 'Tincture',
        description: `Vireo Yellow products have a 4:1 ratio of THC to CBD. Contains MCT oil (coconut-derived), Ethanol, 100% pure cannabis oil, Minnesota-grown hemp-derived CBD isolate. The primary active ingredients in this medication are delta-9-tetrahydrocannabinol (THC) and cannabidiol (CBD). THC: 500 mg CBD: 125 mg`,
        brandId: 'Vireo',
        brand: 'Vireo',
        images: ['/images/tincture/YELLOW TINCTURE - 25 mL BOTTLE.avif']
    },
    {
        id: '13',
        price: 27.00,
        name: 'INDIGO TINCTURE - 25 mL BOTTLE',
        status: ProductStatus.Regular,
        productCategory: 'Tincture',
        productSubCategory: 'Tincture',
        description: `Vireo Indigo products are predominantly CBD, with a small component of THC. Contains MCT oil (coconut-derived), Ethanol, 100% pure cannabis oil, Minnesota-grown hemp-derived CBD distillate. The primary active ingredients in this medication are cannabidiol (CBD) and delta-9-tetrahydrocannabinol (THC). THC: 62.5 mg CBD: 1187.5 mg`,
        brandId: 'Vireo',
        brand: 'Vireo',
        images: ['/images/tincture/INDIGO TINCTURE - 25 mL BOTTLE.avif']
    },
];

export default products;