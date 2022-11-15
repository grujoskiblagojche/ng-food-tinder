export interface SupportedLanguage {
  language: string;
  isMandatory: boolean;
}

export interface Location {
  type: string;
  coordinates: number[];
  classification: number;
  availability: number;
  availabilityTime: number;
}

export interface Address {
  company: string;
  street: string;
  number: string;
  zip: string;
  city: string;
  country: string;
  additional: string;
  notes: string;
  phone: string;
  before: string;
  after: string;
}

export interface CategoryClusterType {
  id: string;
  name: string;
}

export interface CrossSelling {
  isEnabled: boolean;
  categoryClusterType: CategoryClusterType;
}

export interface Attribute {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value: any;
  value_i18n?: any;
}

export interface Asia {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Beef {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Celery {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Cheese {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface CheeseSecondary {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Chicken {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Continental {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface Crustaceans {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Eggs {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Gluten {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface HeroView {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Legumes {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface LegumesSecondary {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface Lupine {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Meat {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface MeatSecondary {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Mediterranean {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Milk {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Mulluscs {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface Mushrooms {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface MushroomsSecondary {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface Mustard {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Nuts {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Oriental {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface OtherIngredient {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value: string;
  value_i18n?: any;
}

export interface OtherIngredientSecondary {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value: string;
  value_i18n?: any;
}

export interface OtherKitchen {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface Pasta {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface PastaSecondary {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Peanuts {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Pork {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Pseudocereal {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface PseudocerealSecondary {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Rice {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface RiceSecondary {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface Salad {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface SaladSecondary {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Seafood {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Sesame {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Soja {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Sulphur {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Traditional {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Vegetables {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface VegetablesSecondary {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Allergens {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value: string;
  value_i18n?: any;
}

export interface Badge {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value: string;
  value_i18n?: any;
}

export interface Bitter {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface ContainsAnimalProducts {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface ContentAmount {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value: number;
  value_i18n?: any;
}

export interface ContentMeasure {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value: string;
  value_i18n?: any;
}

export interface Deposit {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: number;
  value_i18n?: any;
}

export interface Description {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value: string;
  value_i18n?: any;
}

export interface ExtName {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value: string;
  value_i18n?: any;
}

export interface ExtSKU {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value: string;
  value_i18n?: any;
}

export interface FreshProduct {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Halal {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface Hindu {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface Ingredients {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value: string;
  value_i18n?: any;
}

export interface IsOrganic {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface IsSugarfree {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface IsVegan {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface IsVegetarian {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Kosher {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface MaxAmount {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value: number;
  value_i18n?: any;
}

export interface Mhd {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value: number;
  value_i18n?: any;
}

export interface NotPrecomissioned {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface NutritionCalories {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: number;
  value_i18n?: any;
}

export interface NutritionCarbs {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: number;
  value_i18n?: any;
}

export interface NutritionEnergy {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: number;
  value_i18n?: any;
}

export interface NutritionFat {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: number;
  value_i18n?: any;
}

export interface NutritionFibers {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: number;
  value_i18n?: any;
}

export interface NutritionProtein {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: number;
  value_i18n?: any;
}

export interface NutritionSaturatedFat {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: number;
  value_i18n?: any;
}

export interface NutritionSodium {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: number;
  value_i18n?: any;
}

export interface NutritionSugar {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: number;
  value_i18n?: any;
}

export interface PackagingUnit {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: number;
  value_i18n?: any;
}

export interface PlasticWeight {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: number;
  value_i18n?: any;
}

export interface PurchasingPrice {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value: number;
  value_i18n?: any;
}

export interface Salty {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Sku {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value: string;
  value_i18n?: any;
}

export interface Sour {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Supplier {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value: string;
  value_i18n?: any;
}

export interface Sweet {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface TemperatureHigh {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface TemperatureLow {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: any;
  value_i18n?: any;
}

export interface Umami {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: boolean;
  value_i18n?: any;
}

export interface Weight {
  name: string;
  category: string;
  type: number;
  order: number;
  requirement: number;
  isTranslatable: boolean;
  value?: number;
  value_i18n?: any;
}

export interface AttributesMap {
  Asia: Asia;
  Beef: Beef;
  Celery: Celery;
  Cheese: Cheese;
  CheeseSecondary: CheeseSecondary;
  Chicken: Chicken;
  Continental: Continental;
  Crustaceans: Crustaceans;
  Eggs: Eggs;
  Gluten: Gluten;
  HeroView: HeroView;
  Legumes: Legumes;
  LegumesSecondary: LegumesSecondary;
  Lupine: Lupine;
  Meat: Meat;
  MeatSecondary: MeatSecondary;
  Mediterranean: Mediterranean;
  Milk: Milk;
  Mulluscs: Mulluscs;
  Mushrooms: Mushrooms;
  MushroomsSecondary: MushroomsSecondary;
  Mustard: Mustard;
  Nuts: Nuts;
  Oriental: Oriental;
  OtherIngredient: OtherIngredient;
  OtherIngredientSecondary: OtherIngredientSecondary;
  OtherKitchen: OtherKitchen;
  Pasta: Pasta;
  PastaSecondary: PastaSecondary;
  Peanuts: Peanuts;
  Pork: Pork;
  Pseudocereal: Pseudocereal;
  PseudocerealSecondary: PseudocerealSecondary;
  Rice: Rice;
  RiceSecondary: RiceSecondary;
  Salad: Salad;
  SaladSecondary: SaladSecondary;
  Seafood: Seafood;
  Sesame: Sesame;
  Soja: Soja;
  Sulphur: Sulphur;
  Traditional: Traditional;
  Vegetables: Vegetables;
  VegetablesSecondary: VegetablesSecondary;
  allergens: Allergens;
  badge: Badge;
  bitter: Bitter;
  containsAnimalProducts: ContainsAnimalProducts;
  contentAmount: ContentAmount;
  contentMeasure: ContentMeasure;
  deposit: Deposit;
  description: Description;
  extName: ExtName;
  extSKU: ExtSKU;
  freshProduct: FreshProduct;
  halal: Halal;
  hindu: Hindu;
  ingredients: Ingredients;
  isOrganic: IsOrganic;
  isSugarfree: IsSugarfree;
  isVegan: IsVegan;
  isVegetarian: IsVegetarian;
  kosher: Kosher;
  maxAmount: MaxAmount;
  mhd: Mhd;
  notPrecomissioned: NotPrecomissioned;
  nutritionCalories: NutritionCalories;
  nutritionCarbs: NutritionCarbs;
  nutritionEnergy: NutritionEnergy;
  nutritionFat: NutritionFat;
  nutritionFibers: NutritionFibers;
  nutritionProtein: NutritionProtein;
  nutritionSaturatedFat: NutritionSaturatedFat;
  nutritionSodium: NutritionSodium;
  nutritionSugar: NutritionSugar;
  packagingUnit: PackagingUnit;
  plasticWeight: PlasticWeight;
  purchasingPrice: PurchasingPrice;
  salty: Salty;
  sku: Sku;
  sour: Sour;
  supplier: Supplier;
  sweet: Sweet;
  temperatureHigh: TemperatureHigh;
  temperatureLow: TemperatureLow;
  umami: Umami;
  weight: Weight;
}

export interface HeatingSettings {
  isHeatable: boolean;
  instructionType: string;
  heatingTime: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  priority: number;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  type: number;
}

export interface SubCategory {
  id: string;
  name: string;
  description: string;
  priority: number;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  type: number;
}

export interface ImageSet {
  id: string;
  title: string;
  fileName: string;
  url: string;
  imageWidth: number;
  imageHeight: number;
  imageType: number;
  targetDevices: number[];
}

export interface TaxRate {
  id: string;
  name: string;
  rate: number;
}

export interface MachineProduct {
  id: string;
  name: string;
  manufacturer: string;
  shortDescription: string;
  description: string;
  price: number;
  pricingRule?: any;
  attributes: Attribute[];
  attributesMap: AttributesMap;
  subsidyTypes: string[];
  heatingSettings: HeatingSettings;
  category: Category;
  subCategory: SubCategory;
  childProducts: any[];
  imageSet: ImageSet[];
  isDigital: boolean;
  taxRate: TaxRate;
  quantity: number;
}

export interface MachineProductVote extends MachineProduct {
  vote?: boolean;
}

export interface Sepa {
  limitDisabled: boolean;
  monthlyLimit?: any;
}

export interface PaymentLimit {
  sepa: Sepa;
}

export interface Data {
  id: string;
  name: string;
  currency: string;
  qrCode: string;
  group?: any;
  color: string;
  isOnline: boolean;
  language: string;
  supportedLanguages: SupportedLanguage[];
  location: Location;
  launchdate?: any;
  launchdateRaw: string;
  address: Address;
  crossSelling: CrossSelling;
  subsidyGroup?: any;
  priority: number;
  machineProducts: MachineProduct[];
  packages: any[];
  paymentLimit: PaymentLimit;
  videos?: any;
  distance: number;
  blockedPaymentMethodTypes?: any;
}

export interface RootObject {
  apiVersion: string;
  status: string;
  data: Data;
}
