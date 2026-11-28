/* ---------- original dinosaur illustrations (viewBox 0 0 200 130) ---------- */
const DK='#1b2340';
const dsv=(col,inner)=>`<svg viewBox="0 0 200 130" class="dino" role="img"><ellipse cx="100" cy="121" rx="78" ry="5" fill="${DK}" opacity=".12"/><g fill="${col}" stroke="${DK}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round">${inner}</g></svg>`;
const leg=(x,y1,y2,w)=>`<path d="M${x} ${y1} L${x+w} ${y1} L${x+w} ${y2-4} Q${x+w} ${y2} ${x+w-4} ${y2} L${x+2} ${y2} Q${x-2} ${y2} ${x} ${y2-4} Z"/>`;
const eye=(x,y)=>`<circle cx="${x}" cy="${y}" r="3.2" fill="#fff" stroke-width="1.6"/><circle cx="${x+.8}" cy="${y}" r="1.4" fill="${DK}" stroke="none"/>`;
const shade=c=>c;
const DINOS={
trex:{n:'Tyrannosaurus rex',short:'T. rex',svg:()=>dsv('#7cb342',`<path d="M92 62 C80 68 78 84 84 92 L80 112 L94 114 L94 108 L92 96 C100 88 102 74 92 62 Z" fill="#5f8f33"/>
<path d="M8 50 C40 44 70 42 92 44 C108 45 118 40 126 34 L138 28 C150 24 168 24 177 31 C181 35 181 43 177 47 L160 49 C156 53 150 55 144 55 L136 57 C130 67 120 77 104 79 C88 81 70 73 60 65 C44 61 26 57 8 50 Z"/>
<path d="M150 49 L174 45" fill="none" stroke-width="2"/><path d="M152 49 l3 3 l3 -3.5 l3 3 l3 -3.5 l3 3" fill="none" stroke-width="1.6"/>
<path d="M104 64 C118 60 128 70 124 84 L118 98 L126 116 L106 118 L106 112 L110 98 C100 92 96 74 104 64 Z"/>
<path d="M134 60 L144 66 L142 70" fill="none" stroke-width="4"/>${eye(160,35)}`)},
tri:{n:'Triceratops',short:'Triceratops',svg:()=>dsv('#ff8a3d',`${leg(40,78,116,15)}${leg(60,80,116,15)}
<path d="M8 70 C28 62 40 50 70 46 C100 42 128 48 140 60 C142 70 136 82 120 86 L60 88 C40 86 24 80 8 70 Z"/>
${leg(104,80,116,15)}${leg(122,78,116,15)}
<path d="M128 70 C120 44 138 22 160 26 C176 30 182 46 176 60 Z" fill="#ffb26b"/>
<path d="M138 62 C142 52 156 50 166 56 L188 70 C190 74 186 79 180 79 L160 79 C150 77 140 72 138 62 Z"/>
<path d="M156 56 L196 34 L162 62 Z" fill="#fff3d6"/><path d="M148 58 L186 38 L154 64 Z" fill="#fff3d6"/><path d="M176 66 L186 52 L183 70 Z" fill="#fff3d6"/>${eye(160,63)}`)},
steg:{n:'Stegosaurus',short:'Stegosaurus',svg:()=>dsv('#3d9be9',`${[[44,64],[60,52],[78,45],[96,42],[114,45],[132,53],[148,63]].map(([x,y],i)=>`<path d="M${x-9} ${y+8} L${x} ${y-18} L${x+9} ${y+8} Z" fill="${i%2?'#ffcf3f':'#ff8a3d'}"/>`).join('')}
${leg(48,84,118,14)}${leg(66,86,118,14)}
<path d="M6 86 C30 80 46 62 80 52 C110 44 140 56 156 74 C164 82 174 84 186 86 C190 88 188 95 182 95 C168 95 158 93 150 93 L60 95 C40 95 24 92 6 86 Z"/>
${leg(126,88,118,12)}${leg(142,88,118,12)}
<path d="M14 84 L2 66 L22 82 Z" fill="#fff3d6"/><path d="M26 82 L16 62 L34 80 Z" fill="#fff3d6"/>${eye(180,88)}`)},
brach:{n:'Brachiosaurus',short:'Brachiosaurus',svg:()=>dsv('#9c7bd6',`${leg(48,86,120,15)}${leg(66,86,120,15)}
<path d="M34 84 L4 100 L36 92 Z"/>
<path d="M30 84 C40 66 70 60 100 62 C114 63 122 66 126 70 L136 30 C138 18 146 10 156 10 C167 10 172 16 168 23 L152 27 L146 76 C142 86 126 92 100 92 L60 92 C40 92 30 90 30 84 Z"/>
${leg(114,80,120,15)}${leg(132,78,120,14)}${eye(158,16)}`)},
diplo:{n:'Diplodocus',short:'Diplodocus',svg:()=>dsv('#26a69a',`${leg(60,80,118,13)}${leg(78,80,118,13)}
<path d="M2 66 C30 72 52 62 80 56 C100 52 120 54 134 58 C150 54 166 46 182 44 C191 44 196 49 192 54 L181 58 C167 60 153 64 141 70 C131 80 111 86 91 86 L61 86 C43 84 28 78 2 70 Z"/>
${leg(104,80,118,13)}${leg(120,78,118,13)}${eye(184,49)}`)},
ptera:{n:'Pteranodon',short:'Pteranodon',svg:()=>dsv('#ec7aa0',`<path d="M100 62 L8 38 C28 54 48 62 70 68 L100 74 L130 68 C152 62 172 54 192 38 Z"/>
<ellipse cx="100" cy="70" rx="11" ry="9"/><path d="M95 78 L92 94 M105 78 L108 94" fill="none" stroke-width="3"/>
<path d="M100 51 L72 34 L104 46 Z" fill="#ffcf3f"/>
<path d="M94 58 C96 49 103 46 111 48 L156 46 L111 55 C106 57 100 59 94 58 Z"/>${eye(104,51)}`)},
raptor:{n:'Velociraptor',short:'Velociraptor',svg:()=>dsv('#c0874f',`<path d="M8 56 L2 50 L10 52 L4 44 L14 50 Z" fill="#8d5a2b"/>
<path d="M80 64 L74 90 L82 110 L92 112" fill="none" stroke-width="5"/>
<path d="M8 56 C40 54 60 50 80 50 C96 50 108 46 116 40 C124 34 136 32 144 36 L158 42 C160 46 156 49 151 49 L138 49 C132 55 124 61 112 65 C98 71 84 71 74 67 C56 63 30 61 8 56 Z"/>
<path d="M146 44 L156 44" fill="none" stroke-width="1.6"/>
<path d="M108 58 L132 70 L122 76 L104 70 Z" fill="#8d5a2b"/>
<path d="M92 66 L88 92 L98 110 L108 112" fill="none" stroke-width="5"/><path d="M98 110 C92 104 95 98 101 101" fill="none" stroke-width="2.5"/>${eye(138,40)}`)},
ankylo:{n:'Ankylosaurus',short:'Ankylosaurus',svg:()=>dsv('#a1887f',`${leg(52,88,118,14)}${leg(70,88,118,14)}
<path d="M34 82 L10 80" fill="none" stroke-width="7"/><ellipse cx="9" cy="80" rx="9" ry="8" fill="#6d4c41"/>
<path d="M30 84 C34 64 60 54 96 54 C130 54 150 64 156 80 L166 82 C177 82 183 88 179 95 L150 97 L50 97 C38 97 30 92 30 84 Z"/>
${[44,62,80,98,116,134].map(x=>`<path d="M${x} 95 L${x+6} 106 L${x+12} 95 Z" fill="#fff3d6"/>`).join('')}
${[[52,70],[70,62],[90,59],[110,60],[128,65],[144,72],[64,80],[86,76],[108,76],[128,80]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="4.5" fill="#6d4c41" stroke-width="1.6"/>`).join('')}
${leg(120,90,118,14)}${leg(138,90,118,13)}${eye(168,86)}`)},
spino:{n:'Spinosaurus',short:'Spinosaurus',svg:()=>dsv('#5c6bc0',`<path d="M50 50 C56 10 100 0 126 38 Z" fill="#ff6b5a"/>${[60,72,84,96,108,118].map((x,i)=>`<path d="M${x} 48 L${x+2} ${[26,14,9,10,18,30][i]}" fill="none" stroke-width="1.4"/>`).join('')}
<path d="M84 62 C74 68 72 84 78 92 L74 112 L88 114 L88 108 L86 96 C94 88 96 74 84 62 Z" fill="#45519a"/>
<path d="M6 54 C40 48 66 44 90 46 C106 47 116 42 124 36 L136 32 C144 30 152 32 158 36 L194 42 C196 46 193 48 188 48 L158 50 C152 54 146 56 140 56 L134 58 C128 68 118 78 102 80 C86 82 68 74 58 66 C42 62 24 59 6 54 Z"/>
<path d="M100 66 C114 62 124 72 120 86 L114 100 L122 116 L102 118 L102 112 L106 100 C96 94 92 76 100 66 Z"/>
<path d="M132 62 L142 70 L139 74" fill="none" stroke-width="4"/>${eye(146,38)}`)},
parasaur:{n:'Parasaurolophus',short:'Parasaurolophus',svg:()=>dsv('#f9a825',`<path d="M90 66 C80 72 78 86 84 94 L80 114 L94 116 L94 110 L92 98 C100 90 102 78 90 66 Z" fill="#c78400"/>
<path d="M8 60 C40 54 64 50 90 50 C108 50 118 46 126 40 L136 32 C142 28 152 28 158 32 L170 42 C174 46 172 50 166 50 L150 50 C146 56 140 60 132 62 C126 72 116 80 100 82 C84 84 66 76 56 70 C40 66 24 64 8 60 Z"/>
<path d="M142 32 L102 12 C98 10 96 14 99 16 L140 38 Z" fill="#ff8a3d"/>
<path d="M102 68 C116 64 126 74 122 88 L116 102 L124 118 L104 118 L104 112 L108 102 C98 96 94 78 102 68 Z"/>
<path d="M132 64 L142 74 L140 78" fill="none" stroke-width="4"/>${eye(150,38)}`)}
};
const dinoSVG=id=>DINOS[id].svg();
