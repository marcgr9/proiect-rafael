String.prototype.includesAny = function(this: string, values: string[]): boolean {
    return values.some(str => this.includes(str))
}
