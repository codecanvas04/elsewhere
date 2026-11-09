/* ============================================================
   elsewhere ✳ — single-page site (plain HTML/CSS/JS)
   Photos: put your images in an /images folder with the names
   used below. If a file is missing, a soft placeholder shows.
   ============================================================ */

const app = document.getElementById("app");

/* Link helper: L(emoji, title, description, url) */
const L = (e, t, d, u) => ({ e, t, d, u });
const SEARCH = (q) => "https://www.google.com/search?q=" + encodeURIComponent(q);
const YT = (q) => "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);

/* ---------- Content ---------- */
const CATEGORIES = [
  {
    id: "play", title: "Play a little", emoji: "🎲", short: "A playful pause, no score needed.",
    intro: "Make room for a little silliness. You need no special equipment or impressive skills—just a few minutes and permission to enjoy them.",
    img: "images/play.jpg", color: "#e4ebdf", edge: "#c3d3bd", doodle: "✦", extraTitle: "One more playful possibility",
    links: [
      L("🟩", "Wordle", "One word puzzle a day. Quick, calm, a little addictive.", "https://www.nytimes.com/games/wordle/index.html"),
      L("♟️", "Play chess", "A friendly game against a stranger or a computer.", "https://www.chess.com/play/online"),
      L("🔢", "Sudoku", "Slow, satisfying number puzzles.", "https://sudoku.com"),
      L("🎨", "skribbl.io", "Draw and guess with friends. Silly and fast.", "https://skribbl.io"),
      L("🧩", "The Mini crossword", "A tiny crossword that takes a couple of minutes.", "https://www.nytimes.com/crosswords/game/mini"),
      L("🌀", "Neal.fun", "A playground of strange, delightful little web toys.", "https://neal.fun"),
    ],
    items: [
      { link: { label: "Try an online word game", url: "https://www.nytimes.com/games/wordle/index.html" }, t: "The alphabet hunt", d: "Look around your room for an object starting with A, then B, then C. Begin with whatever you can see from your chair. For a different challenge, hunt for letters in book titles or packaging." },
      { link: { label: "Browse fun facts", url: "https://neal.fun" }, t: "A tiny trivia round", d: "Choose a subject you love and invent three surprising questions. Start by asking someone nearby—or answer them yourself. For round two, swap subjects and see what you both discover." },
      { t: "Six-word story game", d: "Tell a complete little story in exactly six words. Begin with a place, a surprise, and an ending. Try making your next story funny instead of mysterious." },
      { t: "Kitchen-table categories", d: "Pick a letter and name a food, a city, and an animal beginning with it. Start with the first letter of your name. Add a delightfully odd category for the next round." },
    ],
    extras: [
      "Make a one-minute scavenger hunt: find something round, something soft, and something that reminds you of a friend.",
      "Invent a new word for a feeling you can't quite name, then use it in a sentence today.",
      "Build the tallest tower you can from things on your desk, then give it a dramatic name.",
      "Play 'two truths and a wish' with yourself, and see which one surprises you.",
      "Hum the first line of a song and see if anyone nearby can guess it.",
      "Draw a doodle with your non-dominant hand and give it a title.",
      "Pick a random object and invent three unusual uses for it.",
      "Rename the rooms in your home as if they were cafés or shops.",
    ],
  },
  {
    id: "outside", title: "Go outside", emoji: "🌿", short: "Let the world surprise you.",
    intro: "The outdoors doesn't ask you to accomplish anything. Even a doorstep or open window can offer a change of scene.",
    img: "images/outside.jpg", color: "#f7e3d6", edge: "#e8c4ae", doodle: "❀", extraTitle: "Another way into the fresh air",
    links: [
      L("🐦", "Merlin Bird ID", "Name the bird you just heard.", "https://merlin.allaboutbirds.org"),
      L("🌿", "Seek by iNaturalist", "Identify plants and insects around you.", "https://www.inaturalist.org/pages/seek_app"),
      L("🌌", "Stellarium Web", "See tonight's sky from wherever you stand.", "https://stellarium-web.org"),
      L("🥾", "AllTrails", "Find a gentle walk nearby.", "https://www.alltrails.com"),
      L("🗺️", "Google Maps", "Pick a park or lane you've never visited.", "https://www.google.com/maps/search/parks+near+me"),
    ],
    items: [
      { t: "The colour walk", d: "Choose one colour and take a ten-minute walk looking for it. Begin at your front door. Try another day at a different time and notice how the colour changes in the light." },
      { link: { label: "Identify birds with Merlin", url: "https://merlin.allaboutbirds.org" }, t: "Sit and listen", d: "Find a comfortable spot outdoors and listen for three nearby sounds and one distant sound. Begin with just two quiet minutes. Later, return and compare the soundscape." },
      { t: "Take the unfamiliar turn", d: "On a familiar route, choose one safe street or path you usually pass. Start with a short detour and notice a doorway, tree, or shopfront. Sketch your new route afterward if you like." },
      { t: "A little sky break", d: "Step outside and watch the sky for a minute. Begin by noticing the shape of one cloud or the quality of the light. Check again later and see what has shifted." },
    ],
    extras: [
      "Take your drink outdoors and notice how the air feels against your hands for the first few sips.",
      "Find three different leaves and notice what makes each one unique.",
      "Look for the smallest flower you can find and stay with it for a minute.",
      "Watch the shadows on a wall and see how far they move in five minutes.",
      "Stand still for one minute and count the birds you can hear.",
      "Walk until you find something that smells good, then stop and enjoy it.",
      "Look up at the tallest thing nearby and notice what's at the very top.",
      "Collect one small thing—a leaf, a pebble—to keep on your desk.",
    ],
  },
  {
    id: "make", title: "Make something", emoji: "✂️", short: "Small, satisfying things by hand.",
    intro: "Let your hands take the lead. These little projects are about the pleasure of making, not getting anything perfect.",
    img: "images/make.jpg", color: "#ede6ea", edge: "#d6c8d0", doodle: "✂", extraTitle: "Another small thing to make",
    links: [
      L("🦢", "Origami tutorials", "Watch a simple fold take shape, step by step.", YT("easy origami for beginners")),
      L("✏️", "Quick, Draw!", "Doodle fast and see if a computer can guess.", "https://quickdraw.withgoogle.com"),
      L("🧵", "Red Ted Art", "Easy paper and craft ideas for any age.", "https://www.redtedart.com"),
      L("🛠️", "Instructables", "Small projects made by thousands of tinkerers.", "https://www.instructables.com/craft/"),
      L("📺", "Paper crafts on YouTube", "Watch a tiny project come together.", YT("easy paper crafts for beginners")),
    ],
    items: [
      { link: { label: "Watch an origami tutorial", url: YT("easy origami envelope") }, t: "Fold a paper keepsake", d: "Take a square of scrap paper and fold it into a little envelope. Begin by bringing the corners toward the centre. Slip in a kind note or a tiny found leaf." },
      { t: "A postcard from today", d: "Cut a small rectangle from a cereal box or old card. Begin by decorating one side with colours or shapes. On the back, describe the best ordinary detail of your day." },
      { t: "Arrange a little still life", d: "Gather three objects with different shapes and arrange them on a cloth. Start with something already nearby. Change the lighting or photograph your arrangement as a follow-up." },
      { t: "Make a mini garland", d: "Cut a few small shapes from scrap paper and attach them to string. Begin with just three shapes. Give each one a colour that reminds you of a good moment." },
    ],
    extras: [
      "Make a bookmark from a strip of card and decorate it with the colours of the book you're reading.",
      "Fold a paper boat and decide where its imaginary journey is headed.",
      "Make a tiny zine: fold one sheet into eight pages and fill it with doodles.",
      "Press a flower or leaf between the pages of a heavy book.",
      "Make a paper star and tuck it into a pocket for later.",
      "Decorate a jar or mug with stickers, washi tape or a small drawing.",
      "Cut a snowflake from a napkin and hold it up to the light.",
      "Write a few words in your best handwriting and frame it with doodles.",
    ],
  },
  {
    id: "unwind", title: "Unwind", emoji: "🫖", short: "A softer pace, right here.",
    intro: "Nothing needs fixing right now. Let this be a small invitation to soften the edges of your day.",
    img: "images/unwind.jpg", color: "#e1e8e4", edge: "#c5d3cb", doodle: "☀", extraTitle: "Another gentle pause",
    links: [
      L("🌧️", "A Soft Murmur", "Mix rain, waves and a fire to make your own calm.", "https://asoftmurmur.com"),
      L("🎧", "myNoise", "Beautiful soundscapes you can tune to your mood.", "https://mynoise.net"),
      L("🧘", "Insight Timer", "Free guided meditations, a few minutes each.", "https://insighttimer.com"),
      L("🍵", "Calming tea recipes", "Chamomile, mint, ginger and other soft sips.", SEARCH("calming herbal tea recipes")),
      L("🌿", "Yoga With Adriene", "Gentle practices you can do in pyjamas.", "https://yogawithadriene.com"),
    ],
    items: [
      { link: { label: "Calming tea recipes", url: SEARCH("calming herbal tea recipes") }, t: "A quieter cup of tea", d: "Make a drink and sit down for the first three sips. Begin by feeling the cup in your hands. If you like, set your phone aside until the cup is empty." },
      { t: "A gentle exhale", d: "Rest your feet on the floor and breathe out slowly, without forcing a count. Begin with three comfortable breaths. Add a shoulder roll when you're ready." },
      { t: "Make a soft landing", d: "Choose one comfortable place to sit and add a cushion or blanket. Begin by adjusting just one thing. Spend a few moments there without needing to be productive." },
      { t: "Notice the ordinary", d: "Name three things you can see and two you can hear. Begin wherever you are. For a follow-up, notice one small thing you appreciate about this space." },
    ],
    extras: [
      "Open a window and spend one minute noticing the temperature and the movement of the air.",
      "Let your eyes rest on one soft thing—a curtain, a cloud—for thirty seconds.",
      "Wash your hands slowly and notice the warmth of the water.",
      "Dim the lights for ten minutes and see how the room changes.",
      "Stretch out on the floor for two minutes and just feel the ground.",
      "Put on a pair of cosy socks and take a slow lap of your room.",
      "Write down three things that can wait until tomorrow.",
      "Close your eyes and name five sounds, from nearest to farthest.",
    ],
  },
  {
    id: "listen", title: "Listen in", emoji: "🎧", short: "A soundtrack for this moment.",
    intro: "Let sound change the shape of the moment. You can start with music, a voice, or the everyday soundtrack already around you.",
    img: "images/listen.jpg", color: "#f6e4dd", edge: "#e8c9bd", doodle: "♪", extraTitle: "Another listening adventure",
    links: [
      L("🎵", "Spotify", "Open Spotify and find your next song.", "https://open.spotify.com"),
      L("☁️", "Cosy playlists on Spotify", "Soft, warm playlists for slow hours.", "https://open.spotify.com/search/cozy%20playlist"),
      L("🌍", "Radio Garden", "Spin a globe and listen to live radio from anywhere.", "https://radio.garden"),
      L("🎹", "NPR Tiny Desk", "Intimate live sets from all kinds of artists.", "https://www.npr.org/series/tiny-desk-concerts/"),
      L("📚", "Lofi Girl", "Calm beats for reading, writing and wandering.", "https://www.youtube.com/@LofiGirl"),
    ],
    items: [
      { link: { label: "Open Spotify", url: "https://open.spotify.com" }, t: "One song, all the way through", d: "Choose a song you know by heart and listen without multitasking. Begin by noticing just one instrument. Play it again and listen for something new." },
      { link: { label: "Try rain sounds", url: "https://asoftmurmur.com" }, t: "The room's rhythm", d: "Sit still and notice the sounds your space makes: a fan, footsteps, a distant voice. Begin with one minute. Make a three-word description of your soundscape afterward." },
      { link: { label: "Find an album on Spotify", url: "https://open.spotify.com/search/albums" }, t: "An album journey", d: "Pick an album you've never heard and begin with its opening track. Let it play in order if you have time. Choose the track you'd share with a friend." },
      { link: { label: "Make a playlist on Spotify", url: "https://open.spotify.com" }, t: "Build a mood soundtrack", d: "Choose three songs for a feeling you want to remember. Begin with a title for the imaginary playlist. Add a fourth song that changes its ending." },
    ],
    extras: [
      "Ask someone for a song that reminds them of home, then listen for what it might mean to them.",
      "Listen to a song in a language you don't speak and imagine what it's about.",
      "Put on instrumental music and picture the scene it belongs to.",
      "Find a song from ten years ago and notice what it brings back.",
      "Listen to the first thirty seconds of five songs and keep only your favourite.",
      "Play a song quietly and then very softly—what changes?",
      "Listen to a podcast episode with your eyes closed.",
      "Make a playlist for a rainy afternoon, even if it's sunny.",
    ],
  },
  {
    id: "learn", title: "Learn a little", emoji: "📚", short: "Follow one small question.",
    intro: "Curiosity can be wonderfully small. Follow a question for a few minutes and see where it leads.",
    img: "images/learn.jpg", color: "#e6eadf", edge: "#ccd6c2", doodle: "✧", extraTitle: "Another question to follow",
    links: [
      L("🌐", "Random Wikipedia page", "Fall into a rabbit hole you didn't plan.", "https://en.wikipedia.org/wiki/Special:Random"),
      L("🦉", "Duolingo", "Learn three words of a new language today.", "https://www.duolingo.com"),
      L("🖼️", "Google Arts & Culture", "Wander through museums from your sofa.", "https://artsandculture.google.com"),
      L("🔭", "NASA picture of the day", "One astonishing space photo, explained.", "https://apod.nasa.gov/apod/astropix.html"),
      L("🎓", "TED-Ed", "Short animated lessons on big little questions.", "https://ed.ted.com"),
    ],
    items: [
      { link: { label: "Search spice stories", url: SEARCH("history and origin of spices") }, t: "The story of a spice", d: "Choose a spice in your kitchen and look up where it comes from. Begin by reading just its origin. Then find a dish from that region that uses it." },
      { link: { label: "Open Duolingo", url: "https://www.duolingo.com" }, t: "Three new words", d: "Pick a language you're curious about and learn three everyday words. Begin with hello, thank you, and home. Write one down to remember tomorrow." },
      { link: { label: "Browse Google Arts & Culture", url: "https://artsandculture.google.com" }, t: "Follow a museum object", d: "Browse an online museum collection and choose one object that catches your eye. Start by reading its caption. Look up the person or place connected to it next." },
      { link: { label: "Open Stellarium", url: "https://stellarium-web.org" }, t: "The night-sky question", d: "Ask a simple question about the moon or stars and read one reliable explanation. Begin with something you noticed recently. Tell someone the most surprising part." },
    ],
    extras: [
      "Find out why a nearby street has its name, and see what piece of local history it holds.",
      "Look up how your favourite food was first made.",
      "Learn the name of one plant or tree you pass every day.",
      "Find out what the weather will be like on the other side of the world.",
      "Pick a word you use often and discover where it comes from.",
      "Watch a short video about how an everyday object is made.",
      "Learn one fact about an animal you've never thought much about.",
      "Look up a famous painting and find one detail you'd never noticed.",
    ],
  },
  {
    id: "connect", title: "Connect", emoji: "💌", short: "Reach out in your own way.",
    intro: "Connection doesn't have to be a big occasion. A thoughtful message, shared memory, or gentle invitation is enough.",
    img: "images/connect.jpg", color: "#f4dfdf", edge: "#e6c1c1", doodle: "♡", extraTitle: "Another way to reach out",
    links: [
      L("📮", "Postcrossing", "Send a real postcard to a stranger, get one back.", "https://www.postcrossing.com"),
      L("🐌", "Slowly (app)", "Make a pen pal and write slow, thoughtful letters.", "https://slowly.app"),
      L("💌", "Canva cards", "Design a sweet card or message in minutes.", "https://www.canva.com/cards/"),
      L("💬", "Conversation starters", "Questions better than 'how are you?'", SEARCH("meaningful conversation starters")),
    ],
    items: [
      { link: { label: "Make a card on Canva", url: "https://www.canva.com/cards/" }, t: "Send a memory", d: "Think of a moment that made you smile with someone. Begin a message with “I just remembered…” Add a photo if you have one, but the words are enough." },
      { t: "Ask a better question", d: "Instead of “How are you?”, ask someone what made them smile this week. Start with a person you haven't checked in with lately. Share your own answer, too." },
      { t: "A thank-you note", d: "Write two sentences about something specific you appreciate. Begin with one small kindness. Send it if you want, or keep it as a reminder." },
      { t: "Make a little plan", d: "Invite someone to share a short walk, a cup of tea, or a call. Begin with one simple time suggestion. Offer an easy alternative if schedules don't match." },
    ],
    extras: [
      "Send someone a photo of something that reminded you of them and tell them why.",
      "Share a song with a friend and tell them where it takes you.",
      "Leave a kind comment or voice note for someone who could use it.",
      "Ask an older relative to tell you a story from their childhood.",
      "Send a one-line “thinking of you” to someone you haven't spoken to in a while.",
      "Write a postcard to your future self and keep it somewhere safe.",
      "Tell someone one thing you've learned from them.",
      "Wave, smile, or say hello to a neighbour today.",
    ],
  },
  {
    id: "move", title: "Move around", emoji: "🌞", short: "Move kindly, at your pace.",
    intro: "Move in whatever way feels comfortable today. A little movement can simply be a way to greet your surroundings.",
    img: "images/move.jpg", color: "#f6ead6", edge: "#e8d3ae", doodle: "☼", extraTitle: "Another way to move",
    links: [
      L("🧘", "Yoga With Adriene", "Free, friendly yoga for every mood.", "https://yogawithadriene.com"),
      L("🤸", "5-minute stretch videos", "Easy follow-along stretches.", YT("5 minute gentle stretch")),
      L("💃", "Dance playlist on Spotify", "Songs that make it hard to stay still.", "https://open.spotify.com/search/dance%20party"),
      L("🚶", "Walking route ideas", "Find a leafy path close to you.", "https://www.google.com/maps/search/parks+near+me"),
    ],
    items: [
      { link: { label: "Dance playlist on Spotify", url: "https://open.spotify.com/search/dance%20party" }, t: "One-song dance", d: "Put on a song you like and move in whatever way feels good. Begin by tapping a foot or swaying. Try a second song with a completely different mood." },
      { link: { label: "Follow a gentle stretch video", url: YT("5 minute gentle stretch") }, t: "A comfortable stretch", d: "Reach your arms gently upward, then let them rest. Begin seated if that feels better. Add a slow shoulder roll, stopping if anything is uncomfortable." },
      { t: "A different route", d: "Walk to a familiar destination by a slightly different safe route. Begin with one changed turn. Notice which stretch feels most peaceful." },
      { t: "The between-tasks break", d: "When you finish a task, stand or change position and take a few easy steps. Begin with one pause today. Look out a window before returning." },
    ],
    extras: [
      "Take a leisurely walk around your space and notice one thing you'd like to spend more time with.",
      "Roll your ankles and wrists slowly, a few times each way.",
      "Walk up and down the stairs once, just because you can.",
      "Stand up and sway gently while you wait for the kettle.",
      "Do a gentle neck stretch, moving only as far as feels good.",
      "Dance to one song with your eyes closed.",
      "Take a five-minute stroll without your phone.",
      "Stretch like a cat: reach, arch, and settle.",
    ],
  },
  {
    id: "cozy", title: "Cozy up", emoji: "🏡", short: "Make your corner feel softer.",
    intro: "Turn an ordinary corner into somewhere you want to linger. It only takes a small, thoughtful change.",
    img: "images/cozy.jpg", color: "#e6e9de", edge: "#cdd3c0", doodle: "⌂", extraTitle: "Another cozy possibility",
    links: [
      L("☕", "Masala chai recipes", "The proper, spicy, comforting way to make it.", SEARCH("masala chai recipe")),
      L("🧋", "Cold coffee ideas", "Iced, frothy and easy to make at home.", SEARCH("easy cold coffee recipes")),
      L("🍃", "Herbal tea blends", "Mix your own blends from your kitchen shelf.", SEARCH("herbal tea blends at home")),
      L("🍫", "Hot chocolate recipes", "Thick, warm, and worth the extra minute.", SEARCH("hot chocolate recipes")),
      L("🏡", "Reading nook inspiration", "Pretty corners to borrow ideas from.", "https://www.pinterest.com/search/pins/?q=cozy%20reading%20nook"),
      L("🎶", "Cosy playlist on Spotify", "Soft music for your softer corner.", "https://open.spotify.com/search/cozy%20playlist"),
    ],
    items: [
      { link: { label: "Find a chai or coffee recipe", url: SEARCH("masala chai recipe") }, t: "A favourite warm drink", d: "Make a drink you love and serve it in a cup that feels special. Begin with what you already have. Find a comfortable spot to enjoy its first few sips." },
      { t: "One clear surface", d: "Choose a very small surface and put away only what doesn't belong there. Begin with two minutes. Place one object you enjoy looking at in the space you've made." },
      { t: "A reading nook", d: "Gather a book, comfortable seat, and soft layer. Begin with a single page. Keep the nook ready for another small visit later." },
      { t: "A fresh arrangement", d: "Move a plant, picture, or favourite object to a new safe spot. Begin by trying two positions. Notice how the room feels at different times of day." },
    ],
    extras: [
      "Make a little tray for your next quiet break: a cup, a book, and one object you love.",
      "Light a candle or switch on a warm lamp and notice the glow.",
      "Fold a blanket over the arm of a chair so it's ready when you are.",
      "Put a small bunch of flowers or leaves in a jar.",
      "Open the curtains and let in the best light of the day.",
      "Put fresh sheets on the bed and enjoy the feeling later.",
      "Choose one cushion and give it a better home.",
      "Pin a postcard or photo where you'll see it every morning.",
    ],
  },
  {
    id: "cook", title: "Cook & taste", emoji: "🍳", short: "Little recipes, big flavours.",
    intro: "Cooking can be as small as a spoonful. Stir something, taste it, and enjoy the quiet magic of making a meal.",
    img: "images/cook.jpg", color: "#dcebe3", edge: "#b9d4c4", doodle: "❋", extraTitle: "Another kitchen idea",
    links: [
      L("☕", "Masala chai recipes", "The proper, spicy, comforting way to make it.", SEARCH("masala chai recipe")),
      L("🧋", "Cold coffee ideas", "Iced, frothy and easy to make at home.", SEARCH("easy cold coffee recipes")),
      L("🍫", "Hot chocolate recipes", "Thick, warm, and worth the extra minute.", SEARCH("hot chocolate recipes")),
      L("🥘", "Hebbar's Kitchen", "Easy Indian recipes with clear step-by-step photos.", "https://hebbarskitchen.com"),
      L("🍳", "Tasty", "Quick, friendly recipe videos for any mood.", "https://tasty.co"),
      L("🧁", "Mug cake recipes", "Tiny desserts ready in two minutes.", SEARCH("easy mug cake recipe")),
    ],
    items: [
      { t: "A one-pan dinner", d: "Choose three vegetables you already have and roast or sauté them on one pan. Begin by cutting them to a similar size. Season at the end and taste before serving." },
      { t: "Make it from scratch", d: "Pick one thing you usually buy, like flatbread, chutney or salad dressing, and make a small batch. Begin by reading the recipe once. Notice how it differs from the shop version." },
      { t: "Taste as you go", d: "Cook any simple dish and taste it three times: early, midway, and at the end. Begin with a clean spoon. Adjust with salt, acid or spice, one pinch at a time." },
      { link: { label: "Browse easy recipes", url: "https://tasty.co" }, t: "Cook from far away", d: "Pick a recipe from a place you've never visited and make a simple version. Begin by reading it twice. Taste as you go and adjust." },
    ],
    extras: [
      "Make masala chai from whole spices and notice how it differs from a tea bag.",
      "Toast a spice in a dry pan for thirty seconds and smell what changes.",
      "Make a quick pickle from sliced onion, vinegar and a pinch of sugar.",
      "Whip up a two-minute mug cake and decorate it like it's from a café.",
      "Cook a pot of rice or pasta, then try three different toppings.",
      "Ask someone for a family recipe and cook it this week.",
      "Blend a smoothie from whatever fruit is nearly overripe.",
      "Try one ingredient you've never cooked with, starting with a tiny amount.",
    ],
  },
  {
    id: "capture", title: "Capture it", emoji: "📷", short: "Notice, snap, and keep.",
    intro: "You don't need a fancy camera, just a phone and a little attention. Collect small proofs of ordinary beauty.",
    img: "images/capture.jpg", color: "#e7e3f1", edge: "#cdc6e0", doodle: "◎", extraTitle: "Another thing to notice",
    links: [
      L("📸", "Unsplash", "Gorgeous free photos to spark your eye.", "https://unsplash.com"),
      L("🌄", "Pexels", "More free photos and short videos to browse.", "https://www.pexels.com"),
      L("🚶", "Photo walk ideas", "Easy prompts for a camera-in-hand stroll.", SEARCH("photo walk ideas for beginners")),
      L("🖼️", "Photo collage ideas", "Ways to turn your week into one little page.", SEARCH("photo collage ideas aesthetic")),
      L("📌", "Aesthetic photo ideas", "Pinboards of pretty everyday scenes.", "https://www.pinterest.com/search/pins/?q=aesthetic%20photo%20ideas"),
    ],
    items: [
      { t: "The five-photo walk", d: "Take a short walk and photograph exactly five things that catch your eye. Begin at your doorstep. Pick your favourite and give it a title." },
      { t: "Look low, look high", d: "Photograph something from ground level, then from as high as you safely can. Begin with an object you know well. Notice what the angle changes." },
      { t: "A frame of light", d: "Find a patch of window light, sun on a wall, or a shadow, and photograph it at two different times. Begin with whatever light is nearest. Compare them side by side." },
      { t: "Gratitude snapshot", d: "Take one photo of something small you're glad exists. Begin without overthinking it. Write one line about it in your journal." },
    ],
    extras: [
      "Photograph something red, then something green, and see how they look together.",
      "Take a photo of your shoes somewhere interesting.",
      "Capture a reflection in a window, puddle or spoon.",
      "Frame a tiny scene: a cup on a sill, a book on a bench.",
      "Take a picture of something you'd usually walk past.",
      "Make a mini collage from three photos you took this week.",
      "Photograph your hands doing something ordinary.",
      "Snap a photo of the sky each day for a week.",
    ],
  },
];

const CREATIVE = {
  title: "Creative Corner", emoji: "✳️", short: "Words, pictures, and possibility.",
  doodle: "✳", color: "#eddcd2", edge: "#dcc0b0",
  links: [
    L("✏️", "Quick, Draw!", "Warm up your drawing hand in 20 seconds.", "https://quickdraw.withgoogle.com"),
    L("📜", "Poetry Foundation", "Read a poem for a few minutes.", "https://www.poetryfoundation.org"),
    L("📖", "Project Gutenberg", "Thousands of free classic stories to borrow from.", "https://www.gutenberg.org"),
    L("💡", "Reedsy writing prompts", "Endless story starters, sorted by genre.", "https://blog.reedsy.com/creative-writing-prompts/"),
    L("🖍️", "AutoDraw", "Sketch anything and let it tidy up your doodle.", "https://www.autodraw.com"),
  ],
};

const PROMPTS = [
  // journal
  ...[
    "Write a note to yourself about something you did well this week, however small it felt.",
    "Describe your perfect ordinary day, from the first sip of something warm to the last light being switched off.",
    "Write about a place that feels like home, even if you've only been there once.",
    "List five small things that made you smile this month.",
    "Write a letter to yourself one year from now. What do you hope is true?",
    "What are you carrying that you could set down for tonight? Write it out and leave it on the page.",
    "Write about the last time you lost track of time. What were you doing?",
  ].map((text) => ({ kind: "Journal", text })),
  // poetry
  ...[
    "Write a four-line poem about the weather outside your window right now.",
    "Write a poem where every line begins with the next letter of your name.",
    "Write a haiku about something you ate today.",
    "Describe a colour without using its name, in three lines.",
    "Write a short poem to an object you use every day.",
    "Take a line from a song stuck in your head and finish the poem in your own words.",
    "Write six lines about the sound of rain, a kettle, or a distant train.",
    "Write a poem from the point of view of a teaspoon.",
    "Write a love poem to your favourite snack.",
    "Write a poem that begins: “Nobody told me that…”",
    "Write an ode to a very small, very ordinary thing: a paperclip, a button, a pebble.",
    "Write a poem where every line ends with a colour.",
    "Write a funny four-line poem about the moon.",
    "Write a five-line poem to your younger self.",
    "Write a limerick about a cat who runs a café.",
    "Write a poem about a city that only exists at 3 a.m.",
    "Describe your favourite season using only things you can smell.",
    "Write a haiku about a delayed train, a traffic jam, or a rainy commute.",
    "Write a poem in the voice of a houseplant with strong opinions.",
    "Write a poem made entirely of questions.",
    "Write a poem about the last thing you lost and found.",
    "Write a poem that starts as a weather report and ends as a feeling.",
    "Write an acrostic poem using the word HOME.",
    "Write a poem about a sound that makes you feel safe.",
    "Write a poem listing everything you'd keep in your pocket on a good day.",
    "Write a poem that begins: “If I were a season…”",
    "Write a poem to your morning alarm.",
    "Write a rhyming couplet about the best part of today.",
    "Write a poem about something you're pretending not to care about.",
    "Write a poem about a door that leads somewhere unexpected.",
    "Write a two-line poem about the sea without using the word “blue” or “wave”.",
    "Write a poem about tea, chai or coffee as if it were a person.",
    "Write a poem in which the moon sends you a text message.",
    "Write a poem about the quietest place you know.",
    "Pick three random words from the nearest book and build a poem around them.",
    "Write a free-verse poem about a crowded bus and one small kindness.",
    "Write a poem about the colour of Sunday afternoons.",
    "Write a poem about the last page of a book you loved.",
    "Write a poem where every line begins with “Maybe”.",
    "Write a poem about something that grows slowly: a plant, a friendship, a habit.",
    "Write a poem about the smell of a place you miss.",
    "Write a silly poem about an argument between two socks.",
    "Write a poem as a postcard from a made-up place.",
    "Write a poem about the street after the rain, describing only what you see.",
    "Write a poem about the feeling just before a good idea arrives.",
    "Write a poem for someone who needs a gentle day.",
    "Write a poem where the sun and the moon are roommates.",
    "Write a three-line poem about your favourite snack at midnight.",
    "Write a poem about a button, a thread, and a very long day.",
    "Write a poem that sounds like a lullaby for a grown-up.",
    "Write a tiny poem about your hands.",
    "Write a poem about a tea cup that remembers everything.",
    "Write a poem about being a cloud with nowhere to be.",
    "Write a poem in the voice of a lighthouse on a quiet night.",
    "Write a poem about the best sandwich in the world, in the style of an epic.",
  ].map((text) => ({ kind: "Poetry", text })),
  // stories
  ...[
    "Start a story with the line: “The door had always been there, but today it was open.”",
    "Write a short story about a lighthouse keeper who receives a mysterious letter.",
    "A stranger leaves a small box on your doorstep. What's inside, and what happens next?",
    "Write a scene where two characters meet at a bus stop, and one of them is hiding something kind.",
    "Tell a story in 100 words about the last day of summer.",
    "Write about a character who finds a map in a second-hand book.",
    "Imagine a town where it rains only on Tuesdays. Who lives there?",
  ].map((text) => ({ kind: "Story", text })),
  // drawing / sketching
  ...[
    "Sketch the object nearest to you without lifting your pen from the page.",
    "Draw your favourite mug from three different angles.",
    "Doodle a tiny house and add ten details that make it feel lived in.",
    "Draw your hand, then turn it into a creature or a plant.",
    "Sketch the view from your window in five minutes, no erasing.",
    "Draw a map of your day today as if it were a treasure island.",
    "Fill a page with one repeating shape and turn each one into something different.",
  ].map((text) => ({ kind: "Drawing", text })),
];

/* ---------- Helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);

function imgTag(src, alt, emoji, cls = "") {
  // Falls back to a soft placeholder block if the image file is missing
  return `<img class="${cls}" src="${src}" alt="${alt}" onerror="this.outerHTML='<div class=&quot;img-fallback ${cls}&quot;>${emoji}</div>'" />`;
}

/* Cycles through a shuffled list so nothing repeats until all are seen */
function makeCycler(list, startIndex = 0) {
  let order = [];
  let last = startIndex;
  const refill = () => {
    order = list.map((_, i) => i).filter((i) => i !== last);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
  };
  refill();
  return () => {
    if (!order.length) refill();
    last = order.pop();
    return list[last];
  };
}

const cyclers = {};
function cyclerFor(key, list, start) {
  if (!cyclers[key]) cyclers[key] = makeCycler(list, start);
  return cyclers[key];
}

function swapText(el, html) {
  el.classList.remove("fade");
  void el.offsetWidth; // restart animation
  el.innerHTML = html;
  el.classList.add("fade");
}

function linksSection(title, links, edge) {
  return `
    <section class="online" style="--edge:${edge}">
      <h2>${title}</h2>
      <div class="links-grid">
        ${links.map((l) => `
          <a class="link-card" href="${l.u}" target="_blank" rel="noopener noreferrer">
            <span class="link-emoji">${l.e}</span>
            <span class="link-body"><strong>${l.t}</strong><small>${l.d}</small></span>
            <span class="link-arrow" aria-hidden="true">↗</span>
          </a>`).join("")}
      </div>
    </section>`;
}

/* ---------- Page sections ---------- */
const SECTIONS = ["home", "explore", "creative", "myspace"];

const TAGS = {
  play: ["lively", "social"], outside: ["outdoors", "calm"], make: ["creative", "calm"],
  unwind: ["calm"], listen: ["calm", "lively"], learn: ["calm", "creative"],
  connect: ["social"], move: ["lively", "outdoors"], cozy: ["calm"], creative: ["creative", "calm"],
  cook: ["creative", "calm"], capture: ["creative", "outdoors"],
};
const VIBES = [
  ["all", "✳ All"], ["calm", "🌙 Calm"], ["lively", "⚡ Lively"],
  ["social", "💬 Social"], ["creative", "🎨 Creative"], ["outdoors", "🌤 Outdoors"],
];

function renderHome(root) {
  root.innerHTML = `
    <section class="hero">
      <div>
        <p class="eyebrow">A gentle pause in your day</p>
        <h1>A little lost? Find your somewhere.</h1>
        <p class="lead">For slow afternoons, restless minds, and all the moments in between. Choose a little adventure, follow an idea, or keep a moment close. There’s no right way to begin.</p>
        <div class="hero-actions">
          <a class="btn btn-dark" href="#/" data-scroll="explore">Find something to do ↗</a>
          <a class="btn btn-ghost" href="#/" data-scroll="myspace">Visit My Space</a>
        </div>
        <p class="hero-note"><span>✳</span> No pressure. Just possibility.</p>
      </div>
      <div class="hero-art">
        ${imgTag("images/home.jpg", "A jar of bright flowers", "🌼")}
        <div class="sticker">take the scenic route ✿</div>
      </div>
    </section>

    <section class="cta-band">
      <div>
        <h2>Start wherever you are.</h2>
        <p>Five minutes, a fresh page, a different path home. A tiny adventure counts, too.</p>
      </div>
      <a class="btn btn-white" href="#/" data-scroll="creative">Give me a prompt →</a>
    </section>`;
}

function renderExplore(root) {
  const cards = [
    ...CATEGORIES.map((c) => ({ ...c, href: `#/a/${c.id}` })),
    { id: "creative", ...CREATIVE, href: "#/", scroll: "creative" },
  ];
  const tilts = [-1.4, 1.2, -0.8, 1, -1, 1.4, -1.2, 0.8, -0.6, 1.1, -1.1, 0.7];

  root.innerHTML = `
    <div class="page-head explore-head">
      <div class="floaties" aria-hidden="true"><span>✿</span><span>✦</span><span>☁️</span><span>✳</span></div>
      <p class="eyebrow">The little things library · 12 ways to begin</p>
      <h1 class="page-title">What sounds good right now?</h1>
      <p class="lead">Pick a feeling instead of a plan. Each little corner has four ways to start and more ideas when you’re ready for something different.</p>
    </div>

    <div class="vibes" role="group" aria-label="Filter by vibe">
      ${VIBES.map(([id, label], k) => `<button class="vibe" data-vibe="${id}" aria-pressed="${k === 0}">${label}</button>`).join("")}
    </div>

    <div class="tile-grid">
      ${cards.map((c, k) => `
        <a class="tile" href="${c.href}" ${c.scroll ? `data-scroll="${c.scroll}"` : ""}
           data-tags="${(TAGS[c.id] || []).join(" ")}"
           style="--bgc:${c.color};--edge:${c.edge};--tilt:${tilts[k]}deg">
          <span class="tape"></span>
          <span class="tile-num">${String(k + 1).padStart(2, "0")}</span>
          <span class="tile-icon">${c.emoji}</span>
          <span class="doodle" aria-hidden="true">${c.doodle}</span>
          <h3>${c.title}</h3>
          <p>${c.short}</p>
          <span class="tile-go">open this corner →</span>
        </a>`).join("")}
    </div>

    <div class="pull">
      <div>
        <h2>Can’t decide? Pull a card.</h2>
        <p>We’ll hand you one tiny idea from somewhere in the library.</p>
      </div>
      <button class="btn btn-dark" id="pull-btn">Pull a card <span class="spin">🎴</span></button>
      <div class="pull-card" id="pull-card" aria-live="polite"><span>Tap the button for a tiny surprise ✳</span></div>
    </div>`;

  // vibe filter
  const chips = root.querySelectorAll(".vibe");
  chips.forEach((chip) => chip.addEventListener("click", () => {
    const v = chip.dataset.vibe;
    chips.forEach((x) => x.setAttribute("aria-pressed", String(x === chip)));
    root.querySelectorAll(".tile").forEach((t) => {
      t.classList.toggle("dim", v !== "all" && !t.dataset.tags.split(" ").includes(v));
    });
  }));

  // pull a card
  const pool = [];
  CATEGORIES.forEach((c) => {
    c.items.forEach((i) => pool.push({ cat: c, t: i.t, d: i.d }));
    c.extras.forEach((x) => pool.push({ cat: c, t: c.extraTitle, d: x }));
  });
  const draw = makeCycler(pool, 0);
  $("#pull-btn").addEventListener("click", () => {
    const p = draw();
    const box = $("#pull-card");
    box.classList.remove("fade");
    void box.offsetWidth;
    box.innerHTML = `<span class="pull-tag">${p.cat.emoji} ${p.cat.title}</span><strong>${p.t}</strong><span>${p.d}</span><a href="#/a/${p.cat.id}">Open this corner →</a>`;
    box.classList.add("fade");
  });
}

function renderCreative(root) {
  const next = cyclerFor("prompts", PROMPTS, 0);
  let current = PROMPTS[0];

  root.innerHTML = `
    <div class="page-head">
      <p class="eyebrow">A little room to imagine</p>
      <h1 class="page-title">The Creative Corner.</h1>
      <p class="lead">Write a few lines, follow a character, make a mark, or ask yourself a gentle question. There’s no blank-page test here: simply start wherever a prompt takes you.</p>
    </div>
    <div class="cc-grid">
      <section class="spark">
        <div>
          <p class="eyebrow">A little spark for you ✳</p>
          <span class="kind" id="kind">${current.kind}</span>
          <h2 id="prompt-text">${current.text}</h2>
        </div>
        <div class="spark-actions">
          <button class="btn btn-white" id="prompt-btn">Another prompt <span class="spin">↻</span></button>
        </div>
      </section>
      <aside class="thread">
        ${imgTag("images/creative.jpg", "Old letters and a pen", "✒️")}
        <h3>Follow the thread.</h3>
        <p>Try a prompt for two minutes, then choose another if it doesn’t feel like yours. Keep a favourite line or thought in your journal whenever you want.</p>
        <a class="btn btn-white" id="write-btn" href="#/" data-scroll="myspace">Write in My Space →</a>
      </aside>
    </div>
    ${linksSection("Take it further ✳", CREATIVE.links, CREATIVE.edge)}`;

  $("#prompt-btn").addEventListener("click", () => {
    current = next();
    const box = $(".spark > div");
    box.classList.remove("fade");
    void box.offsetWidth;
    $("#kind").textContent = current.kind;
    $("#prompt-text").textContent = current.text;
    box.classList.add("fade");
  });

  // carry the current prompt into the journal form below
  $("#write-btn").addEventListener("click", () => {
    const t = $("#title"), b = $("#body");
    if (t && b) {
      t.value = `${current.kind} prompt`;
      b.value = `${current.text}\n\n`;
      b.dispatchEvent(new Event("input"));
      setTimeout(() => b.focus({ preventScroll: true }), 900);
    }
  });
}

/* ---------- My Space (journal saved in the browser) ---------- */
const STORE_KEY = "elsewhere-journal";
const loadEntries = () => {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; } catch { return []; }
};
const saveEntries = (list) => localStorage.setItem(STORE_KEY, JSON.stringify(list));

const MOODS = [["🌤", "bright"], ["😌", "calm"], ["🥰", "loved"], ["🤪", "silly"], ["😴", "sleepy"], ["🌧", "blue"]];
const NOTE_COLORS = ["#e4ebdf", "#f8ded1", "#ece4ee", "#f6ead6", "#f4dfdf", "#e1e8e4"];

function renderMySpace(root) {
  const today = new Date().toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" });
  root.innerHTML = `
    <div class="page-head">
      <p class="eyebrow">Your own little corner</p>
      <h1 class="page-title">My Space.</h1>
      <p class="lead">A soft place for photographs, passing thoughts, and moments worth remembering. Let these pages become yours, one little memory at a time.</p>
    </div>

    <div class="polaroids">
      <figure class="polaroid"><span class="tape"></span>
        ${imgTag("images/space1.jpg", "A frangipani flower held in a hand", "🌼")}
        <figcaption>A little moment of sunshine</figcaption>
      </figure>
      <figure class="polaroid"><span class="tape"></span>
        ${imgTag("images/space2.jpg", "A thank you card with flowers", "💌")}
        <figcaption>The good in ordinary days</figcaption>
      </figure>
    </div>

    <div class="journal-grid">
      <form class="notebook" id="note-form">
        <span class="nb-tape" aria-hidden="true"></span>
        <div class="rings" aria-hidden="true">${"<i></i>".repeat(8)}</div>
        <p class="nb-date">${today} ✿</p>
        <h2>Dear journal,</h2>

        <div class="spark-note">
          <p id="spark-text">Not sure where to start? Pull a little spark.</p>
          <div class="spark-row">
            <button type="button" class="chip-btn" id="spark-btn">✨ pull a spark</button>
            <button type="button" class="chip-btn" id="spark-use" hidden>write about this ↓</button>
          </div>
        </div>

        <label class="sr-only" for="title">Title</label>
        <input id="title" type="text" placeholder="Give today a little title…" maxlength="80" autocomplete="off" />

        <p class="mood-label">Today feels…</p>
        <div class="moods" role="group" aria-label="Pick a mood">
          ${MOODS.map(([e, l]) => `<button type="button" class="mood" data-mood="${e}" aria-pressed="false"><span>${e}</span><small>${l}</small></button>`).join("")}
        </div>

        <label class="sr-only" for="body">Your thoughts</label>
        <textarea id="body" placeholder="Start anywhere… even one sentence counts ✿"></textarea>

        <div class="nb-foot">
          <span class="wc" id="wc">0 words</span>
          <button class="btn btn-dark" type="submit">Pin it to my board ✳</button>
        </div>
        <span class="saved-msg" id="saved-msg" role="status"></span>
      </form>

      <section class="board-wrap">
        <h2>Pages from your journal</h2>
        <div class="board" id="entries"></div>
      </section>
    </div>`;

  let mood = "";
  const moodBtns = root.querySelectorAll(".mood");
  const body = $("#body");
  const wc = $("#wc");

  moodBtns.forEach((b) => b.addEventListener("click", () => {
    const wasOn = b.getAttribute("aria-pressed") === "true";
    moodBtns.forEach((x) => x.setAttribute("aria-pressed", "false"));
    mood = wasOn ? "" : b.dataset.mood;
    if (!wasOn) b.setAttribute("aria-pressed", "true");
  }));

  body.addEventListener("input", () => {
    const n = body.value.trim() ? body.value.trim().split(/\s+/).length : 0;
    wc.textContent = `${n} ${n === 1 ? "word" : "words"}`;
  });

  const nextSpark = cyclerFor("spark", PROMPTS, 0);
  let sparkNow = null;
  $("#spark-btn").addEventListener("click", () => {
    sparkNow = nextSpark();
    swapText($("#spark-text"), `<strong>${sparkNow.kind}:</strong> ${sparkNow.text}`);
    $("#spark-use").hidden = false;
  });
  $("#spark-use").addEventListener("click", () => {
    if (!sparkNow) return;
    body.value = (body.value.trim() ? body.value.trim() + "\n\n" : "") + sparkNow.text + "\n\n";
    body.dispatchEvent(new Event("input"));
    body.focus();
  });

  drawEntries();

  $("#note-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = $("#title").value.trim() || "Untitled moment";
    const text = body.value.trim();
    if (!text) { body.focus(); return; }
    const list = loadEntries();
    list.unshift({
      id: Date.now(), title, body: text, mood,
      date: new Date().toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" }),
    });
    saveEntries(list);
    e.target.reset();
    mood = "";
    moodBtns.forEach((x) => x.setAttribute("aria-pressed", "false"));
    wc.textContent = "0 words";
    drawEntries();
    $("#saved-msg").textContent = "Pinned ✳";
    setTimeout(() => ($("#saved-msg").textContent = ""), 2200);
  });
}

function drawEntries() {
  const wrap = $("#entries");
  const list = loadEntries();
  wrap.innerHTML = "";
  if (!list.length) {
    wrap.innerHTML = `<div class="empty"><span>🪴</span><strong>Your board is waiting.</strong><p>Pin your first little memory here.</p></div>`;
    return;
  }
  list.forEach((entry) => {
    const el = document.createElement("article");
    el.className = "sticky";
    el.style.setProperty("--note", NOTE_COLORS[entry.id % NOTE_COLORS.length]);
    el.style.setProperty("--rot", ((entry.id % 5) - 2) * 0.9 + "deg");
    const pin = document.createElement("span"); pin.className = "pin"; pin.textContent = "📌";
    const h = document.createElement("h3"); h.textContent = entry.title;
    const t = document.createElement("time"); t.textContent = entry.date;
    const p = document.createElement("p"); p.textContent = entry.body;
    const del = document.createElement("button"); del.type = "button"; del.textContent = "Remove";
    del.addEventListener("click", () => {
      saveEntries(loadEntries().filter((x) => x.id !== entry.id));
      drawEntries();
    });
    el.append(pin);
    if (entry.mood) {
      const m = document.createElement("span"); m.className = "note-mood"; m.textContent = entry.mood;
      el.append(m);
    }
    el.append(h, t, p, del);
    wrap.append(el);
  });
}

/* ---------- Activity page (a corner of the library) ---------- */
function renderActivity(id) {
  const c = CATEGORIES.find((x) => x.id === id);
  if (!c) { location.hash = "#/"; return; }
  const next = cyclerFor(c.id, c.extras, 0);

  app.innerHTML = `
    <a class="back-link" href="#/" data-scroll="explore">← All activities</a>
    <section class="act-hero" style="--edge:${c.edge}">
      <div>
        <h1>${c.title} ${c.emoji}</h1>
        <p class="lead">${c.intro}</p>
      </div>
      ${imgTag(c.img, c.title, c.emoji, "act-photo")}
    </section>
    <section class="act-grid" style="--edge:${c.edge}">
      ${c.items.map((i) => `
        <article class="idea-card" style="--edge:${c.edge}">
          <span class="star">✳</span>
          <h3>${i.t}</h3>
          <p>${i.d}</p>
          ${i.link ? `<a class="item-link" href="${i.link.url}" target="_blank" rel="noopener noreferrer">${i.link.label} ↗</a>` : ""}
        </article>`).join("")}
    </section>
    <section class="extra-box" style="background:${c.color}">
      <h2>${c.extraTitle}</h2>
      <p id="extra-text">${c.extras[0]}</p>
      <button class="btn btn-pill" id="more-btn">Give me another idea <span class="spin">↻</span></button>
    </section>
    ${c.links ? linksSection("Take it online ✳", c.links, c.edge) : ""}`;

  $("#more-btn").addEventListener("click", () => {
    swapText($("#extra-text"), next());
  });
}

/* ---------- One long, continuous page ---------- */
let currentView = "main";
let introShown = false;
let pendingScroll = null;
let lastSection = "home";
let revealObserver = null;

function renderMain() {
  const divider = `<div class="divider" aria-hidden="true"><span>✿</span></div>`;
  app.innerHTML = SECTIONS.map((id) => `<section class="section" id="${id}"></section>`).join(divider);

  renderHome($("#home"));
  renderExplore($("#explore"));
  renderCreative($("#creative"));
  renderMySpace($("#myspace"));

  // gentle fade-up as each part scrolls into view
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); revealObserver.unobserve(en.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll("#explore > *, #creative > *, #myspace > *, .cta-band, .divider").forEach((el) => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });
}

function scrollToSection(id, smooth = true) {
  const behavior = smooth ? "smooth" : "instant";
  if (id === "home") window.scrollTo({ top: 0, behavior });
  else document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
}

function goSection(id) {
  if (currentView !== "main") { pendingScroll = id; location.hash = "#/"; return; }
  scrollToSection(id);
}

function updateNav() {
  let current = "explore";
  if (currentView === "main") {
    current = "home";
    const line = window.innerHeight * 0.4;
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= line) current = id;
    });
    lastSection = current;
  }
  document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === current));
}

/* ---------- Opening curtain ---------- */
function showIntro() {
  introShown = true;
  const el = document.createElement("div");
  el.id = "intro";
  el.innerHTML = `
    <div class="curtain left">
      <span class="c-deco" style="top:9%;left:14%;--s:74px;--r:-10deg">🌞</span>
      <span class="c-deco" style="top:66%;left:10%;--s:60px;--r:8deg;animation-delay:-1s">🍓</span>
      <span class="c-deco" style="top:30%;left:56%;--s:66px;--r:6deg;animation-delay:-2s">🧸</span>
      <span class="c-deco" style="top:80%;left:50%;--s:58px;--r:-6deg;animation-delay:-3s">🦋</span>
    </div>
    <div class="curtain right">
      <span class="c-deco" style="top:12%;left:36%;--s:62px;--r:9deg;animation-delay:-1.5s">🐝</span>
      <span class="c-deco" style="top:56%;left:14%;--s:70px;--r:-8deg;animation-delay:-.5s">🌈</span>
      <span class="c-deco" style="top:80%;left:56%;--s:58px;--r:7deg;animation-delay:-2.5s">🍪</span>
      <span class="c-deco" style="top:30%;left:68%;--s:64px;--r:-9deg;animation-delay:-3.5s">🌸</span>
    </div>
    <span class="scissors" aria-hidden="true">✂</span>
    <div class="intro-card">
      <span class="intro-bubble" aria-hidden="true">psst… scroll!</span>
      <p class="intro-eyebrow">your little corner of the internet</p>
      <h1>elsewhere <span>✳</span></h1>
      <p class="intro-sub">a little magic...everywhere</p>
      <button class="intro-btn" type="button">wander in! 👀 <span>↓</span></button>
    </div>`;
  document.body.append(el);
  document.body.classList.add("locked");
  window.scrollTo({ top: 0, behavior: "instant" });

  let opened = false;
  let startY = null;
  const onWheel = (e) => { e.preventDefault(); open(); };
  const onTouchStart = (e) => { startY = e.touches[0].clientY; };
  const onTouchMove = (e) => { if (startY !== null && Math.abs(e.touches[0].clientY - startY) > 10) open(); };
  const onKey = (e) => {
    if (["ArrowDown", "PageDown", " ", "Enter"].includes(e.key)) { e.preventDefault(); open(); }
  };
  function open() {
    if (opened) return;
    opened = true;
    window.removeEventListener("wheel", onWheel);
    window.removeEventListener("touchstart", onTouchStart);
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("keydown", onKey);
    el.classList.add("open");
    setTimeout(() => {
      el.remove();
      document.body.classList.remove("locked");
    }, 1700);
  }
  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("touchstart", onTouchStart, { passive: true });
  window.addEventListener("touchmove", onTouchMove, { passive: true });
  window.addEventListener("keydown", onKey);
  el.addEventListener("click", open);
}

/* ---------- Router ---------- */
function route() {
  if (location.hash.startsWith("#/a/")) {
    currentView = "activity";
    renderActivity(location.hash.slice(4));
    window.scrollTo({ top: 0, behavior: "instant" });
  } else {
    currentView = "main";
    const first = !introShown;
    renderMain();
    if (first) {
      showIntro();
    } else {
      const target = pendingScroll || lastSection;
      pendingScroll = null;
      requestAnimationFrame(() => scrollToSection(target, false));
    }
  }
  updateNav();
}

document.addEventListener("click", (e) => {
  const a = e.target.closest("[data-scroll]");
  if (!a) return;
  e.preventDefault();
  goSection(a.dataset.scroll);
});

let ticking = false;
window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { updateNav(); ticking = false; });
}, { passive: true });

window.addEventListener("hashchange", route);
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
if (location.hash.startsWith("#/a/")) introShown = true; // skip the curtain on deep links
route();