import { RandomPipe } from './random.pipe';

describe('RandomPipe', () => {
    let pipe: RandomPipe;

    beforeEach(() => (pipe = new RandomPipe()));

    it('should create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return a number between 0 and 1 by default', () => {
        spyOn(Math, 'random').and.returnValue(0.5);
        const result = pipe.transform();
        expect(result).toBe(0); // (0.5 * (1 - 0) + 0) = 0.5 rounded to 0
    });

    it('should return a number between custom min and max values', () => {
        spyOn(Math, 'random').and.returnValue(0.7);
        const result = pipe.transform(10, 5);
        expect(result).toBe(9); // (0.7 * (10 - 5) + 5) = 8.5 rounded to 9
    });

    it('should swap min and max when min is greater than max', () => {
        spyOn(Math, 'random').and.returnValue(0.2);
        const result = pipe.transform(5, 10);
        expect(result).toBe(2); // (0.2 * (10 - 0) + 0) = 2
    });

    it('should return the exact number when min equals max', () => {
        spyOn(Math, 'random').and.returnValue(0.9);
        const result = pipe.transform(5, 5);
        expect(result).toBe(5); // Should always return 5 as min and max are equal
    });
});
