export const selectSetsByStage = (sets, stages) => {
  if (!stages) {
    stages = [
      'Coachella Stage',
      'Outdoor Theatre',
      'Gobi',
      'Mojave',
      'Sahara',
      'Sonora',
      'Yuma',
      'Do Lab'
    ];
  }

  const setsByStage = {};
  stages.forEach(stage => setsByStage[stage] = []);

  Object.values(sets).forEach(set => {
    setsByStage[set.stage].push(set);
  })

  return setsByStage;
}