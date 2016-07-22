import { Component, OnInit } from '@angular/core';

import { DualListComponent } from './dual-list.component';

@Component({
	selector: 'demo-app',
	directives: [ DualListComponent ],
	template: `
<div class="container-fluid">
	<p></p>
	<dual-list [sort]="keepSorted" [source]="xyz" [(destination)]="confirmed" height="265px"></dual-list>
	<p></p>

	<dual-list [sort]="keepSorted" [source]="abc" [(destination)]="yup" height="265px"></dual-list>
</div>
`
})

export class DemoAppComponent implements OnInit {

	private keepSorted:boolean = true;
	
	private xyz:Array<any> = [ 
		{ _id: 1, _name: 'Antonito' },
		{ _id: 2, _name: 'Big Horn' },
		{ _id: 3, _name: 'Sublette' },
		{ _id: 4, _name: 'Toltec' },
		{ _id: 5, _name: 'Osier' },
		{ _id: 6, _name: 'Chama' },
		{ _id: 7, _name: 'Monero' },
		{ _id: 8, _name: 'Lumberton' },
		{ _id: 9, _name: 'Duice' },
		{ _id: 10, _name: 'Navajo' },
		{ _id: 11, _name: 'Juanita' },
		{ _id: 12, _name: 'Pagosa Jct' },
		{ _id: 13, _name: 'Carracha' },
		{ _id: 14, _name: 'Arboles' },
		{ _id: 15, _name: 'Allison' },
		{ _id: 16, _name: 'Tiffany' },
		{ _id: 17, _name: 'La Boca' },
		{ _id: 18, _name: 'Ignacio' },
		{ _id: 19, _name: 'Oxford' },
		{ _id: 20, _name: 'Florida' },
		{ _id: 21, _name: 'Bocea' },
		{ _id: 22, _name: 'Carbon Jct' },
		{ _id: 23, _name: 'Durango' },
		{ _id: 24, _name: 'Home Ranch' },
		{ _id: 25, _name: 'Trimble' },
		{ _id: 26, _name: 'Hermosa' },
		{ _id: 27, _name: 'Rockwood' },
		{ _id: 28, _name: 'Tacoma' },
		{ _id: 29, _name: 'Needleton' },
		{ _id: 30, _name: 'Elk Park' },
		{ _id: 31, _name: 'Silverton' },
		{ _id: 32, _name: 'Eureka' }

		 ];
	private confirmed:Array<any> = [];

	private abc:Array<any> = [ 
		{ _id: 1, _name: 'Mercury' }, 
		{ _id: 2, _name: 'Venus' },
		{ _id: 3, _name: 'Earth' }, 
		{ _id: 4, _name: 'Mars' }, 
		{ _id: 5, _name: 'Jupiter' }, 
		{ _id: 6, _name: 'Saturn' }, 
		{ _id: 7, _name: 'Neptune' }, 
		{ _id: 8, _name: 'Uranus' }
	]; 

	private yup:Array<any> = [];

	ngOnInit() {
	}

}