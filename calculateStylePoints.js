const calculateStylePoints = (styleNotes) => {
	const maxPoint = Math.max(styleNotes[0], styleNotes[1], styleNotes[2], styleNotes[3], styleNotes[4]);
  	const minPoint = Math.min(styleNotes[0], styleNotes[1], styleNotes[2], styleNotes[3], styleNotes[4]);
    return styleNotes[0] + styleNotes[1] + styleNotes[2] + styleNotes[3] + styleNotes[4] - maxPoint - minPoint;
};

module.exports = calculateStylePoints;