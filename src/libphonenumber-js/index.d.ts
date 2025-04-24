declare module '@aljosap/libphonenumber-js' {
  export class PhoneNumberUtil {
    static getInstance(): PhoneNumberUtil;
    parse(number: string, region?: string): PhoneNumber;
    format(number: PhoneNumber, format: PhoneNumberFormat): string;
    isValidNumber(number: PhoneNumber): boolean;
    isValidNumberForRegion(number: PhoneNumber, region: string): boolean;
    getRegionCodeForNumber(number: PhoneNumber): string | null;
    getNumberType(number: PhoneNumber): PhoneNumberType;
    isPossibleNumber(number: PhoneNumber): boolean;
    isPossibleNumberString(number: string, regionDialingFrom?: string): boolean;
    truncateTooLongNumber(number: PhoneNumber): boolean;
    isNumberMatch(firstNumber: string | PhoneNumber, secondNumber: string | PhoneNumber): MatchType;
    findNumbers(text: string, defaultRegion?: string): PhoneNumberMatch[];
    parseAndKeepRawInput(number: string, regionCode?: string): PhoneNumber;
  }

  export class PhoneNumber {
    getCountryCode(): number;
    getNationalNumber(): number;
    getExtension(): string | null;
    clearExtension(): void;
    getNumberOfLeadingZeros(): number;
    setNumberOfLeadingZeros(numberOfLeadingZeros: number): void;
    hasNumberOfLeadingZeros(): boolean;
    clearNumberOfLeadingZeros(): void;
    isItalianLeadingZero(): boolean;
    setItalianLeadingZero(isLeadingZero: boolean): void;
    hasItalianLeadingZero(): boolean;
    clearItalianLeadingZero(): void;
    getRawInput(): string | null;
    setRawInput(rawInput: string): void;
    hasRawInput(): boolean;
    clearRawInput(): void;
    getCountryCodeSource(): PhoneNumber.CountryCodeSource;
    setCountryCodeSource(countryCodeSource: PhoneNumber.CountryCodeSource): void;
    hasCountryCodeSource(): boolean;
    clearCountryCodeSource(): void;
    getPreferredDomesticCarrierCode(): string | null;
    setPreferredDomesticCarrierCode(preferredDomesticCarrierCode: string): void;
    hasPreferredDomesticCarrierCode(): boolean;
    clearPreferredDomesticCarrierCode(): void;
  }

  export class PhoneNumberMatch {
    start(): number;
    end(): number;
    number(): PhoneNumber;
    rawString(): string;
  }

  export enum PhoneNumberFormat {
    E164 = 0,
    INTERNATIONAL = 1,
    NATIONAL = 2,
    RFC3966 = 3
  }

  export enum PhoneNumberType {
    FIXED_LINE = 0,
    MOBILE = 1,
    FIXED_LINE_OR_MOBILE = 2,
    TOLL_FREE = 3,
    PREMIUM_RATE = 4,
    SHARED_COST = 5,
    VOIP = 6,
    PERSONAL_NUMBER = 7,
    PAGER = 8,
    UAN = 9,
    VOICEMAIL = 10,
    UNKNOWN = -1
  }

  export enum MatchType {
    NOT_A_NUMBER = 0,
    NO_MATCH = 1,
    SHORT_NSN_MATCH = 2,
    NSN_MATCH = 3,
    EXACT_MATCH = 4
  }

  export namespace PhoneNumber {
    export enum CountryCodeSource {
      FROM_NUMBER_WITH_PLUS_SIGN = 1,
      FROM_NUMBER_WITH_IDD = 5,
      FROM_NUMBER_WITHOUT_PLUS_SIGN = 10,
      FROM_DEFAULT_COUNTRY = 20
    }
  }

  export class AsYouTypeFormatter {
    constructor(region: string);
    inputDigit(digit: string): string;
    clear(): void;
    inputDigitAndRememberPosition(digit: string): string;
    getRememberedPosition(): number;
  }

  export class ShortNumberInfo {
    static getInstance(): ShortNumberInfo;
    isPossibleShortNumber(number: PhoneNumber): boolean;
    isValidShortNumber(number: PhoneNumber): boolean;
    isPossibleShortNumberForRegion(number: PhoneNumber, regionCode: string): boolean;
    isValidShortNumberForRegion(number: PhoneNumber, regionCode: string): boolean;
    getExpectedCost(number: PhoneNumber): ShortNumberCost;
    getExpectedCostForRegion(number: PhoneNumber, regionCode: string): ShortNumberCost;
  }

  export enum ShortNumberCost {
    PREMIUM_RATE = 0,
    STANDARD_RATE = 1,
    TOLL_FREE = 2,
    UNKNOWN_COST = 3
  }

  export class MetadataLoader {
    loadMetadata(metadataPath: string): void;
  }
}
