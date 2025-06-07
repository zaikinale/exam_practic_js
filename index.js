// // index.js

// export default function analyze(data) {
//     const fixData = data.trim().split('\n').slice(1).filter(line => line.trim() !== '');
//     const arr = []
//     for (const item of fixData) {
//         arr.push(item.split(','))
//     }

//     // 1
//     console.log(`Count: ${arr.length}`)

//     const species = [];
//     for (const item of arr) {
//         const castle = item[2];
//         if (!species.includes(castle)) {
//             species.push(castle);
//         }
//     }
//     const formatted = species
//         .map(c => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase())
//         .sort();
    
//     // 2
//     console.log(`Castles: ${formatted.join(', ')}`);

//     let maxHp = 0;
//     let creatureWithMaxHp = '';

//     for (const item of arr) {
//         const hp = Number(item[5]);
//         const name = item[0];

//         if (hp > maxHp) {
//             maxHp = hp;
//             creatureWithMaxHp = name;
//         }
//     }

//     // 3
//     console.log(`Largest hp: ${creatureWithMaxHp}`);


//     let averageCreatureDamage = []
//     for (const item of arr) {
//         let min = item[3]
//         let max = item[4]
//         let average = Number(max) + Number(min) 
//         averageCreatureDamage.push(`${item[0]}: ${average / 2}`) 
//     }

//     // 4
//     console.log(`Average damage: ${averageCreatureDamage.join(', ')}`)


//     let level7 = []
//     for (const item of arr) {
//         if(Number(item[1]) === 7) { 
//             level7.push(item)
//         }
//     }

//     let minUdarov = Infinity; // Лучше начать с бесконечности, чем с 100
//     let better = '';

//     for (const item of level7) {
//         let min = Number(item[3]);
//         let max = Number(item[4]);
//         let attack = (min + max) / 2;
//         let udarov = Math.ceil(100 / attack);

//         if (udarov < minUdarov) {
//             minUdarov = udarov;
//             better = item[0];
//         }
//     }

//     // 5
//     console.log(`Strongest creature: ${better}`);

// }export default function analyze(data) {
  const lines = data.trim().split('\n');
  const headers = lines[0];
  const rows = lines.slice(1).filter(line => line.trim() !== '');
  const arr = rows.map(line => line.split(','));

  // Step 1: Count
  console.log(`Count: ${arr.length}`);

  // Step 2: Castles
  const castles = [...new Set(arr.map(item => item[2]))]
    .map(c => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase())
    .sort();
  console.log(`Castles: ${castles.join(', ')}`);

  // Step 3: Largest HP
  const maxHpCreature = arr.reduce((a, b) =>
    Number(b[5]) > Number(a[5]) ? b : a
  );
  console.log(`Largest hp: ${maxHpCreature[0]}`);

  // Step 4: Average damage
  const avgDamage = arr.map(item => {
    const avg = (Number(item[3]) + Number(item[4])) / 2;
    const formattedAvg = avg % 1 === 0 ? avg : parseFloat(avg.toFixed(1));
    return `${item[0]}: ${formattedAvg}`;
  });
  console.log(`Average damage: ${avgDamage.join(', ')}`);

  // Step 5: Strongest creature
  const level7 = arr.filter(item => Number(item[1]) === 7);

  const strongest = level7.reduce((best, current) => {
    const attack = (Number(current[3]) + Number(current[4])) / 2;
    const hits = Math.ceil(100 / attack);
    return !best || hits < best.hits ? { name: current[0], hits } : best;
  }, null);

  console.log(`Strongest creature: ${strongest.name}`);
}