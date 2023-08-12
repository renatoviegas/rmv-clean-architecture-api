import { Email } from "../../src/entities/email"

describe('Email validation', () => {
  describe('Cases valids', () => {
    test('should accept valid email', () => {
      const email = 'any@mail.com'

      expect(Email.validate(email)).toBeTruthy()
    })
  })

  describe('Cases invalids', () => {
    test('should not accept null strings', () => {
      const email = null

      expect(Email.validate(email)).toBeFalsy()
    })

    test('should not accept empty strings', () => {
      const email = ''

      expect(Email.validate(email)).toBeFalsy()
    })

    test('should not accept strings large than 320 chars', () => {
      const email = `any@${'a'.repeat(320)}.com`

      expect(Email.validate(email)).toBeFalsy()
    })

    test('should not accept local part larger than 64 chars', () => {
      const email = `${'l'.repeat(65)}@mail.com`

      expect(Email.validate(email)).toBeFalsy()
    })

    test('should not accept domain part large than 255 chars', () => {
      const email = `any@${'a'.repeat(256)}.com`

      expect(Email.validate(email)).toBeFalsy()
    })

    test('should not accept empty local part', () => {
      const email = '@mail.com'

      expect(Email.validate(email)).toBeFalsy()
    })

    test('should not accept empty domain part', () => {
      const email = 'any@'

      expect(Email.validate(email)).toBeFalsy()
    })

    test('should not accept domain with a part larger than 63 chars', () => {
      const email = `any@${'d'.repeat(64)}.com`

      expect(Email.validate(email)).toBeFalsy()
    })

    test('should not accept local part with invalid char', () => {
      const emailWithSpace = 'any mail@mail.com'
      const emailWithoutAtSign = 'any'
      const emailThatLocalPartEndingWithDot = 'any.@mail.com'
      const emailHasTwoDot = 'any@mail..com'
      const emailHasOthersInvalidsChars = 'a(3@a.com'

      expect(Email.validate(emailWithSpace)).toBeFalsy()
      expect(Email.validate(emailWithoutAtSign)).toBeFalsy()
      expect(Email.validate(emailThatLocalPartEndingWithDot)).toBeFalsy()
      expect(Email.validate(emailHasTwoDot)).toBeFalsy()
      expect(Email.validate(emailHasOthersInvalidsChars)).toBeFalsy()
    })
  })
})
