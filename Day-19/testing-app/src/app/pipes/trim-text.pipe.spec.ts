import { TestBed } from '@angular/core/testing';
import { TrimTextPipe } from './trim-text.pipe';

describe('TrimTextPipe', () => {

  let pipe : TrimTextPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [
        TrimTextPipe
      ]
    });
    pipe = TestBed.inject(TrimTextPipe);
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the given string if it is shorter than the max length', () => {
    //Arrange
    const shortInput = 'This is a short string',
      expectedResult = 'This is a short string';

    //Act
    const actualResult = pipe.transform(shortInput);

    //Assert
    expect(actualResult).toBe(expectedResult);

  })

  it('should return the truncated string if it is longer than the max length', () => {
    //Arrange
    const longInput = 'Ipsum ipsum consequat officia sit velit commodo excepteur aliquip reprehenderit. Nisi veniam ea excepteur irure Lorem amet. Nostrud et elit laboris tempor minim incididunt pariatur esse. Sint qui do laboris cupidatat consequat irure consequat.',
      expectedResult = 'Ipsum ipsum consequa...';

    //Act
    const actualResult = pipe.transform(longInput, 20);

    //Assert
    expect(actualResult).toBe(expectedResult);
    
  })
});
