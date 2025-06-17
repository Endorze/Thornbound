type DataFileProp = {
    name: string
    description: string
    image?: string
    images?: string[]
}

export const DataFile: DataFileProp[] = [
    {
        name: "LEON",
        description: "I'm the product owner and the technical/combat designer on this team. As the technical designer, I have a deep understanding of Unreal Engine and its features. I design the enemies, their attack patterns, and handle balancing. I also design how the character functions, including spells and movements. As the product owner, I pitch and present the game, I stay involved in all aspects of its development, whether it's art, VFX, programming, or design. As a designer, I've been blessed with the slowest computer known to mankind.Some say it's a clever strategy to make us better at optimizing our games.And it worked.",
        image: "./images/leon.jpg"
    },

    {
        name: "ALEJANDRO",
        description: "Hello my name is Alejandro and I worked on both the narrative and level design for Thornbound. It has been both a very learning, challenging and fun experience! I worked on setting the story in the game both for what it is about and how it is portrayed in the game.I also worked on the level design in collaboration with Ghazaleh, we split up the work and I got to make half of the dungeon, the main hall and the upper floor in the castle! I had the opportunity to get really creative in this project where I could write a more in -depth story, ideate and implement fun puzzles and levels for the player and much more! I was fortunate to get the space and freedom to create everything through the blessing that is my team!",
        image: "./images/erics.png"
    },

    {
        name: "SIMON",
        description: "Hi I'm Simon, I'm usually a level designer but for this project I've been the sound designer. I'm a creative person and would like to work with anything expressive in the future, though I'm primarily focusing on level design.",
        image: "./images/erics.png"
    },

    {
        name: "GHAZALEH",
        description: "Digital Dreamweaver & Creative Tinkerer. If my designs had a heartbeat, they'd thump to the rhythm of late-night playlists and too many cups of tea. As the 3D environment artist and visual storyteller, I sculpt worlds where players lose themselves — from distant galaxies to cozy village squares. I live in the sweet spot where art meets tech, fine-tuning every asset to flow seamlessly through the pipeline, keeping designers, animators, and coders all smiling (or at least not pulling their hair out). Sure, I sometimes forget what normal working hours' mean, but seeing our worlds breathe with life? That's my fuel. With roots in concept art, graphic design, and a passion for atmospheric lighting, I obsess over every texture, shadow, and tiny prop, because details aren't just details — they're the story.",
        image: "./images/erics.png"
    },

    {
        name: "ILYA",
        description: "Art Wizard & Workflow Whisperer, If pixels could talk, mine would shout, 'Crafted with love… and probably at 2 AM.' As the environment artist and pipeline problem - solver, I made sure everything looked beautiful and flowed smoothly between the art department, designers, and animators, like a well - oiled creativity machine. I may have a tiny habit of overworking(okay, maybe not that tiny), but when I see our game world come alive, I just can't stop smiling.There's something magical about seeing what we've built together as a team—it's better than caffeine. With a background in UI / UX design and photography, I bring a sharp eye for detail and a love for visual harmony",
        image: "./images/llya.png"
    },

    {
        name: "EVANGELIA",
        description: "I was the prop artist for this game—so if you see a cool barrel or mysterious crate, that was probably me. Working on this project was a blast, mainly thanks to the amazing team energy(and lots of coffee). My biggest boss battle ? Time.But with some strategic time management and a few late nights, I pulled together assets I'm proud of. Now, I'm finishing my studies at Future Games, sharpening my skills, and gearing up to join the game industry. My dream? To help create worlds where players can get lost—and maybe even trip over one of my props",
        image: "./images/EVANGELIA.JPG"
    },

    {
        name: "BARRY",
        description: "My role as Art Director for Thornbound included making sure that the art department was aligned with the design department on the visual aspects of the game, in terms of environment assets, animations, and visual effects.Additionally, my role included making sure that the artist's workload was manageable and that delivery is made on time. As an animator, I provided motion capture animations, cleanups, and handkeyed animations for the enemies of the game, as well as a few additional player character animations.",
        image: "./images/barry.png"
    },

    {
        name: "SHENGAN",
        description: "I worked as a gameplay animator on this project.I created the basic movement animation and the attack animations for our main character. This was my first time trying out things like locomotion, and I’m really happy with how it turned out. It was a lot of fun working with our amazing team. My favourite games of all time are Yakuza 0 and Devil May Cry.I will continue focusing on character animations in the future.",
        image: "./images/shengen.png"
    },

    {
        name: "ERIC",
        description: "On this project and I've created such a wide range of different effects. As the sole VFX artist on the project, I've created everything from magical shaders to fire spells, electrical force fields and animated fire shaders. I had the opportunity to experiment and play around with a bunch of new techniques, and combining it with previous knowledge I feel like I've managed to create a good set of different magical effects, still all within the same world.  I also acted as the lighting artist for the level, and helped giving the game that final push and polish towards the mood and aestethic we set out for in the beginning.",
        image: "./images/erics.png"
    },

    {
        name: "BRIAN",
        description: "Hi, I'm one of the programmers that worked on Thornbound. My role on the team was mostly focused on UI implementation, but I frequently worked on other miscellanous features, such as some light puzzles and a checkpoint system, for example. The biggest hurdle I encountered was, honestly, myself.I don't have a ton of programming experience under my belt in general, but basically none in C++ and Unreal, so a bunch of time was spent just relearning basic stuff and learning the workflow in Unreal. However, I think that part was actually the most fun and I genuinely feel that I've gotten much better, which makes me very grateful to have worked on this game with this great team.",
        image: "./images/erics.png"
    },

    {
        name: "DORUK",
        description: "I created the weapon systems, character movement and aiming systems alongside some camera work. Participated in the sound implementation and helped set up FMOD sound integration.I was also the version control manager and helped the team with various problems we had with the tech and Perforce. I really enjoyed watching this whole project come together and I am incredibly impressed with our team members were able to come up with!",
        image: "./images/doruk.png"
    },

    {
        name: "GALINA",
        description: "As part of the project, I worked on developing enemy AI behavior and gameplay mechanics in Unreal Engine 5. My main focus was creating custom tasks for the Behavior Tree, setting up enemy movement and attacks, and handling interactions with the player. The most interesting and challenging task was implementing a QTE(Quick Time Event) system where the player must repeatedly press a key to push the enemy away during its attack.This experience reinforced my interest in working with gameplay systems and AI, which is the area I'd like to continue developing in as a game developer.",
        image: "./images/galla.png"
    },

    {
        name: "JAMIE",
        description: "Hi, my name is Jamie and my role was a programmer during the development of Thornbound. I was mainly responsible for making the interaction system in the game, this includes anything you can interact with such as picking up items, opening doors, placing statues etc. What I enjoyed with this major task was the challenge of it since we needed the pickup to work in a specific way and this was also a type of obstacle. In the future I would like to look back to this system I made and make it better from the start up.",
        image: "./images/jamie.png"
    },

    {
        name: "AIDA",
        description: "Hi I'm Aida, an aspiring game producer with a background in business leadership and a heart set on game development.Currently studying Agile Project Management at Futuregames.As both producer and release manager in GP3, I produce workshops, lead sprints, track progress in Jira, clear blockers, arrange playtesters, Q / A and bug tracker, handle build pipelines and ensure smooth delivery. With CEO experience, UX thinking, and a love for tech, I keep teams aligned without killing the vibe.I’ve shipped SaaS products, pitched to royalty.Now I want to help craft experiences that players love and teams enjoy building.",
        image: "./images/aida.jpg"
    },

    {
        name: "OLA",
        description: "As a release manager in our team, I have been responsible for planning and coordinating launches and making sure everything happens on time.I have also been involved in creating the structure for our internal processes. The most fun for me has been seeing how all parts of the game have fallen into place, from idea to the finished game.In the future, I want to continue working on exciting projects where technology and creativity meet.",
        image: "./images/ola.png"
    },

    {
        name: "LOTTEN",
        description: "To stand behind team 10 in this creative process has been amazing! Thornbound was one of my teams during the GP3 & Web Project, and to be part of the journey from getting to know each other, to brainstorming, to structurizing the workflow was really cool! One new thing I got to learn was working alot with JIRA.I learned the basics and then held a workshop for the team.I know this will be valuable in the future for me! Together with Aida and Ola I helped the team with Miro Structure, planning, facilitating, making sure the team was on track and not overscoping.Easier said than done! But in the end, this will be an experience I will never forget and who knows, maybe I'll work in gaming! ",
        image: "./images/lotten.jpg"
    },

    //from ticket 022-024
    {
        name: "Spells",
        description: " Zerim wields fire and lightning magic, drawn from the crystals growing within the castle. Fire burns the hottest but doesn’t reach very far, making it useful for close encounters when aiming time is limited. Lightning is cooler but has greater range, making it excellent for keeping Zerim at a distance from cursed ones.",
        image: "ola.png"
    },

    {
        name: "Stealth",
        description: "Even in his old age, Zerim remains light on his feet. Slowing down and sneaking up on the cursed husks allows you to take them out stealthily. Alternatively, charging in with hands ablaze, casting spells left and right, might seem tempting until you run out of crystals and the full wrath of the castle is chasing you deeper into the catacombs.",
        image: "ola.png"
    },

    {
        name: "Puzzles",
        description: "The castle is full of puzzles and traps. Zerim needs to travers the castles dark and winding corridors, filled with devious puzzles and traps. Unsettling tails suggested that the castle itself were out to collect your soul. ",
        image: "ola.png"
    },

    // for credits page from ticket 029-030
    {
        name: "Fab and CGTrader",
        description: "In addition to the assets created by our artists, assets from online marketplaces such as Fab and CGtrader were used to further assist our artists, in regards to both characters and props. These assets sourced from the marketplace have been used in a way where the artists alter the meshes or textures in order to fit the art direction of the game and to keep the involvement of the artists throughout the whole production process.",
        image: "ola.png"
    },

    {
        name: "Background Artwork",
        description: "We would like to give an honourable mention to our fellow classmate, Antonia Mertes, from the Animation and VFX class of 2024, Futuregames Stockholm, where she assisted with providing the illustration used on the background artwork for our webpage and Itch.IO thumbnail.",
        image: "ola.png"
    }
]

export const LoreItems: DataFileProp[] = [
    {
        name: "top (general)",
        description: "In a cabin deep in a forest you find Zerim, a once renowned adventuring mage whose granddaughter Elira has fallen gravely ill. With no remedy working he embarks on a final journey to find the rare healing flower Virellis, located deep within the walls of Castle Kravia. With its design built around the flower and its inhabitants compelled to protect it, Zerim will need to use his rusty skills to get out alive and save his granddaughter Elira.",
        image: "ola.png"
    },

    {
        name: "ZERIM",
        description: "After putting his mage cap on the shelf Zerim settled down decades ago to raise a family, life has been peaceful as he is now the sole caretake of his granddaughter Elira until she fell gravely ill. With every remedy, concoction and even magic tried to cure the illness he feels defeated until he gets reminded of an old tale. A flower called Virellis that can cure anything and anyone, he rifles through his journals from his past days and finds a note with the presumed location of Virellis in the forgotten Castle Kravia. He embarks on one last journey to save Elira from her grim fate.",
         images: ["ola.png", "ola.png", "ola.png"]
    },

    {
        name: "VIRELLIS",
        description: "There's not much information recorded of this flower, it all lies in rumours and tales which most regard as a myth.  But the rough supposed documentation tells that it can heal any injury or illness when used on another but it offers another option as well. To those who decide to use it on themselves, consuming it can grant you eternal life...Many have dared to seek out this flower to get a hold of the flower and be granted eternal life, but no one has returned.",
        images: ["ola.png", "ola.png", "ola.png"]
    },

    {
        name: "KRAVIA MANOR",
        description: "There once was a rich scholar, interested in the arcane and all its creations, especially the rare kind. Her name was Corryn Vaunt, it is said that she was the owner of this Castle and some speculate that she has Virellis protected inside of it, she might have even built the castle around it. Many have dared venturing into its halls, but no one has been able to come back and tell of what's inside it.",
        images: ["ola.png", "ola.png", "ola.png"]
    }
]

