import { json } from '@sveltejs/kit'

import { differenceInMilliseconds } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

interface ElfPost {
	id: string // Unique identifier for each post
	author: string // Name of the elf who authored the post
	timestamp: string // ISO 8601 format date-time when the post was "created"
	content: string // Text content of the post
	likes: number // Number of likes the post has received
	comments: Comment[] // Array of comments on the post
}

interface Comment {
	id: string // Unique identifier for each comment
	author: string // Name of the elf who authored the comment
	timestamp: string // ISO 8601 format date-time when the comment was "created"
	content: string // Text content of the comment
	likes: number // Number of likes the comment has received
}

function getPostableData(data: ElfPost[]) {
	const nowUTC = utcToZonedTime(new Date(), 'UTC')

	// Filter posts and comments that can be posted
	const postableData = data.filter((post) => {
		const postTimeUTC = utcToZonedTime(new Date(post.timestamp), 'UTC')
		const postDelay = differenceInMilliseconds(postTimeUTC, nowUTC)

		if (postDelay <= 0) {
			// Include the post if it can be posted now
			return true
		}

		// Filter comments that can be posted
		const postableComments = post.comments.filter((comment) => {
			const commentTimeUTC = utcToZonedTime(
				new Date(comment.timestamp),
				'UTC',
			)
			const commentDelay = differenceInMilliseconds(
				commentTimeUTC,
				nowUTC,
			)

			return commentDelay <= 0
		})

		// Include the post only if it has postable comments
		return postableComments.length > 0
	})

	return postableData
}

export const GET = ({ setHeaders }) => {
	const posts: ElfPost[] = [
		{
			id: '35846d4c-1b0f-4ef9-a685-063dc1ddcebd',
			author: 'YuleLogYogi',
			timestamp: '2023-12-23T00:00:01',
			content:
				"Started Elf Yoga classes. Today's pose: 'The Tangled Tinsel.' It's a bit of a stretch! \ud83e\uddd8\u200d\u2642\ufe0f\u2728",
			likes: 50,
			comments: [
				{
					id: '29d8ca75-8bcd-40a5-a930-d092171f3587',
					author: 'ZenZinger',
					timestamp: '2023-12-23T15:55:23',
					content:
						"I'm more flexible in Christmas spirit than in body, but count me in!",
					likes: 23,
				},
			],
		},
		{
			id: '13bfc9e9-7c25-4287-a533-87615f53d842',
			author: 'JingleSparkle',
			timestamp: '2023-12-23T01:25:04',
			content:
				"Just accidentally mixed up the sugar and salt while baking cookies. If Santa starts flying backwards, we'll know why! \ud83c\udf6a\ud83d\ude48",
			likes: 34,
			comments: [
				{
					id: '9233e3a1-0d42-481e-891a-8550c5202111',
					author: 'TwinkleToes',
					timestamp: '2023-12-23T10:17:29',
					content: "Haha, that's one way to spice up the holidays!",
					likes: 10,
				},
				{
					id: 'adf7f6f8-ed62-4327-96ab-b9799147e9a4',
					author: 'CandyCaneCrafter',
					timestamp: '2023-12-23T19:36:13',
					content:
						"Oops! Hope the reindeer don't get a taste of those!",
					likes: 8,
				},
			],
		},
		{
			id: '3726c4bf-52a6-463d-8363-a590c7d598e9',
			author: 'ElfLyricist',
			timestamp: '2023-12-23T01:45:00',
			content:
				"Wrote a rap song about wrapping presents. It\u2019s called 'Wrap Battle: The Unboxable Rhymes.' \ud83c\udfa4\ud83c\udf81",
			likes: 36,
			comments: [
				{
					id: '6d821a8b-d6e4-466b-ac3b-b2c0bb334df5',
					author: 'CarolCrooner',
					timestamp: '2023-12-23T16:37:33',
					content: "Drop that beat, let's have a wrapping party!",
					likes: 21,
				},
			],
		},
		{
			id: '519d6ae4-05c7-49f9-a81c-ef64131d9acf',
			author: 'CandyCaneComic',
			timestamp: '2023-12-23T05:08:32',
			content:
				'Why did the gingerbread man go to the doctor? He felt crumby! \ud83c\udf6a\ud83d\ude02',
			likes: 42,
			comments: [
				{
					id: 'fbf5d982-cb71-4b7b-aa58-f15e33a54af3',
					author: 'CookieCrusader',
					timestamp: '2023-12-23T12:48:08',
					content: 'That joke was half-baked, but I love it!',
					likes: 20,
				},
			],
		},
		{
			id: 'eb42ec33-b613-46f2-9d01-a58aaed2900f',
			author: 'FestiveFashionista',
			timestamp: '2023-12-23T06:08:36',
			content:
				"Experimenting with candy cane stripes in my latest elf outfit. I'm either a fashion icon or a walking peppermint!",
			likes: 47,
			comments: [
				{
					id: '30a39ac4-680f-417f-8077-b6db151b9920',
					author: 'JollyJumper',
					timestamp: '2023-12-23T22:21:26',
					content: "You're mint to be a fashion icon!",
					likes: 20,
				},
			],
		},
		{
			id: 'a96a8eef-95d3-4f6c-a09a-99c1a1396bb5',
			author: 'ElfinEspresso',
			timestamp: '2023-12-23T06:41:13',
			content:
				"Invented a new coffee drink: The Santa Special. It's just regular coffee, but with a tiny hat on the mug! \u2615\ud83c\udf85",
			likes: 46,
			comments: [],
		},
		{
			id: '06426fb7-4e07-48a3-91eb-0f204f502f66',
			author: 'CookieCrafter',
			timestamp: '2023-12-23T06:55:17',
			content:
				'Baking experiment #237: Can you make a cookie too big to eat? Challenge accepted! \ud83c\udf6a\ud83d\udd2c',
			likes: 41,
			comments: [
				{
					id: '3651649a-8f41-40db-806f-fe8130ce5d00',
					author: 'SugarSprinkler',
					timestamp: '2023-12-23T06:59:40',
					content:
						'I volunteer as taste tester for this important research!',
					likes: 19,
				},
			],
		},
		{
			id: '38cad1a1-e04a-466b-b96e-3c38e53c230d',
			author: 'CandleCrafter',
			timestamp: '2023-12-23T07:01:45',
			content:
				"Made a candle that smells like Christmas spirit. Can't light it, it keeps singing carols! \ud83d\udd6f\ufe0f\ud83c\udfb6",
			likes: 48,
			comments: [
				{
					id: 'df65eb27-cd3f-41c3-b2ec-e62b9df4490f',
					author: 'CarolingCutie',
					timestamp: '2023-12-23T12:03:19',
					content:
						"That's one way to keep the music going all season!",
					likes: 23,
				},
			],
		},
		{
			id: '53c8e383-4265-47c8-9d09-6edcda1a4436',
			author: 'SleighEngineer',
			timestamp: '2023-12-23T07:23:54',
			content:
				"Test driving the new sleigh model. It's so fast, I think I just time-traveled to next Christmas! \ud83d\udef7\ud83d\ude80",
			likes: 38,
			comments: [
				{
					id: '6d2898f2-3dd9-4bf7-8a83-bbae25019430',
					author: 'TimeTraveler',
					timestamp: '2023-12-23T15:59:17',
					content: 'Bring back some future cookies!',
					likes: 17,
				},
			],
		},
		{
			id: '76f9ef0a-f4f5-46a5-8638-9e2a8cba30ae',
			author: 'HollyJollyJester',
			timestamp: '2023-12-23T07:39:55',
			content:
				'Told Santa jokes to lighten his mood. He ho-ho-hoed, then put me on present wrapping duty! \ud83c\udf85\ud83c\udf81',
			likes: 49,
			comments: [
				{
					id: '30aab9de-f6f4-4429-9003-5b90a00b66c9',
					author: 'GiftGiggler',
					timestamp: '2023-12-23T08:11:34',
					content:
						'Looks like your jokes wrapped up quite a task for you!',
					likes: 24,
				},
			],
		},
		{
			id: '2c10a95b-17c2-425f-b519-b3caf9645eea',
			author: 'MistletoeMischief',
			timestamp: '2023-12-23T08:07:41',
			content:
				"Hung mistletoe in the workshop. Now everyone's avoiding the center aisle like it's a game of hot potato! \ud83d\ude18\ud83c\udf3f",
			likes: 44,
			comments: [],
		},
		{
			id: 'f06c12f3-3fa8-4d50-9b87-418ef32d3262',
			author: 'GumdropsGuru',
			timestamp: '2023-12-23T08:51:25',
			content:
				"Inventing new gumdrop flavors. Latest creation: 'Roasted Chestnut.' Accidentally tastes like old boots. \ud83c\udf30\ud83d\udc62",
			likes: 42,
			comments: [],
		},
		{
			id: '0df01334-d4b0-48c8-a7f2-f7e11e4b7717',
			author: 'WreathWeaver',
			timestamp: '2023-12-23T09:20:06',
			content:
				'Accidentally made a wreath so big, it can be seen from space. NASA called, they thought it was a new planet! \ud83c\udf0d\ud83c\udf84',
			likes: 47,
			comments: [],
		},
		{
			id: '74362b59-4983-42f2-9572-aa8c34f7d9bb',
			author: 'FrostyFiddler',
			timestamp: '2023-12-23T09:39:42',
			content:
				"Wrote a violin solo called 'Melody of the Northern Lights.' It's as magical as the aurora itself! \ud83c\udfbb\u2728",
			likes: 37,
			comments: [
				{
					id: 'afd48a93-d749-4619-aa9f-a9fa013926d3',
					author: 'AuroraEnthusiast',
					timestamp: '2023-12-23T22:19:32',
					content: "Can't wait to hear it under the night sky!",
					likes: 20,
				},
			],
		},
		{
			id: '581fb5af-26ed-4dec-aeef-d45f28f245ca',
			author: 'RudolphFan',
			timestamp: '2023-12-23T09:42:49',
			content:
				'Tried to start a fan club for Rudolph. Turns out, it already exists and has more members than the workshop! \ud83e\udd8c\ud83d\udc96',
			likes: 49,
			comments: [
				{
					id: '66fdd632-bca9-4f39-9223-706a8451b005',
					author: 'RedNoseAdmirer',
					timestamp: '2023-12-23T17:06:10',
					content:
						"Count me in! Rudolph's nose is the beacon of holiday spirit!",
					likes: 23,
				},
			],
		},
		{
			id: '46781657-d103-4679-836a-e007b3051456',
			author: 'BellsBlazer',
			timestamp: '2023-12-23T09:44:06',
			content:
				'Added extra bells to my shoes. Now I jingle with every step. Stealth mode: impossible! \ud83d\udece\ufe0f\ud83d\udc5f',
			likes: 39,
			comments: [],
		},
		{
			id: '94272f63-7583-401c-935f-7a0238d8c74e',
			author: 'TinselTechnician',
			timestamp: '2023-12-23T09:46:44',
			content:
				"Tangled in tinsel again. I'm starting to think it's plotting against me! \ud83c\udf84\u2728",
			likes: 41,
			comments: [
				{
					id: 'c779a683-f4fc-4ee1-8104-9e6f6b1378ed',
					author: 'MistletoeMaven',
					timestamp: '2023-12-23T11:52:16',
					content:
						"Stay still, I'll come rescue you... or join you, depending on how tangled it is!",
					likes: 18,
				},
			],
		},
		{
			id: 'b146f26f-476c-4644-991f-5d4396bd2418',
			author: 'EvergreenElf',
			timestamp: '2023-12-23T09:47:25',
			content:
				"Organized a tree decorating contest. Lost to a tree. It came 'pre-decorated' with squirrels! \ud83c\udf32\ud83d\udc3f\ufe0f",
			likes: 51,
			comments: [
				{
					id: '4f5d8f4e-40bf-4adc-aa24-f1920e5e88c7',
					author: 'SquirrelWhisperer',
					timestamp: '2023-12-23T18:30:59',
					content:
						'Those squirrels have a natural talent for festive arrangements!',
					likes: 18,
				},
			],
		},
		{
			id: '9bbb1b79-464c-4240-a25a-474034118469',
			author: 'PoinsettiaPainter',
			timestamp: '2023-12-23T11:20:16',
			content:
				'Painted a poinsettia today. It looked so real, the reindeers tried to eat it! \ud83c\udfa8\ud83c\udf3a',
			likes: 35,
			comments: [],
		},
		{
			id: 'f65d20f5-9e8d-42f7-bea6-7ba0ace90889',
			author: 'PeppermintPoet',
			timestamp: '2023-12-23T12:41:03',
			content:
				"Roses are red, violets are blue, if you don't believe in Santa, what's wrong with you? \ud83c\udf85\ud83c\udf39",
			likes: 45,
			comments: [
				{
					id: 'b799780f-dd66-4aa2-8243-da0f8255c66e',
					author: 'SantaFanClub',
					timestamp: '2023-12-23T15:07:03',
					content: "That's going in our next newsletter!",
					likes: 26,
				},
			],
		},
		{
			id: 'b38238bf-fa4b-430a-8162-eef310c2da37',
			author: 'RibbonRhapsody',
			timestamp: '2023-12-23T14:10:52',
			content:
				"Tried to make a ribbon sculpture. Now I'm in a ribbon maze. Send help...or more ribbon! \ud83c\udf80\ud83c\udf00",
			likes: 49,
			comments: [
				{
					id: '188d63d7-701b-4019-9a88-3d1ccbd3e5d3',
					author: 'KnotsNLaughs',
					timestamp: '2023-12-23T17:07:33',
					content:
						"Hang tight, I'm coming with scissors... and maybe a few extra ribbons!",
					likes: 22,
				},
			],
		},
		{
			id: 'f86e9e84-5ed7-4a3b-83b4-38934ec42143',
			author: 'StarlightSkater',
			timestamp: '2023-12-23T14:23:49',
			content:
				"Tried ice skating backwards at the North Pole rink. Ended up inventing a new dance move called the 'Frosty Fumble'! \u26f8\ufe0f\ud83c\udf0c",
			likes: 50,
			comments: [
				{
					id: '80d37a3e-be66-451e-a586-3e033df9fa60',
					author: 'IcyInventor',
					timestamp: '2023-12-23T15:07:11',
					content:
						"Can't wait to try the 'Frosty Fumble' at the next elf party!",
					likes: 16,
				},
			],
		},
		{
			id: 'c24f7076-24a3-4e85-9cd6-f9c912254635',
			author: 'MerryMaker',
			timestamp: '2023-12-23T14:35:38',
			content:
				"Convinced a group of newbie elves that snowflakes are just winter's confetti. Now they're trying to throw it back into the sky! \u2744\ufe0f\ud83c\udf89",
			likes: 45,
			comments: [
				{
					id: 'fd00240e-42fb-4f10-b766-ffa201aad070',
					author: 'PeppermintTwist',
					timestamp: '2023-12-23T18:47:38',
					content:
						"That's hilarious! Next, tell them about the dancing snowmen at midnight!",
					likes: 12,
				},
			],
		},
		{
			id: '7eef1e15-1fcc-4a59-9439-8611156a2749',
			author: 'MerryMarbles',
			timestamp: '2023-12-23T15:41:57',
			content:
				'Started a marble collection. Each marble represents a good deed. Running out of room in my elf house! \ud83c\udfe0\ud83d\udd2e',
			likes: 44,
			comments: [
				{
					id: 'f1f55515-afd6-45d3-ad32-734afbe725c4',
					author: 'GoodDeedsGal',
					timestamp: '2023-12-23T16:56:59',
					content:
						"That's the spirit! Keep spreading those good vibes!",
					likes: 20,
				},
			],
		},
		{
			id: '7e3a68a2-6bfb-42d4-8ac5-6bf205a8305c',
			author: 'FrostFunnies',
			timestamp: '2023-12-23T16:14:22',
			content:
				"Why don't elves use computers? They're afraid of the Windows! \ud83d\udda5\ufe0f\u2744\ufe0f",
			likes: 39,
			comments: [
				{
					id: '39fbb27e-8537-4286-bd36-b1696876f6b1',
					author: 'TechieTinsel',
					timestamp: '2023-12-23T21:56:48',
					content:
						"Good one! I guess we're more into 'Apple' pies anyway!",
					likes: 21,
				},
			],
		},
		{
			id: '32901528-dbbc-4208-90a8-7ad6857b13e7',
			author: 'GiftWrapGuru',
			timestamp: '2023-12-23T16:42:59',
			content:
				'Challenge accepted: Wrapping a bicycle with no visible tape. Stealth wrapping level: Expert! \ud83d\udeb2\ud83c\udf81',
			likes: 35,
			comments: [
				{
					id: 'd5f709f4-0f7a-4e45-8bda-2e2e78885d71',
					author: 'RibbonRacer',
					timestamp: '2023-12-23T21:57:57',
					content: 'Teach me your ways, oh Guru of Gift Wrapping!',
					likes: 22,
				},
			],
		},
		{
			id: '8ad17dd1-5a88-424c-839d-001482b5f069',
			author: 'PolarPuns',
			timestamp: '2023-12-23T17:41:17',
			content:
				'Why was the snowman rummaging through the carrots? He was picking his nose! \ud83e\udd55\u2603\ufe0f',
			likes: 48,
			comments: [],
		},
		{
			id: '7439b261-f32d-4dde-b887-1bfa36ae5823',
			author: 'SnowAngelArtist',
			timestamp: '2023-12-23T17:46:25',
			content:
				'Creating a snow angel masterpiece. Each wing is a different snowflake pattern! \ud83d\ude07\u2744\ufe0f',
			likes: 41,
			comments: [
				{
					id: '70c2585b-dd9f-4690-917f-155eaa38d27b',
					author: 'FlakeFancier',
					timestamp: '2023-12-23T21:44:43',
					content: "That sounds heavenly! Can't wait to see it!",
					likes: 19,
				},
			],
		},
		{
			id: 'b0cec0ec-679c-472d-b427-1dd2fc3c2501',
			author: 'TwinkleTinsel',
			timestamp: '2023-12-23T18:06:46',
			content:
				"Organized the Great Elf Snowball Fight of 2023. I'm a snowball sniper in disguise! \u2744\ufe0f\ud83c\udfaf",
			likes: 53,
			comments: [
				{
					id: '76c39f6e-4d1a-4195-a50d-c45dfc9692f5',
					author: 'SnowFortMaster',
					timestamp: '2023-12-23T20:55:56',
					content:
						"Challenge accepted! You'll never see my snowball coming!",
					likes: 25,
				},
			],
		},
		{
			id: 'c03114cd-8865-4ebd-8758-88eb53f12f90',
			author: 'MerryMaple',
			timestamp: '2023-12-23T18:14:46',
			content:
				'Experimenting with maple syrup in every meal. Breakfast was great, lunch was sticky, dinner will be...interesting! \ud83c\udf41\ud83e\udd5e',
			likes: 46,
			comments: [],
		},
		{
			id: '100d7ba1-3474-435c-ad0d-91e64bc020bb',
			author: 'HollyJollyPrankster',
			timestamp: '2023-12-23T18:22:42',
			content:
				"Put a whoopee cushion on Santa's chair. The workshop's never been more lively! \ud83c\udf85\ud83d\udca8",
			likes: 53,
			comments: [
				{
					id: '4ca710f8-4bb0-4be3-9daf-0b886f6e26ff',
					author: 'ElfieLaughs',
					timestamp: '2023-12-23T19:59:09',
					content:
						"Santa's going to put you on the naughty list for that one!",
					likes: 21,
				},
			],
		},
		{
			id: 'e1c66704-f45c-44b7-be34-b6b44035a91d',
			author: 'GingerbreadGenius',
			timestamp: '2023-12-23T18:32:18',
			content:
				"My gingerbread house turned into a gingerbread skyscraper. Hope it doesn't need a building permit! \ud83c\udf6a\ud83c\udfe2",
			likes: 33,
			comments: [],
		},
		{
			id: '95ff08bc-bd0a-45ec-8333-d285b28072b5',
			author: 'CocoaConnoisseur',
			timestamp: '2023-12-23T18:56:26',
			content:
				"Tried a new hot chocolate recipe today. It's so thick, my spoon stands upright! Perfect for those chilly North Pole nights! \u2615\ud83c\udf84",
			likes: 40,
			comments: [
				{
					id: 'f65428c6-6d86-4189-a82d-cbd7a781c546',
					author: 'TinselToots',
					timestamp: '2023-12-23T20:25:39',
					content: 'Share the recipe, please! My mug is ready!',
					likes: 22,
				},
			],
		},
		{
			id: '6df25448-bc27-41f1-963c-7b6e2d69815f',
			author: 'JollyJuggler',
			timestamp: '2023-12-23T19:05:38',
			content:
				"Juggling Christmas ornaments is harder than it looks. Don't worry, only broke two...dozen. \ud83c\udf84\ud83e\udd39",
			likes: 37,
			comments: [],
		},
		{
			id: '6a05703d-6300-44da-b55f-9ab60775005c',
			author: 'NutcrackerNerd',
			timestamp: '2023-12-23T19:09:07',
			content:
				"Trying to teach the Nutcrackers to dance. So far, they're good at standing still! \ud83d\udc82\u200d\u2642\ufe0f\ud83d\udc83",
			likes: 41,
			comments: [
				{
					id: 'f066bd0d-2097-47ad-ad1d-a6baf12dfd88',
					author: 'DancingDasher',
					timestamp: '2023-12-23T21:15:54',
					content: "Keep at it! They'll crack under pressure!",
					likes: 19,
				},
			],
		},
		{
			id: '2f706490-87ca-4e9d-8499-6604c0d5dc7d',
			author: 'ReindeerWhisperer',
			timestamp: '2023-12-23T20:00:40',
			content:
				"Taught the reindeer a new trick: synchronized antler wiggling. Next stop, Reindeer's Got Talent! \ud83e\udd8c\ud83d\udc83",
			likes: 55,
			comments: [
				{
					id: '84967a7a-ed19-49a3-918d-a4586f091014',
					author: 'ElfAcrobat',
					timestamp: '2023-12-23T23:17:29',
					content:
						'That\u2019s impressive! Can they do the conga next?',
					likes: 24,
				},
			],
		},
		{
			id: '4e6b3159-80f2-4190-b5ae-20c219cf3a9d',
			author: 'CandyStriper',
			timestamp: '2023-12-23T20:17:13',
			content:
				"Started a band called 'The Jingle Bells'. Our first song? 'Rockin\u2019 Around the Christmas Tree' with actual bells! \ud83c\udf84\ud83d\udd14",
			likes: 42,
			comments: [
				{
					id: '3e1ba12a-7963-497a-a385-aa1c4e54b2fd',
					author: 'DrummerDazzle',
					timestamp: '2023-12-23T21:19:37',
					content:
						'That sounds bell-tastic! Can I join with my drum?',
					likes: 20,
				},
			],
		},
		{
			id: 'fa978388-85d3-4aee-bcd2-a3ae6cc26374',
			author: 'FestiveFiddler',
			timestamp: '2023-12-23T21:06:20',
			content:
				"Lost a bet and had to fiddle on the workshop roof. Now they call me 'Fiddler on the Snow'! \ud83c\udfbb\u2744\ufe0f",
			likes: 38,
			comments: [],
		},
		{
			id: '330cf22b-aaac-45d3-9c96-e250aa0c7994',
			author: 'ElfieExplorer',
			timestamp: '2023-12-23T21:06:27',
			content:
				'Went exploring in the snow. Found a yeti! Or...maybe it was just a snowman with a funky hat. \ud83d\uddfb\u26c4',
			likes: 43,
			comments: [],
		},
		{
			id: 'c9a9f504-966e-4392-bb85-d2218f944ed0',
			author: 'ElfieEarTunes',
			timestamp: '2023-12-23T21:17:03',
			content:
				"Elf ears aren't just for hearing \u2013 they're great at tuning radios to the best Christmas stations! \ud83d\udcfb\ud83d\udc42",
			likes: 36,
			comments: [],
		},
		{
			id: 'bffbbaa9-4c6b-4762-b429-f80bf9f29552',
			author: 'SnowflakePainter',
			timestamp: '2023-12-23T22:03:24',
			content:
				'Started painting snowflakes today, but they keep melting. Should have stuck to canvas instead of the window! \u2744\ufe0f\ud83c\udfa8',
			likes: 27,
			comments: [
				{
					id: 'c01723d2-4df3-4bd1-a2d1-1e4ce5cde074',
					author: 'FrostyFingers',
					timestamp: '2023-12-23T23:31:47',
					content:
						'Try painting on ice, it lasts longer and looks cooler!',
					likes: 19,
				},
			],
		},
		{
			id: '1b1aafb0-3aa8-4858-ac41-d65b06814b6f',
			author: 'ElfieSelfie',
			timestamp: '2023-12-23T22:19:29',
			content:
				"Tried to take a selfie with the reindeer. Ended up with a photobombing squirrel. Nature's little prankster! \ud83d\udc3f\ufe0f\ud83d\udcf8",
			likes: 29,
			comments: [],
		},
		{
			id: 'a3344cae-38f2-4a54-b56c-e0b3b48a95cb',
			author: 'GlitterBeard',
			timestamp: '2023-12-23T23:51:39',
			content:
				'Wrapped myself in gift paper by accident. Do you think Santa will notice if I just stand still in the workshop? \ud83c\udf81\ud83d\ude05',
			likes: 52,
			comments: [
				{
					id: 'fc461805-1a61-4d8c-9887-94bc31b3d634',
					author: 'SnowballChamp',
					timestamp: '2023-12-23T23:56:25',
					content: 'I dare you to jump out and surprise him!',
					likes: 15,
				},
			],
		},
	]

	return json(getPostableData(posts))
}
