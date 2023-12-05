import { json } from '@sveltejs/kit'

const names = {
	firstNames: [
		'Twinkle',
		'Jolly',
		'Merry',
		'Sparkle',
		'Glitter',
		'Frosty',
		'Snowy',
		'Ginger',
		'Peppermint',
		'Cookie',
		'Blinky',
		'Candy',
		'Tinsel',
		'Sugarplum',
		'Jingle',
		'Sprinkle',
		'Pudding',
		'Ivy',
		'Pine',
		'Star',
		'Noel',
		'Bell',
		'Holly',
		'Elfie',
		'Blizzard',
		'Joy',
		'Mistle',
		'Clove',
		'Cinnamon',
		'Evergreen',
		'Snowbell',
		'Tinseltoes',
		'Crispin',
		'Gingersnap',
		'Fizzy',
		'Figgy',
		'Garland',
		'Yule',
		'Cranberry',
		'Biscuit',
		'Nutmeg',
		'Snickerdoodle',
		'Fudge',
		'Chestnut',
		'Maple',
		'Pumpernickel',
		'Flake',
		'Wreath',
		'Eggnog',
		'Glimmer',
		'Flicker',
		'Sleigh',
		'Coco',
		'Marshmallow',
		'Pomander',
		'Nog',
		'Cider',
		'Winter',
		'Garnet',
		'Icelyn',
	],
	lastNames: [
		'McJingles',
		'Evergreen',
		'Sugarsocks',
		'Icicletoes',
		'Starlight',
		'Snowbelle',
		'Pinecone',
		'Tinselbreeches',
		'Hollyberry',
		'Gingerbread',
		'Snowflake',
		'Frostfoot',
		'Iceskate',
		'Candycane',
		'Mintyleaf',
		'Spruce',
		'Poinsettia',
		'Merryweather',
		'Snowdrift',
		'Candlewick',
		'Ivytwist',
		'Mittens',
		'Elfbrew',
		'Wintersong',
		'Chillbreeze',
		'Puddingpie',
		'Gumdrop',
		'Toymaker',
		'Tinseltop',
		'Sugarplumfairy',
		'Snugglesocks',
		'Glacierglide',
		'Frostspear',
		'Iciclebeam',
		'Peppermintstick',
		'Gingerale',
		'Merrygold',
		'Presentsnatcher',
		'Fireside',
		'Yuletide',
		'Frostglove',
		'Twinkletoes',
		'Sledrunner',
		'Giftwrapper',
		'Ornamenttwirler',
		'Sparkleglimmer',
		'Jinglebells',
		'Snowglobe',
		'Silverbells',
		'Ribbonweaver',
		'Mistlebow',
		'Treetopper',
		'Wreathspinner',
		'Starshine',
		'Joybringer',
		'Hollysprig',
		'Frostberry',
		'Elfdancer',
		'Northstar',
		'Snowstorm',
	],
}

export const GET = ({ setHeaders }) => {
	return json(names)
}
