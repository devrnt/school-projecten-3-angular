import { RichtingModule } from './richting.module';

describe('RichtingModule', () => {
  let richtingModule: RichtingModule;

  beforeEach(() => {
    richtingModule = new RichtingModule();
  });

  it('should create an instance', () => {
    expect(richtingModule).toBeTruthy();
  });
});
