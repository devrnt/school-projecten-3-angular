import { LeerlingModule } from './leerling.module';

describe('LeerlingModule', () => {
  let leerlingModule: LeerlingModule;

  beforeEach(() => {
    leerlingModule = new LeerlingModule();
  });

  it('should create an instance', () => {
    expect(leerlingModule).toBeTruthy();
  });
});
