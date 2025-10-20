# @aljosap/libphonenumber-js

JavaScript build of Google's libphonenumber library.

**Google libphonenumber version:** `v9.0.16`

## Installation

```bash
npm install @aljosap/libphonenumber-js
```

## Usage

```typescript
import { PhoneNumberUtil, PhoneNumber } from '@aljosap/libphonenumber-js';

const phoneUtil = PhoneNumberUtil.getInstance();
// or
// import { getInstance } from '@aljosap/libphonenumber-js';
// const phoneUtil = getInstance();

const number = new PhoneNumber();
number.setRawInput('+38161111223');
const isValid = phoneUtil.isValidNumber(number);
```

## License

Apache-2.0
