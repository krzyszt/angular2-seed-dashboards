import {Component, OnInit} from 'angular2/core';

import {Ng2Highcharts} from 'ng2-highcharts/ng2-highcharts';

@Component({
	selector: 'hgdash',
	templateUrl: './dashboard/components-highcharts/hgdash.html',
	styleUrls: [
		'./dashboard/components-highcharts/hgdash.css'
	],
	directives: [Ng2Highcharts]
})

export class HgDash implements OnInit {
	chartOptions = {
		chart: {
			type: 'line'
		},
		title: {
			text: 'Broadcasting Idle Off Channels '
		},
		xAxis: {
			categories: ['Broadcasting',' Idle', 'Off']
		},
		yAxis: {
			title: {
				text: 'No '
			}
		},
		series: [{
			name: 'North',
			data: [1, 0, 4]
		}, {
			name: 'South',
			data: [5, 7, 3]
		}]
	};

	chartBar = {
		chart: {
			type: 'bar'
		},
		title: {
			text: 'Active Users Live Reload'
		},
		xAxis: {
			categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		},
		series: [
			{
				name: 'NC',
				data: [7057, 6858, 6643, 6570, 6115, 107, 31, 635, 203, 2, 2]
			}, {
				name: 'OK',
				data: [54047, 52484, 50591, 49479, 46677, 33, 156, 947, 408, 6, 2]
			}, {
				name: 'KO',
				data: [11388, 11115, 10742, 10757, 10290, 973, 914, 4054, 732, 34, 2]
			}, {
				name: 'VALID',
				data: [8836, 8509, 8255, 7760, 7621, 973, 914, 4054, 732, 34, 2]
			}, {
				name: 'CHECK',
				data: [115, 162, 150, 187, 172, 973, 914, 4054, 732, 34, 2]
			}, {
				name: 'COR',
				data: [12566, 12116, 11446, 10749, 10439, 973, 914, 4054, 732, 34, 2]
			}
		]
	};

	ngOnInit() : any {
		setInterval(() => {
			this.chartOptions = {
				chart: {
					type: 'line'
				},
				title: {
					text: 'Broadcasting Idle Off Channels '
				},
				xAxis: {
					categories: ['Broadcasting',' Idle', 'Off']
				},
				yAxis: {
					title: {
						text: 'No '
					}
				},
				series: [{
					name: 'North',
					data: [Math.trunc(Math.random() * 10), Math.trunc(Math.random() * 10), Math.trunc(Math.random() * 10)]
				}, {
					name: 'South',
					data: [Math.trunc(Math.random() * 10), Math.trunc(Math.random() * 10), Math.trunc(Math.random() * 10)]
				}]
			};
		}, 3000);

		setInterval(() => {
			var randomArray: () => number[] = () => {
				var randomData = [];

				for (var i =0; i <= 10; i++) {
					randomData.push(Math.trunc(Math.random() * 5000));
				}

				return randomData;
			};

			this.chartBar = {
				chart: {
					type: 'bar'
				},
				title: {
					text: 'Active Users Live Reload'
				},
				xAxis: {
					categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
				},
				series: [
					{
						name: 'NC',
						data: randomArray()
					}, {
						name: 'OK',
						data: randomArray()
					}, {
						name: 'KO',
						data: randomArray()
					}, {
						name: 'VALID',
						data: randomArray()
					}, {
						name: 'CHECK',
						data: randomArray()
					}, {
						name: 'COR',
						data: randomArray()
					}
				]

			};
		}, 4000);
	}
}
