import { Cow } from 'src/app/models/Cow';
import { Component, OnInit } from '@angular/core';
import { CowsService } from 'src/app/services/cows.service';

@Component({
  selector: 'app-cows',
  templateUrl: './cows.component.html',
  styleUrls: ['./cows.component.css']
})
export class CowsComponent implements OnInit {
  cows: Cow[] = [];
  cowsUpdateInfoStructure: any[] = [];
  sortField: string = '';
  direction: string = '';

  constructor(private cowsService: CowsService) { }

  ngOnInit(): void {
    this.cowsService.getCows().subscribe(
      res => {
        this.cows = res; console.log(res);
        this.cows.forEach(cow => {
          let updateInfo = { id: cow.id, newWeight: 0, todaysMilkCount: 0, newMilkingDate: new Date() };
          this.cowsUpdateInfoStructure.push(updateInfo);
        })
      },
      err => console.log(err)
    );
  }

  sortBy(field: string): void {
    let f = field as keyof Cow;
    if (this.direction == "up") {
      this.cows.sort((a, b) => a[f] > b[f] ? -1 : 0);
      this.direction = "down";
    } else {
      this.cows.sort((a, b) => a[f] < b[f] ? -1 : 0);
      this.direction = "up";
    }
    this.sortField = field;
  }

  onDelete(id: number): void {
    this.cowsService.deleteCow(id).subscribe(
      res => this.cows = this.cows.filter(c => c.id !== id),
      err => console.log(err),
    );
  }

  onUpdate(cow: Cow): void {
    // this.cowsService.updateCow(cow).subscribe(
    //   res => this.cows = this.cows.filter(c => c.id !== id),
    //   err => console.log(err),
    // );
  }
}
