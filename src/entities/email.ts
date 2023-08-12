export class Email {
  private static MAX_LENGHT_LOCAL_PART_CHARS = 64
  private static MAX_LENGHT_DOMAIN_PART_CHARS = 63
  private static MAX_LENGHT_DOMAIN_CHARS = 255
  private static MAX_LENGHT_TOTAL_CHARS = 320
  private static EMAIL_REGEX = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

  private static _validateIfEmailIsNullOrEmpty(email: string) {
    if (!email) throw Error()
  }

  private static _validateEmailRegex(email: string) {
    if (!this.EMAIL_REGEX.test(email)) throw Error()
  }

  private static _validateMaxLenght(email: string) {
    if (email.length > this.MAX_LENGHT_TOTAL_CHARS) throw Error()
  }

  private static _validateIfLocalAndDomainIsEmpty(email: string) {
    const [local, domain] = email.split('@')

    if (!local || !domain) throw Error()
  }

  private static _validateMaxLocalAndDomainLenght(email: string) {
    const [local, domain] = email.split('@')

    if (local.length > this.MAX_LENGHT_LOCAL_PART_CHARS) throw Error()
    if (domain.length > this.MAX_LENGHT_DOMAIN_CHARS) throw Error()

    const domainParts = domain.split('.')

    if (domainParts.some(part => part.length > this.MAX_LENGHT_DOMAIN_PART_CHARS)) throw Error()
  }

  static validate(email: string): boolean {
    try {
      this._validateIfEmailIsNullOrEmpty(email)
      this._validateEmailRegex(email)
      this._validateMaxLenght(email)
      this._validateIfLocalAndDomainIsEmpty(email)
      this._validateMaxLocalAndDomainLenght(email)

      return true
    } catch (error) {
      return false;
    }
  }

}
