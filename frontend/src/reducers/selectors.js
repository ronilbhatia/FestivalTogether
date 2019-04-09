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

  sets.forEach(set => {
    setsByStage[set.stage].push(set);
  })

  return setsByStage;
}

export const selectSetsForUser = (sets, user) => {
  debugger
  return selectSetsByStage(sets.filter(set => {
    return set.going.find(attendee => user.id === attendee._id)
  }))
}