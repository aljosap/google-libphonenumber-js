JavaScript build of Google's libphonenumber library.

## Installation

```bash
    npm install @aljosap/google-libphonenumber-js
```

## Usage

```typescript
          import { PhoneNumberUtil, PhoneNumber } from '@aljosap/libphonenumber-js';

          const phoneUtil = PhoneNumberUtil.getInstance();
          // or
          // import { getInstance } from '@aljosap/google-libphonenumber-js';
          // const phoneUtil = getInstance();

          const number = new PhoneNumber();
          number.setRawInput('+38765111444');
          const isValid = phoneUtil.isValidNumber(number);
```

 ## License

Apache-2.0
