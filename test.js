/* eslint-env mocha */
const expect = require('chai').expect

const isValidHex = (string) => {
  // code here
}

describe('isValidHex should', () => {
  it('return true if given string is valid hexadecimal (3 or six letters a-f or numbers)', () => {
    expect(isValidHex('1D1f21')).to.be.ok
    expect(isValidHex('89D387')).to.be.ok
    expect(isValidHex('b0f')).to.be.ok
  })
  it('return false if given string is not valid hexadecimal', () => {
    expect(isValidHex('potato')).to.equal(false)
    expect(isValidHex('AFZ435')).to.equal(false)
  })
})

const isSmaller = (string) => {
  // code here
}

describe('isSmaller (using regex.test or string.match) should', () => {
  it('return true if string is a number smaller than 55', () => {
    expect(isSmaller('3')).to.be.ok
    expect(isSmaller('10')).to.be.ok
    expect(isSmaller('25')).to.be.ok
  })
  it('return false if string is a number greater than 55', () => {
    expect(isSmaller('56')).to.equal(false)
    expect(isSmaller('129')).to.equal(false)
  })
})

const search = (dict, string) => {
  // code here
}

describe('search function should', () => {
  const dict = ['abacus', 'polywhirl', 'obama', 'shorts', 'frisbee', 'potato']
  it('find the elements of an array that begin with a given string', () => {
    expect(search(dict, 'ab')).to.deep.equal(['abacus'])
    expect(search(dict, 'po')).to.deep.equal(['polywhirl', 'potato'])
  })
  it('return empty array if no matches are present', () => {
    expect(search(dict, 'no')).to.deep.equal([])
  })
})

const isValidTime = (string) => {
  // code here
}

describe('isValidTime function should', () => {
  it('return true for valid time in xx:xx:xx format', () => {
    expect(isValidTime('00:30:00')).to.be.ok
    expect(isValidTime('23:00:59')).to.be.ok
    expect(isValidTime('03:03:03')).to.be.ok
  })
  it('return false for invalid time', () => {
    expect(isValidTime('24:01:01')).to.equal(false)
    expect(isValidTime('14:15:60')).to.equal(false)
    expect(isValidTime('potato')).to.equal(false)
    expect(isValidTime('03:55:143')).to.equal(false)
  })
})

const findProperNouns = (string) => {
  // code here
}

describe('findProperNouns (using regex.exec or string.match) should', () => {
  it('return a proper noun in a given string, in an array', () => {
    const string = 'proper noun in a sentence about Paris.'
    expect(findProperNouns(string)).to.deep.equal(['Paris'])
  })
  it('return several proper nouns in a given string, ignoring those following full stops', () => {
    const string2 = 'Several words in a string. Like Berlin, Rotterdam, Founders & Coders.'
    expect(findProperNouns(string2)).to.deep.equal(['Berlin', 'Rotterdam', 'Founders', 'Coders'])
  })
})
