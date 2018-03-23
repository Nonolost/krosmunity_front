export class Code {
  code: string;
  isActive: boolean;
  source: string;
  sourceUrl: string;

  constructor(code: string, isActive: boolean, source: string, sourceUrl: string) {
    this.code = code;
    this.isActive = isActive;
    this.source = source;
    this.sourceUrl = sourceUrl;
  }
}
