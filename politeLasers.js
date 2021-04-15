const answer = process.argv[2];

function getLaserSetting(magicWord) {
    if (magicWord === 'please') {
      return 'OFF';
    } else {
      return 'ON';
    }
  }
  
  const currentSetting = getLaserSetting(answer);
  console.log('The current laser setting is: ' + currentSetting);