export let tagToPlayMap = [
	{tag: '一星', play: [
		{titleName: '定位胆', data: [
			{value: 1, label: '复式', checked: true}
		]}
	]},
	{tag: '前二', play: [
		{titleName: '直选', data: [
			{value: 1, label: '直选复式', checked: true, playBoard: [
				'aa'
			]},
			{value: 1, label: '直选单式', checked: false},
			{value: 1, label: '直选和值', checked: false},
			{value: 1, label: '跨度', checked: false},
		]},
		{titleName: '组选', data: [
			{value: 1, label: '组选复式', checked: false},
			{value: 1, label: '组选单式', checked: false},
			{value: 1, label: '组选和值', checked: false},
			{value: 1, label: '组选包胆', checked: false},
		]},
	]},
	{tag: '后二', play: [
		{titleName: '直选', data: [
			{value: 1, label: '直选复式', checked: true},
			{value: 1, label: '直选单式', checked: false},
			{value: 1, label: '直选和值', checked: false},
			{value: 1, label: '跨度', checked: false},
		]},
		{titleName: '组选', data: [
			{value: 1, label: '组选复式', checked: false},
			{value: 1, label: '组选单式', checked: false},
			{value: 1, label: '组选和值', checked: false},
			{value: 1, label: '组选包胆', checked: false},
		]},
	]},
	{tag: '前三', play: [
		{titleName: '直选', data: [
			{value: 1, label: '复式', checked: true},
			{value: 1, label: '单式', checked: false},
			{value: 1, label: '直选和值', checked: false},
			{value: 1, label: '跨度', checked: false},
		]},
		{titleName: '组选', data: [
			{value: 1, label: '组选和值', checked: false},
			{value: 1, label: '组三', checked: false},
			{value: 1, label: '组六', checked: false},
			{value: 1, label: '混合组选', checked: false},
			{value: 1, label: '组选包胆', checked: false},
			{value: 1, label: '组三单式', checked: false},
			{value: 1, label: '组六单式', checked: false},
		]},
		{titleName: '不定位', data: [
			{value: 1, label: '一码不定位', checked: false},
			{value: 1, label: '二码不定位', checked: false}
		]},
	]},
	{tag: '中三', play: [
		{titleName: '直选', data: [
			{value: 1, label: '复式', checked: true},
			{value: 1, label: '单式', checked: false},
			{value: 1, label: '直选和值', checked: false},
			{value: 1, label: '跨度', checked: false},
		]},
		{titleName: '组选', data: [
			{value: 1, label: '组选和值', checked: false},
			{value: 1, label: '组三', checked: false},
			{value: 1, label: '组六', checked: false},
			{value: 1, label: '混合组选', checked: false},
			{value: 1, label: '组选包胆', checked: false},
			{value: 1, label: '组三单式', checked: false},
			{value: 1, label: '组六单式', checked: false},
		]},
		{titleName: '不定位', data: [
			{value: 1, label: '一码不定位', checked: false},
			{value: 1, label: '二码不定位', checked: false}
		]},
	]},
	{tag: '后三', play: [
		{titleName: '直选', data: [
			{value: 1, label: '复式', checked: true},
			{value: 1, label: '单式', checked: false},
			{value: 1, label: '直选和值', checked: false},
			{value: 1, label: '跨度', checked: false},
		]},
		{titleName: '组选', data: [
			{value: 1, label: '组选和值', checked: false},
			{value: 1, label: '组三', checked: false},
			{value: 1, label: '组六', checked: false},
			{value: 1, label: '混合组选', checked: false},
			{value: 1, label: '组选包胆', checked: false},
			{value: 1, label: '组三单式', checked: false},
			{value: 1, label: '组六单式', checked: false},
		]},
		{titleName: '不定位', data: [
			{value: 1, label: '一码不定位', checked: false},
			{value: 1, label: '二码不定位', checked: false}
		]},
	]},
	{tag: '四星', play: [
		{titleName: '直选', data: [
			{value: 1, label: '复式', checked: true},
			{value: 1, label: '单式', checked: false}
		]},
		{titleName: '组选', data: [
			{value: 1, label: '组选24', checked: false},
			{value: 1, label: '组选12', checked: false},
			{value: 1, label: '组选16', checked: false},
			{value: 1, label: '组选4', checked: false}
		]},
		{titleName: '不定位', data: [
			{value: 1, label: '一码不定位', checked: false},
			{value: 1, label: '二码不定位', checked: false}
		]},
	]},
	{tag: '五星', play: [
		{titleName: '直选', data: [
			{value: 1, label: '复式', checked: true},
			{value: 1, label: '单式', checked: false}
		]},
		{titleName: '组选', data: [
			{value: 1, label: '组选120', checked: false},
			{value: 1, label: '组选60', checked: false},
			{value: 1, label: '组选30', checked: false},
			{value: 1, label: '组选20', checked: false},
			{value: 1, label: '组选10', checked: false},
			{value: 1, label: '组选5', checked: false},
		]},
		{titleName: '趣味', data: [
			{value: 1, label: '一帆风顺', checked: false},
			{value: 1, label: '好事成双', checked: false},
			{value: 1, label: '三星报喜', checked: false},
			{value: 1, label: '四季发财', checked: false}
		]},
	]},
	{tag: '大小单双', play: [
		{titleName: '大小单双', data: [
			{value: 1, label: '前二', checked: true},
			{value: 1, label: '后二', checked: false},
			{value: 1, label: '前三', checked: false},
			{value: 1, label: '后三', checked: false},
		]}
	]}
]