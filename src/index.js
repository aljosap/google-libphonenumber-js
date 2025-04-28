goog.provide('i18n.phonenumbers');

goog.require('i18n.phonenumbers.PhoneNumberUtil');
goog.require('i18n.phonenumbers.PhoneNumber');
goog.require('i18n.phonenumbers.PhoneNumberFormat');
goog.require('i18n.phonenumbers.PhoneNumberType');
goog.require('i18n.phonenumbers.AsYouTypeFormatter');
goog.require('i18n.phonenumbers.ShortNumberInfo');

// Export the library
const phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();

module.exports = {
    PhoneNumberUtil: i18n.phonenumbers.PhoneNumberUtil,
    PhoneNumber: i18n.phonenumbers.PhoneNumber,
    PhoneNumberFormat: i18n.phonenumbers.PhoneNumberFormat,
    PhoneNumberType: i18n.phonenumbers.PhoneNumberType,
    AsYouTypeFormatter: i18n.phonenumbers.AsYouTypeFormatter,
    ShortNumberInfo: i18n.phonenumbers.ShortNumberInfo,
    getInstance: () => phoneUtil
};