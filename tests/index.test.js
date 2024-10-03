const generateName = require('../src');

describe('generateName', () => {
  it('should generate a unique name from keywords', () => {
    const name = generateName(['user', 'data', 'info']);
    expect(name).toMatch(/^[A-Z][a-zA-Z]+$/);
  });

  it('should limit name length to max length', () => {
    const name = generateName(['a', 'very', 'long', 'name'], 10);
    expect(name.length).toBeLessThanOrEqual(10);  
  });

  it('should throw an error for invalid keywords', () => {
    expect(() => generateName()).toThrow();
    expect(() => generateName(123)).toThrow();
    expect(() => generateName([])).toThrow();
  });
});