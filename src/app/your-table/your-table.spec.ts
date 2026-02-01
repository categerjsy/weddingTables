import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTable } from './your-table';

describe('YourTable', () => {
  let component: YourTable;
  let fixture: ComponentFixture<YourTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
