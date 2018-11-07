import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hoofdcompetentie } from 'src/app/models/hoofdcompetentie.model';
import { MatDialog } from '@angular/material';
import { delay } from 'q';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-hoofdcompetentie',
  templateUrl: './hoofdcompetentie.component.html',
  styleUrls: ['./hoofdcompetentie.component.css']
})
export class HoofdcompetentieComponent implements OnInit {

  @Input() public hoofdcompetentie: Hoofdcompetentie;
  @Input() public isOpen: boolean;
  @Output() public verwijder = new EventEmitter<Hoofdcompetentie>();
  public edit: boolean;
  public hover: boolean;
  public hoofdcompetentieform: FormGroup;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    ) { }


  ngOnInit() {
    this.hoofdcompetentieform = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(2)]],
      deelcompetenties: this.fb.array([this.createDeelcompetenties])
    });

    this.hoofdcompetentieform.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(ingList => {
        // if the last entry's name is typed, add a new empty one
        // if we're removing an entry's name, and there is an empty one after that one, remove the empty one
        const lastElement = ingList[ingList.length - 1];
        if (
          lastElement.description &&
          lastElement.description.length > 2
        ) {
          this.deelcompetenties.push(this.createDeelcompetenties());
        } else if (ingList.length >= 2) {
          const secondToLast = ingList[ingList.length - 2];
          if (
            !lastElement.description &&
            (!secondToLast.description ||
              secondToLast.description.length < 2)
          ) {
            this.deelcompetenties.removeAt(this.deelcompetenties.length - 1);
          }
        }
      });
  }

  get deelcompetenties(): FormArray {
    return <FormArray>this.hoofdcompetentieform.get('deelcompetenties');
  }

  createDeelcompetenties(): FormGroup {
    return this.fb.group({
      description: ['']
    });
  }


  public toggle(): void {
    this.isOpen = !this.isOpen;
 }

 public animationdone(): boolean {
   return waitfor1s();
 }

 public toggleEdit() {
   this.edit = !this.edit;
 }

 public verwijderHoofdCompetentie(verwijder: string) {
   console.log('verwijder2');
   this.verwijder.emit(this.hoofdcompetentie);
 }

 public showSelected(): string {
   return this.edit ? this.hoofdcompetentie.color : '';
 }

 public makeeditable(): string {
  return this.edit ? 'true' : '';
}
}

function waitfor1s() {
  delay(1000);
  return true;
}
